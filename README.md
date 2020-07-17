# Available Scripts

`npm run electron-dev` - This will start the electron react-app

`npm run electron-pack` - This will package and build a ready for distribution Electron app. The `-l` command builds for linux. Can be changed for other builds such as mac `-m` or windows `-w`.


### Notes

To be able to run a local `json-server` I had to save the `server.js` and `db.json` in the `public` folder for it to function in the build. In development you can install the `json-server` as a DevDependency and have the `server.js` and `db.json` in the root of the workspace as usual. However for this project I wanted to have the build function properly with a local server running.

I will have to look into better ways of integrating a `server.js` into an electron-react app, especially if I wish to test API calls with `json-server`. It would be best to keep `json-server` as a DevDependency.
