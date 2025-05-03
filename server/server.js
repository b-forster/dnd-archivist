import express from "express";
import cors from "cors";
import { config } from 'dotenv';
import characterRoutes from "./routes/character.js";

const app = express();
config({ path: './config.env' });

const port = process.env.PORT || 4000;
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));
app.use(characterRoutes);


app.listen(port, async () => {
    console.log(`Server is running on port: ${port}`);
});
