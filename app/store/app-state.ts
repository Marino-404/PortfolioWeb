"use client";
import { create } from "zustand";

export interface AppState {
    theme: boolean; // true = light, false = dark
    lang: boolean; // true = spanish, false = english
    changeTheme: (theme: boolean) => void;
    changeLang: (lang: boolean) => void;
}

export const useAppState = create<AppState>((set) => ({
    theme: true,
    lang: true,
    changeTheme: (theme: boolean) => set({ theme: theme }),
    changeLang: (lang: boolean) => set({ lang: lang }),
}));