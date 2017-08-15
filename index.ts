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
    icon: string
    path: string
    name: string
    size: number
    mtime: number
    sel: boolean
    classes: string[]
}

export interface Msg {
    txt: string
    dataTitle?: string
}

export interface StyledMsg extends Msg {
    classes: string[]
}

export interface Url {
    protocol: string
    path: string
    query: { [key: string]: any }
}

export interface PanelListener {
    onPanelCd?: (url?: Url) => void
    onPanelItemsSet?: () => void
}

export interface Panel {
    getSelectedItemsPaths(): string[]
    getUrl(): Url
    getPath(): string
    getItems(): Item[]
    listen(listener: PanelListener): void
    cd(path: string): void
}

export interface StatusBar {
    info(key: string, msg: Msg, clearTimeout?: number): void
    warn(key: string, msg: Msg, clearTimeout?: number): void
    err(key: string, msg: Msg, clearTimeout?: number): void
    clear(key: string): void
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
    getPassivePanel(): Panel
}