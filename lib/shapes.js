class Shape {
    constructor() {
      this.color = 'black';
    }
  
    setColor(color) {
      this.color = color;
    }
  }
  
  class Triangle extends Shape {
    render() {
      // Implement the SVG rendering for a triangle with this.color
      return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,18 244,182 56,182" fill="${this.color}" />
      `;
    }
  }
  
  class Circle extends Shape {
    render() {
      // Implement the SVG rendering for a circle with this.color
      return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${this.color}" />
      `;
    }
  }
  
  class Square extends Shape {
    render() {
      // Implement the SVG rendering for a square with this.color
      return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="50" width="200" height="100" fill="${this.color}" />
      `;
    }
  }
  
  module.exports = { Triangle, Circle, Square };
  