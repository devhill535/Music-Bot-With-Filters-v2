const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
  approveemoji,
  denyemoji 
} = require(`../config.json`);

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "HELP COMMANDS",
  execute(message) {
    let commands = message.client.commands.array();
    let helpEmbed = new MessageEmbed()
      .setAuthor(`Renox Help`)
      .setThumbnail(message.author.avatarURL({dynamic: "true"}))
      .setFooter(message.author.username,message.author.displayAvatarURL({ dynamic: "true" }))
      .setColor("RANDOM")
      
    .setDescription(`\`

INFO COMMANDS 

help, ping, uptime,

MUSIC COMMANDS

loop, lyricns ,remove
,nowplaying, pause,play
queue, radio ,skipto 
resume,search, shuffle
skip, stop, volume

FILTERS COMMANDS 

bassboost ,8D ,vaporwave 
,nightcore ,phaser ,tremolo
vibrato ,surrounding ,pulsator 
,subboost ,clear

\`
**[   SUPPORT  ](https://discord.gg/robot)** -  [   INVITE   ](https://discord.com/api/oauth2/authorize?client_id=789233974798319648&permissions=1342568564&scope=bot)  -  [   WEBSITE   ](https://website-renox.glitch.me)`)

    //////////////
   //////////////
    return message.channel.send(helpEmbed).catch(console.error);
  }
};
            ifargstruedothis=17
          break;    
          case "invite":
            ifargstruedothis=18
          break;
          case "ping":
            ifargstruedothis=19
          break;
          case "prefix":
            ifargstruedothis=20
          break;
          case "uptime":
            ifargstruedothis=21
          break;
          case "botlist":
            ifargstruedothis=22
          break;
          default:        
            commands.forEach((cmd) => {
              helpEmbed.addField(
                `**${message.client.prefix}${cmd.name}**`,
                `${cmd.description}`,
                true
              );
            });
          if(!message.guild) {
            if(!args[0]) {message.react(approveemoji);return message.channel.send(helpEmbed);}
            return
            }
            message.channel.send(helpEmbed);
           
        break;
       }
     
       if(ifargstruedothis>=0){
         let aliases = commands[ifargstruedothis].aliases;
         if(aliases === undefined || !aliases) aliases="No Aliases!";
         let cooldown = commands[ifargstruedothis].cooldown;
         if(cooldown === undefined || !cooldown) cooldown="No Cooldown!";


        helpEmbed.addField(
          `**${message.client.prefix}${commands[ifargstruedothis].name}**`,
          `\`\`\`fix\n${commands[ifargstruedothis].edesc}\n\`\`\`\n\`${commands[ifargstruedothis].description}\``
        );
        helpEmbed.addField(
          `**:notes: Aliases:**`,
          `\`${aliases}\``
        );
        helpEmbed.addField(
          `**:wrench: Cooldown:**`,
          `\`${cooldown}\``
        );
        if(!message.guild) return message.channel.send(helpEmbed);
          message.channel.send(helpEmbed);
       }

}
}
