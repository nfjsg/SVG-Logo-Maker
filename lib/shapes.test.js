const { Triangle, Circle, Square } = require('./shapes');

describe('Shape Classes', () => {
  describe('Triangle', () => {
    it('should render a triangle with the specified color', () => {
      const triangle = new Triangle();
      triangle.setColor('red');
      const svg = triangle.render();
      expect(svg).toContain('<polygon points="150,18 244,182 56,182" fill="red"');
    });
  });

  describe('Circle', () => {
    it('should render a circle with the specified color', () => {
      const circle = new Circle();
      circle.setColor('blue');
      const svg = circle.render();
      expect(svg).toContain('<circle cx="150" cy="100" r="80" fill="blue"');
    });
  });

  describe('Square', () => {
    it('should render a square with the specified color', () => {
      const square = new Square();
      square.setColor('green');
      const svg = square.render();
      expect(svg).toContain('<rect x="50" y="50" width="200" height="100" fill="green"');
    });
  });
});
