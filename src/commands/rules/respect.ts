import { SlashCommandBuilder, CommandInteraction } from "discord.js";

const config = {
  data: new SlashCommandBuilder().setName('respect').setDescription('Quotes the respect rule'),
  execute: async (interaction: CommandInteraction) => {
    await interaction.reply(`
>>> ✅ **DO** be respectful to others
✅ Soyez respectueux des autres
`);
  }
};

export default config;