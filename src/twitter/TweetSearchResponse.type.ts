interface TweetSearchResponseDataField {
  edit_history_tweet_ids: string[],
  id: string,
  text: string
}

interface TweetSearchResponseMetaField {
  newest_id: string,
  oldest_id: string,
  result_count: number,
  next_token: string,
}

export interface TweetSearchResponse {
  data: TweetSearchResponseDataField[],
  meta: TweetSearchResponseMetaField
}