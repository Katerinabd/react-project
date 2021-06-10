import React, { useState, useEffect } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import CourseEntry from "../components/CourseEntry";
import { fetchCourse, deleteCourse } from "../api";
import Loader from "../components/Loader";


const Course = () => {
  const match = useRouteMatch();
  const history = useHistory();
  const [course, setCourse] = useState(null);
  useEffect(() => {
    const fetshCourse = async () => {
      const course = await fetchCourse(match.params.id);
      setCourse(course);
    };
    fetshCourse();
  }, [match.params.id]);



  

  const handleDelete = async (e) => {
    e.preventDefault();
    console.log("handle delete");
       await deleteCourse(match.params.id);
       history.push("/courses");

  };



  return (
    <>
      {course ? (
        <CourseEntry
          course = {course}
          handleDelete={handleDelete}
        />
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Course;




