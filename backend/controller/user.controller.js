import Users from "../models/user.schema.js"

const UserController = {
    
    // index
    index: async(req, res) => {
        try{ await Users.find().then(result => res.status(200).json(result)).catch((err) => console.log(err))}
        catch (err) {
            console.log('index function not working :(')
        }
    },


    // show
    show: async(req, res) => {

    }


    // create


    // update score


    // reset score

}

export default UserController