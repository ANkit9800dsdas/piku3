 
 ​import​ ​{​ ​MessageType​,​ ​Mimetype​ ​}​ ​from​ ​'@adiwajshing/baileys' 
 ​import​ ​{​ ​join​ ​}​ ​from​ ​'path' 
 ​import​ ​MessageHandler​ ​from​ ​'../../Handlers/MessageHandler' 
 ​import​ ​BaseCommand​ ​from​ ​'../../lib/BaseCommand' 
 ​import​ ​WAClient​ ​from​ ​'../../lib/WAClient' 
 ​import​ ​{​ ​ISimplifiedMessage​ ​}​ ​from​ ​'../../typings' 
  
 ​export​ ​default​ ​class​ ​Command​ ​extends​ ​BaseCommand​ ​{ 
 ​    ​constructor​(​client​: ​WAClient​,​ ​handler​: ​MessageHandler​)​ ​{ 
 ​        ​super​(​client​,​ ​handler​,​ ​{ 
 ​            ​command​: ​'dev'​, 
 ​            ​description​:  'command list only for mods/owners'​, 
 ​            ​category​: ​'weeb'​, 
 ​            ​usage​: ​`​${​client​.​config​.​prefix​}}dev`​, 
 ​            ​dm​: ​false, 
 ​            ​aliases​: ​[​'mh'​, 'ownerscmd'] 
 ​        ​}​) 
 ​    ​} 
  
 ​    ​run​ ​=​ ​async​ ​(​M​: ​ISimplifiedMessage​)​: ​Promise​<​void​>​ ​=>​ ​{ 
 ​        ​const​ ​n​ ​=​ ​[ 
 ​            ​'./assets/Pikachu/images (4).mp4'​ ​] 
 ​        ​let​ ​well​ ​=​ ​n​[​Math​.​floor​(​Math​.​random​(​)​ ​*​ ​n​.​length​)​] 
 ​        ​return​ ​void​ ​this​.​client​.​sendMessage​(​M​.​from​,​ ​{​ ​url​: ​well​ ​}​,​ ​MessageType​.​video​,​ ​{​quoted​:​M​.​WAMessage​, 
 ​            ​mimetype​: ​Mimetype​.​gif​, 
 ​            ​caption​: ​`-📯 commands only for mods🛠️
*------------------------------------*
 ​🔊 ​*${​this​.​client​.​config​.​prefix​}​broadcast* \n\n 🔓 *${​this​.​client​.​config​.​prefix​}​enable*         🔒 *${​this​.​client​.​config​.​prefix​}​disable* \n\n♻️ *​${​this​.​client​.​config​.​prefix​}eval* \n\n➕ *${​this​.​client​.​config​.​prefix​}​join*         🛑 *​${​this​.​client​.​config​.​prefix​}​leave* \n\n 🖇️ *​${​this​.​client​.​config​.​prefix​}}setprefix*         📰 ​*${​this​.​client​.​config​.​prefix​}​status* \n\n ❌ ​ ​*${​this​.​client​.​config​.​prefix​}​ban*         🆓 *​${​this​.​client​.​config​.​prefix​}​unban* \n\n▪️ *​${​this​.​client​.​config​.​prefix​}mtag*
*-------------------------------------*
`​ ​} 
 ​        ​) 
 ​    ​} 
 ​}
