import GoobotCommand from "../utils/GoobotCommand.class";

export default new GoobotCommand()
  .setName('heavy-topics')
  .setDescription('Quotes the heavy topics rule')
  .setAction(async (interaction) => {
    await interaction.reply(`
>>> ❌ **NO** heavy topics, this is an art stream server, not a place for politics or arguments
❌ **PAS** de sujets sensibles, c'est un serveur d'art, pas un lieu pour la politique ou les débats
`);
  });