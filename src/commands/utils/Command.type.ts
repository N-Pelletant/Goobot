import { Interaction, SlashCommandBuilder } from "discord.js";

export interface CommandObject {
  data: SlashCommandBuilder,
  execute: <T = unknown>(interaction: Interaction) => Promise<T>;
}