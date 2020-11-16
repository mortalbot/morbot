const fs = require('fs-extra')
const { 
    prefix
} = JSON.parse(fs.readFileSync('./settings/setting.json'))

/*

Por favor, no elimines mi enlace de github, ¡necesito tu apoyo! Gracias.

*/

exports.textTnC = () => {
    return `
El codigo fuente / bot es un programa de código abierto (gratuito) escrito con Javascript, puede usar, copiar, modificar, combinar, publicar, distribuir, sublicenciar o vender copias sin eliminar el autor principal del código fuente / bot.
Al usar este código fuente / bot, acepta los siguientes términos y condiciones:
- El Código fuente / bot no almacena sus datos en nuestros servidores.
- El código fuente / bot no es responsable de los stickers que usted crea con este bot y los videos, imágenes y otros datos que obtiene del código fuente / bot.
- El código fuente / bot no se puede utilizar para servicios que tienen como objetivo / contribuyen a:
    • sexo / trata de personas
    • juegos de azar
    • comportamiento adictivo dañino
    • crimen
    • violencia (A MENOS QUE SEA NECESARIA PARA PROTEGER LA SEGURIDAD PÚBLICA)
    • quema de bosques / defirestación
    • discurso de odio o discriminación por motivos de edad, sexo, identidad de género, raza, sexualidad, religión, nacionalidad.

Código fuente BOT: https://github.com/mortalbot/morbot.git
NodeJS WhatsApp libreria: https://github.com/open-wa/wa-automate-nodejs

*MORBOT © Todos los derechos reservados.*`
}

/*

Por favor, no elimines mi enlace de github, ¡necesito tu apoyo! Gracias.

*/

exports.textMenu = (pushname) => {
    return `
Menú de morbot!, ${pushname} como puedo ayudarte?

*Comandos de morbot:*

Creador de sticker:
-❥ *${prefix}sticker*
Para hacer un sticker
Solo tienes que mandar una foto y poner: #sticker o tambien alguna imagen que hayan enviado y pones #sticker

-❥ *${prefix}stickergif*


-❥ *${prefix}stickergiphy*
Puedes crear sticker con movimiento tambien, pero OJO *(SOLAMENTE IMAGENES SUBIDAS A LA PAGINA GIPHY https://giphy.com)* ejemplo : #gifsticker https://media.giphy.com/media/Zw8ifdsKnhX6xXO6y0/giphy.gif

-❥ *${prefix}meme*

-❥ *${prefix}quotemaker*

-❥ *${prefix}nulis*

Islam:
-❥ *${prefix}infosurah*
-❥ *${prefix}surah*
-❥ *${prefix}tafsir*
-❥ *${prefix}ALaudio*
-❥ *${prefix}jsolat*

18+:
-❥ *${prefix}nekopoi*

Fun Menu (Group):
-❥ *${prefix}simisimi*
-❥ *${prefix}katakasar*
		┷-❥ *${prefix}klasmen*

Comandos De Descarga:
-❥ *${prefix}instagram*
-❥ *${prefix}ytmp3*
-❥ *${prefix}ytmp4*

Primbon:
-❥ *${prefix}artinama*
-❥ *${prefix}cekjodoh*

Comandos Para Buscar:
-❥ *${prefix}images*
-❥ *${prefix}sreddit*
-❥ *${prefix}resep*
-❥ *${prefix}stalkig*
-❥ *${prefix}wiki*
-❥ *${prefix}cuaca*
-❥ *${prefix}chord*
-❥ *${prefix}lirik*
-❥ *${prefix}ss*
-❥ *${prefix}play*
Para escuchar música de Youtube solo envia #play y el nombre de la musica.

-❥ *${prefix}whatanime*

Random Teks:
-❥ *${prefix}fakta*
-❥ *${prefix}pantun*
-❥ *${prefix}katabijak*
-❥ *${prefix}quote*

Random Images:
-❥ *${prefix}anime*
-❥ *${prefix}kpop*
-❥ *${prefix}memes*

Lain-lain:
-❥ *${prefix}tts*
-❥ *${prefix}translate*
-❥ *${prefix}resi*
-❥ *${prefix}covidindo*
-❥ *${prefix}ceklokasi*
-❥ *${prefix}shortlink*
-❥ *${prefix}bapakfont*

Tentang Bot:
-❥ *${prefix}tnc*
-❥ *${prefix}donasi*
-❥ *${prefix}botstat*
-❥ *${prefix}ownerbot*
-❥ *${prefix}join*

_-_-_-_-_-_-_-_-_-_-_-_-_-_

⚠ [ *Comandos Solo Para Creador Del Bot* ] ⚠ 

-❥ *${prefix}ban*}
Prohibir a alguien al grupo.

-❥ *${prefix}bc*
Difusión amplia.

-❥ *${prefix}leaveall*
Salir de todos los grupos.

-❥ *${prefix}clearall*
Eliminar todos los chats.

Hope you have a great day!✨`
}

/*

*MORBOT © Todos los derechos reservados*

*/

exports.textAdmin = () => {
    return `
⚠ [ *Comandos Solo Para Administradores* ] ⚠ 
Estos son los comandos de administrador que tiene morbot!

-❥ *${prefix}add*
Añadir a un usuario a el grupo.

-❥ *${prefix}kick* @usuario
Expulsar a un miembro del grupo (Puede ser más de 1 usuario).

-❥ *${prefix}promote* @usuario
Darle administración a un miembro del grupo.

-❥ *${prefix}demote* @usuario
Quitarle administración a un miembro del grupo.

-❥ *${prefix}del*
Borrar mensajes enviados por morbot.

_-_-_-_-_-_-_-_-_-_-_-_-_-_

⚠ [ *Comando Solo Para Creador*] ⚠
Estos son los comandos de creador que tiene morbot!
-❥ *${prefix}kickall*
Eliminar a todos los usuarios del grupo.
`
}

/*

*MORBOT © Todos los derechos reservados*

*/

exports.textDonasi = () => {
    return `

*mortal. -morbot*`
}
