const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        email: {
            required: true,
            type: String,
            unique: true,
            trim: true,
            lowercase: true,
            match: [/.+\@.+\..+/, 'Please fill a valid email address']
        },
        otp: { type: String },
        otpExpires: { type: Date }
    },
    {
        timestamps: true
    }
);

const User = mongoose.model('otp', userSchema);
module.exports = User;