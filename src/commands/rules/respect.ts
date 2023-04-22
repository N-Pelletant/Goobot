import { SlashCommandBuilder, CommandInteraction } from "discord.js";

export const data: SlashCommandBuilder = new SlashCommandBuilder().setName('respect').setDescription('Quotes the respect rule');
export const execute = async (interaction: CommandInteraction) => {
  await interaction.reply(`
>>> ✅ **DO** be respectful to others
✅ Soyez respectueux des autres
`);
};