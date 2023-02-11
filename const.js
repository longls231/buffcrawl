const path = require('path');


const BUFF_COOKIE = ''; // Cookie của Buff

exports.BUFF_COOKIE = BUFF_COOKIE;

exports.CONST = {
    BUFF: {
        HEADERS: {
            headers: {
                "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "Accept-Encoding": "gzip, deflate, br",
                "Accept-Language": "vi-VN,vi;q=0.9,en-US;q=0.8,en;q=0.7",
                "Cache-Control": "no-cache",
                "Connection": "keep-alive",
                "Cookie": BUFF_COOKIE,
                "Host": "buff.163.com",
                "Pragma": "no-cache",
                "Referer": "https://buff.163.com/market/?game=csgo",
                "Sec-Fetch-Dest": "document",
                "Sec-Fetch-Mode": "navigate",
                "Sec-Fetch-Site": "none",
                "Upgrade-Insecure-Requests": 1,
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) coc_coc_browser/87.0.152 Chrome/81.0.4044.152 Safari/537.36",
                "X-Requested-With": "XMLHttpRequest",
            }
        },
        API: {
            CSGO: 'https://buff.163.com/api/market/goods?game=csgo&page_size=80&sort_by=price.desc'
        },
        DB_FILE: path.resolve(__dirname, 'buffcrawl.json'),
    },
}
