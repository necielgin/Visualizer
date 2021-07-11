import React from 'react'
import { SidebarContainer,Icon,CloseIcon,
SideBarWrapper,SidebarLink,SidebarMenu } from './SidebarElements';
const Sidebar = ({isOpen,toggle}) => {
	return (
		<>
			<SidebarContainer isOpen={isOpen} onClick={toggle}>
				<Icon>
					<CloseIcon>
					</CloseIcon>
				</Icon>
				<SideBarWrapper>
					<SidebarMenu>
						<SidebarLink to="about" onClick={toggle}>
							About
						</SidebarLink>
						<SidebarLink to="sorting" onClick={toggle}>
							Sorting
						</SidebarLink>
						<SidebarLink to="pathfinder" onClick={toggle}>
							PathFinder
						</SidebarLink>
					</SidebarMenu>
				</SideBarWrapper>
			</SidebarContainer>
		</>
	)
}

export default Sidebar
