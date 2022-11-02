// TODO: Include packages needed for this application
const inquirer= require("inquirer");
const fs= require("fs");
const generateMarkdown= require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'username',
    message: 'What is your Git hub user name?',
    validate: githubusername => {
        if(githubusername){
            return true;
        }else{
            console.log( "Enter your Git Hub Username");
            return false
        }
    }
},
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: emailInput => {
            if(emailInput){
                return true;
            }else{
                console.log( "Enter your email address");
                return false
            }
        }
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is your project title?',
    validate: projectTitleInput => {
        if(projectTitleInput){
            return true;
        }else{
            console.log( "Enter your project title");
            return false
        }
    }
},
{
    type: 'input',
    name: 'description',
    message: 'What is your project description?',
    validate: descriptionInput => {
        if(descriptionInput){
            return true;
        }else{
            console.log( "Enter your project description");
            return false
        }
    }
},
{
    type: 'input',
    name: 'installationInstructions',
    message: 'What is your installation instruction?',
    validate: installationInput => {
        if(installationInput){
            return true;
        }else{
            console.log( "Enter your installation instructions");
            return false
        }
    }
},
{
    type: 'input',
    name: 'usageInformation',
    message: 'What is your usage information?',
    validate: usageInput => {
        if(usageInput){
            return true;
        }else{
            console.log( "Enter your usage information");
            return false
        }
    }
},
{
    type: 'input',
    name: 'contributionGuidelines',
    message: 'What is your contribution guidelines?',
    validate: contributionInput => {
        if(contributionInput){
            return true;
        }else{
            console.log( "Enter your contribution guidelines");
            return false
        }
    }
},
{
    type: 'input',
    name: 'testInstructions',
    message: 'What is your test instructions?',
    validate: testInput => {
        if(testInput){
            return true;
        }else{
            console.log( "Enter your test Instructions");
            return false
        }
    }
},
{
    type: 'list',
    name: 'license',
    message: 'Please select a license for your project',
    choices: ["MIT", "APACHE(2.0)", "GPL(3.0)", "BSD(3)", "MPL(2.0)", "CDDL(1.0)", "EPL(2.0)", "None"],
    validate: emailinput => {
        if(emailinput){
            return true;
        }else{
            console.log( "Seelect a liscense type for your project");
            return false
        }
    }
}
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
  err ? console.error(err) : console.log('Success!')
);
}

// TODO: Create a function to initialize app
async function init() {
     let inq= await inquirer.prompt(questions);
    // console.log("result:",inq);
    writeToFile("regeneratereadme.md", inq);
   
    
}

// Function call to initialize app
init();




