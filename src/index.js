//Variabeln
var DiscordJS = require('discord.js');
var Bot = new DiscordJS.Client();

Bot.on('ready', () => {
  //Setzt den Status auf Online
  Bot.user.setStatus('online');
  //Setzt die Aktivitat (z.B. SPIELT mit einem Wollknäul)
  Bot.user.setActivity('auf YouTube rum.')
});

//Befehle
Bot.on('message', message => {
  
  //Variabeln
  var author = message.author;
  var msg = message.content.toUpperCase();
  var prefix = '!';
  
  if(msg === prefix + 'PING') {
    message.channel.send('Pong!');
  }
  
  if(msg === prefix + 'REAKTION') {
    
    //Variabeln
    let emoji1 = message.member.guild.emojis.cache.find(e1 => e1.name === 'logo'); //Anstatt logo eure Emojinamen vom DC-Server einfügen
    
    //Für eigene Emojis
    message.react(emoji1);
    
    //Für offizielle Emojis
    message.react('✅');
  }
  
  if(msg === prefix + 'RECHTE') {
    
    //Rollen Check
    if(message.member.roles.cache.some(role => role.id === '710492966908723272')) {
      message.channel.send('Du hast die Rechte!')
    }else{
      message.channel.send('Du hast die Rechte nicht!')
    }
    
  }
  
  if(msg === prefix + 'AUTOR') {
    
    //Message Author Check!
    if(message.author.id === '552232329259778058') {
      message.channel.send('Du hast die Rechte!')
    }else{
      message.channel.send('Du hast die Rechte nicht!')
    }
    }
  
});


//Bot Login
Bot.login(process.env.TOKEN);