let handler = async (m) => {
db.data.chats[m.chat].isBanned = true
m.reply('*[❗INFO❗] ESTE CHAT FUE BANEADO CON EXITO*\n\n*—◉ EL BOT NO REACCIONARA A NINGUN COMANDO HASTA DESBANEAR ESTE CHAT*')
}
handler.help = ['banchat']

handler.tags = ['owner']

handler.command = /^banchat$/i
handler.owner = true
export default handler
