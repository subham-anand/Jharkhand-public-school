import nodemailer from 'nodemailer';

export class EmailService {
  private static transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
    // Production settings
    pool: true,
    maxConnections: 10,
    maxMessages: 100,
    rateDelta: 20000,
    rateLimit: 5
  });

  static async sendOTP(email: string, otp: string): Promise<boolean> {
    // Validate environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error('Email configuration missing. Please set EMAIL_USER and EMAIL_PASS environment variables.');
    }

    try {
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Jharkhand Public School - Admin Login OTP',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #3B82F6, #14B8A6); padding: 20px; text-align: center;">
              <h1 style="color: white; margin: 0;">Jharkhand Public School</h1>
              <p style="color: white; margin: 5px 0;">Admin Portal</p>
            </div>
            
            <div style="padding: 30px; background: #f8f9fa;">
              <h2 style="color: #333;">Login Verification Code</h2>
              <p>Your One-Time Password (OTP) for admin login is:</p>
              
              <div style="background: #fff; border: 2px solid #3B82F6; border-radius: 8px; padding: 20px; text-align: center; margin: 20px 0;">
                <h1 style="color: #3B82F6; font-size: 32px; margin: 0; letter-spacing: 8px;">${otp}</h1>
              </div>
              
              <p style="color: #666;">
                <strong>Important:</strong>
                <br>• This OTP is valid for 10 minutes only
                <br>• Do not share this code with anyone
                <br>• You have 3 attempts to enter the correct OTP
              </p>
              
              <div style="background: #fff3cd; border: 1px solid #ffeaa7; border-radius: 4px; padding: 15px; margin-top: 20px;">
                <p style="margin: 0; color: #856404;">
                  <strong>Security Notice:</strong> If you didn't request this login, please ignore this email and ensure your account security.
                </p>
              </div>
            </div>
            
            <div style="background: #333; color: white; padding: 15px; text-align: center; font-size: 12px;">
              <p style="margin: 0;">© 2025 Jharkhand Public School | Barharwa, Sahibganj, Jharkhand</p>
              <p style="margin: 5px 0 0 0;">This is an automated message. Please do not reply.</p>
            </div>
          </div>
        `
      };

      await this.transporter.sendMail(mailOptions);
      return true;
    } catch (error) {
      console.error('Email sending error:', error);
      throw new Error('Failed to send OTP email. Please try again later.');
    }
  }

  static async sendWelcomeEmail(email: string, role: string): Promise<boolean> {
    try {
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Welcome to Jharkhand Public School Admin Portal',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #3B82F6, #14B8A6); padding: 20px; text-align: center;">
              <h1 style="color: white; margin: 0;">Welcome to JPS Admin Portal</h1>
            </div>
            
            <div style="padding: 30px; background: #f8f9fa;">
              <h2 style="color: #333;">Account Created Successfully</h2>
              <p>Your admin account has been created with <strong>${role}</strong> permissions.</p>
              
              <p>You can now login using your email address and OTP verification.</p>
              
              <div style="background: #d4edda; border: 1px solid #c3e6cb; border-radius: 4px; padding: 15px; margin: 20px 0;">
                <p style="margin: 0; color: #155724;">
                  <strong>Next Steps:</strong>
                  <br>1. Visit the admin login page
                  <br>2. Enter your email address
                  <br>3. Check your email for the OTP
                  <br>4. Complete your login
                </p>
              </div>
            </div>
            
            <div style="background: #333; color: white; padding: 15px; text-align: center; font-size: 12px;">
              <p style="margin: 0;">© 2025 Jharkhand Public School | Barharwa, Sahibganj, Jharkhand</p>
              <p style="margin: 5px 0 0 0;">This is an automated message. Please do not reply.</p>
            </div>
          </div>
        `
      };

      await this.transporter.sendMail(mailOptions);
      return true;
    } catch (error) {
      console.error('Welcome email error:', error);
      return false;
    }
  }

  // Test email configuration
  static async testConnection(): Promise<boolean> {
    try {
      await this.transporter.verify();
      return true;
    } catch (error) {
      console.error('Email connection test failed:', error);
      return false;
    }
  }
}
