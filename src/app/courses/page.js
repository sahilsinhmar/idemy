// Courses.js
"use client";
import React, { useState } from "react";
import courseData from "../../utils/courseData";
import CourseCard from "@/components/CourseCard";
import { useRouter } from "next/navigation";

const Courses = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredCourses = courseData.filter((course) =>
    course.course_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <p className="text-3xl font-satoshi font-semibold text-black tracking-wide">
        Courses
      </p>
      <div className="w-full m-4">
        <div className="flex flex-col gap-4 w-full">
          <div className="w-full px-4 flex lg:justify-center">
            <input
              type="text"
              placeholder="Search for courses..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full lg:w-[500px] px-3 py-2 text-sm border rounded-md outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex flex-wrap gap-6 w-full justify-around p-4">
            {filteredCourses.length === 0 ? (
              <p>No matching courses found.</p>
            ) : (
              filteredCourses.map((course) => (
                <div
                  onClick={() => {
                    router.push(`/courses/${course?.id}`);
                  }}
                  key={course?.id}
                  className="cursor-pointer flex max-w-[400px] border"
                >
                  <CourseCard course={course} />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
