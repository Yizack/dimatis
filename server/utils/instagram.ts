type InstagramFields = "username" | "permalink" | "timestamp" | "caption" | "media_url" | "media_type" | "thumbnail_url" | "is_shared_to_feed";

export class InstagramFeed {
  api: string = "https://graph.instagram.com";
  version: string = "v23.0";
  accessToken: string;
  constructor (accessToken: string) {
    this.accessToken = accessToken;
  }

  async refreshAccessToken () {
    const query = new URLSearchParams({ grant_type: "ig_refresh_token", access_token: this.accessToken });
    return $fetch(`${this.api}/refresh_access_token?${query}`).catch((e) => {
      console.warn(e);
      throw createError({ statusCode: ErrorCode.INTERNAL_SERVER_ERROR, message: "Failed to refresh access token" });
    });
  }

  async getFeed (options: { fields: InstagramFields[], limit?: number }) {
    const query = new URLSearchParams({
      fields: options.fields.join(),
      access_token: this.accessToken,
      limit: options.limit?.toString() || "25"
    });
    return $fetch<{ data: InstagramPost[] }>(`${this.api}/${this.version}/me/media?${query}`).catch((e) => {
      console.warn(e);
      throw createError({ statusCode: ErrorCode.INTERNAL_SERVER_ERROR, message: "Failed to fetch instagram feed" });
    });
  }
}
