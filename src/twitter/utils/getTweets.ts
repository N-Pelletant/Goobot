import { TWITTER_USER_ID } from "../../constants/twitter";
import { TweetSearchResponse } from "../TweetSearchResponse.type";

const headers = { Authorization: `Bearer ${process.env.twitter_bearer_token}` };

export default async (lastTweetId?: string) => {
  return await fetch(
    `https://api.twitter.com/2/tweets/search/recent?query=from%3A${TWITTER_USER_ID}%20-is%3Aretweet%20-is%3Areply${lastTweetId ? `&since_id=${lastTweetId}` : ""}`,
    { headers }
  ).then<TweetSearchResponse>(r => r.json());
};