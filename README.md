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

## Heroku DNS / CNAME:

Followed instructions from:  
- https://devcenter.heroku.com/articles/automated-certificate-management
- https://help.heroku.com/VKRNVVF5/what-is-the-correct-dns-cname-target-for-my-custom-domains
- https://devcenter.heroku.com/articles/custom-domains

Gotcha: rootdomain doesn't work with SSL because Nammecheap isnt compatible
using CNAME on rootdomain can cause lots of troubles (conflict with emails?)
See: https://help.heroku.com/NH44MODG/my-root-domain-isn-t-working-what-s-wrong

See: https://www.namecheap.com/support/knowledgebase/article.aspx/579/2237/which-record-type-option-should-i-choose-for-the-information-im-about-to-enter
"Please do not set up a CNAME record for a naked domain (@ hostname) since this may affect the operation of the domain's MX records and, consequently, the email service. In most cases, you will need to create a CNAME record for WWW (or other subdomain) and a URL redirect for @ that will point to http://www.yourdomain.tld/""

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

## Static assets
Static assets are stored in an AWS S3 bucket.
Content is delivered by Amazon CloudFront based on this tutorial:
https://aws.amazon.com/getting-started/tutorials/deliver-content-faster/

## Environments
- development - http://localhost:3000
- staging - https://floating-dusk-88295.herokuapp.com
- production - https://chinese-me.herokuapp.com

## Printing new PDF
- update the PDF version constant
- Be sure Cambria is installed locally (it uses font-face cambria src local)
- for every episode (in production, with no user setting) go in Chrome and do cmd + P
- save as PDF (advanced settings, scale should be 70%)
