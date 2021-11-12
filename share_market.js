const cheerio = require('cheerio')
const axios = require('axios')
const express = require('express')
const app = express()



async function getShare(){
    try{
        const data = await axios.get('https://www.moneycontrol.com/')
        const $ = cheerio.load(data.data)
        // console.log($('#nse-indices > div.container-fluid > div > div > nav > div > div > a.nav-item.nav-link.active > div > p.tb_name').html())
        // console.log($('#nse-indices > div.container-fluid > div > div > nav > div > div > a.nav-item.nav-link.active > div > p.tb_per.greenTxt').text())
        console.log($('#tgNifty > table > tbody > tr:nth-child(1) > td:nth-child(3)').html())
    }catch(e){
        console.log(e)
    }
}

getShare()