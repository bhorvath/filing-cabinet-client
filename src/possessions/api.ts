import axios, { AxiosResponse } from "axios";
import { DateTime } from "luxon";
import { Possession, RawPossession } from "./possessions";

const POSSESSIONS_ENDPOINT = "http://localhost:3000/api/v1/possessions";

type GetPossessionsResponse = {
  data: RawPossession[];
};

export const getPossessions = (): Promise<Possession[]> =>
  axios.get<GetPossessionsResponse>(POSSESSIONS_ENDPOINT).then(extractPossessionData);

const extractPossessionData = (response: AxiosResponse<GetPossessionsResponse>): Possession[] => {
  const rawPossessions: RawPossession[] = response.data.data;
  const possessions = rawPossessions.map((possession) => ({
    ...possession,
    purchaseDate: DateTime.fromMillis(possession.purchaseDate),
  }));

  return possessions;
};

export const updatePossession = (possession: Possession): Promise<void> => {
  return axios.put(POSSESSIONS_ENDPOINT, prepareRawPossession(possession));
};

const prepareRawPossession = (possession: Possession): RawPossession => {
  return {
    ...possession,
    purchaseDate: possession.purchaseDate.toMillis(),
  };
};
