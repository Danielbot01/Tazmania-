// TheMystic-Bot-MD@BrunoSobrino - _antiprivado.js

export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  if (bot.antiPrivate && !isOwner && !isROwner) {
    await m.reply(`_*< ANTI-PRIVADO />*_\n\n*Hey, este número es un bot, así que no recibimos reportes ni pedidos. Pero te puedo dar un resumen rápido de lo que puedo hacer.

Me llamo Bot Tazmania. La información sobre los precios está en la descripción, y la cuenta para depositar está en el mensaje fijado. Si necesitas más detalles, habla con la administradora principal del grupo.

¿No sabes cómo hacer un reporte? ¡Te ayudo!

1. Foto del problema
2. Correo y contraseña
3. Fecha de compra
4. Explicación del inconveniente con la cuenta.

Los reportes toman tiempo, se atienden en orden.

Eso es todo por ahora. ¡Gracias por elegirnos como tu opción!`, false, {mentions: [m.sender]});
    await this.updateBlockStatus(m.chat, 'block');
  }
  return !1;
}
