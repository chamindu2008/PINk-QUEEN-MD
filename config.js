const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "a6J12ZII#HV6IZ2_gM0iIXUQltLc516cB_KSHJlnou3_WuB_3ItU",
  MONGODB: process.env.MONGODB || "mongodb://mongo:vwHyDDrCcOdsyBvgADCPXeoDtoVohSGH@tramway.proxy.rlwy.net:59353",
  OWNER_NUM: process.env.OWNER_NUM || "94783314361",
};
