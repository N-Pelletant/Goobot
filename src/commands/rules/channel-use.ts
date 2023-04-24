import { SlashCommandBuilder, CommandInteraction } from "discord.js";

const config = {
  data: new SlashCommandBuilder().setName('channel-use').setDescription('Quotes the channel use rule'),
  execute: async (interaction: CommandInteraction) => {
    await interaction.reply(`
>>> ✅ **DO** use the channels wisely and what they are intended for
✅ Utilisez les channels intelligement et correctement
`);
  }
};

export default config;