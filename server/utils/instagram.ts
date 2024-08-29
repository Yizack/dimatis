export class InstagramFeed {
  api: string;
  accessToken: string;
  constructor (accessToken: string) {
    this.api = "https://graph.instagram.com";
    this.accessToken = accessToken;
  }

  async refreshAccessToken () {
    const query = new URLSearchParams({ grant_type: "ig_refresh_token", access_token: this.accessToken });
    const response = await $fetch(`${this.api}/refresh_access_token?${query}`).catch((e) => {
      console.warn(e);
      throw createError({ statusCode: 500, message: "Failed to refresh access token" });
    });
    return response;
  }

  async getFeed () {
    const query = new URLSearchParams({ fields: "username,permalink,timestamp,caption", access_token: this.accessToken });
    const response = await $fetch<{ data: InstagramPost[] }>(`${this.api}/me/media?${query}`).catch((e) => {
      console.warn(e);
      throw createError({ statusCode: 500, message: "Failed to fetch instagram feed" });
    });
    return response.data;
  }
}
