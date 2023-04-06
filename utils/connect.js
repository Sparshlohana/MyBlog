import mongoose from "mongoose";

const connectMongoose = async () => mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


export default connectMongoose;