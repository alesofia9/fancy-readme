//Files and paths needed to help application generate README file.//
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

//Promts/questions for user input.//
const questions = [
    {
        type: 'input',
        name: 'title',
        message: '😁 Howdy! Please type your Project title.',
        validate: titleInput => {
            if (titleInput) {
            return true;
         } else {
            console.log('Whoops! Pretty please type your Project title.');
            return false;
        }
    }
},

    {
        type: 'input',
        name: 'description',
        message: '🤩 Awesome title! Type a description of this project. What is the purpose of this Project?',
        validate: descriptionInput => {
            if (descriptionInput) {
            return true;
            } else {
                console.log('Nice try! PLesae type what your Project does!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'installation',
        message: '📖 Provide installation instructions for your project. If no installation is required, enter the URL to your deployed Project.',
        validate: installInput => {
            if (installInput) {
            return true;
            } else {
                console.log('Yikes! Enter your installation instructions. If no installation is necessary, at least provide a URL!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'usage',
        message: '🤓 Halfway there! Give instructions for the user on how to utilize your Project. Highlight any fancy features or languages utilized with your Project.',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Oof! Mention how the user will USE your Project!');
                return false;
            }
        }
    },

    {
        type: 'checkbox',
        name: 'license',
        message: 'Select the license for your Project',
        choices: ['MIT', 'APACHE2.0', "Boost1.0", 'MPL2.0', 'BSD2', 'BSD3', 'none'],
    },

    {
        type: 'input',
        name: 'contributing',
        message: '👨‍💻👩‍💻 Add any friends or URL sites that gave you support or inspiration!',
        validate: contributingInput => {
            if (contributingInput) {
                return true;
            } else {
                console.log('Yo! Make sure you include your sources or members who assisted in your Project!');
                return false
            }
        }
    },

    {
        type: 'input',
        name: 'test',
        message: '📚 Almost done! Provide any details on how to test your Project.',
        vaildate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('BONK! Enter your test instructions!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'questions',
        message: '📧 Last one! Provide your Github username  and email address in case anyone has questions and needs to reach you!',
        validate: questionsInput => {
            if (questionsInput) {
                return true;
            } else {
                console.log('Hey! Type your contact info!');
                return false;
            }
        }
    },
];

//Functions below run to create the README file under the 'dist' folder, message tweaked to notify user of successful file creation.//
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }

function init() {
    inquirer.prompt(questions).then((responses) => {
      console.log("Congrats!!! Creating Professional README.md File... Check the Dist folder 😉");
      writeToFile("./dist/README.md", generateMarkdown({ ...responses }));
    });
  }
  init();