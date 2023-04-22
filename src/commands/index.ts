import { Collection } from "discord.js";
import getRulesCommands from "./rules";
import { CommandObject } from "./utils/Command.type";

export default async function () {
  const rulesCommands = await getRulesCommands();

  return new Collection<string, CommandObject>().concat(rulesCommands);
}