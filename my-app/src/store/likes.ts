import { create } from "zustand";

type LikesStore = {
	likes: Set<string>;
	addLike: (id: string) => void;
	removeLike: (id: string) => void;
};

export const useLikesStore = create<LikesStore>((set) => ({
	likes: new Set(),
	addLike: (id: string) =>
		set((state) => ({ likes: new Set(state.likes).add(id) })),
	removeLike: (id: string) =>
		set((state) => {
			const newLikes = new Set(state.likes);
			newLikes.delete(id);
			return { likes: newLikes };
		}),
}));
