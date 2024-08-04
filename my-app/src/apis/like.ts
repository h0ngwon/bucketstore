export const likeProduct = async (productId: string): Promise<boolean> => {
	const response = await fetch("http://localhost:3001/like", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ productId }),
	});

	if (!response.ok) {
		throw new Error("Failed to like the product");
	}

	return response.ok;
};
