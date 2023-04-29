import { CommandInteraction, SlashCommandBuilder } from "discord.js";

type GoobotCommandAction = (interaction: CommandInteraction) => Promise<void>;

export default class GoobotCommand extends SlashCommandBuilder {
  action: GoobotCommandAction = async () => {
    console.log(`${this.name} not implemented yet`);
  };

  setAction = (action: GoobotCommandAction) => {
    this.action = action;
    return this;
  };
}