import { SlashCommandBuilder, CommandInteraction } from "discord.js";
import { NSFW_CHANNEL_ID } from "../../constants/channel";

const config = {
  data: new SlashCommandBuilder().setName('nsfw').setDescription('Quotes the nsfw rule'),
  execute: async (interaction: CommandInteraction) => {
    const nsfwId = interaction.guild?.channels.cache.get(NSFW_CHANNEL_ID)?.toString();

    if (nsfwId) {
      await interaction.reply(`
>>> ❌ **NO** NSFW outside of the ${nsfwId} channel
❌ **PAS** de NSFW en dehors du channel ${nsfwId}
`);
      return;
    }

    await interaction.reply(`
>>> ❌ **NO** NSFW outside of the nsfw channels
❌ **PAS** de NSFW en dehors des channels nsfw
`);

  }
};

export default config;