import { create } from "zustand";
import type { ReactNode } from "react";

export interface ConfirmOptions {
  title: string;
  message: ReactNode;
  confirmText?: string;
  cancelText?: string;
  danger?: boolean;
  onConfirm: () => void | Promise<void>;
  onCancel?: () => void;
}

interface ConfirmState {
  isOpen: boolean;
  options: ConfirmOptions | null;
  isLoading: boolean;
  confirm: (options: ConfirmOptions) => void;
  close: () => void;
  setLoading: (loading: boolean) => void;
}

export const useConfirmStore = create<ConfirmState>((set) => ({
  isOpen: false,
  options: null,
  isLoading: false,
  confirm: (options) => set({ isOpen: true, options, isLoading: false }),
  close: () => set({ isOpen: false, options: null, isLoading: false }),
  setLoading: (isLoading) => set({ isLoading }),
}));

export const confirm = (options: ConfirmOptions) => useConfirmStore.getState().confirm(options);
