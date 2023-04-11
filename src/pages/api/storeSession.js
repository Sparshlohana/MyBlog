import User from "../../../models/userInfo";
import connectMongoose from "../../../utils/connect";


export default async function handler(req, res) {
    try {
        const session = req?.body?.user;
        if (session) {
            connectMongoose();

            const existingUser = await User.findOne({ email: session.email });
            if (existingUser) {
                res.status(409).json({ error: "User already exists" });
                console.log("User already exists");
            }
            else {
                const newUser = await new User({
                    name: session.name,
                    email: session.email,
                    image: session.image
                });

                await newUser.save();
                res.status(201).send("User created successfully");
                console.log("User created successfully");
            }

        }

    } catch (error) {
        console.log(error);
    }
}