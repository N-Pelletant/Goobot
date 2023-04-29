import GoobotCommand from "../utils/GoobotCommand.class";

export default new GoobotCommand()
  .setName('channel-use')
  .setDescription('Quotes the channel use rule')
  .setAction(async (interaction) => {
    await interaction.reply(`
>>> ✅ **DO** use the channels wisely and what they are intended for
✅ Utilisez les channels intelligement et correctement
`);
  });