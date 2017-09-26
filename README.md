# ChineseMe client
The application is built with react and redux.  
It is based on the [create-react-app](https://github.com/facebookincubator/create-react-app).
Git repository available on [Gitlab](https://gitlab.com/b00461197/chinese-me-client).

## Development
```
$ cd react-ui/
$ npm install
$ npm start
// Need to run chinese-me-server
```

## ESLint
ESLint config comes from https://github.com/rangle/react-redux-example/blob/master/.eslintrc
```
// In react-ui folder
$ npm run lint
```

## React storybook
Followed instructions in the [docs](https://storybook.js.org/basics/quick-start-guide/).
```
npm i -g @storybook/cli
cd chinese-me/client/react-ui
getstorybook
```

## Deployment
The app is deployed to Heroku with a Node server as described [here](https://github.com/mars/heroku-cra-node).  

```
$ heroku create chinese-me --remote production
// Set environment variables on Heroku (IMPORTANT: need to be done before building)
$ git push production master // This will run the build
```

## Environment variables
See .env.example file

Note: In order for Environment variables to be updated in the code after a change,
the app needs to be rebuilt. This can be done by pushing an empty commit like so:

```
$ git commit --allow-empty -m "empty commit"
$ git push heroku master
```

## Data licenses:
Pinyin sounds: https://github.com/pffy/mp3-chinese-pinyin-sound

## Environments
- development - http://localhost:3000
- staging - https://floating-dusk-88295.herokuapp.com
- production - https://chinese-me.herokuapp.com
