"use strict";
var Telegraf = require("telegraf");
var Composer = Telegraf.Composer;
var osmosis = require("osmosis");
var bot = new Telegraf("817844696:AAFf49MivI9GvLjSdeoJi3kH5hxPwm0Ko9Q");
bot.command("oldschool", function (ctx) {
    osmosis
        .get("www.google.com")
        .set({ Title: "title" }) // альтернатива: `.find('title').set('Title')`
        .data(console.log); // выведет {'Title': 'Google'}
    ctx.reply("Hello");
});
bot.command("modern", function (_a) {
    var reply = _a.reply;
    return reply("Yo");
});
bot.command("hipster", Telegraf.reply("λ"));
bot.launch();
