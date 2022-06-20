module.exports.run = async (bot, message, args) => {
  if(message.member.hasPermission("ADMINISTRATOR")) {
    let messagecount = parseInt(args[0]);
    if(isNaN(messagecount)) return message.channel.send(":x: " + "| Please indicate the amount of message that you want to delete.");
    if(messagecount > 100){
      message.channel.send(":x: " + "| Error, you can only delete between 2 and 100 messages at one time !")
    }else if(messagecount < 2 ) {
      message.channel.send(":x: " + "| Error, you can only delete between 2 and 100 messages at one time !")
    } else {
    }{
      message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages, true));
    }
  } else {
    return message.reply(":x: " + "| You need to be \"ADMINISTRATOR\" to use this command.")
  }
}

module.exports.help = {
  name: "clear"
}

// Comments: 
// messagecount Max amount has been set to 100
// messagecount Min amount has been set to 2
// This command is only allowed to be used by Administrators check to learn about role permissions: https://discordjs.guide/popular-topics/permissions.html#roles-as-bot-permissions
