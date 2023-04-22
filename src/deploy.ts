import { REST, Routes } from 'discord.js';
import { clientId, guildId, token } from './variables';
import { CommandObject } from './commands/utils/Command.type';

const rest = new REST().setToken(token);

export default async (commands: CommandObject[]) => {
  const commandsJSON = commands.map(command => command.data.toJSON());

  try {
    await rest.put(
      Routes.applicationGuildCommands(clientId, guildId),
      { body: commandsJSON },
    );
  } catch (error) {
    console.error(error);
  }
};
