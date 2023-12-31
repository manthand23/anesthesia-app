import React from "react";
import Title from "./Components/title";
import Heading from "./Components/heading";
import Bullets from "./Components/bullets";
import Table from "./Components/table";
import Photo from "./Components/photo";
import Quiz from "./Components/quiz";
import Para from "./Components/para";
import Line from "./Components/line";

const Components = {
    title: Title,
    heading: Heading,
    bullets: Bullets,
    table: Table,
    photo: Photo,
    quiz: Quiz,
    para: Para,
    line: Line,
  };
  
export default (block) => {
   if (typeof Components[block.component] !== "undefined") {
     return React.createElement(Components[block.component], {
       block: block
     });
   }

//    return React.createElement(
//      () => <div>The component {block.component} has not been created yet.</div>,
//      { key: block._uid }
//    );
 };