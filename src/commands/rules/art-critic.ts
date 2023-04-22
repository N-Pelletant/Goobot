import { SlashCommandBuilder, CommandInteraction, channelMention } from "discord.js";

export const data: SlashCommandBuilder = new SlashCommandBuilder().setName('art-critics').setDescription('Quotes the art critics rule');
export const execute = async (interaction: CommandInteraction) => {
  await interaction.reply(`
>>> ❌ **NO** art critic unless specifically in the ${channelMention("help-and-art-critic")} channel
❌ **PAS** de critique d'art en dehors du channel ${channelMention("help-and-art-critic")}
`);
};