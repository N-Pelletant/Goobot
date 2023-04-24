import { SlashCommandBuilder, CommandInteraction } from "discord.js";

const config = {
  data: new SlashCommandBuilder().setName('emotes').setDescription('Quotes the emotes rule'),
  execute: async (interaction: CommandInteraction) => {
    await interaction.reply(`
>>> ✅ **DO** spam my emotes, I love emotes OwO
✅ Spammez les émotes, j'aime les émotes OwO
`);
  }
};

export default config;