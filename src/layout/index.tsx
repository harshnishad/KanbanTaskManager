import { Outlet } from "react-router";

import Navbar from "../component/Navbar";

const Layout = () => {
	return (
		<div className="w-screen h-screen relative">
			
			<Navbar />
			<div className=" pl-[60px] pr-[20px] pt-[70px] w-full h-full overflow-y-auto">
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;