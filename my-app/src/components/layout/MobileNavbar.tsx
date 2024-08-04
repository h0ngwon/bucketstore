import { useCallback, useEffect, useState } from "react";
import { IoIosHeart, IoIosHome, IoIosMenu, IoIosPerson } from "react-icons/io";
import { IoPricetagOutline } from "react-icons/io5";

const MobileNavbar = () => {
	const [isVisible, setIsVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  }, [lastScrollY]);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [lastScrollY]);

	return (
		<nav
			className={`flex sm:hidden fixed bottom-0 w-full bg-black text-white transition-transform duration-300 ${
				isVisible ? "translate-y-0" : "translate-y-full"
			}`}
		>
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
