const { CONST } = require('./const');
const axios = require('axios');
const fs = require('fs');

const log = (message) => {
    console.info(`--- ${message} ---`);
}

const timeout = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const fillItemsPrice = async () => {
    var _item = [];
    log('Filled Item Price');
    try {
        const response = await axios.get(`${CONST.BUFF.API.CSGO}&page_num=1&_=${new Date().getTime()}`, CONST.BUFF.HEADERS);
        if (response.status === 200 && response.data.code === 'OK') {
            const { items, total_page } = response.data.data;
            _item = [..._item, ...items];
            log(_item.length);
            const responseSubPage = await axios.get(`${CONST.BUFF.API.CSGO}&page_num=${i + 1}&_=${new Date().getTime()}`, CONST.BUFF.HEADERS);
            if (responseSubPage.status === 200 && responseSubPage.data.code === 'OK') {
                _item = [..._item, ...responseSubPage.data.data.items];
                log(_item.length);
            } else {
                throw new Error("Cannot fetch data");
            }
            await timeout(3000);

        }

        fs.writeFileSync(CONST.BUFF.DB_FILE, JSON.stringify(_item));
    } catch (err) {
        console.log(err);
    }
}

fillItemsPrice();