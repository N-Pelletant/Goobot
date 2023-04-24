import { Collection } from "discord.js";
import { CommandObject } from "../utils/Command.type";

import artCritic from "./art-critic";
import channelUse from "./channel-use";
import emote from "./emotes";
import heavyTopics from "./heavy-topics";
import insults from "./insults";
import language from "./language";
import mods from "./mods";
import nsfw from "./nsfw";
import respect from "./respect";

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