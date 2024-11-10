const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="strikerboy350music@gmail.com"
global.location="Harare,Zimbabwe."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Harare";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "263719765023" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "263771600813";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263776447592";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_54_11_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTk0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQwLFxuICAgICAgICA2NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjUzLFxuICAgICAgICA4NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNixcbiAgICAgICAgMjAwLFxuICAgICAgICAzNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDU4LFxuICAgICAgICAxMixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxODIsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODQsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDcyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQ5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDgxLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjM3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjE4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTksXG4gICAgICAgIDEwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwLFxuICAgICAgICA3OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDY0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDExOSxcbiAgICAgICAgNyxcbiAgICAgICAgNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDkxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDQyLFxuICAgICAgICA1OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4LFxuICAgICAgICAxODMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDQ3LFxuICAgICAgICAzNCxcbiAgICAgICAgMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDM3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTksXG4gICAgICAgIDUzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMixcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDg2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODUsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODQsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDg4LFxuICAgICAgICA3NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDU2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjMzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDksXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDk3LFxuICAgICAgICA1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ2UzZyYmI5WXpuRGxYd01mK3dwMzBpZnIyVHFPdmE3QUFmS0sycEI3Nno0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI5NHVacmo5WVRQbWlZdTljd3dQYlJnXCIsXG4gIFwicGhvbmVJZFwiOiBcImM5MWZkM2FkLTkxMjctNDZmYy05YTNlLTJlZjI3OGZhNDY0N1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNSxcbiAgICAgIDExMyxcbiAgICAgIDE2NSxcbiAgICAgIDEzMyxcbiAgICAgIDQ2LFxuICAgICAgMjksXG4gICAgICA1OSxcbiAgICAgIDEzMixcbiAgICAgIDIyNyxcbiAgICAgIDIzLFxuICAgICAgNzcsXG4gICAgICA4MCxcbiAgICAgIDY3LFxuICAgICAgMTAsXG4gICAgICAyNDcsXG4gICAgICAzNixcbiAgICAgIDIzOCxcbiAgICAgIDE4OCxcbiAgICAgIDUxLFxuICAgICAgNjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTAsXG4gICAgICAzOSxcbiAgICAgIDI0NCxcbiAgICAgIDI0LFxuICAgICAgMjI2LFxuICAgICAgMTkwLFxuICAgICAgMTA2LFxuICAgICAgMTg4LFxuICAgICAgNDQsXG4gICAgICAxODgsXG4gICAgICAxNDksXG4gICAgICA0MSxcbiAgICAgIDE4LFxuICAgICAgMTU5LFxuICAgICAgODQsXG4gICAgICA4LFxuICAgICAgMTYwLFxuICAgICAgMTI0LFxuICAgICAgMTk4LFxuICAgICAgMTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOU44VkVHSllcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2Mzc3NjQ0NzU5Mjo0NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjQ5ODk4ODk3Mjk3NTQ4OjQ1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09XcTdNOEdFS0xYeExrR0dCb2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiY1N4WHlWS2RMdEJVY3Vja084UjZZUEhyODVmWWIyUlFxdUJCZjRKc1lWaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJyOGpBbUhMa2tubUI1RmRyRHJYYmFiTnQxUUI1MHp4NXROZTNRYmpGRi94UzQ1dWI3azJUZzlwZTN0bExZYkp0ajVqZnc1Y1lIdTNqNk5rMGJKU01BZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJuY1BGTDQvaGRWdmE4YVc5VW5iaVh6eW1tRStNRTF5NTZNaWZsdjMrUmQwdytIWUpGb3BKM1NJMk53TkhDMktOSXU3RklmWDc1SGc2a0FXUU5MaVRqdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3NzY0NDc1OTI6NDVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDg5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzEyNzU2ODYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKcnFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpycS5qc29uIjogIntcImtleURhdGFcIjpcIitoYjRDRTNnR21UMEJpMlVaTzJJclZER1B5MDFqR2REUXVoMDVFNHd3WEk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc3ODA2MjY5MyxcImN1cnJlbnRJbmRleFwiOjI1LFwiZGV2aWNlSW5kZXhlc1wiOlswLDI1LDE0LDE1XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "𝔏𝔦𝔩 𝔖𝔞𝔳𝔞𝔤𝔢",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
