import { useCallback, useEffect, useState } from "react";
import { SortOption } from "../../constants";
import useIntersection from "../../hooks/useIntersection";
import { Product } from "../../types/data.interface";
import Card from "../Card";
import FilterButton from "../FilterButton";
import Select from "../Select";
import TopButton from "../TopButton";

type Props = {
	products: Product[];
	loadMore: () => void;
	onSortChange: (sortOption: keyof typeof SortOption) => void;
};

const Content = ({ products, loadMore, onSortChange }: Props) => {
	const targetRef = useIntersection(loadMore);
	const [sortOption, setSortOption] =
		useState<keyof typeof SortOption>("newest");
	const [showScrollToTop, setShowScrollToTop] = useState(false);

	const handleSortChange = useCallback(
		(event: React.ChangeEvent<HTMLSelectElement>) => {
			const selectedOption = event.target
				.value as keyof typeof SortOption;
			setSortOption(selectedOption);
			onSortChange(selectedOption);
		},
		[setSortOption, onSortChange]
	);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const handleScroll = () => {
		if (window.scrollY === 0) {
			setShowScrollToTop(false);
		} else {
			setShowScrollToTop(true);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className="sm:px-5 flex flex-col mb-[60px]">
			<div className="flex justify-between items-center mb-2.5 text-[13px] font-bold pl-2.5 sm:pl-0">
				<div>{`${products.length}개`}</div>
				<Select value={sortOption} onChange={handleSortChange} />
			</div>
			<div className="grid grid-cols-2 gap-x-[1px] gap-y-[20px] md:gap-y-[60px] sm:grid-cols-4 lg:grid-cols-4">
				{products.map((product, idx) => (
					<Card key={idx} product={product} />
				))}
				<div ref={targetRef} />
			</div>
			<FilterButton />
			<TopButton show={showScrollToTop} onClick={scrollToTop} />
		</div>
	);
};

export default Content;
