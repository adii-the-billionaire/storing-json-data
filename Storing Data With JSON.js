const fs = require('fs')
const ram = {
    god: 'Almighty god of the universe',
    work: 'Peace mind soul'
}
const sitaJSON = JSON.stringify(ram)
console.log(sitaJSON)
const parsedData = JSON.parse(sitaJSON)
console.log(sitaJSON.god)
console.log(sitaJSON.work)
console.log(parsedData.god)
console.log(parsedData.work)
fs.writeFileSync('hanuman-json.json', sitaJSON)
    //now here is the method how to read the file of
const dataBuffer = fs.readFileSync('hanuman-json.json')
const data = dataBuffer.toString()
const sia = JSON.parse(data)
    //now here read the value of
console.log(sia)
sia.god = 'Siya var Ram Chandra ki jai'
sia.word = 'hanuman tehi parsa kar puni kin pranam ram kije bine hoi kha muhi vishram'
const tia = JSON.stringify(sia)
fs.appendFileSync('hanuman-json.json', tia)