# My Bu-Jo

Summary of project goes here
live link
screenshots

With [Handlebars templates](http://handlebarsjs.com/),


## Feature List

 - User Authentication
 - Journal
 - Dashboard
 - Page Templates
 - Hosting on Heroku

**User Authentication**

User authentication is handled in Express using BCrypt for password hashing. Passwords are not saved to the database, only password hashes. When users log in, the password they provide is rehashed and checked against the original encrypted password hash to verify credentials.

**Journal**

The journal is the heart of the app. It contains all of the user's pages indexed and organized. Users can add as many pages as they want to their journals. Backend is built out to allow users to have multiple journals. 

**Dashboard**

Journals have a dashboard with a clickable index, or table of contents, as well as a Pomodoro timer to keep users focused.

**Page Templates**

Users can choose from a variety of page templates. Page templates are grouped by type, allowing for reusability in templating code. Template breakdown:

 - Lists
	 > To-Do List, Bucket List, Shopping List, Cleaning List, Packing List
 - Trackers
	 > Weekly Tracker, Monthly Tracker, Hydration Tracker
 - Challenges
	 > 7-Day, 30-Day, 100-Day Challenge
 - Memories
	 > Playlist, Gift List, Reading List, Movie List, Gratitude List
 - Notes


