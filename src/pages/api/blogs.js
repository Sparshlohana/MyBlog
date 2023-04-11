import BlogContent from "../../../models/blogContent";
// import * as fs from "fs";


export default async function handler(req, res) {
    try {
        const getBlogContent = await BlogContent.find();
        console.log(getBlogContent);
        res.json(getBlogContent)
    } catch (error) {
        console.log(error);
    }
    // try {
    //     const dirName = await fs.promises.readdir("blogData")
    //     let jsonData = [];
    //     await Promise.all(
    //         dirName.map(async (item) => {
    //             const allData = await fs.promises.readFile(("blogData/" + item), 'utf8')
    //             jsonData.push(JSON.parse(allData))
    //         })
    //     )
    //     res.status(200).json(jsonData);
    // } catch (error) {
    //     console.log(error);
    // }

}