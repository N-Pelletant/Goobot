import { Collection } from "discord.js";
import artCritic from "./rules/art-critic";
import channelUse from "./rules/channel-use";
import emote from "./rules/emotes";
import heavyTopics from "./rules/heavy-topics";
import insults from "./rules/insults";
import language from "./rules/language";
import mods from "./rules/mods";
import nsfw from "./rules/nsfw";
import respect from "./rules/respect";
import GoobotCommand from "./utils/GoobotCommand.class";

const modules = [
  artCritic,
  channelUse,
  emote,
  heavyTopics,
  insults,
  language,
  mods,
  nsfw,
  respect,
];

const commands = new Collection<string, GoobotCommand>();

for (const module of modules) {
  console.log(`[${module.name}] ${module.description}`);

  commands.set(module.name, module);
}

export default commands;