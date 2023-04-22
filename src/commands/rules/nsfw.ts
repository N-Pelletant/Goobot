import { SlashCommandBuilder, CommandInteraction } from "discord.js";

export const data: SlashCommandBuilder = new SlashCommandBuilder().setName('nsfw').setDescription('Quotes the nsfw rule');
export const execute = async (interaction: CommandInteraction) => {
  const nsfwId = interaction.guild?.channels.cache.get("1044321688717889606")?.toString();

  if (nsfwId === undefined) {
    await interaction.reply(`
>>> ❌ **NO** NSFW outside of the nsfw channels
❌ **PAS** de NSFW en dehors des channels nsfw
  `);
  }

  await interaction.reply(`
>>> ❌ **NO** NSFW outside of the ${nsfwId!} channel
❌ **PAS** de NSFW en dehors du channel ${nsfwId!}
`);
};