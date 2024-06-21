const mongoose = require('mongoose');

const doctorAvalability = new mongoose.Schema({
    doctor_id: {
        type: String,
        required: true
    },
    time_slot: {
        type: Number
    },
    morning: {
        from: {
            type: String
        },
        to: {
            type: String
        },
    },
    afternoon: {
        from: {
            type: String
        },
        to: {
            type: String
        },
    },
    evening: {
        from: {
            type: String
        },
        to: {
            type: String
        },
    }
});

const doctoravailability = new mongoose.model("doctoravailability",doctorAvalability);
module.exports = doctoravailability;