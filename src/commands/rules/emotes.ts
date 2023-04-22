import { SlashCommandBuilder, CommandInteraction } from "discord.js";

export const data: SlashCommandBuilder = new SlashCommandBuilder().setName('emote').setDescription('Quotes the emote rule');
export const execute = async (interaction: CommandInteraction) => {
  await interaction.reply(`
>>> ✅ **DO** spam my emotes, I love emotes OwO
✅ Spammez les émotes, j'aime les émotes OwO
`);
};