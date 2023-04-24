import { Collection } from "discord.js";
import { CommandObject } from "./utils/Command.type";
import artCritic from "./rules/art-critic";
import channelUse from "./rules/channel-use";
import emote from "./rules/emotes";
import heavyTopics from "./rules/heavy-topics";
import insults from "./rules/insults";
import language from "./rules/language";
import mods from "./rules/mods";
import nsfw from "./rules/nsfw";
import respect from "./rules/respect";

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

export default function () {
  const commands = new Collection<string, CommandObject>();

  for (const module of modules) {
    console.log(`[${module.data.name}] ${module.data.description}`);

    commands.set(module.data.name, module);
  }

  return commands;
}