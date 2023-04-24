import { SlashCommandBuilder, CommandInteraction } from "discord.js";

const config = {
  data: new SlashCommandBuilder().setName('language').setDescription('Quotes the language rule'),
  execute: async (interaction: CommandInteraction) => {
    await interaction.reply(`
>>> ✅ **DO** speak English in the English category or French in the French category
✅ Parlez anglais dans les catégories EN et français dans les catégories FR
`);
  },
};

export default config;