# Static HTML Webpack Boilerplate

Build simple static websites with modern build tools. Very minimal setup that allows you to configure your dependencies the way you like.

## Features

- Write SCSS and ES2015+ code in `src` and build minified, transpiled code for production in `dist`
- Live reloading with webpack-dev-server
- ES5 transpilation, bundling, and minification
- SCSS transpilation, autoprefixing, and minification
- Automatic copying of HTML and images from `src` to `dist` folders

## Usage

- Clone and run `rm -rf .git` on Linux/macOS and `rd /s /q .git` on Windows to remove the link to this git repository. Run `git init` to initialize your own repo.
- Write all your ES2015+ Javascript code in `src/js` and SCSS styling in `src/style`. Store static assets in `src/images`. Put all HTML files in tne root `src` folder.
- Available commands:
  - `npm run start:dev`: Run webpack-dev-server at `localhost:9000`. Includes live reloading on any Javascript/styling/HTML changes.
  - `npm run build`: Build files to the `dist` folder. Transpiles down to ES5 and bundles all JS into `app.bundle.js`. Transpiles SCSS to CSS and adds browser prefixing into `style.bundle.css`. Copies static assets and HTML as is.
  - `npm start`. Builds files and runs a server on `localhost:8080` with http-server.
