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

    sessionId: process.env.SESSION_ID || "", // Add Your Session ID here

    autoRejectEnabled: process.env.AUTO_REJECT_ENABLED === "false", // Auto-reject calls feature (true or false)
};
