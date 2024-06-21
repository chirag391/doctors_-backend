const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: {
            required: true,
            type: String,
        },
        email: {
            required: true,
            type: String,
            unique: true,
            trim: true,
            lowercase: true,
            match: [/.+\@.+\..+/, 'Please fill a valid email address']
        },
        password: {
            required: true,
            type: String,
        },
        role: {
            required: true,
            type: String,
            enum: ['admin', 'patient', 'doctor']
        },
        phone: {
            type: Number,
            validate: {
                validator: function(v) {
                    return /\d{10}/.test(v);
                },
                message: props =>` ${props.value} is not a valid 10 digit phone number!`
            }
        },
        gender: {
            type: String,
            enum: ['male', 'female', 'other']
        },
        dob: {
            type: String
        },
        marital_status: {
            type: String,
            enum: ['single', 'married']
        },
        qualification: {
            type: String
        },
        work_experience: {
            type: String
        },
        specialization: {
            type: String
        },
        adhar_no: {
            type: Number,
            // unique: true,
            // validate: {
            //     validator: function(v) {
            //         return /\d{12}/.test(v);
            //     },
            //     message: props => `${props.value} is not a valid 12 digit Aadhar number!`
            // }
        },
        father_name: {
            type: String
        },
        mother_name: {
            type: String
        },
        approval: {
            type: Number,
            default: 0,
        },
        profile_image: {
            type: String
        },
        fee_per_consultation: {
            type: Number,
            default: 0
        },
        otp: { type: String },
        otpExpires: { type: Date }
    },
    {
        timestamps: true
    }
);

const User = mongoose.model('User', userSchema);
module.exports = User;