import { useCallback, useEffect, useState } from "react";
import Content from "./components/layout/Content";
import MobileHeaderWithTabs from "./components/layout/MobileHeader";
import MobileNavbar from "./components/layout/MobileNavbar";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import Title from "./components/Title";
import { SortOption } from "./constants";
import useData from "./hooks/useData";
import { Product } from "./types/data.interface";

function App() {
	const [page, setPage] = useState(1);
	const [products, setProducts] = useState<Product[]>([]);
	const [sortOption, setSortOption] =
		useState<keyof typeof SortOption>("newest");

	const { data, error } = useData({
		length: 12,
		type: sortOption,
		category: 25,
		page: page,
	});

	const loadMore = useCallback(() => {
		setPage((prevPage) => prevPage + 1);
	}, []);

	const handleSortChange = useCallback(
		(selectedSortOption: keyof typeof SortOption) => {
			setSortOption(selectedSortOption);
			setPage(1);
			setProducts([]);
		},
		[setSortOption, setPage, setProducts]
	);

	useEffect(() => {
		if (data?.data?.data?.body) {
			setProducts((prevProducts) => [
				...prevProducts,
				...data.data.data.body,
			]);
		}
	}, [data]);

	if (error) {
		return <div>{error}</div>;
	}

	return (
		<>
			<Navbar />
			<MobileHeaderWithTabs />
			<Title />
			<div className="flex flex-row">
				<div className="hidden sm:block w-[360px]">
					<Sidebar />
				</div>
				<div className="flex-1">
					<Content
						products={products}
						loadMore={loadMore}
						onSortChange={handleSortChange}
					/>
				</div>
			</div>
			<MobileNavbar />
		</>
	);
}

export default App;
