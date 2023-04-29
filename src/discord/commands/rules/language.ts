import GoobotCommand from "../utils/GoobotCommand.class";

export default new GoobotCommand()
  .setName('language')
  .setDescription('Quotes the language rule')
  .setAction(async (interaction) => {
    await interaction.reply(`
>>> ✅ **DO** speak English in the English category or French in the French category
✅ Parlez anglais dans les catégories EN et français dans les catégories FR
`);
  });