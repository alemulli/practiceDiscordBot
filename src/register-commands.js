require("dotenv").config();
const { REST, Routes } = require("discord.js");

const commands = [
  {
    name: "bro-bot",
    description: "Generates a quick message.",
  },
];

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log("Registering slash commands...");

    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      { body: commands }
    );

    console.log("Slash commands have been registered!");
  } catch (error) {
    console.log(`Error: ${error}`);
  }
})();
