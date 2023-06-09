import { create } from 'zustand'
import { IToggleContent } from './interfaces'


export const useToggleContent = create<IToggleContent>(set => ({
    isVisible: false,
    setContent: isVisible => set({ isVisible }),
  }));