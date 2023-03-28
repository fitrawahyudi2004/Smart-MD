import fetch from 'node-fetch'
let handler = async (m, { conn, text, command, args }) => {
if (!args[0]) throw `Membuat gambar dari AI.\n\nContoh:\n${command} Wooden house on snow mountain`
await m.reply('Searching...')
  let res = `https://api.lolhuman.xyz/api/dall-e?apikey=SGWN&text=${text}`
  
  conn.sendHydrated2(m.chat, 'Nih', wm3, res,  'https://wa.me/6281262166032', 'W H A T S A P P', 'https://instagram.com/fitra_wahyudi_', 'I N S T A G R A M', [['Donasi', `.donasi`],
  ['Owner', `.owner`]], m)
  
}
handler.help = ['ai-image', 'aidraw']
handler.tags = ['fun']
handler.command = /^(ai-image|aidraw)$/i
handler.limit = false

export default handler