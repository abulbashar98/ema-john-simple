# Getting Started with Create React App

This project was deployed in Firebase [ema-john-simple](https://ema-john-simple-12ef7.web.app/login).

## Steps for Authentication....

1. Create a project in Firebase.google.com > go to console
2. Register App with hosting..
3. Install Firebase:- npm i firebase
4. Create firebase.init.js file to import getAuth and export auth.
5. Firebase Home page > authentication > Enable Email and Password Auth
6. Create Login and Sign Up Component, setup route, Handle Style....
7. Attach and Create Functionalities for form Field handler using onBlur and Form Submit Handler...
8. Install react-firebase-hooks, Command:- npm install --save react-firebase-hooks  
9. useCreateUserWithEmailAndPassword from react-firebase-hooks,
10. use auth from firebase.init.js
11. createUserWithEmailAndPassword in Handler for onSubmit,
12. after the signUp is successful Firebase returns created user in....
13. we can capture user from useCreateUserWithEmailAndPassword function return...
14. if the user is created and returned successfully we can redirect  to shop using useNavigate Hook...
15. use Sign in function from React Firebase Hooks to Create Sign In functionalities...
16. Showing Error and Loading From Firebase using Conditional Rendering....
17. Solved cant resolve react-dom-client error by upgrading to React 18 and updating all the dependencies using :-(
npm i -g npm-check-updates
ncu -u
npm install)

link:-(https://stackoverflow.com/questions/16073603/how-to-update-each-dependency-in-package-json-to-the-latest-version)

18. Created Shipping Component and Route, navigated from cart proceed checkOut..
19. Protected Shipping Component and Inventory using RequireAuth... 
20. Sending User Back to the Location using from: location, after log in









## Hosting Steps...

1. Go to HomePage > settings > Hosting
2. npm install -g firebase-tools  (One time for your Computer)
3. firebase login
* allow firebase cli 

4. firebase init (one time for each project)
* want to proceed - y
*  choose using SPACE:- Hosting: Configure files for Firebase Hosting and(optionally) set up Github Action deploys
* use an existing project
* choose Matching Name
* What do you want to use as public directory??? Ans: build
* Configure as SPA. y
* Set up Automatic deploys and builds using github??? n

5. npm run build (build your project) (every time you want to deploy)
6. firebase deploy


## To change build every time

1. npm run build
2. firebase deploy
