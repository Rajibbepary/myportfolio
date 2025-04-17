import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
    return (
        <div id="education"  className="my-10 px-4 bg-base-200 border-b-4 border-purple-500 transition-colors duration-300">
      <h1 className="text-4xl font-bold text-center py-10 text-[#FFFFFF] ">
        Educational Qualifications
      </h1>
      <VerticalTimeline>
        {/* Educational Item 1 */}
        <VerticalTimelineElement
          date="2021 - 2025"
          contentStyle={{ background: "#F3E8FF", color: "#6A0DAD" }}
          contentArrowStyle={{ borderRight: "7px solid #6A0DAD" }}
          iconStyle={{ background: "#6A0DAD", color: "#fff" }}
          icon={
            <div className="flex justify-center items-center w-full h-full">
              <img
                src="https://img.icons8.com/?size=100&id=wogrNmTvt9qn&format=png"
                alt="Bachelor Icon"
                className="w-16 h-16 object-contain"
              />
            </div>
          }
        >
          <h3 className="text-[#6A0DAD] text-[20px] font-bold">
            Bachelor of Computer Science
          </h3>
          <p className="text-[#4B0082] text-[16px] font-semibold mb-4">
          Suhrawardy  College Affiliated With University of Dhaka
          </p>
          <ul className="list-disc ml-5 space-y-2">
            <li className="text-[#4B0082] text-[14px]">
            Studied at Department Of Bangla,  Shaheed  <br />Suhrawardy  College Affiliated With University of Dhaka
            </li>
          </ul>
        </VerticalTimelineElement>

        {/* Educational Item 2 */}
        <VerticalTimelineElement
          date="2018 - 2019"
          contentStyle={{ background: "#E8EAF6", color: "#3F51B5" }}
          contentArrowStyle={{ borderRight: "7px solid #3F51B5" }}
          iconStyle={{ background: "#3F51B5", color: "#fff" }}
          icon={
            <div className="flex justify-center items-center w-full h-full">
              <img
                src="https://img.icons8.com/?size=100&id=81348&format=png"
                alt="HSC Icon"
                className="w-16 h-16 object-contain"
              />
            </div>
          }
        >
          <h3 className="text-[#3F51B5] text-[20px] font-bold">
            Higher Secondary Certificate
          </h3>
          <p className="text-[#303F9F] text-[16px] font-semibold mb-4">
            Sodurpur Govt. College
          </p>
          <ul className="list-disc ml-5 space-y-2">
            <li className="text-[#303F9F] text-[14px]">
              HSC in Arts <br />
              Completed in 2020
            </li>
          </ul>
        </VerticalTimelineElement>

        {/* Educational Item 3 */}
        <VerticalTimelineElement
          date="2016 - 2017"
          contentStyle={{ background: "#E3F2FD", color: "#0288D1" }}
          contentArrowStyle={{ borderRight: "7px solid #0288D1" }}
          iconStyle={{ background: "#0288D1", color: "#fff" }}
          icon={
            <div className="flex justify-center items-center w-full h-full">
              <img
                src="https://img.icons8.com/?size=100&id=RWH5eUW9Vr7f&format=png"
                alt="SSC Icon"
                className="w-16 h-16 object-contain"
              />
            </div>
          }
        >
          <h3 className="text-[#0288D1] text-[20px] font-bold">
            Secondary School Certificate
          </h3>
          <p className="text-[#01579B] text-[16px] font-semibold mb-4">
            Baburchor High School
          </p>
          <ul className="list-disc ml-5 space-y-2">
            <li className="text-[#01579B] text-[14px]">
              SSC in Arts
            </li>
            <li className="text-[#01579B] text-[14px]">
              Completed in 2018
            </li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
    );
};

export default Education;