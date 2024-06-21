const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema(
    {
        date: {
            required: true,
            type : String
        },
        news: {
            required: true,
            type : String
        }
    },
        {
            timestamps: true
        }
);  

const newstable = new mongoose.model("latestnews",newsSchema);
module.exports = newstable;