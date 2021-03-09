module.exports = (client, message) => {
  const prefix = client.config.prefix;
  // Ignore all bots.
  if (message.author.bot) return;

  // Ignore message not starthing with the prefix.
  if (message.content.indexOf(client.config.prefix) !== 0) return;

  // Our standar argument/command name definition.
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // Grab the command data from the client.commands Enmap.
  const cmd = client.commands.get(command);

  // If that command doesn't exist, silently exit and do nothing.
  if (!cmd) return;

  // Run the command.
  cmd.run(client, message, args);
};
