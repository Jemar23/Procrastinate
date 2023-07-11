import { create } from 'zustand'
import { IToggleContent, IToggleStaticContent, IToggleYoutubeContent, IToggleTwitchContent } from './interfaces'


  export const useToggleContent = create<IToggleContent>(set => ({
    isVisible: false,
    setContent: (value) => set(() => ({ isVisible: value })),
  }));

  export const useToggleStaticContent = create<IToggleStaticContent>(set => ({
    isPlusVisible: false,
    setStaticContent: (value) => set(() => ({ isPlusVisible: value })),
  }));

  export const useToggleYoutubeContent = create<IToggleYoutubeContent>(set => ({
    isVisible: false,
    setYoutubeContent: (value) => set(() => ({ isVisible: value}))
  }));

  export const useToggleTwitchContent = create<IToggleTwitchContent>(set => ({
    isVisible: false,
    setTwitchContent: (value) => set(() => ({ isVisible: value}))
  }));