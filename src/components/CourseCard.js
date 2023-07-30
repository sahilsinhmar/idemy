/* eslint-disable @next/next/no-img-element */
import React from "react";

const CourseCard = ({ course }) => {
  const { course_name, image_link, course_type, description } = course;

  return (
    <div className="max-w-[350px] rounded overflow-hidden shadow-lg">
      <img className="w-full" src={image_link} alt="Course" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{course_name}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {course_type}
        </span>
      </div>
    </div>
  );
};

export default CourseCard;
