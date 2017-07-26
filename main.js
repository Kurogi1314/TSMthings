import Discord form 'discord.js'

const Client = new Discord.Client({
   disableEveryone: true,
  messageCacheMaxSize: 500,
  messageCacheLifetime: 120,
  messageSweepInterval: 60
});
