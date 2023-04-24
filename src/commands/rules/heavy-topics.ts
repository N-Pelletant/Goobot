import { SlashCommandBuilder, CommandInteraction } from "discord.js";

const config = {
  data: new SlashCommandBuilder().setName('heavy-topics').setDescription('Quotes the heavy topics rule'),
  execute: async (interaction: CommandInteraction) => {
    await interaction.reply(`
>>> ❌ **NO** heavy topics, this is an art stream server, not a place for politics or arguments
❌ **PAS** de sujets sensibles, c'est un serveur d'art, pas un lieu pour la politique ou les débats
`);
  }
};

export default config;