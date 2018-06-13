const music = [
  [
    {wk: 0, name: "Jelly Roll Morton Dirty Dozens", code: "aRSMaKJySlY"},
    {wk: 0, name: "Bo Diddley Say Man", code: "cCtbet8Kg48"},
    {wk: 0, name: "Pigmeat Markham Here Comes the Judge", code: "DvMBxlu62c0"},
    {wk: 0, name: "Last Poets When the Revolution Comes", code: "8M5W_3T2Ye4"},
    {wk: 0, name: "Lightnin Rod Sport", code: "itzy_oKniZc"}
  ],
  [
    {wk: 1, name: "Dr Alimantando Best Dressed Chicken in Town", code: "vu97ctxg8hk"},
    {wk: 1, name: "Eddie Kendricks Keep on Truckin", code: "wKTbcoLs5yk"},
    {wk: 1, name: "Sequence + Spoonie Gee 'Monster Jam'", code: "JefH2GF9B2A"},
    {wk: 1, name: "Sugarhill Gang 'Rappers Delight'", code: "rKTUAESacQM"},
    {wk: 1, name: 'Spoonie Gee "Spoonin Rap"', code: "GtP8yVIrsjE"},
    {wk: 1, name: 'Spoonie Gee/Treacherous Three "New Rap Language"', code: "IydP1lUzFWQ"},
    {wk: 1, name: 'Afrika Bambaataa "Planet Rock"', code: "Wg2SW1oqSAk"}
  ],
  [
    {wk: 2, name: `Run DMC "It's Like That"`, code: "_hN1SKVx31s"},
    {wk: 2, name: `Run DMC "Rock Box"`, code: "GND7sPNwWko"},
    {wk: 2, name: `UTFO "Roxanne Roxanne"`, code: "4KpngczmD7Q"},
    {wk: 2, name: `Roxanne Shante "Roxanne's Revenge"`, code: "J9IFs13w_JQ"},
    {wk: 2, name: `LL Cool J "Can't Live Without My Radio"`, code: "qqw2uby0dzc"},
    {wk: 2, name: `Eric B and Rakim "Paid In Full"`, code: "b6aAFkP0BGU"},
    {wk: 2, name: `Eric B and Rakim "Follow the Leader"`, code: "95gP3m-uBHA"},
    {wk: 2, name: `A Tribe Called Quest "Bonita Applebum"`, code: "HU_4pf8BSQw"},
    {wk: 2, name: `Jungle Brothers "Straight Out the Jungle"`, code: "K0wVNPWWZIw"},
    {wk: 2, name: `Queen Latifah/Monie Love "Ladies First"`, code: "8Qimg_q7LbQ"},
    {wk: 2, name: `Beastie Boys "Hey Ladies"`, code: "Naf5uJYGoiU"}
  ],
  [
    {wk: 3, name: `BDP "9mm Goes Bang"`, code: "fcYY6xwwfCE"},
    {wk: 3, name: `BDP "My Philosopy"`, code: "h1vKOchATXs"},
    {wk: 3, name: `Schoolly D "P.S.K."`, code: "fQc4A-XBzBY"},
    {wk: 3, name: `Public Enemy "Don't Believe the Hype"`, code: "9vQaVIoEjOM"},
    {wk: 3, name: `Brand Nubian "Wake Up"`, code: "S5spKWJ9i2Q"},
    {wk: 3, name: `X Clan "Heed the Word of the Brother"`, code: "S5spKWJ9i2Q"},
    {wk: 3, name: `Eazy E "Boyz n the Hood"`, code: "uher29ZmwaY"},
    {wk: 3, name: `NWA "Straight Outta Compton"`, code: "TMZi25Pq3T8"},
    {wk: 3, name: `NWA "Fuck the Police"`, code: "9jOqOlETcRU"},
    {wk: 3, name: `Dr Dre (feat. Snoop Dogg) "Deep Cover"`, code: "SXr6aUFP8U"},
    {wk: 3, name: `DJ Quik "Jus Lyke Compton"`, code: "LaCyV8eiRm8"},
    {wk: 3, name: `Geto Boys "Mind Playin Tricks on Me"`, code: "IJtHdkyo0hc"},
  ],
  [
    {wk: 4, name: `2 Live Crew "Me So Horny"`, code: "u6VTj7LhCtE"},
    {wk: 4, name: `2 Live Crew "Pretty Woman"`, code: "65GQ70Rf_8Y"},
    {wk: 4, name: `Ice Cube "Amerikkka's Most Wanted"`, code: "V9pT3Kg_ED4"},
    {wk: 4, name: `Ice Cube "Once Upon A Time in the Projects"`, code: "ggzVm6lkIt4"},
    {wk: 4, name: `Ice Cube "Black Korea"`, code: "iFwA0UwnuS8"},
    {wk: 4, name: `Snoop Dogg "Gin and Juice"`, code: "OKGJOtRaqMg"}
  ],
  [
    {wk: 5, name: `Wu Tang Clan "Can It All Be So Simple Then"`, code: "7m148vZDwJA"},
    {wk: 5, name: `Old Dirty Bastard "Shimmy Shimmy Ya"`, code: "h2zgB93KANE"},
    {wk: 5, name: `GZA "Liquid Swords"`, code: "ZiQoVv0FSKQ"},
    {wk: 5, name: `Pete Rock and CL Smooth "T.R.O.Y."`, code: "FiOcVWQY2bc"},
    {wk: 5, name: `Freestyle Fellowship "Inner City Boundaries"`, code: "r6zH6uMyU9c"},
    {wk: 5, name: `Souls of Mischief "93 'til inifinity"`, code: "wPsA3TsK1Uk"},
    {wk: 5, name: `Pharcyde "Runnin'"`, code: "jQ-RrGCSa2M"},
    {wk: 5, name: `Tupac "Keep Ya Head Up"`, code: "OedT8rSE_S0"},
    {wk: 5, name: `Nas "NY State of Mind"`, code: "hI8A14Qcv68"},
    {wk: 5, name: `Notorious B.I.G. "Juicy"`, code: "_JZom_gVfuw"},
    {wk: 5, name: `Notorious B.I.G. "10 Crack Commandments"`, code: "ZYb_8MM1tGQ"},
    {wk: 5, name: `Mary J Blige/Method Man "You're All I Need"`, code: "pqbpZvtIQZ0"},
    {wk: 5, name: `Lil Kim "Queen Bitch"`, code: "5clkFgVhmj4"},
    {wk: 5, name: `Mobb Deep "Shook Ones pt 2"`, code: "yoYZf-lBF_U"},
    {wk: 5, name: `Lauryn Hill "Doo Wop (That Thing)"`, code: "T6QKqFPRZSA"}
  ],
  [
    {wk: 6, name: `Master P "Make Em Say Unnhhh"`, code: "d5ZvzIOO6aU"},
    {wk: 6, name: `Mystikal "Danger"`, code: "ZHrV51GOPkE"},
    {wk: 6, name: `Juvenile "Ha"`, code: "Ww9VlmXKYgs"},
    {wk: 6, name: `BG "Bling Bling"`, code: "2FnRnKHS5ds"},
    {wk: 6, name: `8 Ball & MJG "Comin Out Hard"`, code: "LVH9um7lXhc"},
    {wk: 6, name: `DJ Screw "Swang Down" (w/ Fat Pat)`, code: "PWlwzXuK168"},
    {wk: 6, name: `UGK "Diamonds and Wood"`, code: "uijHb5U1pD8"},
    {wk: 6, name: `Paul Wall "Sittin Sidewayz"`, code: "SfPLcQhXpCc"},
    {wk: 6, name: `David Banner "Cadillacs on 22s"`, code: "U61JP4KkFKc"},
    {wk: 6, name: `Goodie Mob "Cell Therapy"`, code: "OGy4bmG5SJw"},
    {wk: 6, name: `Outkast "Elevators"`, code: "uqB_UVlhlPA"},
    {wk: 6, name: `Outkast "SpottieOttieDopaliscious"`, code: "vXmqauitBkM"},
    {wk: 6, name: `Ludacris "Southern Hospitality"`, code: "2QWQVm9J5DM"},
    {wk: 6, name: `Trick Daddy "Shut Up"`, code: "DUofIhtJfiI"},
    {wk: 6, name: `3-6 Mafia Tear Da Club Up`, code: "y3hUIA_hop4"}
  ],
  [
    {wk: 7, name: `Mase "Feel So Good"`, code: "pMCxBlfNkt8"},
    {wk: 7, name: `Jay Z "Jigga What Jigga Who"`, code: "frIA7tuBqqY"},
    {wk: 7, name: `Clipse "Grindin"`, code: "TjWAWcx4xdE"},
    {wk: 7, name: `Eminem "Stan"`, code: "gOMhN-hfMtY"},
    {wk: 7, name: `Eminem "The Way I Am"`, code: "mQvteoFiMlg"},
    {wk: 7, name: `Terror Squad "Lean Back"`, code: "ajmI1P3r1w4"},
    {wk: 7, name: `Punjabi Mc/Jay Z "Beware the Boyz"`, code: "wke0-lj2wzw"},
    {wk: 7, name: `Missy "Get Ur Freak On"`, code: "FPoKiGQzbSQ"},
    {wk: 7, name: `Jay Z "Big Pimpin"`, code: "Cgoqrgc_0cM"},
    {wk: 7, name: `Young Jeezy Go Crazy (w/ Jay-Z)`, code: "eAE5KhQQzd4"}
  ],
  [
    {wk: 8, name: `E40 Tell Me When To Go`, code: "2GZbaXdK8Js"},
    {wk: 8, name: `Rick Ross w/ Styles P BMF`, code: "n2MVzP4MaJ0"},
    {wk: 8, name: `Waka Flocka Hard In Da Paint`, code: "7D7zdMf0Jes"},
    {wk: 8, name: `A$AP Rocky Peso`, code: "ob3ktDxAjWI"},
    {wk: 8, name: `Drake Marvin’s Room`, code: "nwyjxsOYnys"},
    {wk: 8, name: `Chief Keef Don’t Like`, code: "6g5ZF6DUrHI"},
    {wk: 8, name: `L3if Wut`, code: "Nrnq4SZ0luc"},
    {wk: 8, name: `Earl Sweatshirt "Grief"`, code: "tZ5Mu2gs-M8"},
    {wk: 8, name: `Kanye West Monster`, code: "pmEk0ZMhva4"},
    {wk: 8, name: `Kendrick Lamar "The Blacker the Berry"`, code: "fLG10604Cig"},
    {wk: 8, name: `Future "March Madness"`, code: "_FH7IC-AK-s"},
    {wk: 8, name: `Sage the Gemini "Gas Pedal"`, code: "X8LUd51IuiA"},
    {wk: 8, name: `Vince Staples "Senorita"`, code: "5OAYMMod9Wo"},
    {wk: 8, name: `Kendrick Lamar "Fear"`, code: "hT-jY8kHTl0"},
    {wk: 8, name: `Rich Gang "Lifestyle"`, code: "nGt_JGHYEO4"},
    {wk: 8, name: `Migos T Shirt`, code: "1VUa99-tJqs"},
    {wk: 8, name: `Drake One Dance`, code: "vcer12OFU2g"}
  ]
];
var all = [].concat(...music);

var song;
var audio;
var f;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // eslint-disable-line no-param-reassign
    }
}

function reset_vals() {
  setFormListener();
  /*let week = Math.floor(Math.random() * music.length);
  let week_music = [...music[week]];
  shuffleArray(week_music)
  let shuff = week_music.slice(0, 4);
  song = shuff[Math.floor(Math.random() * 4)];*/
  song = all[Math.floor(Math.random() * all.length)];
  let week = song.wk;
  let week_ops = [...music[week]];
  let fil = week_ops.filter( s => s.name !== song.name)
  shuffleArray(fil);
  let shuff = fil.slice(0, 3);
  shuff.push(song);
  shuffleArray(shuff);
  audio = new Audio('songs/' + song.code + ".webm");
  audio.onloadedmetadata = function() {
    let dur = audio.duration;
    let rt = Math.floor( Math.random() * (dur - 30) );
    console.log(rt);
    audio.currentTime = rt;
    audio.play();
    let options = [];
    var objDiv = document.getElementById("radioDiv");
    objDiv.innerHTML = "";
    for (i = 0; i < 4; i++) {
      let item = document.createElement("input");
      item.type = "radio";
      item.name = "radioGrp";
      item.id = "rad" + i;
      item.value = shuff[i].code;
      let text_node = document.createTextNode(shuff[i].name);
      let text_label = document.createElement("label");
      text_label.htmlFor = item.id;
      text_label.appendChild(item);
      text_label.appendChild(text_node);
      options.push(text_label)
    }
    options.forEach(op => {
      objDiv.appendChild(op)
      objDiv.appendChild(document.createElement("br"));
    });
  };
}

window.onload = reset_vals;


function setFormListener() {
  if(f) return;
  f = document.forms[0];
  f.addEventListener("submit", function(e) {
    audio.pause();
    audio.currentTime = 0;
    for (var i = 0; i < f.elements.length; i++) {
      if (f.elements[i].checked) {
        if (f.elements[i].value == song.code) {
          alert("Right!");
        } else {
          alert("Wrong! "+ song.name + " is the song.");
        }
      }
    }
    reset_vals();
    e.preventDefault();

  });
}
