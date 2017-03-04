import React from 'react';
import ReactDOM from 'react-dom';
import ReactionEditorContainer from './containers/ReactionEditorContainer.js'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reactionsReducer from './reducers'

let store = createStore(
  reactionsReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <ReactionEditorContainer />
  </Provider>,
  document.getElementById('ui')
);

var Matter = require('matter-js/build/matter.js')

// module aliases
var Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies,
  Composites = Matter.Composites,
  Common = Matter.Common,
  Constraint = Matter.Constraint,
  Body = Matter.Body,
  Events = Matter.Events,
  Mouse = Matter.Mouse,
  MouseConstraint = Matter.MouseConstraint;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
  element: document.getElementById('canvas'),
  engine: engine,
  options: {
    background: '#fafafa',
    width: Math.min(document.documentElement.clientWidth, 600),
    height: Math.min(document.documentElement.clientHeight, 600)
  }
});

render.options.wireframes = false

engine.world.gravity.scale = 0;

function createAtom(x, y, type, color){
  var atom = Bodies.circle(x, y, 16, {
    restitution: 1,
    friction: 0,
    frictionAir: 0,
    frictionStatic: 0,
    inertia: Infinity,
    atomType: type,
    atomState: 0,
    render: {
      strokeStyle: color,
      fillStyle: color
    }
  })


  Body.setVelocity(atom, {
    x: Common.random(-5, 5),
    y: Common.random(-5, 5)
  });

  return atom;
}

var atomsA = Composites.stack(100, 50, 1, 10, 10, 10, function(x, y){
  return createAtom(x, y, 'A', '#cc3838')
});

var atomsB = Composites.stack(200, 50, 1, 10, 10, 10, function(x, y){
  return createAtom(x, y, 'B', '#911a25')
});

var atomsC = Composites.stack(300, 50, 1, 10, 10, 10, function(x, y){
  return createAtom(x, y, 'C', '#222f3d')
});

var atomsD = Composites.stack(400, 50, 1, 10, 10, 10, function(x, y){
  return createAtom(x, y, 'D', '#94c131')
});

var atomsE = Composites.stack(500, 50, 1, 10, 10, 10, function(x, y){
  return createAtom(x, y, 'E', '#1b9a91')
});

var bottom = Bodies.rectangle(300, 600, 600, 1, { isStatic: true });
var left   = Bodies.rectangle(0, 300, 1, 600, { isStatic: true });
var top    = Bodies.rectangle(300, 0, 600, 1, { isStatic: true });
var right  = Bodies.rectangle(600, 300, 1, 600, { isStatic: true });

World.add(engine.world, [atomsA, atomsB, atomsC, atomsD, atomsE, top, bottom, left, right]);

// add mouse control
var mouse = Mouse.create(render.canvas),
  mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.002,
      render: {
        visible: true
      }
    }
  });
World.add(engine.world, mouseConstraint);

// keep the mouse in sync with rendering
render.mouse = mouse;

Events.on(engine, 'collisionStart', function(event) {
  const reactionList = store.getState().reactionList;
  var pairs = event.pairs;

  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i];

    for (var j = 0; j < reactionList.length; j++) {
      const currentReaction = reactionList[j];
      const cond1 = pair.bodyA.atomType == currentReaction.firstReactant.type && pair.bodyB.atomType == currentReaction.secondReactant.type;
      const cond2 = pair.bodyA.atomType == currentReaction.secondReactant.type && pair.bodyB.atomType == currentReaction.firstReactant.type;
      if(cond1 || cond2){
        var constraint = Constraint.create({
          bodyA: pair.bodyA,
          bodyB: pair.bodyB,
          length: 40.0,
          stiffness: 0.05
        });

        pair.bodyA.atomState = cond1 ? currentReaction.firstReactant.state : currentReaction.secondReactant.state
        pair.bodyB.atomState = cond1 ? currentReaction.secondReactant.state : currentReaction.firstReactant.state
        World.addConstraint(engine.world, constraint);
      }
    }

  }
}),

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);
