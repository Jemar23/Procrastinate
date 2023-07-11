export interface IToggleContent {
    isVisible: boolean,
    setContent: (isVisible: boolean) => void
}

export interface IToggleStaticContent {
    isPlusVisible: boolean,
    setStaticContent: (isPlusVisible: boolean) => void
}

export interface IToggleYoutubeContent {
    isVisible: boolean,
    setYoutubeContent: (isVisible: boolean) => void
}

export interface IToggleTwitchContent {
    isVisible: boolean,
    setTwitchContent: (isVisible: boolean) => void
}