import {PaylineBaseRequest} from "./payline-base-request";

class PaylineGetCardsRequest extends PaylineBaseRequest {
  public contractNumber: string;
  public walletId: string;
  public cardInd?: string;

  public changeContractNumber(contractNumber: string, force: boolean = false): this {
    if (!this.contractNumber || force) {
      this.contractNumber = contractNumber;
    }
    return this;
  }
}

export {PaylineGetCardsRequest};
