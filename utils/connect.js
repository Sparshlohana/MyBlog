import mongoose from 'mongoose'

export default async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            bufferCommands: true,
        })
        console.log('Connected to MongoDB')
    } catch (error) {
        console.error('Error connecting to MongoDB', error)
    }
}
