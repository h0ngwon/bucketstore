import { IoIosMenu, IoIosHome, IoIosPerson, IoIosHeart } from "react-icons/io";
import { IoPricetagOutline } from "react-icons/io5";

const MobileNavbar = () => {
	return (
		<nav className="flex sm:hidden fixed bottom-0 w-full bg-black text-white">
			<ul className="flex justify-around w-full py-2">
				<li className="flex flex-col items-center">
					<IoIosMenu className="text-2xl" />
					<span className="text-xs">메뉴</span>
				</li>
				<li className="flex flex-col items-center">
					<IoPricetagOutline className="text-2xl" />
					<span className="text-xs">브랜드</span>
				</li>
				<li className="flex flex-col items-center">
					<IoIosHome className="text-2xl" />
					<span className="text-xs">홈</span>
				</li>
				<li className="flex flex-col items-center">
					<IoIosPerson className="text-2xl" />
					<span className="text-xs">마이페이지</span>
				</li>
				<li className="flex flex-col items-center">
					<IoIosHeart className="text-2xl" />
					<span className="text-xs">찜</span>
				</li>
			</ul>
		</nav>
	);
};

export default MobileNavbar;