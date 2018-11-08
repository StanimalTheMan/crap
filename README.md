# Fake Or Real: Are You A Mets Fan
## Overview

If you are a Mets fan, your life is rough with the Yankees as the older brother in town. I, the developer of this web app, was shook when I saw a bunch of "Mets' fans" come out of nowhere in the miraculous 2015 run.  I have had enough and I'm pretty sure you can relate...

So this is the deal.  You will only have to know the bare minimum to attest that you are a Mets fan.  That is, simply when you get sus whether someone you know is really a Mets fan, you pop up the app and the user can register an account and take a test that asks whether you know the Mets' all stars from 2000 and onward.  I have thought about it and realize that the term, all star, is flashy and if you're remotely into the sport, you ought to know some all stars. The user has 5 minutes to submit as many as he or she can.  Hints may be supplied. It really does not test much so you might not be a fan even though you know every all star since 2000 but what is guaranteed is that if you don't get at least 50%, you are not a Mets fan.  That is, you may know that a player was an all star in one year but not know every year he or she was but that does not necessarily mean you aren't a fan etc.    

## Data Model


The application will store Users, AllStars

users make an account and there will be a leaderboard that has usernames and points in descending order

An Example User:
```
{
  username: "jofez69",
  hash: // a password hash
  points: 44 // maximum number of points aka user got each all star entry (first name, last name, position (pitcher/batter), year)
  fan: true // points >= 22 means you are a fan
}
```

An Example Leaderboard?
```
{
  users: // a reference to all Users
  name: "Leaderboard",
  createdAt: // timestamp
}
```

An Example AllStar: This is pre work maybe part of middlware to load the csv, parse it, make an All-Star per line and put it in the database?  Users don't add All-Stars themselves..maybe finding API is better since I manually had to put in Mets all stars into a csv file
```
{
    firstName: "Jacob",
    lastName: "deGrom",
    position: "Pitcher",
    year: 2018
}
```

Link to Commented First Draft Schema

## Wireframes

/registration - page for registrating a new user
![Alt text](/documentation/leaderboard.jpeg?raw=true "Optional Title")

/registration - page for showing leaderboard aka home
![Alt text](/documentation/registration.jpeg?raw=true "Optional Title")

/test - page for user trying to input as many all stars as possible within time limit?
![Alt text](/documentation/test.jpeg?raw=true "Optional Title")

## Site map
![Alt text](/documentation/Sitemap.jpg?raw=true "Optional Title")

## User Stories or Use Cases
(TODO: write out how your application will be used through user stories and / or use cases)

as non-registered user, I can register a new account with the site
as a user, I can log in to the site
as a user, I can create a new grocery list
as a user, I can view all of the grocery lists I've created in a single list
as a user, I can add items to an existing grocery list
as a user, I can cross off items in an existing grocery list
Research Topics
(TODO: the research topics that you're planning on working on along with their point values... and the total points of research topics listed)

(5 points) I will use passport for user authentication


Link to Initial Main Project File
(TODO: create a skeleton Express application with a package.json, app.js, views folder, etc. ... and link to your initial app.js)

## Annotations / References Used
None

passport.js authentication docs - (add link to source code that was based on this)
