import express from "express";
import {auth} from "../middleware/auth.js"
import { generateArticle, generateBlogTitle, generateImage, removeImageBackground, resumeReview } from "../controllers/aiController.js";
import { upload } from "../configs/multer.js";

const aiRouter=express.Router();

aiRouter.post('/generate-article',auth,generateArticle)
aiRouter.post('/generate-blog-title',auth,generateBlogTitle)
aiRouter.post('/generate-image',auth,generateImage)
aiRouter.post('/remove-image-background',upload.single('image'),auth,removeImageBackground)
aiRouter.post('/resume-review',upload.single('resume'),auth,resumeReview)

export default aiRouter;