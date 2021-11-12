const cheerio = require('cheerio')
const axios = require('axios')
const express = require('express')
const app = express()
const port = 3000
var coins= []

async function getPriceFeed(){
  try{
    const data = await axios.get("https://coinmarketcap.com/")
    const $  = cheerio.load(data.data)
    const lement = '#__next > div.bywovg-1.sXmSU > div.main-content > div.sc-57oli2-0.comDep.cmc-body-wrapper > div > div:nth-child(1) > div.h7vnx2-1.bFzXgL > table > tbody > tr'
   
    $(lement).each((parentIndex,parent)=>{
     var indexd = parentIndex+1
     indexd = indexd.toString()
     
       console.log("name: ",$(`#__next > div.bywovg-1.sXmSU > div.main-content > div.sc-57oli2-0.comDep.cmc-body-wrapper > div > div:nth-child(1) > div.h7vnx2-1.bFzXgL > table > tbody > tr:nth-child(${indexd}) > td:nth-child(3)`).text()) 
        console.log("price: ",$(`#__next > div.bywovg-1.sXmSU > div.main-content > div.sc-57oli2-0.comDep.cmc-body-wrapper > div > div:nth-child(1) > div.h7vnx2-1.bFzXgL > table > tbody > tr:nth-child(${indexd}) > td:nth-child(4)`).text())
     var obj ={
       name: $(`#__next > div.bywovg-1.sXmSU > div.main-content > div.sc-57oli2-0.comDep.cmc-body-wrapper > div > div:nth-child(1) > div.h7vnx2-1.bFzXgL > table > tbody > tr:nth-child(${indexd}) > td:nth-child(3)`).text(),
       price:$(`#__next > div.bywovg-1.sXmSU > div.main-content > div.sc-57oli2-0.comDep.cmc-body-wrapper > div > div:nth-child(1) > div.h7vnx2-1.bFzXgL > table > tbody > tr:nth-child(${indexd}) > td:nth-child(4)`).text()
     }
     coins.push(obj)
    
    })
  }catch(e){
    console.error(e)
  }
}
getPriceFeed()

app.get('/coins', (req, res) => {
  res.send(coins)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


