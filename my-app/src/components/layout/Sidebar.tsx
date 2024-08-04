import { FiChevronDown, FiRefreshCw } from "react-icons/fi";

const Sidebar = () => {
	return (
		<div className="hidden sticky top-0 sm:block w-64 pl-5 sm:flex-none">
			<div className="mb-4">
				<ul className="space-y-2 text-2xl">
					<li>전체</li>
					<li>집업</li>
					<li>긴팔</li>
					<li>반팔</li>
					<li>민소매</li>
					<li>긴팔이너</li>
					<li>반팔이너</li>
					<li>셔츠</li>
				</ul>
			</div>
			<div className="mt-[90px] overflow-y-auto">
				<div className="mb-4 flex items-center justify-between bg-black text-white p-3 text-lg">
					<div className="text-sm font-bold flex items-center">
						FILTER
					</div>
					<FiRefreshCw className="text-xl" />
				</div>
				<div className="flex items-center justify-between px-[10px] py-5">
					<span className="font-semibold">브랜드</span>
					<FiChevronDown />
				</div>
				<div className="flex items-center justify-between px-[10px] py-5">
					<span className="font-semibold">시즌</span>
					<FiChevronDown />
				</div>
				<div className="flex items-center justify-between px-[10px] py-5">
					<span className="font-semibold">추천</span>
					<FiChevronDown />
				</div>
				<div className="flex items-center justify-between px-[10px] py-5">
					<span className="font-semibold">색상</span>
					<FiChevronDown />
				</div>
				<div className="flex items-center justify-between px-[10px] py-5">
					<span className="font-semibold">혜택</span>
					<FiChevronDown />
				</div>
				<div className="flex items-center justify-between px-[10px] py-5">
					<span className="font-semibold">가격</span>
					<FiChevronDown />
				</div>
				<div className="flex items-center justify-between px-[10px] py-5">
					<span className="font-semibold">할인율</span>
					<FiChevronDown />
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
