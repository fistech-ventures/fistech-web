import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, phone, company, message, interests } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const interestList =
      interests?.length > 0 ? interests.join(", ") : "None selected";

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `New Collaboration Inquiry from ${name}`,
      html: `
        <div style="font-family: sans-serif; color: #333;">
          <h2>New Inquiry Details</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Company:</strong> ${company || "N/A"}</p>
          <p><strong>Interests:</strong> ${interestList}</p>
          <div style="margin-top: 20px; padding: 15px; background: #f4f4f4; border-radius: 8px;">
            <strong>Message:</strong><br/>
            ${message}
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    console.error("Mail Error:", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
