import mongoose from 'mongoose';

const Schema = mongoose.Schema, 
    ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    _id: {type: ObjectId, required: true},
    UserName: {type: String, required: true},
    Password: {type: String, required: true}
})

export default UserSchema;
