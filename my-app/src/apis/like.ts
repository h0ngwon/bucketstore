import axios from "axios";

export const likeProduct = async (productId: string): Promise<boolean> => {
	try {
		const response = await axios.post(
			"http://localhost:3001/like",
			{ productId },
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		if (response.status !== 200) {
			throw new Error("Failed to like the product");
		}

		return true;
	} catch (error) {
		throw new Error("Failed to like the product");
	}
};
