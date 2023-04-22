import { CommandInteraction, SlashCommandBuilder } from "discord.js";

export interface CommandObject {
  data: SlashCommandBuilder,
  execute: (interaction: CommandInteraction) => Promise<void>;
}