import { create } from 'zustand'
import { IToggleContent, IToggleStaticContent } from './interfaces'


  export const useToggleContent = create<IToggleContent>(set => ({
    isVisible: false,
    setContent: (value) => set(() => ({ isVisible: value })),
  }));

  export const useToggleStaticContent = create<IToggleStaticContent>(set => ({
    isPlusVisible: false,
    setStaticContent: (value) => set(() => ({ isPlusVisible: value })),
  }));