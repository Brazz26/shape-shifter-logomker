const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Triangle, Square} = require('./lib/shapes');
const Svg = require('./lib/svg');



function makeLogo() {
inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: "Enter your Logo's text"
    },
    {
        type: 'input',
        name: 'textcolor',
        message: 'What color would you like your text?'
    },
    {
        type: 'input',
        name: 'shapecolor',
        message: 'What color would you like your shape?'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like?',
        choices: ['Circle', 'Triangle', 'Square']
    }
]).then((answers) => {
    let shapeChoice;
    switch(answers.shape) {
        case 'Circle':
            shapeChoice = new Circle()
        break;
        case 'Traingle':
            shapeChoice = new Triangle()
        break;
        case 'Square':
            shapeChoice = new Square()
        break;
    }
    shapeChoice.setColor(answers.shapecolor)
    const newSvg = new Svg()
    newSvg.setShape(shapeChoice)
    newSvg.setText(answers.text, answers.textcolor)
    answers.text.length > 3? console.log('Must be no more than 3 characters'): fs.writeFileSync('my_logo.svg', newSvg.render())
})
}

makeLogo();