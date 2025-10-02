"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section id="hero" className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal  font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-500 to-slate-50">
              สวัสดี, ผมหางาน{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Web Developer",
                2000,
                "UX/UI Designer",
                2000,
                "IT Support",
                2000,
              ]}
              wrapper="span"
              speed={50}
              //   className="!text-5xl"
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            ปัจจุบันผมเคยผ่านการฝึกงานด้าน UX/UI Design และ ได้ทำงานด้าน IT
            SUPPORT มาก่อนทั้งยังเคยทำงานบริษัทชั่วคราวตำแหน่ง Web Developer และ
            Frontend มาด้วยระยะเวลานึง
          </p>
          <div>
            <Link href={"#contact"}>
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-gray-700 to-gray-400 text-white cursor-pointer hover:text-gray-100 hover:scale-105 duration-150">
                ติดต่อ
              </button>
            </Link>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-slate-500 to-slate-50 hover:bg-slate-800 text-white mt-3 cursor-pointer hover:text-gray-100 hover:scale-105 duration-150">
              <a
                href="/cv.pdf"
                download
                className="block bg-[#121212] rounded-full px-5 py-2"
              >
                Download CV
              </a>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg;mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] overflow-hidden lg:h-[400px] relative">
            <Image
              src={"/images/hero-image.png"}
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-3/5 left-1/2 brightness-80 hover:brightness-100 duration-500 "
              width={350}
              height={500}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
