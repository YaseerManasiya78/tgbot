require("dotenv").config();
const { Telegraf } = require("telegraf");
const TOKEN = process.env.NODE_TG_KEY;
const bot = new Telegraf(TOKEN);

const web_link =
  "https://singular-lolly-0f0a81.netlify.app/?pid=283a8736-004e-4b72-a871-149dc8303576";
const caption = `<b>\nNotcoin gift\n100,000 Notcoin\nExtra bonus for telegram premium</b>`;

bot.start(async (ctx) => {
  await ctx.replyWithPhoto(
    {
      url: "https://as1.ftcdn.net/v2/jpg/00/57/08/46/1000_F_57084608_ciyjhtwgdKSjeZwhDTNDyuMdWik8gNF9.jpg",
    },
    {
      caption: caption,
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [[{ text: "Open Gift", web_app: { url: web_link } }]],
      },
    }
  );
});

bot.launch();
