const { Users } = require("../db/models");

async function createNewUser(name, password){
    const user = await Users.create({
        name,
        password
    })
    return user
}

async function checkIfUserExists(name, password){
    const user  = await Users.findOne({
        where: {
        name : name,    
        password : password
    }
    })
    if(user){
        return user.dataValues
    }
    else{
        return -1;
    }
}

async function tasks(){
        console.log(await checkIfUserExists(
            "aman",
            "a1"
        )
        )
}

tasks();

module.exports = {
    createNewUser,
    checkIfUserExists
}