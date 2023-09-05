import {PaylineBaseResponse} from "./payline-base-response";
import {PaylineOwner} from "../payline-owner";

class PaylineGetCardsResponse extends PaylineBaseResponse {
  public cardsList?: any;
  public owner?: PaylineOwner;
  public privateDataList?: { [key: string]: string }; // metadata
}

export {PaylineGetCardsResponse};
