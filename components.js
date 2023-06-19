import React from "react";
import Title from "./Components/title";
import Heading from "./Components/heading";
import Bullets from "./Components/bullets";

const Components = {
    title: Title,
    heading: Heading,
    bullets: Bullets
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