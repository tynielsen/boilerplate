# Very Basic Web Development Oriented Boilerplate
A project to expedite getting vanilla website development set up quickly with my personal preferences. Always open to feedback.

## Generate CSS
Sass' package is ready for installation and use. There's a script available as well to combine all of the sass files and generate a single file, index.css. In order for this to work, Node.js/NPM must be installed. Then, it's as simple as `npm i` or `npm install`.

Once Sass is installed, run `npm run styles` in Terminal. Here is exactly what the `styles` script runs: `sass styles/index.scss styles/index.css` which is located in the package.json file. You can change it to whatever filenames you like. 

## Coming Soon
Live Reload, auto CSS generation on save.