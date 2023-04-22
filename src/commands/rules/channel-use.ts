import { SlashCommandBuilder, CommandInteraction } from "discord.js";

export const data: SlashCommandBuilder = new SlashCommandBuilder().setName('channel-use').setDescription('Quotes the channel use rule');
export const execute = async (interaction: CommandInteraction) => {
  await interaction.reply(`
>>> ✅ **DO** use the channels wisely and what they are intended for
✅ Utilisez les channels intelligement et correctement
`);
};