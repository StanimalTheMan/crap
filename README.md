# MLB Free Agent Frenzy
## Overview

Baseball is America's pastime and even after the last pitch is thrown in the World Series, it is still exciting as your favorite superstars and many other good players can join your favorite team from free agency.  

What better way is there to talk about this stuff as an avid fan than to join a baseball forum and talk about all the free agents you want your team to get with other baseball fans?  Of course, other websites exist, but this website will try to be more than just posts and threads...depending on how things go, you can possibly make polls as well and have real time chat functionality?    

## Data Model


The application will store Users, Posts, and Threads at minimum.

users make an account and can then create an new thread or post in a thread etc.
An Example User:
```
{
  username: "jofez16",
  hash: // a password hash
  posts: ['Manny Machado is sexy'];//should I just add post property of //post or actually use embedded documents?
}
```

An Example Post
```
{
  author: type: 'jofez16',
  date: 11-09-18,
  post: "Manny Machado is sexy."
}
```

An Example Thread
```
{
  userid: 'jofez16',
  title: 'Player: Manny Machado',
  date: 11-09-18,
  posts: ["Manny Machado is sexy."] 
  /*
  posts:[{
  author: type: 'jofez16',
  date: 11-09-18,
  post: "Manny Machado is sexy."
}];
*/
}
```

## [Link to Commented First Draft Schema](https://github.com/nyu-csci-ua-0480-001-003-fall-2018/StanimalTheMan-final-project/blob/master/db.js)


## Wireframes
More to Come

/create/thread- page for creating a new thread once logged in
![Alt text](/documentation/createthread.jpeg?raw=true "Optional Title")

/ - page for showing all threads etc.
![Alt text](/documentation/home.jpeg?raw=true "Optional Title")

/create/thread/post - page for creating a post once logged in under a thread
![Alt text](/documentation/createthreadpost.jpeg?raw=true "Optional Title")

## Site map
![Alt text](/documentation/sitemap.jpg?raw=true "Optional Title")

## User Stories or Use Cases
as non-registered user, I can register a new account with the site
after registration:
as a user, I can log in to the site
as a user, I can create a new thread.
as a user, I can post on a thread.
as a user, I can report users?


## Research Topics
(5 points) I will use passport for user authentication
(3 points) Maybe I will use client side form validation using a Javascript library (have to look into this to see exactly what this is)
(2 points) I Will try to use Sass or something else for design.

## [Link to Initial Main Project File](https://github.com/nyu-csci-ua-0480-001-003-fall-2018/StanimalTheMan-final-project/blob/master/app.js)

## Annotations / References Used
passport.js authentication docs - (add link to source code that was based on this) I don't know how to yet
