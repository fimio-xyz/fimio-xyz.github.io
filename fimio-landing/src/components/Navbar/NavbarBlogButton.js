import React from "react";
import { NavbarButtonS } from "./NavbarButtonStyle";
import {blog_link} from "../links";

const NavbarBlogButton = () => {
	return (
		<NavbarButtonS href={blog_link} target='_blank'>Blog</NavbarButtonS>
	);
};

export default NavbarBlogButton;