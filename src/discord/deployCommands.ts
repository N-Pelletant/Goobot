import { Collection, REST, Routes } from 'discord.js';
import GoobotCommand from './commands/utils/GoobotCommand.class';


export default async (commands: Collection<string, GoobotCommand>) => {
  const commandsJSON = commands.map(command => command.toJSON());

  try {
    const token = process.env.token;
    const clientId = process.env.clientId;
    const guildId = process.env.guildId;

    if (!token) {
      throw new Error("Environnement variable 'token' not set");
    }

    if (!clientId) {
      throw new Error("Environnement variable 'clientId' not set");
    }

    if (!guildId) {
      throw new Error("Environnement variable 'guildId' not set");
    }

    await new REST().setToken(token).put(
      Routes.applicationGuildCommands(clientId, guildId),
      { body: commandsJSON },
    );
  } catch (error) {
    console.error(error);
  }
};
