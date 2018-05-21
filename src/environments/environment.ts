// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyA-sPWQuTqjEWprqBhdGl4JH8WLgPn4bXU",
    authDomain: "devcard-bd37d.firebaseapp.com",
    databaseURL: "https://devcard-bd37d.firebaseio.com",
    projectId: "devcard-bd37d",
    storageBucket: "devcard-bd37d.appspot.com",
    messagingSenderId: "79344223472"
  }
};
