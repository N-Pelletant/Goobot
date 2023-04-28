import { Client, Events, GatewayIntentBits } from "discord.js";
import { token } from "./variables";
import getCommands from "./commands/commands";
import startTwitterBot from "./twitter/api";
import deploy from "./deploy";
import { CustomEvents } from "./constants/event";
import { GOOBOT_TEXTING_CHANNEL_ID, TWEETS_CHANNEL_ID } from "./constants/channel";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
  ],
});

async function startDiscordBot() {
  const commands = getCommands();

  await deploy([...commands.values()]);

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

  client.on(CustomEvents.Tweet, async (text: string) => {
    const channel = await client.channels.fetch(TWEETS_CHANNEL_ID);

    if (channel?.isTextBased()) {
      channel.send(text).then(console.log);
    }
  });

  await client.login(token);

  startTwitterBot(client);
}

startDiscordBot();