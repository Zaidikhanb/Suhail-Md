const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "966585488421";
global.gurl  =process.env.GURL  || "966585488421";
global.website=process.env.GURL || "966585488421" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "966585488421" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "966585488421";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_38_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI2LFxuICAgICAgICA5NixcbiAgICAgICAgMixcbiAgICAgICAgMjQ2LFxuICAgICAgICA0MixcbiAgICAgICAgNDEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNixcbiAgICAgICAgMzQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTc1LFxuICAgICAgICA5MixcbiAgICAgICAgNzUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDc3LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDMsXG4gICAgICAgIDcxLFxuICAgICAgICA2MixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1NyxcbiAgICAgICAgMjQyLFxuICAgICAgICA3NixcbiAgICAgICAgNTMsXG4gICAgICAgIDU3LFxuICAgICAgICAzOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjksXG4gICAgICAgIDUyLFxuICAgICAgICAzNSxcbiAgICAgICAgODQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgODcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTMyLFxuICAgICAgICA3OSxcbiAgICAgICAgODUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODksXG4gICAgICAgIDE0OSxcbiAgICAgICAgNixcbiAgICAgICAgODEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjksXG4gICAgICAgIDk0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTMxLFxuICAgICAgICA4NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTkwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDc4LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDY3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTMwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICA2MixcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDMwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTkwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTE4LFxuICAgICAgICA3OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDI4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAzMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDMyLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDIsXG4gICAgICAgIDUyLFxuICAgICAgICA5NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDcxLFxuICAgICAgICA3NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQwLFxuICAgICAgICAyNixcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTExLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTc1LFxuICAgICAgICA2OCxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTEwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTksXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDc0LFxuICAgICAgICA1MSxcbiAgICAgICAgMixcbiAgICAgICAgNTMsXG4gICAgICAgIDIxLFxuICAgICAgICA4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDMzLFxuICAgICAgICAzMyxcbiAgICAgICAgMjMyLFxuICAgICAgICA2MCxcbiAgICAgICAgMjE2LFxuICAgICAgICA0NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDkzLFxuICAgICAgICA1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTY0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjU0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZm5ZMDN0b2k3UWk0ZHNCQTVpWHArOFh2M2hEY0lwdE55QXp0RXMvcy9RVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NjY1ODU0ODg0MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkJCMERENjg3QTdCREU2QUM2MDkzREE3NkZBNDA2Q0UyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDY2NTUxM1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk2NjU4NTQ4ODQyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNTFGMjc5MkVFRUIwNUUyRjFDNTlCMDQ3MUVFNTI1RkVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNjY1NTE0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInBwWEhtNDR3VDV5SjY0Y0QtQU05YXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTgxZGVhYzMtMWY3Yi00YTIyLWIwMzgtOTVhMWIwNWUwMjRjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUyLFxuICAgICAgMzEsXG4gICAgICAyNDksXG4gICAgICAxMjYsXG4gICAgICAyNDQsXG4gICAgICAxOCxcbiAgICAgIDE2NSxcbiAgICAgIDIyOSxcbiAgICAgIDY5LFxuICAgICAgMjQ3LFxuICAgICAgMjEzLFxuICAgICAgMTksXG4gICAgICAyMjAsXG4gICAgICAxOTQsXG4gICAgICAyMDAsXG4gICAgICAxOSxcbiAgICAgIDcsXG4gICAgICA3NyxcbiAgICAgIDIxMSxcbiAgICAgIDE2OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MSxcbiAgICAgIDE3MCxcbiAgICAgIDIyLFxuICAgICAgMjMyLFxuICAgICAgMjA1LFxuICAgICAgMTI0LFxuICAgICAgMTksXG4gICAgICA4MCxcbiAgICAgIDEyNSxcbiAgICAgIDI1MCxcbiAgICAgIDIwMixcbiAgICAgIDEwNCxcbiAgICAgIDMzLFxuICAgICAgMjI1LFxuICAgICAgMjM4LFxuICAgICAgODcsXG4gICAgICAyMjQsXG4gICAgICA2MixcbiAgICAgIDEzOCxcbiAgICAgIDI4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjg2ODE0SEwyXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NjY1ODU0ODg0MjE6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTU1ODAwMzkxNjYzNjc1OjZAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiRFBcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG7wnZGo8J2Ru/CdkbvwnZGw8J2Ru/CdkbzwnZGr8J2RrCDwnZGy8J2RsPCdkbPwnZGzXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSUtTbHBrQkVLT0x2YlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJKbEVIdjR1TTQyWG9xRmQxRnZ5VE9Pc29qc3ZWMWNCQlBvVUNHbUtEZG1NPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkRzWG1EYzlqakR2K0JXZThYUnlDR1lhMHdZcmxnb2VnM1FpYlNNcmpxb0FTL0N5U1U5bGZ0d0Rma1BCYjZaZUpWUDNZUEFiL1p0M1V6QzYwOVh4dUJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjRzZUo0M2ZvdHhaWHE2dE9tUE9TMlRoZWk5MUNxMU5KWERDVmcwOEIyMVBQbGpLMDBHMXBUZTQ2N0U4aWZHSnNaM3pScFk2c2VLdG1oZG42MkQ1RmpnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk2NjU4NTQ4ODQyMTo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNjY1NTEwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQjUvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCNS8uanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
