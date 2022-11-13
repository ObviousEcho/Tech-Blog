# Tech-Blog

Tech Blog is a CMS-style blog site which allows developers writing about tech, to post their thoughts, and comment on other developer's posts as well.  This full-stack application is built using an Express server and a Mysql database utilizing Sequelize as well as the Handlebars templating engine.  The model view controller paradigm was also followed.

## Installation

Be sure to have Node.js installed.  After forking and cloning the repo to your computer, enter "npm i" from your CLI.  From the root directory create a .env file.  Within the .env file, create and save the following variables.  Be sure to enter your specific user and password to access your Mysql DB within the empty quotes.

* DB_NAME='tech_db'
* DB_PASSWORD=''
* DB_USER=''

From either Mysql Workbench, or the Mysql command line prompt, be sure to source the schema.sql file located in the db folder.  This will create the tech_db database.

## Seed the database

From the command line, enter "npm run seed"
After the database has been seeded, enter "npm start" or "npm run watch" if you have the Nodemon package installed.  The server should be listening on localhost:3001.

## Dependencies

* Bcrypt
* Connect-session-sequelize
* Dotenv
* Express
* Express-handlebars
* Express-session
* Mysql2
* Sequelize

## Technologies

* Node.js
* Javascript
* Bootstrap
* HTML
* CSS

## Conclusions

This full-stack web appication was a challenging task to build. Several steps were involved, begining with creating a basic Express server, then defining my database models and relationships, as well as creating seed data. Next I transitioned to writing API's and testing them with Insomnia. At this point I had my models and controllers in place, it was time to begin working on my views per MVC architecture.  Login and signup routes were created and protected using Express-Sessions.  Admittedly, I focused more on the backend architecture, as opposed to front-end styling.  Bootstrap components and classes were used to give the site some aesthetic appeal.

Please view my GitHub repo here:
[Tech-Blog](https://github.com/ObviousEcho/Tech-Blog)

Please view the deployed site on Heroku here:
[Heroku]()

Thanks!