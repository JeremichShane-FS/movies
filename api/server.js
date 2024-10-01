import connectDB from "./app/db/config.js";
import app from "./app/index.js";

import { RESPONSE_MESSAGES as rm } from "./app/constants/responseMessages.js";

const PORT = process.env.PORT || 4000;

connectDB();

app.listen(PORT, () => {
  console.log(rm.SERVER_RUNNING(PORT));
});
