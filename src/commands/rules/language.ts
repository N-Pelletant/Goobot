import { SlashCommandBuilder, CommandInteraction } from "discord.js";

export const data: SlashCommandBuilder = new SlashCommandBuilder().setName('language').setDescription('Quotes the language rule');
export const execute = async (interaction: CommandInteraction) => {
  await interaction.reply(`
>>> ✅ **DO** speak English in the English category or French in the French category
✅ Parlez anglais dans les catégories EN et français dans les catégories FR
`);
};