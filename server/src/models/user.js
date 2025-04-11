import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import validator from 'validator';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters'],
      maxlength: [50, 'Name must be less than 50 characters'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      index: true,
      trim: true,
      lowercase: true,
      validate: {
        validator: (value) => validator.isEmail(value),
        message: 'Invalid email format',
      },
    },
    mobile: {
      type: String,
      required: [true, 'Mobile number is required'],
      unique: true,
      index: true,
      trim: true,
      validate: {
        validator: (value) => /^\+[1-9]\d{1,14}$/.test(value),
        message:
          'Mobile number must be in international format (e.g., +8801234567)',
      },
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [8, 'Password must be at least 8 characters'],
      validate: {
        validator: function (value) {
          // Password should contain at least one uppercase, one lowercase, one number, and one special character
          const hasUppercase = /[A-Z]/.test(value);
          const hasLowercase = /[a-z]/.test(value);
          const hasNumber = /[0-9]/.test(value);
          const hasSpecial = /[^A-Za-z0-9]/.test(value);
          return hasUppercase && hasLowercase && hasNumber && hasSpecial;
        },
        message:
          'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
      },
    },
    role: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Role',
    },
    deleted: {
      type: Boolean,
      default: false,
    },
    deletedAt: Date,
  },
  {
    timestamps: true,
  }
);

// Hash password before saving
userSchema.pre('save', async function (next) {
  // Only hash the password if it has been modified (or is new)
  if (!this.isModified('password')) return next();

  try {
    // Generate a salt
    const salt = await bcrypt.genSalt(10);

    // Hash the password using the salt
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare passwords
userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', userSchema);

export default User;
