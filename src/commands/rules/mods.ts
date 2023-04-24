import { SlashCommandBuilder, CommandInteraction } from "discord.js";

const config = {
  data: new SlashCommandBuilder().setName('mods').setDescription('Quotes the mods rule'),
  execute: async (interaction: CommandInteraction) => {
    await interaction.reply(`
>>> ✅ **DO** ping the mods if you feel the need or find an issue on the server or with someone
✅ Contactez les mods si vous en ressentez le besoin ou si vous avez un problème avec le serveur ou quelqu'un
`);
  }
};

export default config;