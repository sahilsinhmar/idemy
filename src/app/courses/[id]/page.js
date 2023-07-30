/* eslint-disable @next/next/no-img-element */
// CoursePage.js
"use client";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";
import { fetchCourseById } from "@/utils/courseDataUtils";
import { UserAuth } from "@/utils/useAuth";

const CoursePage = ({ params }) => {
  const { user } = UserAuth();
  const { id } = params;
  const [course, setCourse] = useState(null);
  const [courseType, setCourseType] = useState("");
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const getCourse = async () => {
      const response = await fetchCourseById(id);
      setCourse(response);
      setCourseType(response?.course_type);
    };
    getCourse();
    setAuthChecked(true);
  }, [id]);

  if (!authChecked) {
    return null;
  }
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 p-4">
        {course && (
          <>
            <img
              src={course.image_link}
              alt={course.course_name}
              className="w-full h-auto rounded-lg"
            />
            <h2 className="text-xl font-semibold mt-4">{course.course_name}</h2>
            <p className="text-gray-600 mt-2">{course.description}</p>
          </>
        )}
      </div>
      {courseType === "free" || user ? (
        <div className="w-full lg:w-1/2 p-4 ">
          {course?.video_links?.map((video, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center mb-4 lg:h-[200px] lg:p-2"
            >
              <p className="lg:w-1/2 lg:mt-0 lg:text-2xl">
                Lecture {index + 1}
              </p>
              <ReactPlayer
                url={video}
                controls={true}
                width={350}
                height={170}
                className="lg:mr-4 mb-4 lg:mb-0 lg:w-1/2"
                config={{
                  youtube: {
                    playerVars: { origin: "https://www.youtube-nocookie.com" },
                  },
                }}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full lg:w-1/2 lg:text-2xl p-4 flex flex-col lg:gap-2 just-between items-center ">
          <p className="flex-col">Login to see this course</p>
          <p className="lg:h-[400px] lg:w-full  blur-sm bg-slate-300"></p>
        </div>
      )}
    </div>
  );
};

export default CoursePage;
