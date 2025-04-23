const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "POPKID~9Sck1AYK#WpkLsq2h6TFSWqXZI_2lDNk5jle8T_n11HYfVMkvQjE",
  PREFIX: process.env.PREFIX || '.',
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false, 
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'false' : false,
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  OWNER_REACT: process.env.OWNER_REACT !== undefined ? process.env.OWNER_REACT === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
  AUTO_BIO: process.env.AUTO_BIO !== undefined ? process.env.AUTO_BIO === 'true' : false,
  CHAT_BOT: process.env.CHAT_BOT !== undefined ? process.env.CHAT_BOT === 'true' : false,
  HEART_REACT: process.env.HEART_REACT !== undefined ? process.env.HEART_REACT === 'false' : false,
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  ANTI_DELETE: process.env.ANTI_DELETE !== undefined ? process.env.ANTI_DELETE === 'true' : true,
  MENU_IMAGE: process.env.MENU_IMAGE || "https://files.catbox.moe/htnkaq.jpg",
  BOT_NAME: process.env.BOT_NAME || "Sarkar",
  DELETE_PATH: process.env.DELETE_PATH || "pm",
  MODE: process.env.MODE || "public",
  OWNER_NAME: process.env.OWNER_NAME || "ACER",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "254768934248",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};


module.exports = config;
