const flies = f => {
  const FRAMERATE = 35;
  const arrayOfPoints = [];
  // generate grid

  f.setup = () => {
    f.angleMode(f.DEGREES);
    f.frameRate(FRAMERATE);
    f.createCanvas(f.displayWidth, f.displayHeight);
    for (let x = 0; x < f.width; x += 100) {
      for (let y = 0; y < f.height; y += 100) {
        const points = [];
        points.push(
          f.createVector(x - 100, y + 100),
          f.createVector(x + 100, y + 100),
          f.createVector(x + 100, y - 100),
          f.createVector(x - 100, y - 100)
        );
        arrayOfPoints.push(points);
      }
    }
  };

  f.draw = () => {
    f.noStroke();
    f.fill(55);
    for (let i = 0; i < arrayOfPoints.length; i++) {
      let points = arrayOfPoints[i];
      f.drawAndStepPoints(points);
    }
  };
  f.drawAndStepPoints = points => {
    for (let i = 0; i < points.length; i++) {
      const vec = points[i];
      const neighbor = points[(i + 1) % points.length];
      f.ellipse(vec.x, vec.y, 3);
      points[i] = f.createVector(
        f.lerp(vec.x, neighbor.x, 0.05),
        f.lerp(vec.y, neighbor.y, 0.05)
      );
    }
  };
};

class RegularPolygon {
  constructor(angle, length, sides, x, y) {
    this.angle = angle;
    this.length = length;
    this.sides = sides;
    this.x = x;
    this.y = y;
  }
}

const fliesp5 = new p5(flies);
