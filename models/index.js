import mongoose from 'mongoose';

const db = {};
db.mongoose = mongoose;
db.url = `mongodb+srv://${'fmuller'}:${'001732'}@igti.mrjoc.gcp.mongodb.net/grades?retryWrites=true&w=majority`

export { db };
