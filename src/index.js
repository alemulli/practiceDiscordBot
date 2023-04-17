require('dotenv').config()
const { Client, IntentsBitField } = require('discord.js')

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
});

client.on('ready', (c) => {
    console.log("Bro-bot is ready to take over the world! Mwahhaha!")
    console.log(`${c.user.tag}`)
})

client.on('messageCreate', (message) => {
    console.log(message.author.username, message.content);

    if (message.author.bot) {
        return;
    }

    if (message.content === 'hello') {
        message.reply("Bro-bot is ready to take over the world! Mwahhaha!")
    }
})

client.login(process.env.TOKEN);