"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://riko10055:thki1218@cluster0.fpigoec.mongodb.net/nestApplication?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
async function run() {
    try {
        await client.connect();
        await client.db("nestApplication").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    }
    finally {
        await client.close();
    }
}
exports.run = run;
//# sourceMappingURL=database.connection.js.map