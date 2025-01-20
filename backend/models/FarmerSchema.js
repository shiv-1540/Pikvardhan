const mongoose = require('mongoose');

const farmerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username:{
    type: String,
    unique:true,
    required:true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePicture: {
    publicId: {
      type: String,
      default:"",
      required: false,
    },
    url: {
      type: String,
     required: false,
     default:""
    },
  },
  phone: {
    type: String,
    required: false,
  },
  location: {
    type: String,
    required: false,
  },
  groups: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Group', // Reference to the Group schema
    },
  ],
}, { timestamps: true });

module.exports = mongoose.model('Farmer', farmerSchema);
