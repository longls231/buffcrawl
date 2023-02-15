const { CONST } = require("./const");

const fs = require("fs");
const axios = require("axios");

const timeout = () => {
  return new Promise(resolve => setTimeout(resolve, 2000));
}

const getInstantData = async () => {
  let instantData = [];
  try {
    const response = await axios.get(`https://csgoempire.com/api/v2/trading/items?per_page=1000&page=1&price_max_above=99&delivery_time_long_max=720&sort=desc&order=market_value`, CONST.EMPIRE.HEADERS);
    if (response.status === 200) {
      instantData = [...instantData, ...response.data.data];
      let total_page = response.data.last_page;
      for (let i = 1; i < total_page; i++) {
        const responseSubPage = await axios.get(`https://csgoempire.com/api/v2/trading/items?per_page=1000&page=1&price_max_above=99&delivery_time_long_max=720&sort=desc&order=market_value`, CONST.EMPIRE.HEADERS);
        if (responseSubPage.status === 200) {
          instantData = [...instantData, ...response.data.data];
          console.log(instantData.length);
        } else {
          throw new Error("Cannot fetch data");
        }
        await timeout();
      }
    }
  } catch (err) {
    console.log(err);
  }

  fs.writeFileSync(CONST.EMPIRE.DB_FILE, JSON.stringify(instantData));
  console.log("--- Data saved ---");

};


const main = async () => {
  getInstantData();
};

main();