const {
    Payline,
    PaylineWeb,
    PaylineWalletManagement,
    PaylineDoWebPaymentRequest,
    PaylineGetCardsRequest,
    PaylineCurrency,
    PaylineAction,
    PaylineDeliveryMode,
    PaylineMode,
  } = require("./dist");

// prepare payline configuration
const isProduction = false;
const isDebug = true;
const paylineConfig = new Payline("YOUR_MERCHANT_ID", "YOUR_KEY_SECRET", "YOUR_CONTRACT_NUMBER", {}, isProduction, isDebug);
const paylineWebService = new PaylineWeb(paylineConfig);
const paylineWalletService = new PaylineWalletManagement(paylineConfig)

// <------ GET CARDS ------>
const getCardsRequest = new PaylineGetCardsRequest();
getCardsRequest.walletId = 'wallet_7cd624ab18884013bd57cc5ea3436fb6';

true && paylineWalletService.getCards(getCardsRequest);


// <------ DO WEB PAYMENT ------>
const doWebPaymentRequest = new PaylineDoWebPaymentRequest("YOUR_ORDER_REFERENCE_ID")
    .setClientDetails("client-email@example.com", "First name", "Last name")
    .setCallbackUrls("https://www.your.website.com/returnUrl", "https://www.your.website.com/cancelUrl", "https://your.server.com/hook/payline")
    .setAmount(1000, PaylineCurrency.EUR)
    .setPaymentDetails(PaylineAction.AuthCapture, PaylineMode.FULL)
    .setOrderDetails(PaylineDeliveryMode.Virtual)
    .setWalletId("CUSTOMER_WALLET_ID"); // if needed, attach a walletId

false && paylineWebService.doWebPayment(doWebPaymentRequest);
