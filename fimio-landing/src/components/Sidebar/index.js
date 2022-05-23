import React from 'react'
import { useNavigate } from 'react-router'
import SidebarButton from './SidebarButton'
import SidebarBlogButton from './SidebarBlogButton'
import { SidebarContainer, SidebarWrapper, SidebarItem, BackgroundImage } from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
	const navigate = useNavigate()
	function goToPage() {
		navigate("/#careers");
	}
	return (
		<SidebarContainer isOpen={ isOpen }>
			<BackgroundImage>
				<SidebarWrapper>
					<SidebarItem onClick={() => { toggle(); goToPage(); }}>Careers</SidebarItem>
					<SidebarBlogButton />
					<SidebarButton />
				</SidebarWrapper>
			</BackgroundImage>
		</SidebarContainer>
	)
}

export default Sidebar