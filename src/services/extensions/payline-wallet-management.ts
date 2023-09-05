import cryptoRandomString from "crypto-random-string";
import {Payline} from "../payline";
import {PaylineCreateWalletRequest, PaylineDoImmediateWalletPaymentRequest, PaylineDoScheduledWalletPaymentRequest, PaylineUpdateWalletRequest, PaylineGetCardsRequest} from "../../models/requests";
import {PaylineCreateWalletResponse, PaylineDoImmediateWalletPaymentResponse, PaylineDoScheduledWalletPaymentResponse, PaylineUpdateWalletResponse, PaylineGetCardsResponse} from "../../models/responses";

/**
 * Manage payline wallets
 */
class PaylineWalletManagement {
  constructor(private readonly payline: Payline) {
  }

  /**
   * Update an existing wallet
   */
  public updateWallet(request: PaylineUpdateWalletRequest): Promise<PaylineUpdateWalletResponse> {
    request.changeContractNumber(this.payline.getContractNumber());
    return this.payline.execAndCatch("updateWallet", request);
  }

  /**
   * Create a new wallet
   */
  public createWallet(request: PaylineCreateWalletRequest): Promise<PaylineCreateWalletResponse> {
    request.changeContractNumber(this.payline.getContractNumber());
    return this.payline.execAndCatch("createWallet", request);
  }

  /**
   * Do immediate wallet payment
   */
  public doImmediateWalletPayment(request: PaylineDoImmediateWalletPaymentRequest): Promise<PaylineDoImmediateWalletPaymentResponse> {
    request.changeContractNumber(this.payline.getContractNumber());
    return this.payline.execAndCatch("doImmediateWalletPayment", request);
  }

  /**
   * Do schedule wallet payment
   */
  public doScheduledWalletPayment(request: PaylineDoScheduledWalletPaymentRequest): Promise<PaylineDoScheduledWalletPaymentResponse> {
    request.changeContractNumber(this.payline.getContractNumber());
    request.order.ref = request.order.ref + cryptoRandomString({length: 16, type: "base64"});
    return this.payline.execAndCatch("doScheduledWalletPayment", request);
  }

  /**
   * Get cards request
   */
  public getCards(request: PaylineGetCardsRequest): Promise<PaylineGetCardsResponse> {
    request.changeContractNumber(this.payline.getContractNumber());
    return this.payline.execAndCatch("getCards", request);
  }

}

export {PaylineWalletManagement};
