let handler = async (m, { conn, usedPrefix }) => {
let user = db.data.users[m.sender]
let randomaku1 = `${Math.floor(Math.random() * 5)}`
let randomaku2 = `${Math.floor(Math.random() * 5)}`
let randomaku4 = `${Math.floor(Math.random() * 5)}`
let randomaku3 = `${Math.floor(Math.random() * 5)}`
let randomaku5 = `${Math.floor(Math.random() * 5)}`
let randomaku6 = `${Math.floor(Math.random() * 5)}`
let randomaku7 = `${Math.floor(Math.random() * 5)}`
let randomaku8 = `${Math.floor(Math.random() * 5)}`
let randomaku9 = `${Math.floor(Math.random() * 5)}`
let randomaku10 = `${Math.floor(Math.random() * 5)}`
let randomaku11 = `${Math.floor(Math.random() * 5)}`
let randomaku12 = `${Math.floor(Math.random() * 5)}`.trim()
let rbrb1 = (randomaku1 * 1)
let rbrb2 = (randomaku2 * 1)
let rbrb3 = (randomaku3 * 1)
let rbrb4 = (randomaku4 * 1)
let rbrb5 = (randomaku5 * 1)
let rbrb6 = (randomaku6 * 1)
let rbrb7 = (randomaku7 * 1)
let rbrb8 = (randomaku8 * 1)
let rbrb9 = (randomaku9 * 1)
let rbrb10 = (randomaku10 * 1)
let rbrb11 = (randomaku11 * 1)
let rbrb12 = (randomaku12 * 1)
let anti1 = `${rbrb1}`
let anti2 = `${rbrb2}`
let anti3 = `${rbrb3}`
let anti4 = `${rbrb4}`
let anti5 = `${rbrb5}`
let anti6 = `${rbrb6}`
let anti7 = `${rbrb7}`
let anti8 = `${rbrb8}`
let anti9 = `${rbrb9}`
let anti10 = `${rbrb10}`
let anti11 = `${rbrb11}`
let anti12 = `${rbrb12}`	
let ar1 = `${['🪚','⛏️','🧨','💣','🔫','🔪','🗡️','🏹','🦾','🥊','🧹','🔨','🛻'].getRandom()}`
let ar2 = `${['🪚','⛏️','🧨','💣','🔫','🔪','🗡️','🏹','🦾','🥊','🧹','🔨','🛻'].getRandom()}`
let ar3 = `${['🪚','⛏️','🧨','💣','🔫','🔪','🗡️','🏹','🦾','🥊','🧹','🔨','🛻'].getRandom()}`
let ar4 = `${['🪚','⛏️','🧨','💣','🔫','🔪','🗡️','🏹','🦾','🥊','🧹','🔨','🛻'].getRandom()}`
let ar5 = `${['🪚','⛏️','🧨','💣','🔫','🔪','🗡️','🏹','🦾','🥊','🧹','🔨','🛻'].getRandom()}`
let ar6 = `${['🪚','⛏️','🧨','💣','🔫','🔪','🗡️','🏹','🦾','🥊','🧹','🔨','🛻'].getRandom()}`
let ar7 = `${['🪚','⛏️','🧨','💣','🔫','🔪','🗡️','🏹','🦾','🥊','🧹','🔨','🛻'].getRandom()}`
let ar8 = `${['🪚','⛏️','🧨','💣','🔫','🔪','🗡️','🏹','🦾','🥊','🧹','🔨','🛻'].getRandom()}`
let ar9 = `${['🪚','⛏️','🧨','💣','🔫','🔪','🗡️','🏹','🦾','🥊','🧹','🔨','🛻'].getRandom()}`
let ar10 = `${['🪚','⛏️','🧨','💣','🔫','🔪','🗡️','🏹','🦾','🥊','🧹','🔨','🛻'].getRandom()}`
let ar11 = `${['🪚','⛏️','🧨','💣','🔫','🔪','🗡️','🏹','🦾','🥊','🧹','🔨','🛻'].getRandom()}`
let ar12 = `${['🪚','⛏️','🧨','💣','🔫','🔪','🗡️','🏹','🦾','🥊','🧹','🔨','🛻'].getRandom()}`
let hsl = `
*✧ Resultados de la caza ${conn.getName(m.sender)} ✧*

 *🐂 ${ar1} ${anti1}*			 *🐃 ${ar7} ${anti7}*
 *🐅 ${ar2} ${anti2}*			 *🐮 ${ar8} ${anti8}*
 *🐘 ${ar3} ${anti3}*			 *🐒 ${ar9} ${anti9}*
 *🐐 ${ar4} ${anti4}*			 *🐗 ${ar10} ${anti10}*
 *🐼 ${ar5} ${anti5}*			 *🐖 ${ar11} ${anti11}*
 *🐊 ${ar6} ${anti6}*		    *🐓 ${ar12} ${anti12}*`.trim()
db.data.users[m.sender].banteng += rbrb1
db.data.users[m.sender].harimau += rbrb2
db.data.users[m.sender].gajah += rbrb3
db.data.users[m.sender].kambing += rbrb4
db.data.users[m.sender].panda += rbrb5
db.data.users[m.sender].buaya += rbrb6
db.data.users[m.sender].kerbau += rbrb7
db.data.users[m.sender].sapi += rbrb8
db.data.users[m.sender].monyet += rbrb9
db.data.users[m.sender].babihutan += rbrb10
db.data.users[m.sender].babi += rbrb11
db.data.users[m.sender].ayam += rbrb12
	
let time = db.data.users[m.sender].lastberburu + 2700000 //45 Minutos
if (new Date - db.data.users[m.sender].lastberburu < 2700000) return conn.sendMessage(m.chat, { text: `POR FAVOR DESCANSA UN MOMENTO PARA SEGUIR CAZANDO\n\n⫹⫺ TIEMPO ${clockString(time - new Date())}\n${wm}\n\nPara: 
['🏞️ ANIMALES CAPTURADOS'] usa: *${usedPrefix}kandang*,
['🎒 INVENTARIO'] usa: *${usedPrefix}inventario*`}, {quoted: m, ephemeralExpiration: true, disappearingMessagesInChat: 24*60*100})	

setTimeout(() => {
conn.sendMessage(m.chat, {text: hsl + '\n\n' + wm + '\n\n' + null + '\n\n' + md + '\n\n' +`𝙶𝙸𝚃𝙷𝚄𝙱` + '\n\n' + null + '\n\n' + null}[
[null, null]], null)}, 20000)
	        
setTimeout(() => {
conn.reply(m.chat, `@${m.sender.split("@s.whatsapp.net")[0]} *${['OBJETIVO FIJADO 🎯','Carnada en Marcha 🍫 🍇 🍖','ANIMALES DETECTADOS!! 🐂 🐅 🐘 🐼','ANIMALES DETECTADOS!! 🐖 🐃 🐮 🐒'].getRandom()}*`, null, { mentions: [m.sender]}, {quoted: m, ephemeralExpiration: true, disappearingMessagesInChat: 24*60*100})}, 18000)	
//conn.sendHydrated(m.chat, `${conn.getName(m.sender)} *${['OBJETIVO FIJADO`${conn.getName(m.sender)} *${['OBJETIVO FIJADO 🎯','Carnada en Marcha 🍫 🍇 🍖','ANIMALES DETECTADOS!! 🐂 🐅 🐘 🐼','ANIMALES DETECTADOS!! 🐖 🐃 🐮 🐒'].getRandom()}*` 🎯','Carnada en Marcha 🍫 🍇 🍖','ANIMALES DETECTADOS!! 🐂 🐅 🐘 🐼','ANIMALES DETECTADOS!! 🐖 🐃 🐮 🐒'].getRandom()}*`, wm, null, null, null, null, null, [
//[null, null]], null)}, 18000)

setTimeout(() => {
conn.reply(m.chat, `@${m.sender.split("@s.whatsapp.net")[0]} *${['Armas lista para la Caza!!','Probando Armas 🔫 💣 🪓 🏹','CARROS PARA LA CAZA!! 🚗 🏍️ 🚜','TIEMPO BUENO PARA LA CAZA 🧤'].getRandom()}*`, null, { mentions: [m.sender]}, {quoted: m, ephemeralExpiration: true, disappearingMessagesInChat: 24*60*100})}, 15000) 	
//conn.sendHydrated(m.chat, `${conn.getName(m.sender)} *${['Armas lista para la Caza!!','Probando Armas 🔫 💣 🪓 🏹','CARROS PARA LA CAZA!! 🚗 🏍️ 🚜','TIEMPO BUENO PARA LA CAZA 🧤'].getRandom()}*`, wm, null, null, null, null, null, [
//[null, null]], null)}, 15000)

setTimeout(() => {
conn.reply(m.chat, `@${m.sender.split("@s.whatsapp.net")[0]} *${['Buscando implementos de caza...','Alistando todo para la caza!!','Estableciendo Lugar de la Caza...','PREPARANDO LUGAR DE CAZA!!'].getRandom()}*`, m, m.mentionedJid ? { mentions: [m.sender] } : {})}, 0)
//conn.sendHydrated(m.chat, `${conn.getName(m.sender)} *${['Buscando implementos de caza...','Alistando todo para la caza!!','Estableciendo Lugar de la Caza...','PREPARANDO LUGAR DE CAZA!!'].getRandom()}*`, wm, null, null, null, null, null, [
//[null, null]], null)}, 0)	
user.lastberburu = new Date * 1	
							     
}
handler.help = ['berburu']
handler.tags = ['rpg']
handler.command = /^(hunt|berburu|caza(r)?)$/i
//handler.group = true
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}
