# Requirement

There is a provided simple REST API that allows you to add and list entries of books in a library.

Following the OpenAPI documentation found at https://hiring.dev.youtility.co.uk/swagger/index.html, create a React-based web application that consumes the REST endpoints to provide a means of adding
and listing book entries showing appropriate separation of concerns and testability. This is an open
ended task but we are expecting an indication of how you think of and handle such architectures.
Additionally very briefly describe the thinking behind your approach and any differences your approach may have when compared to a production system.

# Overview

An simple yet powerful domain based approach is used which suits ideally for mid to large projects. 

In order to run the project locally without cors issues we installed a small library for development purposes - `cors-anywhere`.

By running `npm start` we are running both the front end application and the proxy server.

On the initial page we are having a create library button that will create a Post request towards `/libraries`. A library key will be persisted in a local state.

afterwards a get request towards `/libraries/libraryId/books` will get the available books.

An edit form will appear where the user is able to add more books with one or more authors. Empty authors will be skipped. A book without author or title will not be published in the library.

We are displaying bubbles with book details which are responsive thanks to the `flex` containers.

Simple error handling is introduced in order to display user friendly message.

The concept of dumb and smart components is applied where the dumb components are predominantly representational and the smart components would cover any business logic and communication with the back end.

All the necessary data structures are applied. Dynamically generated forms and states help us build highly extensive components.

The existing implementation is functional and fulfills the requirements and expectations as per documentation.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

To run locally and bypass the cors we are using `cors-anywhere` running on http://localhost:8010

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
