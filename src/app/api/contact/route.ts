import { NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, selectedPackage, message } = await req.json()

    // Validate input
    if (!name || !email || !selectedPackage || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'FemiSpace Investment <investment@femispace.com>',
      to: ['contact@femispace.com'], // Replace with your email
      reply_to: email,
      subject: `New Investment Interest: ${selectedPackage}`,
      html: `
        <h2>New Investment Interest</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Package:</strong> ${selectedPackage}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    // Send confirmation email to the investor
    await resend.emails.send({
      from: 'FemiSpace Investment <investment@femispace.com>',
      to: [email],
      subject: 'Thank you for your interest in FemiSpace',
      html: `
        <h2>Thank you for your interest in FemiSpace</h2>
        <p>Dear ${name},</p>
        <p>Thank you for expressing interest in investing in FemiSpace. We have received your inquiry about the ${selectedPackage} package.</p>
        <p>Our team will review your message and get back to you shortly with more information about the investment opportunity.</p>
        <p>Best regards,<br>The FemiSpace Team</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    )
  }
}
