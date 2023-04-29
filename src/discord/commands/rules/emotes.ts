import GoobotCommand from "../utils/GoobotCommand.class";

export default new GoobotCommand()
  .setName('emotes')
  .setDescription('Quotes the emotes rule')
  .setAction(async (interaction) => {
    await interaction.reply(`
>>> ✅ **DO** spam my emotes, I love emotes OwO
✅ Spammez les émotes, j'aime les émotes OwO
`);
  });