"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 space-y-1 columns-2">
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JAVASCRIPT</li>
        <li>TYPESCRIPT</li>
        <li>REACT</li>
        <li>NEXT.JS</li>
        <li>NODE.JS</li>
        <li>TAILWIND</li>
        <li>BOOTSTRAP</li>
        <li>FIREBASE</li>
        <li>MYSQL</li>
        <li>GITHUB</li>
        <li>PRISMA</li>
        <li>SEQUELIZE</li>
        <li>EXPRESS</li>
        <li>ANTDESIGN</li>
        <li>MONGODB</li>
        <li>SHADCNUI</li>
        <li>SUPABASE</li>
        <li>FIGMA</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc space-y-1 pl-2">
        <li>มารีย์พิทักษ์อุดรธานี</li>
        <li>โรงเรียนอุดรพิทยานุกูล</li>
        <li>มหาวิทยาลัยมหาสารคาม</li>
        <li>FutureSkill</li>
        <li>BorntoDev</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc space-y-1 pl-2">
        <li>ก้าวสู้เส้นทาง Back-end Developer ด้วย Node.js</li>
        <li>สร้างเว็บไซต์จากเริ่มต้นจนถึงมือโปร ด้วย HTML5/CSS3/javaScript</li>
        <li>Basic Javascript for Frontend Developer</li>
        <li>GitHub for Developer</li>
        <li>Introduction to Computer Science</li>
        <li>Introduction to JavaScript</li>
        <li>Lite:Fundamental Web Dev with HTML5 & CSS3</li>
        <li>
          เริ่มต้นการใช้ Web Framework ด้วย Express และ รู้จักขั้นตอนการทำ REST
          API
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 lx:gap-16 sm:py-16 xl:px-16">
        <Image
          src={"/images/about-image.jpg"}
          alt={"about-image"}
          width={450}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">เกี่ยวกับผม</h2>
          <p className="text-base lg:text-lg">
            ผมอยากเป็นนักพัฒนา Front End Developer
            เพื่อสร้างเว็บแอปพลิเคชันที่น่าประทับใจและใช้เทคโนโลยีใหม่ๆ
            เพื่อสร้างเว็บแอปพลิเคชันที่ดีที่สุดสำหรับผู้ใช้
            ความฝันสูงสุดของผมตอนนี้คือการเป็นนักพัฒนา Full Stack Developer
            และตอนนี้แม้ว่าผมจะเรียนจบแล้ว
            แต่ก็ยังคงเรียนหลักสูตรเพิ่มเติมเพื่อบรรลุความฝันของผม
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              ความสามารถ
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              การศึกษา
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              ประกาศนียบัตร
            </TabButton>
          </div>
          <div className="mt-4">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
