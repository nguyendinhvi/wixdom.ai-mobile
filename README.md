# Wixdom-FE-Mobile

## Getting started

Currently includes:

- React Native
- React Navigation
- Redux
- Redux-Toolkit
- RTK-Query
- TypeScript
- And more!

## Requirements

Node 14 or greater is required. Development for iOS requires a Mac and Xcode 10 or up, and will target iOS 11 and up.
yarn or npm

## Quick start

Assuming you have all the requirements installed, you can run the project by running:

- `yarn start` to start the metro bundler, in a dedicated terminal
- `yarn <platform>` to run the _platform_ application (remember to start a simulator or connect a device)

#### Clone

```bash
# clone
$ git clone https://gitlab.stisolutions.net/wixdom/wixdom-mobile.git

# install dependencies
$ yarn install
```

### Development

To start the project locally, run (yarn | npm):

```bash
yarn start
```

The Wixdom project's structure will look similar to this:

```
WixdomFEMobile
├── src
│   ├── components
│   ├── hooks
│   ├── navigators
│   ├── screens
│   ├── network
│   ├── store
│   ├── theme
│   ├── translations
│   ├── utils
│   ├── App.tsx
├── android
│   ├── app
│   ├── build.gradle
│   ├── gradle
│   ├── gradle.properties
│   ├── gradlew
│   ├── gradlew.bat
│   └── settings.gradle
├── ios
│   ├── WixdomFEMobile
│   ├── WixdomFEMobile.xcworkspace
│   ├── WixdomFEMobile.xcodeproj
│   └── Podfile
├── index.js
├── README.md
├── .env
└── package.json

```

### ./src directory

The inside of the `src` directory looks similar to the following:

```
├── src
│   ├── components
│   ├── hooks
│   ├── navigators
│   ├── screens
│   ├── network
│   ├── store
│   ├── theme
│   ├── translations
│   ├── utils
│   ├── App.tsx
```

**components**
This is where your reusable components live which help you build your screens.

**hooks**
Hooks are a new feature in React, introduced in version 16.8, that make it easier to manage state and logic within components and avoid the complexity of using traditional class components. By using hooks, you can separate the state and logic of a component without having to use classes, making the code simpler and easier to understand.

**navigators**
This is where your `react-navigation` navigators will live.

**screens**
This is where your screen components will live. A screen is a React component which will take up the entire screen and be part of the navigation hierarchy. Each screen will have a directory containing the `.tsx` file, along with any assets or other helper files.

**network**
Any network that interface with the outside world will live here (think REST APIs, Push Notifications, etc.).

**store**
Store is the place where the entire state of the application is stored and provides methods to update the state. In the src directory of the project, you can find the store directory which contains the configuration for the Redux store, including reducers, actions, and middleware

**theme**
Here lives the theme for your application, including spacing, colors, and typography.

**translations**
This is where your translations will live if you are using `i18next`.

**utils**
This is a great place to put miscellaneous helpers and utilities. Things like date helpers, formatters, etc. are often found here. However, it should only be used for things that are truly shared across your application. If a helper or utility is only used by a specific component or model, consider co-locating your helper with that component or model.

**App.tsx** This is the entry point to your app. This is where you will find the main App component which renders the rest of the application.
∫
# wixdom.ai-mobile
