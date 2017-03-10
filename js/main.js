import React from 'react';
import ReactDOM from 'react-dom';
import AppWrapper from './components/AppWrapper.js';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reactionsReducer from './reducers';

let store = createStore(
  reactionsReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <AppWrapper />
  </Provider>,
  document.getElementById('ui')
);

let Matter = require('matter-js/build/matter.js');

// module aliases
let Engine = Matter.Engine,
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
let engine = Engine.create();

// create a renderer
let render = Render.create({
  element: document.getElementById('canvas'),
  engine: engine,
  options: {
    background: '#fafafa',
    width: Math.min(document.documentElement.clientWidth, 600),
    height: Math.min(document.documentElement.clientHeight, 600),
  },
});

render.options.wireframes = false;

engine.world.gravity.scale = 0;

function createAtom(x, y, type, color) {
  let atom = Bodies.circle(x, y, 16, {
    restitution: 1.004,
    friction: 0,
    frictionAir: 0,
    frictionStatic: 0,
    inertia: Infinity,
    atomType: type,
    atomState: 0,
    render: {
      strokeStyle: color,
      fillStyle: color,
    },
  });


  Body.setVelocity(atom, {
    x: Common.random(-5, 5),
    y: Common.random(-5, 5),
  });

  return atom;
};

let atomsA = Composites.stack(100, 50, 1, 10, 10, 10, function(x, y) {
  return createAtom(x, y, 'A', '#cc3838');
});

let atomsB = Composites.stack(200, 50, 1, 10, 10, 10, function(x, y) {
  return createAtom(x, y, 'B', '#911a25');
});

let atomsC = Composites.stack(300, 50, 1, 10, 10, 10, function(x, y) {
  return createAtom(x, y, 'C', '#222f3d');
});

let atomsD = Composites.stack(400, 50, 1, 10, 10, 10, function(x, y) {
  return createAtom(x, y, 'D', '#94c131');
});

let atomsE = Composites.stack(500, 50, 1, 10, 10, 10, function(x, y) {
  return createAtom(x, y, 'E', '#1b9a91');
});

let bottom = Bodies.rectangle(300, 600, 600, 1, {isStatic: true});
let left = Bodies.rectangle(0, 300, 1, 600, {isStatic: true});
let top = Bodies.rectangle(300, 0, 600, 1, {isStatic: true});
let right = Bodies.rectangle(600, 300, 1, 600, {isStatic: true});

World.add(engine.world, [atomsA, atomsB, atomsC, atomsD, atomsE, top, bottom, left, right]);

// add mouse control
let mouse = Mouse.create(render.canvas),
  mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.002,
      render: {
        visible: true,
      },
    },
  });
World.add(engine.world, mouseConstraint);

// keep the mouse in sync with rendering
render.mouse = mouse;

Events.on(engine, 'collisionStart', function(event) {
  const reactionList = store.getState().reactionList;
  let pairs = event.pairs;

  for (let i = 0; i < pairs.length; i++) {
    let pair = pairs[i];

    for (let j = 0; j < reactionList.length; j++) {
      const currentReaction = reactionList[j];
      const cond1 = pair.bodyA.atomType == currentReaction.firstReactant.type && pair.bodyB.atomType == currentReaction.secondReactant.type;
      const cond2 = pair.bodyA.atomType == currentReaction.secondReactant.type && pair.bodyB.atomType == currentReaction.firstReactant.type;
      if(cond1 || cond2) {
        let constraint = Constraint.create({
          bodyA: pair.bodyA,
          bodyB: pair.bodyB,
          length: 28.0,
          stiffness: 0,
        });

        pair.bodyA.restitution = 1.2
        pair.bodyB.restitution = 1.2
        pair.bodyA.atomState = cond1 ? currentReaction.firstReactant.state : currentReaction.secondReactant.state;
        pair.bodyB.atomState = cond1 ? currentReaction.secondReactant.state : currentReaction.firstReactant.state;
        World.addConstraint(engine.world, constraint);
      }
    }
  }
}),

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);
