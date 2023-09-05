const {
    Payline,
    PaylineWeb,
    PaylineDoWebPaymentRequest,
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

// Create a request to do a web payment
const doWebPaymentRequest = new PaylineDoWebPaymentRequest("YOUR_ORDER_REFERENCE_ID")
    .setClientDetails("client-email@example.com", "First name", "Last name")
    .setCallbackUrls("https://www.your.website.com/returnUrl", "https://www.your.website.com/cancelUrl", "https://your.server.com/hook/payline")
    .setAmount(1000, PaylineCurrency.EUR)
    .setPaymentDetails(PaylineAction.AuthCapture, PaylineMode.FULL)
    .setOrderDetails(PaylineDeliveryMode.Virtual)
    .setWalletId("CUSTOMER_WALLET_ID"); // if needed, attach a walletId

// Execute the payment (will return a promise)
paylineWebService.doWebPayment(doWebPaymentRequest);
