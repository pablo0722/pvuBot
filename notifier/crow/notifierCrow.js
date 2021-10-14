/* install:
npm i request-promise
npm i cheerio
npm i node-notifier
npm i play-sound

Linux:
sudo apt install mplayer

tw-absolute land-crow
scrape example:
https://www.npmjs.com/package/scrape-it
*/





const CROW_TITLE='Plants vs Undead';
const CROW_MSG1=`¡¡¡ `;
const CROW_MSG2=` TIENE CUERVOS !!!`;
const CROW_IMG='crow.png';
const CROW_SOUND='crow.mp3';





const fetch = require('cross-fetch');
const notifier = require('node-notifier');
const path = require('path');
const player = require('play-sound')();

NOTIF_OPTIONS={
    title: CROW_TITLE,
    icon: path.join(__dirname, CROW_IMG),
    };

async function getData (url = '') {
    // Opciones por defecto estan marcadas con un *
    const response = await fetch (url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        //mode: 'no-cors', // no-cors, *cors, same-origin
        //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //credentials: 'omit', // include, *same-origin, omit
    })
    .catch (function (text) {
        console.log ('ERROR en Get():');
        console.log (text);
    });
    return response.text (); // parses JSON response into native JavaScript objects
}

async function crow(plant) {
    url=`https://marketplace.plantvsundead.com/offering/bundle#/farm/${plant.id}`;

/*
        const crow = $('.land-crow').text();
        const plant = $('div.plant-attr-number > span').text();
    */
        
    getData (url)
    .then (data => {
        console.log (data.includes('plant-attr-number'));
    });
/*
    const scrapeResult = await scrapeIt(, {
        hasCrow: {
            selector: '.land-crow'
          , attr: "class"
        },
        water: {
            selector: 'div.plant-attr-number'
        }
    });*/

    //scrapeResult.data.id=plant.id;
    /*
    scrapeResult.data.name=plant.name;

    console.log(scrapeResult.data);

    if(scrapeResult.data.hasCrow!=='') {
        NOTIF_OPTIONS.message=CROW_MSG1+scrapeResult.data.name+CROW_MSG2;
        notifier.notify(NOTIF_OPTIONS);
        player.play(CROW_SOUND);
    }
    */
}

module.exports={
    crow: crow
}