import { NextApiRequest, NextApiResponse } from "next";

import formidable from "formidable";
import cloudinary from "cloudinary";


cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  export const config = {
    api: {
      bodyParser: false, // Disabling Next.js's body parser
    },
  };

// POST /api/uploads
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  try{

  const form = new formidable.IncomingForm();

  form.parse(req, async (err, fields, files) => {
    let videoPath: File | File[] | any;

    if (Array.isArray(files.video)) {
      // If it's an array, take the path of the first file
      videoPath = files.video[0].filepath;
    } else {
      // If it's not an array, take the path directly
      videoPath = files.video.filepath;
    }
    const response = await cloudinary.v2.uploader.upload(videoPath, {
    resource_type: "video",
    });
    const url = response.secure_url;    

    return res.status(200).json({ url });
  });
} catch (error) {
    res.status(500).json({ error: "Error uploading video to Cloudinary" });
  }
  }
