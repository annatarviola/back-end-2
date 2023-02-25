// const houses = require('./db.json')
const houses = [
    {
      "id": 1,
      "address": "1600 Pennsylvania Avenue NW",
      "price": 290000,
      "imageURL" : "https://www.washingtonian.com/wp-content/uploads/2020/07/Official-White-House-Photo-by-Andrea-Hanks-1.jpg"
    },
    {
      "id": 2,
      "address": "London SW1A 1AA",
      "price": 454615,
      "imageURL" : "https://cdn.londonandpartners.com/asset/buckingham-palace-buckingham-palace-photographer-andrew-holt-ba2d2924f687e5713154dbf611c103e1.jpg"
    },
    {
      "id": 3,
      "address": "Taj Road",
      "price": 169000,
      "imageURL" : "https://robbreport.com/wp-content/uploads/2013/06/831971.jpg?w=943"
    }
  ]

let globalId = 4

module.exports = {
    getHouses: (req, res) => res.status(200).send(houses),

    deleteHouse: (req, res) => {
        let idValue = +req.params.id 
        for (let i = 0; i < houses.length; i++) {
            if (houses[i].id === idValue) {
                houses.splice(i , 1)
            }
        }
        res.status(200).send(houses)
    },

    // deleteHouse: (req, res) => {
    //     let index = houses.findIndex(elem => elem.id === +req.params.id)
    //     houses.splice(index, 1)
    //     res.status(200).send(houses)
    // },

    createHouse: (req, res) => {

    },

    updateHouse: (req, res) => {

    }
}