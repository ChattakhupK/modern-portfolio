import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req, res) {
  const body = await req.json();
  const { email, subject, message } = body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail(
      {
        from: `ติดต่อเรื่องงาน`,
        to: process.env.EMAIL_USER,
        subject: subject,
        replyTo: email,
        html: `
    <h1>หัวข้อ : ${subject}</h1>
    <p>ข้อความจาก : ${email}</p>
    <p>${message}</p>
    `,
      },
      (err, info) => {
        if (err) return console.log(err);
      }
    );

    return NextResponse.json({ success: true, message: "Email sent!" });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
