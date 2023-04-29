import { Client } from "discord.js";
import { CustomEvents } from "../constants/event";
import getTweets from "./utils/getTweets";
import { TWEETS_CHANNEL_ID } from "../constants/channel";

export default async (client: Client<boolean>) => {
  client.on(CustomEvents.Tweet, async (text: string) => {
    const channel = await client.channels.fetch(TWEETS_CHANNEL_ID);

    if (channel?.isTextBased()) {
      channel.send(text).then(console.log);
    }
  });

  const response = await getTweets();

  let lastTweetId = response.meta.newest_id;

  setInterval(async () => {
    const { data, meta } = await getTweets(lastTweetId);

    if (meta.result_count > 0) {
      lastTweetId = meta.newest_id;

      data.forEach(tweet => {
        client.emit(CustomEvents.Tweet, `https://twitter.com/Nifrit5/status/${tweet.id}?t=wBfppHzFDtv0LdfU0PLsqg&s=19`);
      });
    }
  }, 15_000);
};