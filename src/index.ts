import { Client, Events, GatewayIntentBits } from "discord.js";
import { token } from "./variables";
import getCommands from "./commands/commands";
import deploy from "./deploy";

async function start() {
  const commands = getCommands();

  await deploy([...commands.values()]);

  const client = new Client({ intents: [GatewayIntentBits.Guilds] });

  client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const command = commands.get(interaction.commandName);

    if (!command) {
      console.error(`No command matching ${interaction.commandName} was found.`);
      return;
    }

    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(error);
      if (interaction.replied || interaction.deferred) {
        await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
      } else {
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
      }
    }
  });

  client.login(token);
}

start();