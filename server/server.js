import connectDB from "./app/db/config.js";
import app from "./app/index.js";

const PORT = process.env.PORT || 4000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port: \t ${PORT}`);
});
