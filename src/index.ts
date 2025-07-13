import Express from "express";
import router from "./routes/api";

const app = Express();

const PORT = 3000;

app.use('/api', router); // ini middleware untuk mengakses route API


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// http://localhost:3000/api/dummy