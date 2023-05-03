interface TweetSearchResponseDataField {
  edit_history_tweet_ids: string[],
  id: string,
  text: string
}

interface TweetSearchResponseMetaField {
  newest_id: string,
  result_count: number,
  // oldest_id: string,
  // next_token: string,
}

export interface TweetSearchResponse {
  data: TweetSearchResponseDataField[],
  meta: TweetSearchResponseMetaField
}