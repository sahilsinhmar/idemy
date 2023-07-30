import courseData from "@/utils/courseData";

export function fetchCourseById(id) {
  return courseData?.[id - 1] || null;
}
