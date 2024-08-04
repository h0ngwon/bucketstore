import { useEffect, useRef } from "react";

const useIntersection = (callback: () => void) => {
	const observerRef = useRef<IntersectionObserver | null>(null);
	const targetRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (observerRef.current) observerRef.current.disconnect();

		observerRef.current = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					callback();
				}
			},
			{ threshold: 1.0 }
		);

		if (targetRef.current) observerRef.current.observe(targetRef.current);

		return () => {
			if (observerRef.current) observerRef.current.disconnect();
		};
	}, [callback]);

	return targetRef;
};

export default useIntersection;
