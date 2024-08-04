import { IoFilter } from "react-icons/io5";

const FilterButton = () => {
	return (
		<button className="fixed flex h-[35px] items-center bottom-20 left-1/2 transform -translate-x-1/2 bg-black text-white px-[30px] rounded-full shadow-lg sm:hidden">
			<IoFilter className="text-2xl" />
			<span className="ml-1">필터</span>
		</button>
	);
};

export default FilterButton;