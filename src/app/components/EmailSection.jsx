"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaGithub, FaFacebook, FaDiscord, FaInstagram } from "react-icons/fa";
const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const res = await fetch(endpoint, options);
    const resData = await res.json();

    console.log(res.status);
    if (res.status === 200) {
      console.log("Message sent");
      setEmailSubmitted(true);
    } else {
      console.error("Failed to send message", resData);
    }
  };

  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-radial from-gray-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-2/4 left-1/4 transform -translate-x-1/2 -translate-1/2"></div>

      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          ติดต่อตามช่องทางนี้
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          หากคุณมีคำถาม ข้อสงสัย ข้อเสนอแนะ หรือความคิดเห็นใด ๆ
          เกี่ยวกับผลงานของผม ผมยินดีที่จะได้รับฟังจากคุณ
          พร้อมให้ความช่วยเหลือและให้ข้อมูลอย่างเต็มที่
          หรือการรับฟังความคิดเห็นเพื่อนำไปปรับปรุงผลงานของผมให้ดียิ่งขึ้น
        </p>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          โทรศัพท์มือถือ : 085-855-4668 <br /> อีเมล : MosT5140@hotmail.com
        </p>
        <div className="socials flex flex-row gap-2">
          <Link target="_blank" href={"https://www.facebook.com/MosT5140"}>
            <FaFacebook className="text-white w-6 h-6" />
          </Link>
          <Link
            target="_blank"
            href={
              "https://www.instagram.com/f.kykie?igsh=YWJ5eTUyanc0dDV1&utm_source=qr"
            }
          >
            <FaInstagram className="text-white w-6 h-6" />
          </Link>
          <Link target="_blank" href={"https://github.com/ChattakhupK"}>
            <FaGithub className="text-white w-6 h-6" />
          </Link>
          <Link
            target="_blank"
            href={"https://discord.com/users/240118062827831297"}
          >
            <FaDiscord className="text-white w-6 h-6" />
          </Link>
        </div>
      </div>
      <div className=" z-10">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              อีเมลของคุณ
            </label>
            <input
              disabled
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 "
              placeholder="Lnwza007@hotmail.com (ยังไม่เปิดให้ส่ง รอverify)"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              หัวข้อ
            </label>
            <input
              disabled
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 "
              placeholder="จากบริษัท.... (ยังไม่เปิดให้ส่ง รอverify)"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium "
            >
              เนื้อหา
            </label>
            <textarea
              disabled
              name="message"
              id="message"
              placeholder="สวัสดีครับ ผม.... อยากติดต่อขอให้คุณ เข้าร่วมสัมภาษณ์งานกับเราในวันที่.... (ยังไม่เปิดให้ส่ง รอverify)"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <button
            disabled
            type="submit"
            className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            ส่งข้อความ
          </button>
          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2">ส่งอีเมลสำเร็จ!!</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
