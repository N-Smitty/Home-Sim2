module.exports = {

    getHouses: async (req, res) => {
        const db = req.app.get('db')
        const getHouses = await db.get_houses()
        console.log(getHouses)
        return res.status(200).send(getHouses)
    },

    addHouse: async(req, res) => {
        const { id } = req.params
        const {name, address, city, state, zip} = req.body
        const db = req.app.get('db')

        const newHouse = await db.add_house({id, name, address, city, state, zip})
            res.status(200).send(newHouse)
    },

    deleteHouse: async (req, res) => {
        const { id } = req.params
        const db = req.app.get('db')

        const updatedHomes = await db.delete_house(id)
            res.status(200).send(updatedHomes)
    }
}