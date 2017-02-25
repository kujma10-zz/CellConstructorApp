import React from 'react';
import ReactDOM from 'react-dom';
import ReactionEditor from './components/ReactionEditor.js'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reactionsReducer from './reducers'

let store = createStore(reactionsReducer)

ReactDOM.render(
  <Provider store={store}>
    <ReactionEditor />
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

var balls = Composites.stack(100, 50, 8, 8, 10, 10, function(x, y) {
  var ball = Bodies.circle(x, y, 16, {
    restitution: 1,
    friction: 0,
    frictionAir: 0,
    frictionStatic: 0,
    inertia: Infinity
  });

  Body.setVelocity(ball, {
    x: Common.random(-5, 5),
    y: Common.random(-5, 5)
  });
  return ball;
});

var bottom = Bodies.rectangle(300, 600, 600, 1, { isStatic: true });
var left   = Bodies.rectangle(0, 300, 1, 600, { isStatic: true });
var top    = Bodies.rectangle(300, 0, 600, 1, { isStatic: true });
var right  = Bodies.rectangle(600, 300, 1, 600, { isStatic: true });

World.add(engine.world, [balls, top, bottom, left, right]);

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
  var pairs = event.pairs;

  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i];

    if(pair.bodyA.render.strokeStyle == pair.bodyB.render.strokeStyle){
      var constraint = Constraint.create({
        bodyA: pair.bodyA,
        bodyB: pair.bodyB,
        length: 40.0,
        stiffness: 0.05
      });
      World.addConstraint(engine.world, constraint);
    }
  }
}),

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);
