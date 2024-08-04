import { IoIosSearch } from "react-icons/io";
import { IoArrowBackCircleOutline, IoBasketOutline } from "react-icons/io5";

const Navbar = () => {
	return (
		<nav className="hidden sticky sm:flex sm:flex-col sm:flex-1 bg-black">
			<div className="flex flex-row items-center sm:min-h-[127px] sm:pt-[23px] sm:px-2.5 sm:pb-5 sm:flex-wrap min-h-[90px] md:px-2.5 md:py-[23px] sm:max-w-full">
				<div className="flex flex-row items-center order-1 text-white text-4xl sm:flex-1 md:flex-none md:w-[187px] md:h-[30px]">
					BUCKET
				</div>
				<div className="flex flex-0 flex-row sm:order-3 sm:w-full md:w-auto sm:flex-auto md:order-2">
					<ul className="flex flex-row itmes-center text-white text-base font-bold gap-4">
						<li className="text-[#FF5112]">올림픽 미리보기</li>
						<li className="text-[#FF5112]">아울렛</li>
						<li>브랜드</li>
						<li>여성</li>
						<li>남성</li>
						<li>골프</li>
						<li>아웃도어 & 스포츠</li>
						<li>|</li>
						<li>런칭</li>
						<li>베스트</li>
						<li>스타일</li>
						<li>기획전</li>
						<li>이벤트</li>
					</ul>
				</div>
				<div className="flex gap-4 text-white text-3xl justify-end items-center sm:order-2 md:order-3">
					<IoIosSearch />
					<IoArrowBackCircleOutline />
					<IoBasketOutline />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
