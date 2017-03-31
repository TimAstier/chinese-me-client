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

## Environments
- development - http://localhost:3000
- staging - https://floating-dusk-88295.herokuapp.com
- production - https://chinese-me.herokuapp.com

## Misc
- [redux docs](http://redux.js.org)
- [react-redux-links](https://github.com/markerikson/react-redux-links)
- [semantic-ui-react](https://github.com/Semantic-Org/Semantic-UI-React)
- [react-router](https://reacttraining.com/react-router/web/guides/quick-start)
- [learning-react-router](https://css-tricks.com/learning-react-router/#article-header-id-9)
- [redux-form](http://redux-form.com/6.6.1/docs/GettingStarted.md)

## TODO
- [ ] Migrate to Ducks file structure.
- https://medium.com/@scbarrus/the-ducks-file-structure-for-redux-d63c41b7035c
- https://github.com/erikras/ducks-modular-redux
- [ ] Routing: see this https://github.com/erikras/react-redux-universal-hot-example/blob/master/src/routes.js
- [ ] Api Middleware - https://github.com/erikras/react-redux-universal-hot-example/blob/master/src/redux/modules/auth.js
- [ ] See more examples
- [ ] Use CloudFront as a CDN (S3 is not optimised for delivery)
- [ ] Use Helmet
