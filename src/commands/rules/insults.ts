import { SlashCommandBuilder, CommandInteraction } from "discord.js";

export const data: SlashCommandBuilder = new SlashCommandBuilder().setName('insults').setDescription('Quotes the insults rule');
export const execute = async (interaction: CommandInteraction) => {
  await interaction.reply(`
>>> ❌ **NO* insulting others or discriminatory language
❌ **PAS** d'insultes ou de langage discriminatoire
`);
};