import React from "react";
import { storiesOf } from "@storybook/react";

import { Navbar } from "../components/Requirments";

const stories = storiesOf("App Test", module);

stories.add("App", () => {
  return (
    <Navbar backgroundColor={"orange"}>
      <ul className='desktop' backgroundColor={"red"} textColor={"green"}>
        <li redirect={"/home"}>Home</li>
        <li redirect={"/About"}>About</li>
        <li redirect={"/Skills"}>Skills</li>
        <li redirect={"/Projects"}>Projects</li>
        <li redirect={"/Organizations"}>Organizations</li>
        <li redirect={"/Contact"}>Contact</li>
      </ul>
      <div className='navFooter'>
        <p>Contact Us</p>
      </div>
    </Navbar>
  );
});
