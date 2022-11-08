// eslint-disable-next-line @typescript-eslint/no-var-requires
const mongoose = require("mongoose");
const uri = process.env.MONGODB_URI; // your mongodb connection string
const options = {};
mongoose.connect(uri, options);
