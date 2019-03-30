/*
*@file editor Thomas Weland
*@type discord.js
*@npm (nothing)
*@file put it in [commands]


*/
  

  module.exports.run = async (bot, message, args) => {


    
    if(message.member.hasPermission("ADMINISTRATOR")) {     ///To allow a simple moderator to use the command just put MANAGE_MESSAGES in place of ADMINISTRATOR 
      let messagecount = parseInt(args[0]);
    
      if(isNaN(messagecount)) return message.channel.send(":x: " + "| Please mention the amount of message that you want to delete");
    
      if(messagecount > 100){
        message.channel.send(":x: " + "| Error, you can only delete between 2 and 100 messages at one time !")
      }else if(messagecount < 2 ) {
        message.channel.send(":x: " + "| Error, you can only delete between 2 and 100 messages at one time !")
      } else {
    
      }{
        message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages, true));
      }
    } else {
      return message.reply(":x: " + "| You need to be \"ADMINISTRATOR\" to do that")
    }
    }
    
    module.exports.help = {
        name: "clear"
    }
