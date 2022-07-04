import mongoose from 'mongoose'

/* PetSchema will correspond to a collection in your MongoDB database. */
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please provide a name for this user.'],
        maxlength: [60, 'Name cannot be more than 60 characters'],
    },
    salt: {
        type: String
    },
    hash: {
        type: String
    },
    createdAt: {
        type: Date
    }
})

export default mongoose.models.User || mongoose.model('User', UserSchema)