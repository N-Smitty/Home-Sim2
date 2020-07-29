module.exports = {

    getHouses: async (req, res) => {
        const db = req.app.get('db')
        const getHouses = await db.get_houses()
        console.log(getHouses)
        return res.status(200).send(getHouses)
    }
}