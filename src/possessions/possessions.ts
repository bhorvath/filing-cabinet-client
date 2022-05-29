import { DateTime } from "luxon";

export type RawPossession = {
  id: string;
  name: string;
  description: string;
  purchaseDate: number;
  price: number;
  store: string;
};

export type Possession = {
  id: string;
  name: string;
  description: string;
  purchaseDate: DateTime;
  price: number;
  store: string;
};
