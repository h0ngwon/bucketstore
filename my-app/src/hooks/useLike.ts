import { useState } from "react";
import { useLikesStore } from "../store/likes";

const useLike = (productId: string) => {
	const { likes, addLike, removeLike } = useLikesStore();
	const [isLiked, setIsLiked] = useState(likes.has(productId));

	const handleLike = async () => {
		try {
			const response = await fetch("http://localhost:3001/like", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
			});

			if (response.ok) {
				if (isLiked) {
					removeLike(productId);
				} else {
					addLike(productId);
				}
				setIsLiked(!isLiked);
			} else {
				console.error("Failed to like the product");
			}
		} catch (error) {
			console.error("Error liking the product:", error);
		}
	};

	return { isLiked, handleLike };
};

export default useLike;
