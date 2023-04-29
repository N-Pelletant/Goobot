import dotenv from "dotenv";
dotenv.config();

import { Client, GatewayIntentBits } from "discord.js";
import commands from "./discord/commands/commands";
import twitterJob from "./twitter/twitterJob";
import discordJob from "./discord/discordJob";
import deployCommands from "./discord/deployCommands";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
  ],
});

deployCommands(commands);
discordJob(client, commands);
twitterJob(client);

client.login(process.env.token);