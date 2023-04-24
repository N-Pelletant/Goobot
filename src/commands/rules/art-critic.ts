import { SlashCommandBuilder, CommandInteraction } from "discord.js";
import { CommandObject } from "../utils/Command.type";

const config: CommandObject = {
  data: new SlashCommandBuilder().setName('art-critic').setDescription('Quotes the art critic rule'),
  execute: async (interaction: CommandInteraction) => {
    await interaction.reply(`
>>> ❌ **NO** art critic unless specifically asked for it and be respectful
❌ **PAS** de critique d'art à moins d'une demande explicite, restez respectueux
`);
  },
};

export default config;