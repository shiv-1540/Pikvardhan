const adminSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
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
    phone: {
      type: String,
      required: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    handledUsers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Farmer', // Reference to Farmer schema
      },
    ],
    resolvedQueries: [
      {
        farmerId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Farmer', // Reference to Farmer schema
        },
        query: {
          type: String,
          required: true,
        },
        resolution: {
          type: String,
          required: true,
        },
        resolvedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  }, { timestamps: true });
  
  module.exports = mongoose.model('Admin', adminSchema);
  