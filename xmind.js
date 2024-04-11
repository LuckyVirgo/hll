/*************************************

 项目名称：Xmind-思维导图
 使用说明：先登录Xmind账号在恢复购买

 **************************************

 [rewrite_local]
 ^https?:\/\/(?:www\.)?xmind\..*\/.+\/(devices|token\/.+) url script-response-body https://raw.githubusercontent.com/LuckyVirgo/hll/main/xmind.js

 [mitm]
 hostname = *xmind.*

 *************************************/


var chxm1023 = JSON.parse($response.body);
const vip = /https:\/\/www\.xmind\.cn\/_res\/devices/;
const token = /https:\/\/xmind\.cn\/_res\/token\/.+/;

if (vip.test($request.url)) {
    chxm1023 = {
        "license" : {
            "status" : "sub",
            "expireTime" : 253402128000000
        },
        "_code" : 200,
        "raw_data" : "GfxYgAqnrQ\/ggD9UwqnZyAj6FKnopXzM8s5m3eZLOsmVr4FwCzv41qTmgi\/u72cv+jpaAoljaEPti1twzOS7X7KUPY1KNJ2xalbS7SXbvFHSvs21QXjaUtIOkeJWAl4\/vHl4IvMeHTBVqD8mFCXOmvnBPLRMAJEPgHEJYF1InvQ="};
}

if (token.test($request.url)) {
    chxm1023.expireDate = 253402128000;
    chxm1023.token = "f50633ea8eb04cbb85962b99c47045d7AjOobEGo";
}

$done({body : JSON.stringify(chxm1023)});
