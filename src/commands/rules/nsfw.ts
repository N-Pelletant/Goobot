import { SlashCommandBuilder, CommandInteraction, channelMention } from "discord.js";

export const data: SlashCommandBuilder = new SlashCommandBuilder().setName('insults').setDescription('Quotes the insults rule');
export const execute = async (interaction: CommandInteraction) => {
  await interaction.reply(`
>>> ❌ **NO** NSFW outside of the ${channelMention("nsfw")} channel
❌ **PAS** de NSFW en dehors du channel ${channelMention("nsfw")}
`);
};