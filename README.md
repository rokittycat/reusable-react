## Presentation

Check out the [DevTalks presentation slides ](https://bit.ly/2FcY3f2).

### Resources
[Play safely in sandboxed IFrames](https://www.html5rocks.com/en/tutorials/security/sandboxed-iframes/)

[Building a React widget library using Webpack](https://codeburst.io/building-react-widget-libraries-using-webpack-e0a140c16ce4)

## Demo based on Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### For stand-alone web tool

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### For iframe server

### `npm run serve-iframe`

Serves a static site, usually at port 5000, pointing to the folder `consumers\`.<br>
The 'index.html' page then has an iframe with src [http://localhost:3000](http://localhost:3000)

Please run `npm start` before, so you have your stand-alone app running, then serve the static iframe integration.<br>
Open [http://localhost:5000](http://localhost:5000) to view the iframe consumer in the browser.

### For library-as-a-service / widget server

### `npm run build-widget`

Builds the app for production to the `consumer\widget` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance, based on the provided webpack configuration.

### `npm run serve-widget`

Serves a static site, usually at port 5000, pointing to the folder `consumers\widget` - previously build on `npm run build-widget`.<br>
Open [http://localhost:5000](http://localhost:5000) to view the widget consumer in the browser.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
