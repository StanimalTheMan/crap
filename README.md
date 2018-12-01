# Diary for Days
## Overview

It may just be me, but if there is any truth to it, the idea that diaries are lame for adults, men, etc. is simply NOT true.  Whether you are taking medications or dealing with severe depression, sometimes it's starting that is the hardest part.  While starting to use this app is your initiative, using this diary app can help you.  Let's use the aforementioned examples.  If you are taking a depression medication or having chemo, your doctor only sees you once or twice a month; you might notice a change in your body and that change can prevent you from doing further damage to yourself and can prompt you to schedule an earlier appointment.  In regards to depression, maybe writing about something you like daily is something we all ought to do.  Now, this may sound grim, but if your life is afloat, feel free to write about all the good things that are happening in your life since nothing should be taken for granted.  When dark times eventually come, you can at least reflect on those abundant good days in your life.   

## Data Model


The application will store Users, Diaries, Entries at MINIMUM.

users make an account and can then create an new thread or post in a thread etc.

An Example User:
```
{
  username: "",
  hash: // a password hash
  diaries: [Diary]
}
```

An Example Diary:
```
{
  title: 'My Viagra Days',//assume that the user is documenting how his use of Viagra is affecting his health, sexual performance, etc. daily hopefully 
  author: 'marek69',//most likely author will be username
  date: `02-14-19',
  entries: [Entry]
}
```

An Example Entry:
```
{
  title: "Bad Day - Viagra Ruined Me",//optional
  entry: "I woke up and I was still erect.  I may have to lower the dosage...if I still see problems tomorrow, I will go to the doctors..."//start writing that essay of yours lol
}
```

## [Link to Commented First Draft Schema](https://github.com/nyu-csci-ua-0480-001-003-fall-2018/StanimalTheMan-final-project/blob/master/db.js)


## Wireframes
More to Come
did not do ?raw=true for the links?

/ - homepage
![Alt text](/documentation/home.jpeg "Optional Title")

/diaries/add
![Alt text](/documentation/creatediaryonceloggedin.jpeg "Optional Title")

/login
![Alt text](/documentation/login.jpeg "Optional Title")

/register
![Alt text](/documentation/registerforfirsttime.jpeg "Optional Title")

/diaries/:slug/entries/add
![Alt text](/documentation/postentryunderdiary.jpeg "Optional Title")

## Site map
![Alt text](/documentation/sitemap.jpg "Optional Title")

## User Stories or Use Cases
as non-registered user, I can register a new account with the site
after registration:
as a user, I can log in to the site
as a user, I can create a new diary (even after my first diary if I want to be organized and consolidate different areas of my life by making different diaries)
as a user, I can create an entry in a diary.



## Research Topics
(5 points) I will use passport for user authentication
(3 points) mocha
(2 points) I did minimal Bootstrap.

## [Link to Initial Main Project File](https://github.com/nyu-csci-ua-0480-001-003-fall-2018/StanimalTheMan-final-project/blob/master/app.js)

## Annotations / References Used
passport.js authentication docs - http://www.passportjs.org/docs/

bootstrap - https://www.youtube.com/watch?v=lAUncPg_FVw, https://www.w3schools.com/bootstrap/bootstrap_carousel.asp

mocha - https://mochajs.org/#getting-started


