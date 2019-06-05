const Telegraf = require("telegraf");
const { Composer } = Telegraf;
const osmosis = require("osmosis");

const bot = new Telegraf("817844696:AAFf49MivI9GvLjSdeoJi3kH5hxPwm0Ko9Q");

bot.command("pogoda", (ctx: any) => {
  osmosis
    .get(
      "https://ua.sinoptik.ua/%D0%BF%D0%BE%D0%B3%D0%BE%D0%B4%D0%B0-%D1%87%D0%B5%D1%80%D0%BD%D1%96%D0%B2%D1%86%D1%96"
    )
    .set({
      Day: `//*[@id="bd1"]/p[1]`,
      Date: `//*[@id="bd1"]/p[2]`,
      Temperature: `//*[@id="bd1"]/div[2]`,
      iconImage: `//*[@id="bd1"]/div[1]/img/@src`,
      icone: `//*[@id="bd1"]/div[1]/@title`
    })
    .data((data: any) => {
      ctx.reply(
        `${data.Day}, ${data.Date}, ${data.Temperature}, ${data.icone},  ${
          data.iconImage
        } `
      );
    });
});
bot.launch();
