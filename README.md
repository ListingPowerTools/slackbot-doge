# Slack Doge Bot 
Slackbot that generates memes in Slack on the fly. 
## Installation 
```
Git clone repo
```
## Update environmental variables with your own. 
### Slack bot token
```js
process.env['SLACK_TOKEN'] <br>
```
### Image Flipper for Meme Generation
```js
process.env['IMG_FLIP_USERNAME']
process.env['IMG_FLIP_PASSWORD']
```

```
npm install /// install dependencies
pm2 start main.js ///start the bot
```

## Commands In Slack
```
doge meme : This is uppertext,this is lower text
```
Another example ...
```
doge futurama meme : This is uppertext,this is lower text
```
