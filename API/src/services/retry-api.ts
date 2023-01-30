import core from "../core";
import btoa from "btoa";
import axios from "axios";
import url from "url";
const { cache } = core;

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
    "AB7mhTlDTPjvioBxDYAs5kRwnbcQQfsXDg4O1DVUvxhvhpbOdJ" +
      ":" +
      "Ct6zlr2LHLQ1l9kTyQFFMnR0B9sIFOosHJAU6KoG"
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
