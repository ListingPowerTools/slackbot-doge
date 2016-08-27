var SlackBot = require('slackbots');
var Imgflipper = require("imgflipper");
var imgflipper = new Imgflipper(process.env['IMG_FLIP_USERNAME'], process.env['IMG_FLIP_PASSWORD']);

// create a bot
var bot = new SlackBot({
    token: process.env['SLACK_TOKEN'], // Add a bot https://my.slack.com/services/new/bot and put the token
    name: 'doge'
});

bot.on('start', function () {
    console.log("started")
});
bot.on('message', function (data) {
    // all ingoing events https://api.slack.com/rtm
    console.log(data.type, data);
    if (data.type == "message" && data.text.indexOf("doge") > -1 && data.text.indexOf("meme") > -1 && data.text.indexOf(":") > -1 && data.text.indexOf(",") > -1) {

        var text = data.text.split(":");
        var textUpDown = text[1].split(",");
        var memeType = 8072285;
        if (data.text.indexOf("doge") > -1) {
            var memeType = 8072285;
        }
        if (data.text.indexOf("futurama") > -1) {
            var memeType = 61520;
        }
        if (data.text.indexOf("batman") > -1) {
            var memeType = 438680;
        }
        if (data.text.indexOf("grumpycat") > -1) {
            var memeType = 405658;
        }
        if (data.text.indexOf("seal") > -1) {
            var memeType = 23909796;
        }
        if (data.text.indexOf("first-world-problem") > -1) {
            var memeType = 61539;
        }
        if (data.text.indexOf("board-room-meeting") > -1) {
            var memeType = 1035805;
        }
        if (data.text.indexOf("philosorapter") > -1) {
            var memeType = 61516;
        }
        if (data.text.indexOf("i-should-buy-a-boat-cat") > -1) {
            var memeType = 1367068;
        }





        imgflipper.generateMeme(memeType, textUpDown[0], textUpDown[1], function (error, res) {


            var params = {
                "channel": data.channel,
                "icon_emoji": ':smiley:',
                "text": "",
                "attachments": [
                    {
                        "text": "",
                        "image_url": res
                    }
                ]
            };


            bot.postMessageToChannel(data.channel, '', params, function (error, res) {
                console.log(error)
            });
        });
    }

});