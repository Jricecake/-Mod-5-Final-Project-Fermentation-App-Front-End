# Bacterra - A Food Fermentation App

Bacterra is a single-page web app made for tracking fermented food projects. Users are able to create projects, list ingredients, brine details, and what vessels were used. As the projects go on, a timeline is generated where users can keep track of developments with notes on each day. Once a project is completed, it is stored in its entirety for a user to reference back should they ever want to recreate it. 

Bacterra's front end is built on React and Redux. The backend is built with Ruby on Rails, and can be found [here](https://github.com/Jricecake/Mod-5-Final-Project-Fermentation-App-Back-End).

Bacterra is hosted on Firebase at [this link](https://fermer-69f9a.web.app/)

## Installation

  To run locally, download or clone the repository, then run 'npm install'.
  ```
  npm install
  ```
  To run the project locally, use `npm start` or `yarn start` (more available commands listed below)
  ```
  npm start
  ```
  To use in conjunction with a locally hosted backend, the `API_ROOT` in `/src/services/api.js` will need to be updated to reflect your localhost. 

## Author

Built by [Jonny Riecke](https://www.linkedin.com/in/jonnyriecke/)

## Contributing

Contributions, suggestions, and criticisms are encouraged! I am forever learning, so any perspectives are much appreciated.

## License

[MIT](https://choosealicense.com/licenses/mit/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

