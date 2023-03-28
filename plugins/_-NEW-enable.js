// import db from '../lib/database.js' 
  
//  // TODO: 
//  // const data = { 
//  //   user: [{ 
//  //     name: 'autolevelup', 
//  //     isEnable: true 
//  //   }], 
//  //   chat: [{ 
//  //     name: 'welcome', 
//  //     isEnable: true, 
//  //     rules: [{ 
//  //     }] 
//  //   }] 
//  // } 
//  let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
//  const { isBanned, welcome, detect, sWelcome, sBye, anticall, nsfw, premnsfw, autoresponder, viewonce, autoread, restrict, useDocument, stiker, autolevelup, whitelistmycontacts, self, premnsfwchat, document, autosticker, getmsg, nyimak, swonly, pconly, gconly, sPromote, sDemote, antiLinkTik, antiLinkTel, antiLinkIg, antiLinkHttp, antiLinkYt, antiLinkFb, antiVirtex, antiToxic, antiLinkGc, antiStiker, antiSpam, del } = global.db.data.chats[m.chat]
//   let isEnable = /true|enable|(turn)?on|1/i.test(command)
//   let chat = global.db.data.chats[m.chat]
//   let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
// let name = await conn.getName(who)
//   let ucp = `Hallo ${name} 👋`
//   let user = global.db.data.users[m.sender]
//   let bot = global.db.data.settings[conn.user.jid] || {}
//   let type = (args[0] || '').toLowerCase()
//   let isAll = false, isUser = false
//   switch (type) {
//     case 'welcome':
//       if (!m.isGroup) {
//         if (!isOwner) {
//           global.dfail('group', m, conn)
//           throw false
//         }
//       } else if (!isAdmin) {
//         global.dfail('admin', m, conn)
//         throw false
//       }
//       chat.welcome = isEnable
//       break
//      case 'detect':
//        if (!m.isGroup) {
//          if (!isOwner) {
//            global.dfail('group', m, conn)
//            throw false
//          }
//        } else if (!isAdmin) {
//          global.dfail('admin', m, conn)
//          throw false
//        }
//        chat.detect = isEnable
//        break
//      case 'autosticker':
//       if (m.isGroup) {
//         if (!(isAdmin || isOwner)) {
//           global.dfail('admin', m, conn)
//           throw false
//         }
//       }
//       chat.stiker = isEnable
//       break
//     case 'desc':
//       if (!m.isGroup) {
//         if (!isOwner) {
//           global.dfail('group', m, conn)
//           throw false
//         }
//       } else if (!(isAdmin || isOwner)) {
//         global.dfail('admin', m, conn)
//         throw false
//       }
//       chat.descUpdate = isEnable
//       break
//     case 'antitoxic':
//       if (m.isGroup) {
//         if (!(isAdmin || isOwner)) {
//           global.dfail('admin', m, conn)
//           throw false
//         }
//       }
//       chat.antiToxic = isEnable
//       break
//     case 'antivirtex':
//       if (m.isGroup) {
//         if (!(isAdmin || isOwner)) {
//           global.dfail('admin', m, conn)
//           throw false
//         }
//       }
//       chat.antiVirtex = isEnable
//       break
//     case 'antispam':
//       isAll = true
//       if (!isOwner) {
//         global.dfail('owner', m, conn)
//         throw false
//       }
//       chat.antispam = isEnable
//       break
//     case 'delete':
//       if (m.isGroup) {
//         if (!(isAdmin || isOwner)) {
//           global.dfail('admin', m, conn)
//           throw false
//         }
//       }
//       chat.delete = isEnable
//       break
//     case 'antidelete':
//       if (m.isGroup) {
//         if (!(isAdmin || isOwner)) {
//           global.dfail('admin', m, conn)
//           throw false
//         }
//       }
//       chat.delete = !isEnable
//       break
//     case 'anticall':
//       isAll = true
//       if (!isOwner) {
//         global.dfail('owner', m, conn)
//         throw false
//       }
//       chat.anticall = isEnable
//       break
//     case 'autodelvn':
//       if (m.isGroup) {
//         if (!(isAdmin || isOwner)) {
//           global.dfail('admin', m, conn)
//           throw false
//         }
//       }
//       chat.autodelvn = isEnable
//       break
//      case 'document':
//        chat.useDocument = isEnable
//        break
//     case 'public':
//       isAll = true
//       if (!isROwner) {
//         global.dfail('rowner', m, conn)
//         throw false
//       }
//       global.opts['self'] = !isEnable
//       break
//     case 'antilinkgc':
//       if (m.isGroup) {
//         if (!(isAdmin || isOwner)) {
//           global.dfail('admin', m, conn)
//           throw false
//         }
//       }
//       chat.antiLinkGc = isEnable
//       break
//     case 'antilinktik':
//       if (m.isGroup) {
//         if (!(isAdmin || isOwner)) {
//           global.dfail('admin', m, conn)
//           throw false
//         }
//       }
//       chat.antiLinkTik = isEnable
//       break
//     case 'antilinktel':
//       if (m.isGroup) {
//         if (!(isAdmin || isOwner)) {
//           global.dfail('admin', m, conn)
//           throw false
//         }
//       }
//       chat.antiLinkTel = isEnable
//       break
//     case 'antilinkyt':
//       if (m.isGroup) {
//         if (!(isAdmin || isOwner)) {
//           global.dfail('admin', m, conn)
//           throw false
//         }
//       }
//       chat.antiLinkYt = isEnable
//       break
//     case 'antilinkhttp':
//       if (m.isGroup) {
//         if (!(isAdmin || isOwner)) {
//           global.dfail('admin', m, conn)
//           throw false
//         }
//       }
//       chat.antiLinkHttp = isEnable
//       break
//     case 'antilinkig':
//       if (m.isGroup) {
//         if (!(isAdmin || isOwner)) {
//           global.dfail('admin', m, conn)
//           throw false
//         }
//       }
//       chat.antiLinkIg = isEnable
//       break
//     case 'antilinkfb':
//       if (m.isGroup) {
//         if (!(isAdmin || isOwner)) {
//           global.dfail('admin', m, conn)
//           throw false
//         }
//       }
//       chat.antiLinkFb = isEnable
//       break
//       case 'antisticker':
//       if (m.isGroup) {
//         if (!(isAdmin || isOwner)) {
//           global.dfail('admin', m, conn)
//           throw false
//         }
//       }
//       chat.antiSticker = isEnable
//       break
//       case 'autoresponder':
//         if (!isROwner) {
//           global.dfail('rowner', m, conn)
//           throw false
//         }
//       chat.autoresponder = isEnable
//       break
//       case 'nsfw':
//         if (m.isGroup) {
//         if (!(isAdmin || isOwner)) {
//           global.dfail('admin', m, conn)
//           throw false
//         }}
//       chat.nsfw = isEnable
//       break
//       case 'premnsfwchat':
//         if (m.isGroup) {
//         if (!isROwner) {
//           global.dfail('rowner', m, conn)
//           throw false
//         }}
//       chat.premnsfw = isEnable
//       break
//     // case 'toxic':
//     //   if (m.isGroup) {
//     //     if (!(isAdmin || isOwner)) {
//     //       global.dfail('admin', m, conn)
//     //       throw false
//     //     }
//     //   }
//     //   chat.antiToxic = !isEnable
//     //   break
//     // case 'antitoxic':
//     //   if (m.isGroup) {
//     //     if (!(isAdmin || isOwner)) {
//     //       global.dfail('admin', m, conn)
//     //       throw false
//     //     }
//     //   }
//     //   chat.antiToxic = isEnable
//     //   break
//     // case 'autolevelup':
//     //   isUser = true
//     //   user.autolevelup = isEnable
//     //   break
//     // case 'mycontact':
//     // case 'mycontacts':
//     // case 'whitelistcontact':
//     // case 'whitelistcontacts':
//     // case 'whitelistmycontact':
//     // case 'whitelistmycontacts':
//     //   if (!isOwner) {
//     //     global.dfail('owner', m, conn)
//     //     throw false
//     //   }
//     //   conn.callWhitelistMode = isEnable
//     //   break
//     case 'restrict':
//       isAll = true
//       if (!isOwner) {
//         global.dfail('owner', m, conn)
//         throw false
//       }
//       bot.restrict = isEnable
//       break
//     case 'nyimak':
//       isAll = true
//       if (!isROwner) {
//         global.dfail('rowner', m, conn)
//         throw false
//       }
//       global.opts['nyimak'] = isEnable
//       break
//      case 'autolevelup': 
//      case 'levelup': 
//        isUser = true 
//        user.autolevelup = isEnable 
//        break
//     case 'autoread':
//       isAll = true
//       if (!isROwner) {
//         global.dfail('rowner', m, conn)
//         throw false
//       }
//       global.opts['autoread'] = isEnable
//       break
//     case 'pconly':
//     case 'privateonly':
//       isAll = true
//       if (!isROwner) {
//         global.dfail('rowner', m, conn)
//         throw false
//       }
//       global.opts['pconly'] = isEnable
//       break
//     case 'gconly':
//     case 'grouponly':
//       isAll = true
//       if (!isROwner) {
//         global.dfail('rowner', m, conn)
//         throw false
//       }
//       global.opts['gconly'] = isEnable
//       break
//     case 'swonly':
//     case 'statusonly':
//       isAll = true
//       if (!isROwner) {
//         global.dfail('rowner', m, conn)
//         throw false
//       }
//       global.opts['swonly'] = isEnable
//       break
//     default:    
//        if (!/[01]/.test(command)) return conn.sendButton(m.chat, `*〔 llı OPTIONS ıll 〕*`, `
    
    
// ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦
   
// banned ${isBanned ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} 
// welcome ${welcome ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} 
// detect ${detect ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} 
// antidelete ${del ? '❪𝗢𝗙𝗙❫' : '❪𝗢𝗡❫'} 
// antivirtex ${antiVirtex ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} 
// antistiker ${antiStiker ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} 
// antispam ${antiSpam ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} 
// antitoxic ${antiToxic ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} 
// antilinkgc ${antiLinkGc ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} 
// antilinktik ${antiLinkTik ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} 
// antilinktel ${antiLinkTel ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} 
// antilinkyt ${antiLinkYt ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} 
// antilinkhttp ${antiLinkHttp ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} 
// antilinkig ${antiLinkIg ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} 
// antilinkfb ${antiLinkFb ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} 
// anticall ${anticall ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} 
// autosticker ${stiker ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'}  
// autolevelup ${autolevelup ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} ⮕  
// autoread ${autoread ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'}  
// document ${useDocument ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'}  
// detect ${detect ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} 
// autoresponder ${autoresponder ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} 
// nsfw ${nsfw ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} 
// getmsg ${getmsg ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'}  
// premnsfw ${premnsfw ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} 
// gconly ${gconly ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'}⮕ 
// nyimak ${nyimak ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} ⮕ 
// pconly ${pconly ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'}⮕ 
// public ${self ? '❪𝗢𝗙𝗙❫' : '❪𝗢𝗡❫'}⮕ 
// restrict ${restrict ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'}⮕  
// swonly ${swonly ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'}⮕  
  
// ▶︎ ━━━━━━━•──────────── 
//       ⇆ㅤ◁ㅤ ❚❚ㅤ ▷ㅤ↻

// 📜 *TUTORIAL*
 
// 𝍤 ON: ${usedPrefix}on welcome ❫

// 𝍤 OFF: ${usedPrefix}off welcome ❫

// 📮Pastikan Huruf kecil semua!
//  `.trim(), `./media/on-off.jpg`, [ 
//  [emojis + `SEWA BOT`, `${usedPrefix}sewa`] 
//  ], m, {asLocation:true}) 
//        throw false 
//    } 
//      conn.sendButton(m.chat, ucp, `*${htki} STATUS ${htka}* 
//  📔  *Type:*   ${type}  
//  🗞️   *Status:*   Succes ✅ 
//  💻️   *Options:*   ${isEnable ? 'ON' : 'OFF'} 
//  🗳️   ${isAll ? 'Bot Only' : isUser ? '' : 'Chat Only'}\n\n${botdate}
//  `, `${flaaa2 + 'Options'}`, [[emojis + 'MENU', '.menuv3'],[emojis + 'OKE', 'Ok']],m)
//  } 
//  handler.help = ['settings'] 
//  handler.tags = ['Bot'] 
//  handler.command = /^((en|dis)able|setting|settings|(tru|fals)e|(turn)?o(n|ff)|[01])$/i 
  
//  export default handler
 let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
  const sections = [
   {
  title: `${dmenub} List Options`,
  rows: [
      {title: "✨ | Welcome", rowId: `${usedPrefix + command} welcome`},
      {title: "🚫 | Delete", rowId: `${usedPrefix + command} delete`},
            {title: "🚫 | autodelvn", rowId: `${usedPrefix + command} autodelvn`},
      {title: "🌎 | Public", rowId: `${usedPrefix + command} public`},
  {title: "🗣️ | Simi", rowId: `${usedPrefix + command} simi`},
  {title: "🔞 | Nsfw", rowId: `${usedPrefix + command} nsfw`},
  {title: "🌟 | PremNsfwChat", rowId: `${usedPrefix + command} premnsfwchat`},
  {title: "🔗 | Antilink", rowId: `${usedPrefix + command} antilink`},
  {title: "🚫 | Antidelete", rowId: `${usedPrefix + command} antidelete`},
  {title: "🌟 | Antilinkwa", rowId: `${usedPrefix + command} antilinkwa`}, 
  {title: "🌟 | AntilinkIg", rowId: `${usedPrefix + command} antilinkIg`}, 
    {title: "🌟 | AntilinkYt", rowId: `${usedPrefix + command} antilinkyt`}, 
    {title: "🌟 | AntilinkTik", rowId: `${usedPrefix + command} antilinktik`},
    {title: "🌟 | AntiHTTP", rowId: `${usedPrefix + command} antihatetepe`}, 
    {title: "🌟 | Antilinkbitly", rowId: `${usedPrefix + command} antilinkbitly`},  {title: "🌟 | Antilinktel", rowId: `${usedPrefix + command} antilinktel`},
  {title: "🌟 | AntiSatir", rowId: `${usedPrefix + command} antisatir`},
  {title: "🌟 | Antispam", rowId: `${usedPrefix + command} antispam`},
  {title: "🌟 | AntiSticker", rowId: `${usedPrefix + command} antisticker`},
  {title: "🌟 | Antivirtex", rowId: `${usedPrefix + command} antivirtex`},
  {title: "🌟 | AutoPresence", rowId: `${usedPrefix + command} autopresence`},
  {title: "🌟 | Autoreply", rowId: `${usedPrefix + command} autoreply`},
  {title: "🌟 | Autosticker", rowId: `${usedPrefix + command} autosticker`},
  {title: "🌟 | AutoUpmine", rowId: `${usedPrefix + command} autoupmine`},
  {title: "🌟 | Autojoin", rowId: `${usedPrefix + command} autojoin`},
  {title: "🌟 | Autoupnews", rowId: `${usedPrefix + command} autoupnews`},
  {title: "🎵 | AutoVn", rowId: `${usedPrefix + command} autovn`},
  {title: "⏏️ | Autolevelup", rowId: `${usedPrefix + command} autolevelup`},
  {title: "🌟 | bcjoin", rowId: `${usedPrefix + command} bcjoin`},
  {title: "🔎 | Detect", rowId: `${usedPrefix + command} detect`},
  {title: "📑 | Document", rowId: `${usedPrefix + command} document`},
  {title: "👤 | WhiteListMyContact", rowId: `${usedPrefix + command} whitelistmycontact`},
  {title: "🌟 | Restrict", rowId: `${usedPrefix + command} restrict`},
  {title: "😐 | Nyimak", rowId: `${usedPrefix + command} nyimak`},
  {title: "🤬 | Antibadword", rowId: `${usedPrefix + command} antibadword`},
  {title: "💬 | PcOnly", rowId: `${usedPrefix + command} pconly`},
  {title: "🏢 | GcOnly", rowId: `${usedPrefix + command} gconly`},
  {title: "📷 | SwOnly", rowId: `${usedPrefix + command} swonly`},
  {title: "🌟 | freply", rowId: `${usedPrefix + command} freply`}, 
  {title: "🚮 | clear", rowId: `${usedPrefix + command} clear`}, 
  {title: "🌟 | Desc", rowId: `${usedPrefix + command} desc`},
  {title: "📩 | Getmsg", rowId: `${usedPrefix + command} getmsg`}, 
  ]
    },
]

const listMessage = {
  text: ' ',
  footer: botdate,
  title: `*${htki} OPTIONS ${htka}*`,
  buttonText: "Click Here!",
  sections
}

  let isEnable = /true|enable|(turn)?on|1/i.test(command)
  let chat = global.db.data.chats[m.chat]
  let user = global.db.data.users[m.sender]
  let bot = global.db.data.settings[conn.user.jid] || {}
  let type = (args[0] || '').toLowerCase()
  let isAll = false, isUser = false
  switch (type) {
    case 'freply':
    case 'fakereply':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      bot.freply = isEnable
      break
    case 'welcome':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.welcome = isEnable
      break
     case 'detect':
       if (!m.isGroup) {
         if (!isOwner) {
           global.dfail('group', m, conn)
           throw false
         }
       } else if (!isAdmin) {
         global.dfail('admin', m, conn)
         throw false
       }
       chat.detect = isEnable
       break
    case 'delete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = isEnable
      break
    case 'antibadword':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiBadword = isEnable
     break
    case 'clear':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      bot.clear = isEnable
      break
          case 'viewonce':
    case 'antiviewonce':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.viewonce = isEnable
      break
    case 'desc':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!(isAdmin || isOwner)) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.descUpdate = isEnable
      break
    case 'antidelete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = !isEnable
      break
     case 'autodelvn':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
           throw false
         }
       }
       chat.autodelvn = isEnable
       break
     case 'document':
       chat.useDocument = isEnable
       break
    case 'public':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['self'] = !isEnable
      break
      case 'bcjoin':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.bcjoin = isEnable
      break
    case 'antilink':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLink = isEnable
      break
    case 'antilinkbitly':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinkBitly = isEnable
      break
      case 'antilinktik':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinkTik = isEnable
      break
      case 'antilinkyt':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinkYt = isEnable
      break
      case 'antilinktel':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinkTel = isEnable
      break
      case 'antilinkfb':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinkFb = isEnable
      break
      case 'antilinkig':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinkIg = isEnable
      break
      case 'antilinkwa':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinkWa = isEnable
      break
      case 'antihatetepe':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinkHttp = isEnable
      break
      case 'nsfw':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.nsfw = isEnable
      break
      case 'antivirtex':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiVirtex = isEnable
      break
      case 'antisatir':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiSatir = isEnable
      break
      case 'simi':
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      chat.simi = isEnable
      break
      case 'autovn':
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      chat.autoVn = isEnable
      break
      case 'autopresence':
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      chat.autoPesence = isEnable
      break
      case 'autoreply':
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      chat.autoReply = isEnable
      break
      case 'autosticker':
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      chat.autoSticker = isEnable
      break
      case 'antisticker':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiSticker = isEnable
      break
      case 'autojoin':
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      chat.autoJoin = isEnable
      break
      case 'autoupnews':
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      chat.updateAnimeNews = isEnable
      break
      case 'autoupnime':
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      chat.updateAnime = isEnable
      break
     case 'toxic':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
           throw false
         }
       }
       chat.antiToxic = !isEnable
       break
     case 'antitoxic':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
           throw false
         }
       }
       chat.antiToxic = isEnable
       break
       case 'antispam':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
           throw false
         }
       }
       chat.antiSpam = isEnable
       break
       case 'anticall':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
           throw false
         }
       }
       chat.antiCall = isEnable
       break
     case 'autolevelup':
       isUser = true
       user.autolevelup = isEnable
       break
     case 'mycontact':
     case 'mycontacts':
     case 'whitelistcontact':
     case 'whitelistcontacts':
     case 'whitelistmycontact':
     case 'whitelistmycontacts':
       if (!isOwner) {
         global.dfail('owner', m, conn)
         throw false
       }
       conn.callWhitelistMode = isEnable
       break
    case 'restrict':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      bot.restrict = isEnable
      break
    case 'nyimak':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['nyimak'] = isEnable
      break
    case 'autoread':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['autoread'] = isEnable
      break
    case 'pconly':
    case 'privateonly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['pconly'] = isEnable
      break
    case 'gconly':
    case 'grouponly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['gconly'] = isEnable
      break
    case 'getmsg':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
      }
      chat.getmsg = isEnable
      break
    case 'swonly':
    case 'statusonly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['swonly'] = isEnable
      break
    default:
      if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage)
      throw false
  }
  conn.sendButton(m.chat, `*${htki} OPTIONS ${htka}*
🗂️ *Type:* ${type} 
📊 *Status:* Succes ✅
🎚️ *Options:* ${isEnable ? 'Enable' : 'Disable'}
📣 *For:* ${isAll ? 'This Bot' : isUser ? '' : 'This Chats'}
`,wm, null, [[`${isEnable ? '✖️ Disable' : '✔️ Enable'}`, `${isEnable ? `.off ${type}` : `.on ${type}`}`], ['🎀 Menu', '.menu']],m)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i

export default handler
