import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, subject, message } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Create transporter (you'll need to configure this with your email service)
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or your preferred email service
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email password or app password
      },
    })

    // Email content
    const mailOptions = {
      from: `"JPS Contact Form" <${process.env.EMAIL_USER}>`, 
      to: 'contact@jpsbarharwa.in',
      // replyTo: `"${firstName} ${lastName}" <${email}>`,
      subject: `🏫 Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #2563eb 0%, #14b8a6 100%); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">📬 New Contact Form Message</h1>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">Jharkhand Public School Website</p>
          </div>
          
          <!-- Sender Information -->
          <div style="background-color: #f8fafc; padding: 20px; border-left: 4px solid #2563eb; margin: 0;">
            <h3 style="color: #1f2937; margin: 0 0 15px 0; font-size: 18px;">👤 Message From:</h3>
            <div style="background-color: white; padding: 15px; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
              <p style="margin: 8px 0;"><strong style="color: #374151;">Name:</strong> <span style="color: #2563eb; font-weight: 600;">${firstName} ${lastName}</span></p>
              <p style="margin: 8px 0;"><strong style="color: #374151;">Email:</strong> <a href="mailto:${email}" style="color: #ea580c; text-decoration: none;">${email}</a></p>
              <p style="margin: 8px 0;"><strong style="color: #374151;">Phone:</strong> <span style="color: #059669;">${phone || 'Not provided'}</span></p>
              <p style="margin: 8px 0;"><strong style="color: #374151;">Subject:</strong> <span style="color: #7c3aed;">${subject}</span></p>
            </div>
          </div>
          
          <!-- Message Content -->
          <div style="padding: 20px; background-color: #ffffff;">
            <h3 style="color: #1f2937; margin: 0 0 15px 0; font-size: 18px;">💬 Message:</h3>
            <div style="background-color: #f9fafb; padding: 20px; border-radius: 6px; border-left: 4px solid #14b8a6;">
              <p style="line-height: 1.6; color: #374151; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="background-color: #f3f4f6; padding: 20px; text-align: center; border-radius: 0 0 8px 8px; border-top: 1px solid #e5e7eb;">
            <p style="margin: 0; color: #6b7280; font-size: 14px;">
              📧 <strong>Reply directly to this email</strong> to respond to ${firstName} ${lastName}
            </p>
            <p style="margin: 10px 0 0 0; color: #9ca3af; font-size: 12px;">
              This message was sent via the Jharkhand Public School contact form at www.jpsbarharwa.in
            </p>
          </div>
        </div>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
