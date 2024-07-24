import React, { useEffect,useState } from "react";
import axios from "axios"
import { useParams } from "react-router-dom";

const TeacherDetails = () => {
  //!1.yol

  const { id } = useParams();
// path ile yollanan id yi useParams hook uyla yakaladık
  const [person, setPerson] = useState({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setPerson(res.data));
  }, [id]);


  console.log(person);
  return <div>
    <h3>{person.name}</h3>
    <h2>{person.email}</h2>
  </div>;
};

export default TeacherDetails;
