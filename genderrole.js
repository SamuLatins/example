module.exports = {
    name: 'genderrole',
    description: "Sets up a reaction role message!",
    permissions: ["ADMINISTRATOR", "MANAGE_MESSAGES", "CONNECT"],
    async execute(client, message, args, Discord) {
        const channel = '861000668198076447';
        const heRole = message.guild.roles.cache.find(role => role.name === "he/him");
        const sheRole = message.guild.roles.cache.find(role => role.name === "she/her");
        const theyRole = message.guild.roles.cache.find(role => role.name === "they/them");
        const allRole = message.guild.roles.cache.find(role => role.name === "any pronouns");
 
        const heEmoji = '💙';
        const sheEmoji = '❤';
        const theyEmoji = '💛';
        const anyEmoji = '💜';
 
        let embed = new Discord.MessageEmbed()
            .setColor('#ffd800')
            .setTitle('Gender Pronouns')
            .setDescription(
                `${heEmoji} ➤ ${heRole}\n`
                + `${sheEmoji} ➤ ${sheRole}\n`
                + `${theyEmoji} ➤ ${theyRole}\n`
                + `${anyEmoji} ➤ ${allRole}`);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(heEmoji);
        messageEmbed.react(sheEmoji);
        messageEmbed.react(theyEmoji);
        messageEmbed.react(anyEmoji);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === heEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(heRole);
                }
                if (reaction.emoji.name === sheEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(sheRole);
                }
                if (reaction.emoji.name === theyEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(theyRole);
                }
                if (reaction.emoji.name === anyEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(allRole);
                }
            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === heEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(heRole);
                }
                if (reaction.emoji.name === sheEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(sheRole);
                }
                if (reaction.emoji.name === theyEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(theyRole);
                }
                if (reaction.emoji.name === anyEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(allRole);
                }
            } else {
                return;
            }
        });
    }
 
}  
