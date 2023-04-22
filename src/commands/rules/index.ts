import { Collection } from "discord.js";
import { readdirSync } from "fs";
import { join } from "path";
import { CommandObject } from "../utils/Command.type";

export default async function () {
  const commands = new Collection<string, CommandObject>();

  const commandFiles = readdirSync(__dirname).filter(file => file !== "index.js");

  for (const file of commandFiles) {
    const filePath = join(__dirname, file);
    const command = await import(filePath);

    console.log(`[${command.data.name}] ${command.data.description}`);

    commands.set(command.data.name, command);
  }

  return commands;
}