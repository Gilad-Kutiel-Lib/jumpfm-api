export interface Suggestion {
    value: string
    html: string
}

export interface DialogSpec {
    onDialogOpen: (input: HTMLInputElement) => void
    label: string
    onOpen?: (input: HTMLInputElement) => void
    onChange?: (val: string) => Suggestion[]
    onAccept: (val: string, sug: Suggestion) => void
}

export interface Dialog {
    open(spec: DialogSpec): void
}

export interface Settings {
    getStr(key: string, defaultValue: string): string
}

export interface Item {
    classes: string[]
    path: string
}

export interface Url {
    protocol: string
    path: string
}

export interface Panel {
    getSelectedItemsPaths(): string[]
    getUrl(): Url
    getItems(): Item[]
}

export interface StatusBar {
    info(key: string, txt: string, clearTimeout?: number): void
}

export interface JumpFm {
    readonly statusBar: StatusBar
    readonly root: string
    readonly settings: Settings
    readonly dialog: Dialog
    readonly panels: Panel[]
    readonly nodegit

    opn(path: string): void
    bindKeys(name: string, keys: string[], action: () => void): {
        filterMode: () => void
    }
    getActivePanel(): Panel
}