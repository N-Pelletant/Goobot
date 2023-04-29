import GoobotCommand from "../utils/GoobotCommand.class";

export default new GoobotCommand()
  .setName('art-critic')
  .setDescription('Quotes the art critic rule')
  .setAction(async (interaction) => {
    await interaction.reply(`
>>> ❌ **NO** art critic unless specifically asked for it and be respectful
❌ **PAS** de critique d'art à moins d'une demande explicite, restez respectueux
`);
  });