import dotenv from "dotenv";

dotenv.config();

const token = process.env.token || "";
const clientId = process.env.clientId || "";
const guildId = process.env.guildId || "";

if (!token || !clientId || !guildId) {
  throw new Error(`Could not initialize`);
}

export {
  token, clientId, guildId
};