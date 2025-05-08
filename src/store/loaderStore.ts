import { create } from "zustand";

interface LoaderState {
    isVisible: boolean;
    showLoader: () => void;
    hideLoader: () => void;
}

const loaderStore = create<LoaderState>((set) => ({
    isVisible: false,
    showLoader: () => set({ isVisible: true }),
    hideLoader: () => set({ isVisible: false }),
}));

export default loaderStore;