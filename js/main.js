var Matter = require('matter-js/build/matter.js')

// module aliases
var Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies
  Composites = Matter.Composites,
  Common = Matter.Common,
  Body = Matter.Body,
  Events = Matter.Events,
  Mouse = Matter.Mouse,
  MouseConstraint = Matter.MouseConstraint;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    background: '#fafafa'
  }
});

render.options.wireframes = false

engine.world.gravity.scale = 0;

var balls = Composites.stack(100, 50, 8, 8, 10, 10, function(x, y) {
  ball = Bodies.circle(x, y, Common.random(17, 17), {
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


var bottom = Bodies.rectangle(400, 600, 800, 1, { isStatic: true });
var left   = Bodies.rectangle(0, 300, 1, 600, { isStatic: true });
var top    = Bodies.rectangle(400, 0, 800, 1, { isStatic: true });
var right  = Bodies.rectangle(800, 300, 1, 600, { isStatic: true });

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

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);
