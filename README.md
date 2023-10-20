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
Like many other millennials, I had the privilege of enjoying social media during what now feels like a "Golden Era" of the internet in a way; social media was a brand new tool that allowed us to connect with our friends outside of school, meet people from all over the globe, and even interact with some people we deemed famous. There were no algorithms dictating our feeds nor a glut of hyper-political bias swaying people in a particular direction or further entrenching deeply-held beliefs; in many ways, it feels like the maximum disinformation we experienced was the occasional chain email. I'm certainly aware of how nostalgia can sugarcoat memories, but when I think back to my time spent at the height of Myspace, I feel pulled back to a time when the internet didn't quite feel all-consuming; it was simply novel and fun. 

For my very first full-stack application, that feeling of nostalgia was something I really wanted to replicate. While many features are still coming into fruition, my vision was for a clone of Myspace circa 2005, when users could add friends (not to mention, offend others with a very public and exclusive top 8) and interact via bulletins, comments, forums, and messages. Members could also write blog posts to expel some of their inner angst; then delete them when they realize how embarrassing they actually are.

The front end was built using JavaScript, React.js & Vite. The styling is pure HTML and CSS, not only to honor the original, but also to allow users full customization over their profiles (coming soon!), just like in the glory days!

The back end was built with Python, Flask, and SQLAlchemy; there are tables for Users, Messages, Posts, and of course, Friends (this is a join table). Together, they build a REST API and most feature full CRUD functionality. This was also my first foray into password hashing, utilizing Bcrypt to heighten user security. 

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
4. Run ```python app.py``` to start the back end of the application. It will automatically work in conjunction with the front end already running in your browser

From there, you can login and begin exploring schmyspace!

## Usage
Once the application is up and running, per the instructions above, you're welcome to create your own account via the 'Sign Up' page, which will redirect you to the user home page once your account is created. Explore blogs, bulletins, and your inbox!

## Contributing
This project was created in collaboration with github user @alelda for Phase 4 of Flatiron School's full stack software engineering bootcamp; an immersive, in-person 15-week coding program teaching students the fundamentals of JavaScript, React.js, Python, Flask & SQL.