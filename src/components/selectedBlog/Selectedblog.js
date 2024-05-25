import React from "react";
import "../selectedBlog/Singleblog.scss";

function Selectedblog({ selectedBlog }) {
  return (
    <div>
      {" "}
      {/* <p className="author"> {selectedBlog.author} </p> */}
      <h1 className=" heading-SingleBlog "> {selectedBlog.Title} </h1>
      <img className="image" src={selectedBlog.Image} alt="img" />
      <div className="description-SingleBlog">
        <p> {selectedBlog.Article} </p>
        {/* <p> {selectedBlog.content} </p> */}
        {/* <a href={selectedBlog.url}> click for more details </a> */}
      </div>
    </div>
  );
}
export default Selectedblog;
