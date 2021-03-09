exports.run = (client, message, args) => {
  if (message.mentions.members.size === 0) return message.reply("Please mention a user to kick");

  const kickMember = message.mentions.members.first();
  kickMember.voice.kick();
};
