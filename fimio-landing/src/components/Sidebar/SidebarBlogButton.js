import React from "react";
import { SidebarButtonStyle } from "./SidebarButtonStyle";
import {blog_link} from "../links";

const SidebarBlogButton = () => {
	return (
		<SidebarButtonStyle href={blog_link}>Blog</SidebarButtonStyle>
	);
};

export default SidebarBlogButton;
