import { useState } from "react";
import { likeProduct } from "../apis/like";
import { useLikesStore } from "../store/likes";

const useLike = (productId: string) => {
	const { likes, addLike, removeLike } = useLikesStore();
	const [isLiked, setIsLiked] = useState(likes.has(productId));

	const handleLike = async () => {
		try {
			const success = await likeProduct(productId);

			if (success) {
				if (isLiked) {
					removeLike(productId);
				} else {
					addLike(productId);
				}
				setIsLiked(!isLiked);
			}
		} catch (error) {
			console.error("Error liking the product:", error);
		}
	};

	return { isLiked, handleLike };
};

export default useLike;
