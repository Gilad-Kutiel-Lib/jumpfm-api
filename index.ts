
export interface Settings {
    getStr(key: string, defaultValue: string): string
}

export interface StatusBar {
    info(key: string, txt: string): void
}

export interface JumpFm {
    readonly statusBar: StatusBar
    readonly root: string
    readonly settings: Settings
}