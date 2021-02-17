import app from "./app.js";

const PORT = 4000;

const handleListening = () => console.log(`Linstning localhost:${PORT}`);

app.listen(PORT, handleListening);