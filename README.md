# 
Welcome to schmyspace!
If you've been missing a time of yore, when you could get on social media to make friends, watch "Charlie the Unicorn", out-scene the scenecore kids, and brag about being straight-edge but still a force to be reckoned with in the mosh pit, look no further, schmyspace is here! Though still a work in progress, our little site was inspired by a long-lost social media platform that existed in the good-old days when the internet almost felt quaint and you didn't have to worry about algorithms clogging your feed with garbage, billionaires selling your private information to hostile foreign governments. Kick up your feet and stay a while! We don't have all the bells and whistles just yet, but we promise not to radicalize your grandparents.

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Installing](#installing)
- [Usage](#usage)
- [Contributing](#contributing)

## About
Write about 1-2 paragraphs describing the purpose of your project.

## Getting Started
Clone this repo to your operating system and run ```npm install`` to install all dependencies.

**PLEASE NOTE:** Your local machine will need the following environment setup pre-installed for schmyspace to adequately function:
 - Node.js v16.0.0 or higher
 - Python v3.8.13 or higher
    - Including pipenv & pyenv

## Installing
Once the repo has been cloned onto your operating system and ```npm install``` has already been run at the root level, proceed with the following:

To start the front end:
1. cd into the 'client' folder
2. Run ```npm install``` to install front end-specific dependencies
3. Run ```npm run dev``` to start the front end of the application. You will be able to access it at ```localhost:3000```

To start the back end:
1. Open a new terminal to allow the front end to continue running
2. From the root level in your new terminal, run ```pipenv install && pipenv shell```
3. cd into the 'server' folder
4. Run ```python app.py``` to start the back end of the application. It will automatically work in conjunction with the front end already running in your browser.

From there, you can login and begin exploring schmyspace!


## Usage
A step by step series of examples that tell you how to get a development env running.

## Contributing
This project was created in collaboration with github user @alelda for Phase 4 of Flatiron School's full stack software engineering bootcamp; an immersive, in-person 15-week coding program teaching students the fundamentals of JavaScript, React.js, Python, Flask & SQL.