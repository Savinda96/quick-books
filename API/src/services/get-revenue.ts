import core from "../core";
import axios from "axios";
import retryApi from "./retry-api";

const { cache } = core;
// Used to fetch the revenue between the days
const getRevenue = async (req: any, res: any, next: any): Promise<void> => {
  const realmId = cache.getCurrentCache().get("realmId");
  const url = `https://sandbox-quickbooks.api.intuit.com/v3/company/${realmId}/reports/ProfitAndLoss?start_date=${req.query.startDate}&end_date=${req.query.endDate}`;
  const method = "get";
  const headers = {
    Authorization: "Bearer " + cache.getCurrentCache().get("accessToken"),
    Accept: "application/json",
  };
  let response;
  try {
    response = await axios({
      method: method,
      url: url,
      headers: headers,
    });
  } catch (error: any) {
    // Incase the access token has been timed out, refresh the access token
    if (
      error.response &&
      error.response.status &&
      error.response.status === 401
    ) {
      response = await retryApi(method, url, headers);
    }
  }
  if (response) {
    const {
      data: {
        Rows: { Row },
      },
    } = response;
    const row = Row.find(({ group }: { group: string }) => group === "Income");
    if (row && row.Summary && row.Summary.ColData.length === 2) {
      res.render("information.pug", { revenue: row.Summary.ColData[1].value });
    }
  }
  res.status(404).send({ message: "Error in fetching revenue" });
};
export default getRevenue;
