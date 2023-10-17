const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

// Function to prompt the user for input
async function promptUser() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the text:',
      validate: (text) => (text.length <= 3 ? true : 'Please enter up to three characters.'),
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color (color keyword or hexadecimal number):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (color keyword or hexadecimal number):',
    },
  ]);
}

// Function to generate the SVG content
function generateSVG(userInput) {
  const { text, textColor, shape, shapeColor } = userInput;

  // Create an instance of the selected shape class
  const shapeInstance = new (shape === 'circle' ? Circle : shape === 'triangle' ? Triangle : Square)();
  shapeInstance.setColor(shapeColor);

  // Get the SVG code for the shape
  const shapeSVG = shapeInstance.render();

  // Calculate the center of the shape
  const centerX = 150; // Adjust as needed
  const centerY = 100; // Adjust as needed

  // Add text to the shape and generate SVG
  return `
      ${shapeSVG}
      <text x="${centerX}" y="${centerY}" text-anchor="middle" fill="${textColor}">${text}</text>
    
  </svg>`;
}


// Function to save the SVG to a file
//function saveSVGToFile(svgContent) {
 // fs.writeFileSync('logo.svg', svgContent);
  //console.log('Generated logo.svg');
//}

const path = require('path'); // Import the 'path' module

// Function to save the SVG to a file in the 'examples' folder
function saveSVGToFile(svgContent) {
  // Define the file path to save the SVG in the 'examples' folder
  const filePath = path.join(__dirname, 'examples', 'logo.svg');
  
  // Write the SVG content to the file
  fs.writeFileSync(filePath, svgContent);
  console.log('Generated logo.svg');
}



async function main() {
  try {
    const userInput = await promptUser();
    const svgContent = generateSVG(userInput);
    saveSVGToFile(svgContent);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main();
