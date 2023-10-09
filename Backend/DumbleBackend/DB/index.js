const { connect } = require('mongoose')

async function ConnectDatabase() {
    try {
        await connect('mongodb://127.0.0.1:27017/dumble')
        console.log("Database Connected")
    } catch (error) {
        console.log("Error in Backend", error)
    }
}

module.exports = ConnectDatabase

