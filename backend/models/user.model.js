import mongoose from 'mongoose';

const userSchema = new mongoose.Schema ({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
}, {
    timestamps: true //createdAt, updatedAt
});

const User = mongoose.model('User', userSchema);

export default User;