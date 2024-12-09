const mongoose = require('mongoose');

const { Schema } = mongoose;

const refreshTokenSchema = Schema({
//     token: {type: String, required: true},
//     userId: {type: mongoose.SchemaTypes.ObjectId, ref: 'User'}
// userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
// token: { type: String, required: true },
// createdAt: { type: Date, default: Date.now, expires: '7d' },
// },
// {timestamps: true}
token: {type: String, required: true},
userId: {type: mongoose.SchemaTypes.ObjectId, ref: 'User'}
},
{timestamps: true}

);

module.exports = mongoose.model('RefreshToken', refreshTokenSchema, 'tokens');