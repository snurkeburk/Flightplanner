const puppeteer = require('puppeteer');



async function scrapeProduct(url) {
const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto(url);

const [el] = await page.$x('//*[@id="main"]/div[6]/div[5]/b');
const txt = await el.getProperty('textContent');
const qnh = await txt.jsonValue();

const [el2] = await page.$x('//*[@id="main"]/div[6]/div[3]/b');
const txt2 = await el2.getProperty('textContent');
const temp = await txt2.jsonValue();

const [el3] = await page.$x('//*[@id="main"]/div[7]/h2');
const txt3 = await el3.getProperty('textContent');
const tid = await txt3.jsonValue();

const [el4] = await page.$x('//*[@id="main"]/div[6]/p[3]');
const txt4 = await el4.getProperty('textContent');
const metar = await txt4.jsonValue();

console.log({qnh, temp, tid, metar});

browser.close();
const data = { temp: temp };

fetch('https://example.com/profile', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});

}
scrapeProduct('https://sv.allmetsat.com/metar-taf/europa.php?icao=ESSA');


