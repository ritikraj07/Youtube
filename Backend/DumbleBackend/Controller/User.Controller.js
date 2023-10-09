const User = require("../Model/User.Model");


async function createUser({ body }) {
    const user = await User.create(body)
    return user
}


async function updateUser({ id, body }) {
    const user = await User.findByIdAndUpdate(id, body, { new: true })
    return user
}

async function getUserById(id) {
    return await User.findById(id)
}


module.exports = { createUser, updateUser, getUserById }