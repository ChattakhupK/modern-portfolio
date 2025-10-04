"use client";
import React, { useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { animate, motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 0,
    title: "Findwork จ่ายงานสำหรับนายและลูกจ้าง",
    description:
      "เว็บแอพสำหรับให้นายจ้างที่ต้องการจ้างงานรายครั้ง และ ลูกจ้างที่ต้องการหางานเสริม หรือ งานหลัก ได้มาเจอกันด้วยเว็บแอพนี้ เราจะสามารถวางงานพร้อมบอกรายละเอียดได้",
    image: "/images/projects/16.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ChattakhupK/Findwork-nextjs-ts",
    previewUrl: "/",
    category: "dev",
  },
  {
    id: 1,
    title: "Lnwcom เว็บขายอุปกรณ์IT",
    description:
      "เว็บสำหรับขายอุปกรณ์ไอที ที่ทันสมัยใช้ไม่ยากเพราะไม่ได้มีฟีจเจอร์เยอแยะจนทำให้รก ทำให้ผู้ใช้เมื่อเข้ามาครั้งแรกสามารถซื้อเป็นได้ทันที่",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ChattakhupK/LNWCOM-ECOM-FE",
    previewUrl: "https://lnwcom-web-by-chattakhupk.vercel.app/",
    category: "new",
  },
  {
    id: 13,
    title: "Portfolio2025 เวอร์ชั่นก่อน",
    description:
      "ที่รวบรวมผลงานเก็บข้อมูลของผมในเวอร์ชั่นก่อน ก่อนจะเป็นอันล่าสุดนี้ จะมีการใส่รูปใบ Certificate และรูป CV ในนั้นเลยทำให้อาจจะดูรกเกินไป จึงเกิดเป็นเวอร์ชั่นปัจจุบันนี้",
    image: "/images/projects/13.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ChattakhupK/nextjs-portfolio-2025",
    previewUrl: "https://nextjs-portfolio-2025-swart.vercel.app/th",
  },
  {
    id: 15,
    title: "Chat-socket.io",
    description:
      "แชท local ไว้คุยเล่นๆแบบกลุ่ม ใช้ socket.io และ express หน้าบ้านใช้ react",
    image: "/images/projects/15.png",
    tag: ["All", "web"],
    gitUrl: "https://github.com/ChattakhupK/Chat-IO-FE",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Figma UI Portfolio",
    description:
      "เป็นการนำ portfolio มาทำให้เป็นปัจจุบันในเวอร์ชั่นปี 2025 และจัดเรียงเนื้อหาใหม่ให้เรียบง่าย เข้าใจง่ายมาก",
    image: "/images/projects/2.png",
    tag: ["All", "Design"],
    gitUrl: "/",
    previewUrl:
      "https://www.figma.com/design/p16NahD5wuksoWpnDNdVlV/portfolio---2025?node-id=0-1&t=9SBMgoOtwvxy5MAC-1",
  },
  {
    id: 3,
    title: "Fronend work1 admin",
    description:
      "เว็บหน้า front end ตอนช่วงที่ทำงานเขียนหน้าเว็บให้กับบริษัทนึง โดยเป็นการทำตามบรีฟที่ได้รับมา",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Frontend work2 user",
    description:
      "เว็บหน้า front end ตอนช่วงที่ทำงานเขียนหน้าเว็บให้กับบริษัทนึง โดยเป็นการทำตามบรีฟที่ได้รับมา",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Old Web Portfolio",
    description:
      "นี่คือPortfolioเก่าของฉันที่ฉันสร้างเมื่อปี 2024 และก่อนที่ฉันจะเริ่มทำงานเพื่อรับประสบการณ์เพิ่มเติม",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ChattakhupK/PORTFOLIO-WEB-REACT",
    previewUrl:
      "https://portfolio-web-react-18n3ciysb-chattakhupks-projects.vercel.app/",
  },
  {
    id: 6,
    title: "E-commerce2024",
    description:
      "นี้เป็น project ที่ใหญ่มากสำหรับผมด้วยการทำเว็บขายของ มีหน้าซื้อของ ระบบล็อกอิน ต่างๆ",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ChattakhupK/ECOM-CLIENT-WEB-VERCEL/tree/main",
    previewUrl: "https://ecom-client-web-vercel.vercel.app/",
  },
  {
    id: 7,
    title: "Figma UI Design Mobile",
    description:
      "ช่วงเริ่มฝึกออกแบบด้วย figma ผมได้ลองทำ UI APP ของ LineMan เพื่อสำหรับฝึกฝนเรียนรู้",
    image: "/images/projects/7.png",
    tag: ["All", "Design"],
    gitUrl: "/",
    previewUrl:
      "https://www.figma.com/proto/ucgxJ2WNQtmOaykdQA9NVU/LINE-MAN-by-Vat?node-id=25-1754&starting-point-node-id=25%3A914",
  },
  {
    id: 8,
    title: "Static Page Info",
    description:
      "ผมอยากลองทำเว็บไซต์ให้การเรียนรู้เรื่องดาว แบบเรียบง่ายและเป็นแบบหนึ่งหน้า จึงได้ลองทำด้วย HTML",
    image: "/images/projects/8.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ChattakhupK/STATIC-PAGE-INFO-SPACE-HTML",
    previewUrl: "https://chattakhupk.github.io/STATIC-PAGE-INFO-SPACE-HTML/",
  },
  {
    id: 9,
    title: "Figma UI Design Web",
    description:
      "เมื่อผมเห็นเว็บไซต์ครั้งแรก ผมรู้สึกว่ามันไม่เป็นมิตรกับผู้ใช้ ผมจึงออกแบบใหม่ให้เรียบง่ายและเข้าถึงได้",
    image: "/images/projects/9.png",
    tag: ["All", "Design"],
    gitUrl: "/",
    previewUrl:
      "https://www.figma.com/proto/GCkUVVkyGJbLA6y0RGekCY/Web-Primus-Test?node-id=0-1&node-type=canvas&t=3qRC90leUBoqD0uO-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
  },
  {
    id: 10,
    title: "Chat Auth Realtime",
    description:
      "การสร้างเว็บไซต์แชทโดยใช้ React, Tailwind CSS และ Firebase เป็นวิธีที่ทันสมัยและมีประสิทธิภาพ",
    image: "/images/projects/10.png",
    tag: ["All", "Web"],
    gitUrl:
      "https://github.com/ChattakhupK/CHAT-FIREBASE-REACT?tab=readme-ov-file",
    previewUrl: "/",
  },
  {
    id: 11,
    title: "Game Quiz",
    description:
      "ลองสร้างเกมตอบคำถามแบบมีการให้คะแนนเมื่อตอบคำถามง่ายๆ ใช้เครื่องมือจากreactง่ายๆ",
    image: "/images/projects/11.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ChattakhupK/QUIZ-REACT-4Q",
    previewUrl: "https://quiz-react-4-q.vercel.app/",
  },
  {
    id: 12,
    title: "Web board",
    description:
      "การสร้างกระทู้สนทนาสามารถทำได้โดยใช้ HTML, CSS, Handlers และ MySQL",
    image: "/images/projects/12.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ChattakhupK/WEBBOARD-HBS-MYSQL",
    previewUrl: "/",
  },
  {
    id: 14,
    title: "Fronend work1 user",
    description:
      "เว็บหน้า front end ตอนช่วงที่ทำงานเขียนหน้าเว็บให้กับบริษัทนึง โดยเป็นการทำตามบรีฟที่ได้รับมา",
    image: "/images/projects/14.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        ผลงาน
      </h2>
      <div className="text-white flex flex-wrap flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          s
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Design"
          isSelected={tag === "Design"}
        />
      </div>
      <ul
        ref={ref}
        className="grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              category={project.category}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
