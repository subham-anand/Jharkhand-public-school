import mongoose from 'mongoose';

interface IAdmin {
  email: string;
  role: 'super_admin' | 'admin' | 'moderator';
  isActive: boolean;
  lastLogin?: Date;
  permissions: string[];
  otp?: {
    code: string;
    expiresAt: Date;
    attempts: number;
  };
  createdBy?: mongoose.Types.ObjectId;
}

interface IAdminMethods {
  generateOTP(): string;
  verifyOTP(inputOTP: string): boolean;
  getPermissions(): string[];
}

type AdminModel = mongoose.Model<IAdmin, Record<string, never>, IAdminMethods>;

const adminSchema = new mongoose.Schema<IAdmin, AdminModel, IAdminMethods>({
  email: { 
    type: String, 
    required: true, 
    unique: true,
    lowercase: true,
    trim: true
  },
  role: { 
    type: String, 
    enum: ['super_admin', 'admin', 'moderator'], 
    default: 'admin' 
  },
  isActive: { 
    type: Boolean, 
    default: true 
  },
  lastLogin: { 
    type: Date 
  },
  permissions: [{
    type: String,
    enum: ['admissions', 'content', 'testimonials', 'gallery', 'users', 'settings']
  }],
  // OTP fields for email authentication
  otp: {
    code: String,
    expiresAt: Date,
    attempts: { type: Number, default: 0 }
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Admin'
  }
}, { 
  timestamps: true 
});

// Generate OTP method
adminSchema.methods.generateOTP = function(): string {
  const otp = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
  this.otp = {
    code: otp,
    expiresAt: new Date(Date.now() + 10 * 60 * 1000), // 10 minutes
    attempts: 0
  };
  return otp;
};

// Verify OTP method
adminSchema.methods.verifyOTP = function(inputOTP: string): boolean {
  if (!this.otp || !this.otp.code) return false;
  if (new Date() > this.otp.expiresAt) return false;
  if (this.otp.attempts >= 3) return false;
  
  this.otp.attempts += 1;
  
  if (this.otp.code === inputOTP) {
    this.otp = undefined; // Clear OTP after successful verification
    return true;
  }
  
  return false;
};

// Get admin permissions
adminSchema.methods.getPermissions = function(): string[] {
  if (this.role === 'super_admin') {
    return ['admissions', 'content', 'testimonials', 'gallery', 'users', 'settings'];
  }
  return this.permissions || [];
};

// Clean JSON output
adminSchema.methods.toJSON = function() {
  const adminObject = this.toObject();
  delete adminObject.otp; // Don't expose OTP in JSON
  return adminObject;
};

export const Admin = mongoose.models.Admin || mongoose.model<IAdmin, AdminModel>('Admin', adminSchema);
export type AdminDocument = mongoose.Document<unknown, Record<string, never>, IAdmin> & IAdmin & IAdminMethods;
