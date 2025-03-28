import React from "react";

function Project({project}){

  return (
    <>

      <h2>{project.title}</h2>
      <p>{project.content}</p>

    </>
  )
}

export default Project;