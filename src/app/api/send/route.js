// import { EmailTemplate } from "../../../components/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();

  try {
    const data = await resend.emails.send({
    //   from: `My Website <no-reply@${fromEmail}>`,
      from: `My Website <onboarding@resend.dev>`,
      to: ["most5140@gmail.com", email], // ใส่อีเมลจริงตรงนี้
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>ขอบคุณที่ติดต่อเข้ามา!!</p>
          <p>ข้อความใหม่ ส่งเรียบร้อย!!</p>
          <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
