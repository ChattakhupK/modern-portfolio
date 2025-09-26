"use client";
import dynamic from "next/dynamic";
import React from "react";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  { prefix: "~", metric: "ผลงาน", value: "10" },
  {
    metric: "ประกาศนียบัตร",
    value: "10",
    postfix: "+",
  },
  {
    metric: "ความสามารถ",
    value: "20",
    postfix: "+",
  },
  { metric: "ประสบการณ์ (ปี)", value: "1", postfix: "+" },
];

const AchievementsSection = () => {
  return (
    <div className="hidden sm:block py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border-[#33353F] border rounded-md py-8 px-16 flex flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  config={() => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />{" "}
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
