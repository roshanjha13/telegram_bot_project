const { Telegraf } = require("telegraf");

require("dotenv").config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) =>
  ctx.reply("Welcome to the new telegram bot made by your friend Roshan")
);

bot.hears("hi", (ctx) => ctx.reply("Hey there"));

bot.on("sticker", (ctx) => ctx.reply("👍"));

bot.command("whommadethis", (ctx) => ctx.reply("roshan"));
bot.launch();

console.log(`BOT RUNNING ON PORT:-> ${process.env.PORT}`);
