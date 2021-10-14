const SLEEP_TIME_SEC=60;
const plants=[{id: '6138fb5795f543000f9e8344', name: 'mama'},
              {id: '6138fb9b95f543000f9e89b6', name: 'retoño 1'},
              {id: '613a1491fe3bc0000dc46606', name: 'retoño 2'},
              {id: '613a1495ac1f8f000eb5a985', name: 'retoño 3'},
              {id: '613a1636b34808000d4ffeeb', name: 'retoño 4'},
              {id: '613a1638fe3bc0000dc48b1a', name: 'retoño 5'}];




const notifier = require("./notifier/crow/notifierCrow");

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

async function main () {
    while(1) {
        console.log(); // prints new line
        
        let date_ob = new Date();

        let date = ("0" + date_ob.getDate()).slice(-2); // adjust 0 before single digit date
        let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
        let year = date_ob.getFullYear();
        let hours = date_ob.getHours();
        let minutes = date_ob.getMinutes();
        let seconds = date_ob.getSeconds();

        // prints date & time in YYYY-MM-DD HH:MM:SS format
        console.log(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);

        plants.forEach(plant => {
            notifier.crow(plant);
        });
        
        await sleep(SLEEP_TIME_SEC*1000);
    }
}

main();