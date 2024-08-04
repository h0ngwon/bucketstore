import axios from "axios";
import { SortOption } from "../constants";
import { ApiResponse } from "../types/data.interface";

interface DataParams {
	length?: number;
	type?: keyof typeof SortOption;
	category?: number;
	page?: number;
}

export const fetchData = async ({
	length = 12,
	type = "newest",
	category = 25,
	page = 1,
}: DataParams): Promise<ApiResponse> => {
	const response = await axios.get<ApiResponse>("http://localhost:3001/api", {
		params: {
			length,
			type,
			category,
			page,
		},
	});
	return response.data;
};
