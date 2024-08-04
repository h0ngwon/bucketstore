import { IoIosArrowUp } from "react-icons/io";

type Props = {
	show: boolean;
	onClick: () => void;
};

const TopButton = ({ show, onClick }: Props) => {
	if (!show) return null;

	return (
		<button
			onClick={onClick}
			className="fixed bottom-16 right-4 bg-black text-white p-2 rounded-full shadow-lg"
		>
			<IoIosArrowUp className="text-2xl" />
		</button>
	);
};

export default TopButton;