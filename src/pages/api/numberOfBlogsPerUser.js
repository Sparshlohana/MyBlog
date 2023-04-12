import BlogContent from "../../../models/blogContent";

export default async function handler(req, res) {
    try {

        const email = req?.query?.email;
        const data = await BlogContent.find({ userEmail: email }).lean()
        const count = data.length;
        res.json({
            count,
            data
        });
    } catch (error) {
        console.log(error);
    }
}