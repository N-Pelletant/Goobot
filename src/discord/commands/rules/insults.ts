import GoobotCommand from "../utils/GoobotCommand.class";

export default new GoobotCommand()
  .setName('insults')
  .setDescription('Quotes the insults rule')
  .setAction(async (interaction) => {
    await interaction.reply(`
>>> ❌ **NO** insulting others or discriminatory language
❌ **PAS** d'insultes ou de langage discriminatoire
`);
  });