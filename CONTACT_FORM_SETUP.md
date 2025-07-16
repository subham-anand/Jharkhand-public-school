# Contact Form Email Setup Guide

## Overview
The contact form has been configured to send emails to `contact@jpsbarharwa.in` when users submit the form. Here's what you need to do to make it work:

## Setup Steps

### 1. Create Environment Variables File
Create a `.env.local` file in your project root with the following variables:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

### 2. Email Service Configuration

#### For Gmail:
1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"
   - Use this password in `EMAIL_PASS`

#### For Other Email Services:
Update the `service` field in `/app/api/contact/route.ts`:
- Outlook: `service: 'hotmail'`
- Yahoo: `service: 'yahoo'`
- Custom SMTP: Replace with SMTP configuration

### 3. Alternative Email Services

If you prefer not to use Gmail, you can use:

1. **EmailJS** (Frontend-only solution)
2. **SendGrid** (Professional email service)
3. **Resend** (Modern email API)
4. **Nodemailer with custom SMTP**

## Form Features

✅ **Form Validation**: All required fields validated
✅ **Email Format Check**: Validates email addresses
✅ **Loading States**: Shows spinner while sending
✅ **Success/Error Messages**: User feedback
✅ **Form Reset**: Clears form after successful submission
✅ **Professional Email Template**: HTML formatted emails

## Email Template Includes:
- **Professional sender display**: Shows "JPS Contact Form" instead of your email
- **Clear sender identification**: Shows the actual person who sent the message
- **Reply-to functionality**: Click reply to respond directly to the sender
- **Professional formatting**: Beautiful HTML design with school branding
- **All form data**: Name, email, phone, subject, and message
- **Visual indicators**: Emojis and color coding for easy reading

## Testing

1. Set up your environment variables
2. Run the development server: `npm run dev`
3. Navigate to `/contact`
4. Fill out and submit the form
5. Check the inbox at `contact@jpsbarharwa.in`

## Troubleshooting

### Common Issues:
1. **"Authentication failed"**: Check email/password
2. **"Network error"**: Verify SMTP settings
3. **"Failed to send"**: Check environment variables

### Debug Steps:
1. Check console logs in terminal
2. Verify environment variables are loaded
3. Test with a simple email service first
4. Ensure 2FA and app password are set up correctly

## Security Notes
- Never commit `.env.local` to version control
- Use app passwords, not your main email password
- Consider rate limiting for production
- Validate all inputs server-side
