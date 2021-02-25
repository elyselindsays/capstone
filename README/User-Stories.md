## Login

As an **unauthorized user**, I want to **be able to login to the website via
a form**, so that I can **access my private information**.

1. **Given** that I'm a logged-out user and
   - **When** I'm on the `/login` route
   - **Then** there will be a login form with an email and password field and a
     "Login" button to submit the form.
2. **When** I try to fill out the form with an invalid email and password
   combination and press Enter or press the "Login" button
   - **Then** at the top of the form, I will see a red message
     `Invalid Login :( please try again.`
3. **When** I try to fill out the form with an email that doesn't exist in the
   system and press Enter or press the "Login" button
   - **Then** at the top of the form, I will see a red message
     `Invalid Login :( please try again.`
4. **When** I try to fill out the form with a valid email and password and press
   press Enter or press the "Login" button
   - **Then** I will be redirected to the homepage at the `/` route.
5. **Given** that I am a logged-in user
   - **When** I refresh the homepage at the `/` route
   - **Then** I will still be logged in
6. **Given** that I am a logged-out user
   - **When** I try to navigate to the homepage at the `/` route
   - **Then** I will be redirected to the `/login` route

## Signup

As an **unauthorized user**, I want to **be able to sign up for the website
via a signup form**, so that I can **access Bluebird**.


1. **Given** that I'm a user who has not signed up yet and
   - **When** I'm on the `/signup` route
   - **Then** there will be a signup form with an email, username, and password
     field and a "Sign Up" button to submit the form.
2. **When** I try to fill out the form with an email or username that already
   exists with a valid password and press Enter or press the "Sign Up" button
   - **Then** at the top of the form, I will see a red message
     `User with that email or username already exists.`
3. **When** I try to fill out the form with a password shorter than 6 characters
   and press Enter or press the "Sign Up" button
   - **Then** at the top of the form, I will see a red message
     `Password must be at least 6 characters long.`
3. **When** I try to fill out the form with a valid email, username, and
   password and press Enter or press the "Sign Up" button
   - **Then** I will be redirected to the homepage at the `/` route.
4. **Given** that I am a user that just signed up
   - **When** I refresh the homepage at the `/` route
   - **Then** I will still be logged in

## Demo User

As a **first-time user who just wants to demo Bluebird**, I want to **be able to
try out the site with a demo user login via a single button click on the login
and signup form**, so that I can **access Bluebird without having to go through
the trouble of creating a new account**.

...Questions and Acceptance Criteria

## Logout

As a **logged-in user**, I want to **logout via a button on the navigation
bar**, so that I can **hide my account information to the rest of the users
on this device**.

...Questions and Acceptance Criteria

## See all the Chirps

As a **logged-in user**, I want to **see all the chirps that users have made
in Bluebird as a list on the homepage**, so that I can **see what are on other
users' minds**.

...Questions and Acceptance Criteria

## Create a Chirp

As a **logged-in user**, I want to **create a chirp via a form at the top of the
homepage**, so that I can **tell others my current thoughts**.

...Questions and Acceptance Criteria

## Edit a Chirp

As a **logged-in user**, I want to **be able to edit my own chirp that I created
and show others that I edited it**, so that I can **better convey my thoughts
and let others know that my thoughts may have changed**.

As a **logged-in user**, I want to **see if chirps that other users made have
been edited**, so that I can **see if there was a difference in their original
chirp**.

...Questions and Acceptance Criteria

## Delete a Chirp

As a **logged-in user**, I want to **be able to delete my own chirp**, so that I
can **retract my thoughts from the rest of the users so none of the users in
Bluebird can see it anymore, including myself**.

...Questions and Acceptance Criteria

## Like a Chirp

As a **logged-in user**, I want to **be able to like a chirp**, so that I
can **convey my appreciation for a chirp to all other users**.

...Questions and Acceptance Criteria

## Unlike a Chirp

As a **logged-in user**, I want to **be able to unlike a chirp**, so that I
can **retract my appreciation for a chirp to all the other users**.

...Questions and Acceptance Criteria

## See number of likes for a Chirp

As a **logged-in user**, I want to **be able to see the number of likes for a
single chirp**, so that I can **see how many other users liked this chirp**.

...Questions and Acceptance Criteria

## User Profile Page

As a **logged-in user**, I want to **be able to see all the chirps that I
created**, so that I can **browse through all my thoughts I shared with the
other users on Bluebird**.

As a **logged-in user**, I want to **be able to see all the chirps for a single
user other than myself**, so that I can **browse through all the thoughts for
the user that I'm interested in knowing more about at the moment**.

...Questions and Acceptance Criteria
