import { SlashCommandBuilder, CommandInteraction } from "discord.js";

const config = {
  data: new SlashCommandBuilder().setName('insults').setDescription('Quotes the insults rule'),
  execute: async (interaction: CommandInteraction) => {
    await interaction.reply(`
>>> ❌ **NO** insulting others or discriminatory language
❌ **PAS** d'insultes ou de langage discriminatoire
`);
  }
};

export default config;