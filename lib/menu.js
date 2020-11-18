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
Enviar una imagen gif, con una duración menor a 10 segundos y esperar a que morbot cree tu sticker con movimiento.

-❥ *${prefix}stickergiphy*
Puedes crear sticker con movimiento tambien, pero OJO *(SOLAMENTE IMAGENES SUBIDAS A LA PAGINA GIPHY https://giphy.com)* ejemplo : #gifsticker https://media.giphy.com/media/Zw8ifdsKnhX6xXO6y0/giphy.gif

-❥ *${prefix}nulis*
Crear textos en un cuaderno. ejemplo : *#nulis HOLA, y morbot creara una imagen con tu texto en una hoja de cuaderno.*

Comandos De Descarga:

-❥ *${prefix}instagram*
Tambien puedo descargar videos e imagenes de instagram.
Solo tienes que escribir en el chat el siguiente formato: *#instagram https://www.instagram.com/p/0000000000000/*

-❥ *${prefix}ytmp3*
Descargar audio de un video de Youtube *EJEMPLO : #ytmp3 https://www.youtube.com/watch?v=00000000000*

-❥ *${prefix}ytmp4*
Descargar video de Youtube *EJEMPLO : #ytmp4 https://www.youtube.com/watch?v=00000000000*

Comandos Para Buscar:

-❥ *${prefix}images*
Buscar imagenes el google. *EJEMPLO : #images morbot*

-❥ *${prefix}sreddit*
Para buscar imágenes en el sub de reddit. *EJEMPLO : #sreddit morbot*

-❥ *${prefix}stalkig*
Acechar la cuenta de Instagram de alguna persona.

-❥ *${prefix}cuaca*
Ver el clima en algun lugar del mundo.

-❥ *${prefix}play*
Para escuchar música de Youtube. *EJEMPLO : #play La Señora Cucaracha*

-❥ *${prefix}whatanime*
Enviar una foto y poner *whatanime* y el bot intentara identificar que anime es.

Comandos Aleatorios:

-❥ *${prefix}fakta*
Curiosidades que quizas no sabias.

-❥ *${prefix}tts*
Para usar la voz de google es facil solo envia : *#tts es "y tu texto"*

-❥ *${prefix}shortlink*
Acorta un link si es demasiado largo con el siguiente comando.

-❥ *${prefix}anime*
Buscar imagenes randon de memes con : *#anime random*

Acerca de morbot:

-❥ *${prefix}tnc*
Terminos y condiciones de morbot.

}-❥ *${prefix}botstat*
Estadisticas de morbot en el grupo o chat.

-❥ *${prefix}join*
Si quieres que morbot entre a algun grupo solo envia *#join Y EL ENLACE DEL GRUPO*`
}

/*

*MORBOT © Todos los derechos reservados*

*/

exports.textAdmin = () => {
    return `
⚠ [ *Comandos Solo Para Administradores* ] ⚠ 
Estos son los comandos de administrador que tiene morbot!

-❥ *${prefix}kick* @usuario
Expulsar a un miembro del grupo (Puede ser más de 1 usuario).

-❥ *${prefix}promote* @usuario
Darle administración a un miembro del grupo.

-❥ *${prefix}demote* @usuario
Quitarle administración a un miembro del grupo.

-❥ *${prefix}del*
Borrar mensajes enviados por morbot.

-❥ *${prefix}bye*
Hacer que morbot salga solo del grupo.

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

Comandos Del Dueño Del Bot:
-❥ *${prefix}ban* - Banear a un usuario para que no use comandos.
-❥ *${prefix}bc* - Enviar mensajes a todos los usuarios y grupos donde esta el bot.
-❥ *${prefix}leaveall* - Salir de todos los grupos.
-❥ *${prefix}clearall* - Eliminar todos los chats y grupos de la pantalla de inicio.`
}

/*

*MORBOT © Todos los derechos reservados*

*/

exports.textKevin = () => {
    return `

Comandos Del Dueño Del Bot:
-❥ *${prefix}ban* - Banear a un usuario para que no use comandos.
-❥ *${prefix}bc* - Enviar mensajes a todos los usuarios y grupos donde esta el bot.
-❥ *${prefix}leaveall* - Salir de todos los grupos.
-❥ *${prefix}clearall* - Eliminar todos los chats y grupos de la pantalla de inicio.`
}
