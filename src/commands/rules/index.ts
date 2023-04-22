import { Collection } from "discord.js";
import { CommandObject } from "../utils/Command.type";

import * as artCritic from "./art-critic";
import * as channelUse from "./channel-use";
import * as emote from "./emotes";
import * as insults from "./insults";
import * as language from "./language";
import * as mods from "./mods";
import * as nsfw from "./nsfw";
import * as respect from "./respect";

const modules: CommandObject[] = [
  artCritic,
  channelUse,
  emote,
  insults,
  language,
  mods,
  nsfw,
  respect,
];

export default async function () {
  const commands = new Collection<string, CommandObject>();

  for (const module of modules) {
    console.log(`[${module.data.name}] ${module.data.description}`);

    commands.set(module.data.name, module);
  }

  return commands;
}