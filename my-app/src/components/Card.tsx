import { memo } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import useLike from "../hooks/useLike";
import { Product } from "../types/data.interface";

type Props = {
	product: Product;
};

const Card = ({ product }: Props) => {
	const { isLiked, handleLike } = useLike(product.code);

	return (
		<div className="relative flex-none">
			<img
				src={product.url}
				alt={product.name}
				className="w-full object-cover"
			/>
			<button
				onClick={handleLike}
				className="absolute top-2 right-2 text-2xl"
			>
				{isLiked ? <AiFillHeart color="red" /> : <AiOutlineHeart />}
			</button>
			<div className="p-4">
				<h3 className="text-lg font-bold">{product.brandName}</h3>
				<p className="text-sm text-gray-600">{product.name}</p>
				<div className="mt-2">
					<span className="text-xl font-bold text-black">
						{product.price.real.toLocaleString()}원
					</span>
					<span className="text-sm text-gray-500 line-through ml-2">
						{product.price.tag.toLocaleString()}원
					</span>
				</div>
			</div>
		</div>
	);
};

export default memo(Card);
