// import { Schema, mongoose } from "../utils/connect";
import { Schema, mongoose } from "mongoose";


const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    }
})

// const User = mongoose.model('User', userSchema)

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User