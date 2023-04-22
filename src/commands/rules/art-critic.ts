import { SlashCommandBuilder, CommandInteraction } from "discord.js";

export const data: SlashCommandBuilder = new SlashCommandBuilder().setName('art-critics').setDescription('Quotes the art critics rule');
export const execute = async (interaction: CommandInteraction) => {
  await interaction.reply(`
>>> ❌ **NO** art critic unless specifically asked for it and be respectful
❌ **PAS** de critique d'art à moins d'une demande explicite, restez respectueux
`);
};