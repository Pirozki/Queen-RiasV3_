require("dotenv").config(); // Load environment variables

module.exports = {
    prefix: process.env.PREFIX || ".", // Command prefix

    ownerName: process.env.OWNER_NAME || "CHÆOS", // Owner name

    ownerNumber: process.env.OWNER_NUMBER || "2349133691035", // Your WhatsApp number

    sudo: process.env.SUDO ? process.env.SUDO.split(",") : ["2349133691035"], // People Who can use the bot even in Private mode

    mode: process.env.MODE || "private", // Bot mode: 'public' or 'private'

    region: process.env.REGION || "Nigeria", // Region

    botName: process.env.BOT_NAME || "Rias Gremory V3", // Bot name

    exifPack: process.env.EXIF_PACK || "RIAS V3 LOVES", // Sticker pack name

    exifAuthor: process.env.EXIF_AUTHOR || "Toxxic", // Author of the sticker pack

    timeZone: process.env.TIME_ZONE || "Africa/Lagos", // Time zone

    presenceStatus: process.env.PRESENCE_STATUS ||  || "paused", // Bot presence status

    autoRead: process.env.AUTO_READ === "false", // Auto-read messages (true or false)

    autoViewStatus: process.env.AUTO_VIEW_STATUS === "false", // Auto-view statuses (true or false)

    autoReact: process.env.AUTO_REACT === "false", // Auto-react (true or false)

    sessionId: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUVQU2ZuQis1K2dLSVl6WTVMcnRZTmRnQUUyenhJbWUrR3Rka0dReWVuUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV3kxYXdPMVVHbTVPZlgzQ1lndjBkTUk4MmZpRGFCcjNrbnIrUHRrbWVFbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4TmFvOTNpY3BOM2pTa1NZOWdQRVB2eGFGUGN1ajY5RHo5K2RJTDBhSEg4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvZG9yMU8wbW1qQWpxcGdXOWRZZHdtenpxRVdtaHprSEhJbEdFS3pITGlJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZHWlZRUnN6dCszMDY1VVBOTUM2TWpjMEU4L3hGSDh1RWJMZHg0aEJvV0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNoeXlQdGwrY0c2b1ZybVlqaC9UdjNSeTVtT3Vpek1JUDRzZ0ZKdWRKd1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUpQb3VzMjlnVGR4WVM2OW9VWVkydkFRcHdEdlNZMTF0eHR3S1Q2aisxVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZlIza1NVT2ExY0hYQytQSS9UdG5QbTJzUndWTnUrdFJBNlJQbWZkNElYbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZaU2E3dU1CN29QcUU4U1I1VDJOTFlwRHNyWkFDS2tDSkpBTG9jMTNWcExKSjViTldHYVFCN2FxK2dVMTVGd3NObDNaaGdUZTRiYk9ISXlvL1hrQmlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE3LCJhZHZTZWNyZXRLZXkiOiJEcEdWdkFFOU9GV0JSOTRmZ2QrNDVwNlVrVTRyRzVEYkF3dE15dld0MHh3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJaSEoxUEVXMyIsIm1lIjp7ImlkIjoiMjM0OTEzMzY5MTAzNToxNEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjExOTY1NzgyMjQ1Nzk4MjoxNEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lDcWhzY0ZFUG1Da2J3R0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlF0bFBOSXZBNVBOSEMzd1drc3UwYkYvNC9ab2Q1K0pZbnFOQWc0dThLRk09IiwiYWNjb3VudFNpZ25hdHVyZSI6InRXTC9wSTNEaGxtRndmcEUvZXIxWjhmVTh5N2ZiQTNBWWNLNG9ZSlZHejQyZThWaWZDRTlqM1dIbm9RYW8wR0JBV01xVUJWZFhVS0kzazI5NmlKVkRRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJtL05qd1VvNGx0V2xnbWJJY1FmS0xudThYdktnYTd1UXR3Z1RlRUc0cEc5TzcyUEJEQkRTcFVHQTJhNldsK0xicHhKTER1bDlheElUdXN6NnQyU0VqZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkxMzM2OTEwMzU6MTRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVUxaVHpTTHdPVHpSd3Q4RnBMTHRHeGYrUDJhSGVmaVdKNmpRSU9MdkNoVCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM2NzIwNzc0LCJsYXN0UHJvcEhhc2giOiIzeFhXWVoiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFqYSJ9", // Add Your Session ID here

    autoRejectEnabled: process.env.AUTO_REJECT_ENABLED === "false", // Auto-reject calls feature (true or false)
};
