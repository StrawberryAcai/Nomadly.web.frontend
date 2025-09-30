import { create } from "zustand";

export interface TravelState {
  destination: string;
  start_date: string;
  end_date: string;
  interests: string[];
  purpose: string;
  activeness: boolean;
  budget_detail: number;
  budget_preset: string;
  companies: string;
  preferred_time: string;
  work: string;
  bookmarked: string[];
}

// setter 타입 정의
type Setter<T> = <K extends keyof T>(key: K, value: T[K]) => void;

interface TravelStore extends TravelState {
  setField: Setter<TravelState>;
  addInterests: (interest: string) => void;
  removeInterests: (interest: string) => void;
  resetInterests: () => void;
  addBookmark: (place: string) => void;
  removeBookmark: (place: string) => void;
  reset: () => void;
}

export const useTravelStore = create<TravelStore>((set) => ({
  destination: "",
  start_date: "",
  end_date: "",
  interests: [],
  purpose: "",
  activeness: false,
  budget_detail: 0,
  budget_preset: "low",
  companies: "",
  preferred_time: "",
  work: "",
  bookmarked: [],

  setField: <K extends keyof TravelState>(key: K, value: TravelState[K]) =>
    set({ [key]: value } as Pick<TravelState, K>),
  addInterests: (interest) =>
    set((state) => ({ interests: [...state.interests, interest] })),
  removeInterests: (interests) =>
    set((state) => ({ interests: state.interests.filter((p) => p !== interests) })),
  resetInterests: () => set(() => ({ interests: [] })),

  addBookmark: (place) =>
    set((state) => ({ bookmarked: [...state.bookmarked, place] })),
  removeBookmark: (place) =>
    set((state) => ({ bookmarked: state.bookmarked.filter((p) => p !== place) })),
  reset: () =>
    set({
      destination: "",
      start_date: "",
      end_date: "",
      interests: [],
      purpose: "",
      activeness: false,
      budget_detail: 0,
      budget_preset: "low",
      companies: "",
      preferred_time: "",
      work: "",
      bookmarked: [],
    }),
}));
