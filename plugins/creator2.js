const { MessageType } = require('@adiwajshing/baileys')
const PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  await conn.sendMessage(m.chat, {
    contacts: [{
    "displayName": "Fachri",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:Fachri\nitem1.TEL;waid=6285713041886:0\nitem1.X-ABLabel:๐ Creator FachriBotz\nitem2.EMAIL;type=INTERNET:saefulfachri18@gmail.com\nitem2.X-ABLabel:๐ Email\nitem3.URL:https://bit.ly/sfdesignblogspot/\nitem3.X-ABLabel:๐ฎ Rest Api\nitem4.ADR:;;๐ฎ๐ฉ Indonesia;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:๐ Provinsi | Jawa Tengah\nitem5.X-ABLabel:โโโโโโ[ ๊ฐแดแดสสษช ]โโโโโโ\nEND:VCARD"
}, {
    "displayName": "My Partner",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:My Partner\nitem1.TEL;waid=62896853821126:0\nitem1.X-ABLabel:๐ Partner FachriBotz\nitem2.EMAIL;type=INTERNET:fahrisaeful718@gmail.com\nitem2.X-ABLabel:๐ Email\nitem3.URL:https://bit.ly/sfdesignblogspot\nitem3.X-ABLabel:โ๏ธ Rest Api\nitem4.ADR:;;๐ฎ๐ฉ Indonesia;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:๐ Provinsi | Jawa Tengah\nitem5.X-ABLabel:โโโโ[ แดy แดฉแดสแดษดแดส ]โโโโ\nEND:VCARD"
    }]
  }, MessageType.contactsArray, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(nowner)$/i

module.exports = handler
