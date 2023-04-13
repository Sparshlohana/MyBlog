import mongoose from "mongoose";

const connectMongoose = () => mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("db connection established"))
    .catch((err) => console.log(err))
export default connectMongoose;