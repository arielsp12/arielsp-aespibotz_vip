let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
ʚ───═[ 𝗚𝗥𝗨𝗣 𝗕𝗢𝗧 ]═───ɞ

https://chat.whatsapp.com/JsqgBKpcfH5LrKDhtOA8e1

✧─────···───────✧
`.trim()
conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'ArielSP')).buffer(), ext, '🎮 Created By Ariel SP', 'Kembali Ke Menu', '#menu', 'Owner', '.owner', m)

}
handler.help = ['gcbot2']
handler.tags = ['main']
handler.command = /^(gcbot2)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
