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
    console.log(`Bro-bot, ${c.user.tag}, is ready to take over the world! Mwahhaha!`)
})

client.on('messageCreate', (message) => {
    console.log(message.author.username, message.content);

    if (message.author.bot) {
        return;
    }

    if (message.content === 'hello Bro-bot') {
        message.reply("Bro-bot is ready to take over the world! Mwahhaha!")
    }
})

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) {
        return
    }

    console.log(interaction.commandName)

    if(interaction.commandName === 'bro-bot'){
        interaction.reply("This will be the generated message!")
    }
})

client.login(process.env.TOKEN);