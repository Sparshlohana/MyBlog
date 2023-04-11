import BlogContent from "../../../models/blogContent";

export default async function handler(req, res) {
    const data = req.body;
    console.log(req.body);
    try {
        if (data) {
            const postBlogContent = await BlogContent.create({
                title: data.title,
                content: data.content,
                userName: data.name,
                userImageUrl: data.image,
                userEmail: data.email
            })

            await postBlogContent.save();
            res.status(200).json({ message: "success" });
        }
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ error: error.message });
    }
}