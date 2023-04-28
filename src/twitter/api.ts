import { Client } from "discord.js";
import { TWITTER_USER_ID } from "../constants/twitter";
import { TweetSearchResponse } from "./TweetSearchResponse.type";
import { CustomEvents } from "../constants/event";

const twitter_bearer_token = process.env.twitter_bearer_token;

const headers = { Authorization: `Bearer ${twitter_bearer_token}` };

const getSearchUrl = (lastTweetId?: string) => {
  return `https://api.twitter.com/2/tweets/search/recent?query=from%3A${TWITTER_USER_ID}%20-is%3Aretweet%20-is%3Areply${lastTweetId ? `&since_id=${lastTweetId}` : ""}`;
};

export default async (client: Client<boolean>) => {
  const response: TweetSearchResponse = await fetch(getSearchUrl(), { headers })
    .then(r => r.json());

  let lastTweetId = response.meta.newest_id;

  setInterval(async () => {
    const { data, meta }: TweetSearchResponse = await fetch(getSearchUrl(lastTweetId), { headers })
      .then(r => r.json());

    if (meta.result_count > 0) {
      lastTweetId = meta.newest_id;

      data.forEach(tweet => {
        client.emit(CustomEvents.Tweet, `https://twitter.com/Nifrit5/status/${tweet.id}?t=wBfppHzFDtv0LdfU0PLsqg&s=19`);
      });
    }
  }, 15_000);
};