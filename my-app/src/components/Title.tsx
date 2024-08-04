type Props = {
	title?: string;
};

const Title = ({ title = "티셔츠" }: Props) => {
	return (
		<div className="hidden sm:block sm:h-[108px] mt-5 mb-[30px] px-5  text-black text-[90px] font-bold">
			{title}
		</div>
	);
};

export default Title;
