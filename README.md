(TODO: your project name)

Fake Or Real: Are You A Mets Fan
Overview

If you are a Mets fan, your life is rough with the Yankees as the older brother in town. I, the developer of this web app, was shook when I saw a bunch of "Mets' fans" come out of nowhere in the miraculous 2015 run.  I have had enough and I'm pretty sure you can relate...

So this is the deal.  You will only have to know the bare minimum to attest that you are a Mets fan.  That is, simply when you get sus whether someone you know is really a Mets fan, you pop up the app and the user can register an account and take a test that asks whether you know the Mets' all stars from 2000 and onward.  I have thought about it and realize that the term, all star, is flashy and if you're remotely into the sport, you ought to know some all stars. The user has 5 minutes to submit as many as he or she can.  Hints may be supplied. It really does not test much so you might not be a fan even though you know every all star since 2000 but what is guaranteed is that if you don't get at least 50%, you are not a Mets fan.  That is, you may know that a player was an all star in one year but not know every year he or she was but that does not necessarily mean you aren't a fan etc.    

Data Model
(TODO: a description of your application's data and their relationships to each other)

The application will store Users, Lists and Items

users make an account and there will be a leaderboard that has 
each list can have multiple items (by embedding)
(TODO: sample documents)

An Example User:

{
  username: "jofez69",
  hash: // a password hash
  points: 44 // maximum number of points aka user got each all star entry (first name, last name, position (pitcher/batter), year)
  fan: true // points >= 22 means you are a fan
}

An Example Leaderboard?

{
  users: // a reference to all Users
  name: "Leaderboard",
  createdAt: // timestamp
}
Link to Commented First Draft Schema
(TODO: create a first draft of your Schemas in db.js and link to it)

Wireframes
(TODO: wireframes for all of the pages on your site; they can be as simple as photos of drawings or you can use a tool like Balsamiq, Omnigraffle, etc.)

/list/create - page for creating a new shopping list

list create

/list - page for showing all shopping lists

list

/list/slug - page for showing specific shopping list

list

Site map
(TODO: draw out a site map that shows how pages are related to each other)

Here's a complex example from wikipedia, but you can create one without the screenshots, drop shadows, etc. ... just names of pages and where they flow to.

User Stories or Use Cases
(TODO: write out how your application will be used through user stories and / or use cases)

as non-registered user, I can register a new account with the site
as a user, I can log in to the site
as a user, I can create a new grocery list
as a user, I can view all of the grocery lists I've created in a single list
as a user, I can add items to an existing grocery list
as a user, I can cross off items in an existing grocery list
Research Topics
(TODO: the research topics that you're planning on working on along with their point values... and the total points of research topics listed)

(5 points) Integrate user authentication
I'm going to be using passport for user authentication
And account has been made for testing; I'll email you the password
see cs.nyu.edu/~jversoza/ait-final/register for register page
see cs.nyu.edu/~jversoza/ait-final/login for login page
(4 points) Perform client side form validation using a JavaScript library
see cs.nyu.edu/~jversoza/ait-final/my-form
if you put in a number that's greater than 5, an error message will appear in the dom
(5 points) vue.js
used vue.js as the frontend framework; it's a challenging library to learn, so I've assigned it 5 points
10 points total out of 8 required points (TODO: addtional points will not count for extra credit)

Link to Initial Main Project File
(TODO: create a skeleton Express application with a package.json, app.js, views folder, etc. ... and link to your initial app.js)

Annotations / References Used
(TODO: list any tutorials/references/etc. that you've based your code off of)

passport.js authentication docs - (add link to source code that was based on this)
tutorial on vue.js - (add link to source code that was based on this)