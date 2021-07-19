module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR"))return message.reply(":x: " + "| You need to be `ADMINISTRATOR` to do that");    ///To allow a simple moderator to use the command just put MANAGE_MESSAGES in place of ADMINISTRATOR 
  // V13 if(!message.member.permissions.has("ADMINISTRATOR"))return message.reply(":x: " + "| You need to be `ADMINISTRATOR` to do that"); 
  const messagecount = parseInt(args[0]);
    
  if(isNaN(messagecount)) return message.channel.send(":x: " + "| Please mention the amount of message that you want to delete");
  if(messagecount > 100 && messagecount < 1)return message.channel.send(":x: " + "| Error, you can only delete between 2 and 100 messages at one time !");
 
  message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages, true));
};

module.exports.help = {
  name: "clear"
};
