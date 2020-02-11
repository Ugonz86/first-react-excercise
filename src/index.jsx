// Hello World Excercise 
// function liveTime() {
//     var greeting = React.createElement('h1', {}, 'Hello, World!');
//     var clock = React.createElement('h2', {}, `It is ${new Date().toLocaleTimeString()}`);
//     var app = React.createElement('div', {}, greeting, clock);
  
//     ReactDOM.render(
//       app,
//       document.getElementById('react-app-root')
//     );
//   }
  
//   setInterval(liveTime, 1000);

//Help Queue Excercise
// var heading = React.createElement('h1', {}, 'Help Queue');
// var ticketLocation = React.createElement('h3', {}, '3a');
// var ticketNames = React.createElement('h3', {}, 'Thato and Haley');
// var ticketIssue = React.createElement('h3', {}, "Firebase won't save record");
// var app = React.createElement('div', {}, heading, ticketLocation, ticketNames, ticketIssue);

// ReactDOM.render(
//   app,
//   document.getElementById('react-app-root')
// );

//Help Queue Excercise - DRY

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('react-app-root')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  });
}