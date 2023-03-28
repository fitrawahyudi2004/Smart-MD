import fetch from 'node-fetch'
let handler = async(m, { conn }) => {

let f = await fetch(`https://api.zahwazein.xyz/islami/kisahmuslim?apikey=85345ee3d9de`)
let x = await f.json()
 let cap = `${cmenut} Kisah Muslim ${htka}
${cmenub} judul : ${x.result.Judul}
${cmenuf}
Cerita : 
${x.result.Cerita} : `
conn.sendHydrated2(m.chat, cap, wm, x.result.Thumb, 'https://youtu.be/', 's ᴄ ʀ ɪ ᴘ ᴛ', 'https://instagram.com/fitra_wahyudi_', 'ɪ ɴ s ᴛ ᴀ ɢ ʀ ᴀ ᴍ', [['Menu', `.menu`],
  ['Niatsholat', `.niatsholat`],['Sewa', `.sewa`]], m)
  }
  handler.help = ['kisahmuslim']
  handler.tags = ['quran']

  handler.command = /^(kisahmuslim)$/i

   export default handler
