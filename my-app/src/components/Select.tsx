import React, { useEffect, useRef, useState } from "react";
import { FaSort } from "react-icons/fa";
import { twMerge } from "tailwind-merge"; // Import twMerge
import { SortOption } from "../constants";

type SelectProps = {
	value: keyof typeof SortOption;
	onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({ value, onChange }: SelectProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	const handleOptionClick = (option: keyof typeof SortOption) => {
		const event = {
			target: { value: option },
		} as React.ChangeEvent<HTMLSelectElement>;
		onChange(event);
		setIsOpen(false);
	};

	const handleClickOutside = (event: MouseEvent) => {
		if (ref.current && !ref.current.contains(event.target as Node)) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div ref={ref} className="relative w-[120px]">
			<button
				onClick={() => setIsOpen(!isOpen)}
				className={twMerge(
					"w-full bg-gray-100 text-left flex items-center justify-between p-2 rounded-3xl",
					isOpen && "bg-black text-white"
				)}
			>
				<span>{SortOption[value]}</span>
				<FaSort className="ml-2" />
			</button>
			{isOpen && (
				<ul className="absolute bg-white border border-gray-300 mt-1 w-full rounded shadow-lg z-10">
					{(
						Object.keys(SortOption) as Array<
							keyof typeof SortOption
						>
					).map((key) => (
						<li
							key={key}
							onClick={() => handleOptionClick(key)}
							className="p-2 hover:bg-gray-200 cursor-pointer"
						>
							{SortOption[key]}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Select;
