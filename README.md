Item Editor App built using React hooks.

## Starting the app
In the project directory, you can run:
```
npm install
npm start
```
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## About the app

- Created using CRA (create react app)
- Uses React Hooks
- Overrides the webpack config with craco config to support css modules and less loader

## config

Change the undo redo count as required. The changes are persisted up to the count configured.

```
config/app-config.js
```


## Actions

Undo --> Applies the previous state on the stateHistory hook
Redo --> Applies the next state on the stateHistory hook
Save --> Saves the state to the localStorage
Cancel --> Cancels all changes to bring back the original state


## TODO

1. Localization
2. Key shortcuts like (command + z), (command + s)
