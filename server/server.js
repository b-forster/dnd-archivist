import express from "express";
import cors from "cors";
import { config } from 'dotenv';
import characterRoutes from "./routes/character.js";

const app = express();
config({ path: './config.env' });

const port = process.env.PORT || 4000;
// Configure CORS
const corsOptions = {
    origin: process.env.NODE_ENV === 'production'
        ? ['https://dnd-archivist.vercel.app', 'https://dnd-archivist-git-main.vercel.app']
        : 'http://localhost:3000',
    credentials: true
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));
app.use(characterRoutes);


app.listen(port, async () => {
    console.log(`Server is running on port: ${port}`);
});
