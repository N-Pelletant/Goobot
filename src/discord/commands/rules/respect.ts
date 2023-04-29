import GoobotCommand from "../utils/GoobotCommand.class";

export default new GoobotCommand()
  .setName('respect')
  .setDescription('Quotes the respect rule')
  .setAction(async (interaction) => {
    await interaction.reply(`
>>> ✅ **DO** be respectful to others
✅ Soyez respectueux des autres
`);
  });