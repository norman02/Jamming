const clientId = "b4f885c091b64173b4be92af7f6e9471";
const redirectUri = "http://fredjam.surge.sh/";
const spotifyUrl = `https://accounts.spotify.com/authorize?response_type=token&scope=playlist-modify-public&client_id=${clientId}&redirect_uri=${redirectUri}`;
let accessToken = undefined;
let expiresIn = undefined;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }
    const urlAccessToken = window.location.href.match(/access_token=([^&]*)/);
    const urlExpiresIn = window.location.href.match(/expires_in=([^&]*)/);
    if (urlAccessToken && urlExpiresIn) {
      accessToken = urlAccessToken[1];
      expiresIn = urlExpiresIn[1];
      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
      window.history.pushState("Access Token", null, "/");
    } else {
      window.location = spotifyUrl;
    }
  },
  search(term) {
    const endpoint = "https://api.spotify.com/v1/search?type=track&q=" + term;
    return fetch(endpoint, {
      headers: { Authorization: `Bearer ${accessToken}` },
    }).then(response => response.json()).then(jsonResponse => {
        if(!jsonResponse) return [];
        return jsonResponse.tracks.items.map(track => {
            return {
                id: track.id,
                name: track.name,
                artist: track.artist[0],
                album: track.album.name,
                uri: track.uri
            }
        })
    });
  },
};

export default Spotify;
