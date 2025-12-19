export class SpotifyAPI {
  apiURL: string;
  apiTokenURL: string;
  accessToken: string | null;
  clientId: string;
  clientSecret: string;
  constructor (clientId: string, clientSecret: string) {
    this.apiURL = "https://api.spotify.com/v1";
    this.apiTokenURL = "https://accounts.spotify.com/api/token";
    this.accessToken = null;
    this.clientId = clientId;
    this.clientSecret = clientSecret;
  }

  async generateToken () {
    const basicAuth = btoa(`${this.clientId}:${this.clientSecret}`);
    const response = await $fetch<{ access_token: string }>(this.apiTokenURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": `Basic ${basicAuth}`
      },
      body: "grant_type=client_credentials"
    }).catch(() => { throw new Error("Failed to generate access token"); });
    this.accessToken = response.access_token;
  }

  async getArtist (id: string) {
    const response = await $fetch<SpotifyArtist>(`${this.apiURL}/artists/${id}`, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`
      }
    }).catch(() => {
      throw createError({
        status: ErrorCode.NOT_FOUND,
        message: "Artist not found"
      });
    });
    return response;
  }
}
