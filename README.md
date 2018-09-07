# Static HTML Webpack Boilerplate
[![Build Status](https://api.travis-ci.org/erickzhao/static-html-webpack-boilerplate.svg?branch=master)](https://travis-ci.org/erickzhao/static-html-webpack-boilerplate)

<p align="center">
  <img width="200" height="200" src="https://i.imgur.com/y8m5pkQ.png">
</p>

Enjoy hand-writing your HTML? Keep it old-school with modern build tools. This boilerplate setup makes it easier to write your own styling, scripts, and mark-up.

## Features

- Write SCSS and modern JavaScript code in `src` and build minified, transpiled code for production in `dist`
- Continuous integration with linting tests and deploying to `gh-pages`
- Live reloading with webpack-dev-server
- ES6+ to ES5 transpilation, bundling, and minification
- SCSS to CSS transpilation, bundling, autoprefixing, and minification
- Automatic copying of HTML and static assets from `src` to `dist` folders
- Linting for styles and scripts

## Usage

- Clone and run `rm -rf .git` on Linux/macOS and `rd /s /q .git` on Windows to remove the link to this git repository. Run `git init` to initialize your own repo.
- Write all your ES2015+ Javascript code in `src/js` and SCSS styling in `src/style`. Store static assets in `src/static`. Organize HTML files the way you like.
- Available commands:
  - `npm run start:dev`: Run webpack-dev-server at `localhost:9000`. Includes live reloading on any Javascript/SCSS/HTML changes.
  - `npm run build`: Build files to the `dist` folder. Transpiles down to ES5 and bundles all JS into `app.bundle.js`. Transpiles SCSS to CSS and adds prefixing into `style.bundle.css`. Copies static assets and HTML over, and bundled CSS and JS gets added to HTML file.
  - `npm start`. Builds files and runs a local production server on `localhost:8080` with http-server.
