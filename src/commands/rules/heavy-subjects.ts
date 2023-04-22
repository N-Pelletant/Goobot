import { SlashCommandBuilder, CommandInteraction } from "discord.js";

export const data: SlashCommandBuilder = new SlashCommandBuilder().setName('heavy-subjects').setDescription('Quotes the heavy subjects rule');
export const execute = async (interaction: CommandInteraction) => {
  await interaction.reply(`
>>> ❌ **NO** heavy topics, this is an art stream server, not a place for politics or arguments
❌ **PAS** de sujets sensibles, c'est un serveur d'art, pas un lieu pour la politique ou les débats
`);
};