import { create } from "zustand";
import type { ReactNode } from "react";

export type ToastType = "error" | "success" | "info" | "warning";

export interface ToastItem {
  id: string;
  message: ReactNode;
  type: ToastType;
  duration: number;
}

interface ToastState {
  toasts: ToastItem[];
  push: (message: ReactNode, opts?: { type?: ToastType; duration?: number }) => string;
  dismiss: (id: string) => void;
}

export const useToastStore = create<ToastState>((set) => ({
  toasts: [],
  push: (message, opts) => {
    const id = Math.random().toString(36).slice(2);
    set((s) => ({
      toasts: [
        ...s.toasts,
        { id, message, type: opts?.type ?? "info", duration: opts?.duration ?? 6000 },
      ],
    }));
    return id;
  },
  dismiss: (id) => set((s) => ({ toasts: s.toasts.filter((t) => t.id !== id) })),
}));

export const toast = {
  show: (message: ReactNode, type: ToastType = "info", duration?: number) =>
    useToastStore.getState().push(message, { type, duration }),
  success: (message: ReactNode, duration?: number) =>
    useToastStore.getState().push(message, { type: "success", duration }),
  error: (message: ReactNode, duration?: number) =>
    useToastStore.getState().push(message, { type: "error", duration }),
  info: (message: ReactNode, duration?: number) =>
    useToastStore.getState().push(message, { type: "info", duration }),
  warning: (message: ReactNode, duration?: number) =>
    useToastStore.getState().push(message, { type: "warning", duration }),
};
