import core from "../core";
import btoa from "btoa";
import axios from "axios";
import url from "url";
import config from "../config/config";
const { cache } = core;
// Retry API incase access token is timed out
const retryApi = async (
  method: string,
  finalUrl: string,
  headers: {
    Authorization: string;
    Accept: string;
  }
): Promise<any> => {
  await refreshTokens();
  const response = await axios({
    method: method,
    url: finalUrl,
    headers: headers,
  });
  return response;
};

const refreshTokens = async () => {
  if (!cache.getCurrentCache().get("refreshToken")) {
    throw new Error("Refresh token not saved");
  }
  let bodyFormData = new url.URLSearchParams({
    refresh_token: cache.getCurrentCache().get("refreshToken") || "",
    grant_type: "refresh_token",
  });
  const authString = btoa(
    `${config.clientId}` +
      ":" +
      `${config.clientSecret}`
  );
  const authRefreshResponse = await axios({
    method: "POST",
    url: "https://oauth.platform.intuit.com/oauth2/v1/tokens/bearer",
    headers: {
      Accept: "application/json",
      Authorization: "Basic " + authString,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: bodyFormData.toString(),
  });
  cache
    .getCurrentCache()
    .set("accessToken", authRefreshResponse.data.accessToken);
  cache
    .getCurrentCache()
    .set("refreshToken", authRefreshResponse.data.refreshToken);
};
export default retryApi;
