//  Definindo os slash commands
const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Responde: Pong!'),

    async execute(interaction) {
        //  Acesso através do setName (input de fato)
        if (interaction.commandName === 'ping') {
            await interaction.reply('Pong!');
        }
    }
}