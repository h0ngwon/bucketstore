import { FaArrowLeft, FaSearch, FaShoppingBag } from "react-icons/fa";

const categories = [
	"전체",
	"집업",
	"긴팔",
	"반팔",
	"민소매",
	"긴팔이너",
	"반팔이너",
	"셔츠",
];

const MobileHeader = () => {
	return (
		<div className="flex items-center justify-between p-4 border-gray-300">
			<div className="flex items-center">
				<FaArrowLeft className="mr-2" />
				<span className="text-lg font-semibold">티셔츠</span>
			</div>
			<div className="flex items-center space-x-4">
				<FaSearch />
				<FaShoppingBag />
			</div>
		</div>
	);
};

const CategoryTabs = () => {
	return (
		<div className="flex overflow-x-auto p-4 gap-1 flex-none">
			{categories.map((category, index) => (
				<button
					key={index}
					className={`flex flex-none text-[13px] border-black rounded-full border pt-[6px] px-[15px] pb-[5px] ${
						index === 0
							? "bg-black text-white"
							: "bg-white text-black"
					}`}
				>
					{category}
				</button>
			))}
		</div>
	);
};

const MobileHeaderWithTabs = () => {
	return (
		<div className="sm:hidden">
			<MobileHeader />
			<CategoryTabs />
		</div>
	);
};

export default MobileHeaderWithTabs;
