import { useCallback, useEffect, useState } from "react";
import Content from "./components/layout/Content";
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

	useEffect(() => {
		if (data?.data?.data?.body) {
			setProducts((prevProducts) => [
				...prevProducts,
				...data.data.data.body,
			]);
		}
	}, [data]);

	const handleSortChange = (selectedSortOption: keyof typeof SortOption) => {
		setSortOption(selectedSortOption);
		setPage(1);
		setProducts([]);
	};

	if (error) {
		return <div>{error}</div>;
	}

	return (
		<>
			<Navbar />
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
