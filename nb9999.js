/*************************************

名称：Notability

**************************************

[rewrite_local]
^https?:\/\/notability\.com\/(global|subscriptions) url script-response-body https://github.com/LuckyVirgo/hll/edit/main/nb9999.js

[mitm]
hostname = notability.com

*************************************/


var nb9999= JSON.parse($response.body);

nb9999 = {
   "data" : {
     "processAppleReceipt" : {
       "error" : 0,
       "subscription" : {
         "productId" : "com.gingerlabs.Notability.premium_subscription",
         "originalTransactionId" : "570001184068302",
         "tier" : "premium",
         "refundedDate" : null,
         "refundedReason" : null,
         "isInBillingRetryPeriod" : false,
         "expirationDate" : "9999-12-31T23:59:59.999Z",
         "gracePeriodExpiresAt" : null,
         "overDeviceLimit" : false,
         "expirationIntent" : null,
         "__typename" : "AppStoreSubscription",
         "user" : null,
         "status" : "canceled",
         "originalPurchaseDate" : "2022-09-09T09:09:09.000Z"
       },
       "__typename" : "SubscriptionResult"
    }
  }
};

$done({body : JSON.stringify(nb9999)});
