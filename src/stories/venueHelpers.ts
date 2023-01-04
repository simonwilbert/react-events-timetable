import { Venue } from "./domain";
import { generateRandomNumber } from "./utils";

export const createVenue = (): Venue => ({
  name: `Venue ${generateRandomNumber(1, 8)}`,
});
