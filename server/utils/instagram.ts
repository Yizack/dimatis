type InstagramFields = "username" | "permalink" | "timestamp" | "caption" | "media_url" | "media_type" | "thumbnail_url";

export class InstagramFeed {
  api: string;
  userId: string;
  accessToken: string;
  constructor (userId: string, accessToken: string) {
    this.api = "https://graph.instagram.com";
    this.userId = userId;
    this.accessToken = accessToken;
  }

  async refreshAccessToken () {
    const query = new URLSearchParams({ grant_type: "ig_refresh_token", access_token: this.accessToken });
    const response = await $fetch(`${this.api}/refresh_access_token?${query}`).catch((e) => {
      console.warn(e);
      throw createError({ statusCode: ErrorCode.INTERNAL_SERVER_ERROR, message: "Failed to refresh access token" });
    });
    return response;
  }

  async getFeed (fields: InstagramFields[]) {
    const query = new URLSearchParams({ fields: fields.join(), access_token: this.accessToken });
    const response = await $fetch<{ data: InstagramPost[] }>(`${this.api}/me/media?${query}`).catch((e) => {
      console.warn(e);
      throw createError({ statusCode: ErrorCode.INTERNAL_SERVER_ERROR, message: "Failed to fetch instagram feed" });
    });
    return response.data;
  }
}
