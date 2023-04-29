import { NSFW_CHANNEL_ID } from "../../../constants/channel";
import GoobotCommand from "../utils/GoobotCommand.class";

export default new GoobotCommand()
  .setName('nsfw')
  .setDescription('Quotes the nsfw rule')
  .setAction(async (interaction) => {
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
  });