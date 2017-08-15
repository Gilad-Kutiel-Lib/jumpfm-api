
export interface Dialog {
    open(dialog: {
        onDialogOpen: (input: HTMLInputElement) => void
    }): void
}

export interface Settings {
    getStr(key: string, defaultValue: string): string
}

export interface Item {

}

export interface Panel {
    getSelectedItemsPaths(): string[]
}

export interface StatusBar {
    info(key: string, txt: string, clearTimeout?: number): void
}

export interface JumpFm {
    readonly statusBar: StatusBar
    readonly root: string
    readonly settings: Settings
    readonly dialog: Dialog

    opn(path: string): void
    bindKeys(name: string, keys: string[], action: () => void): {
        filterMode: () => void
    }
    getActivePanel(): Panel
}