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
    getNum(key: string, defaultValue: number): number
}

export interface ItemSet {
    path: string
    name: string
}

export interface ItemGet {
    path: string
    name: string

    setIcon(icon: string): ItemGet
    setSize(size: number): ItemGet
    setTime(time: number): ItemGet
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
    // cd(path: string): void
    // cd(url: Url): void
    // deselectAll(): void
    // filter(substr: string): void
    // getCur(): number
    // getCurItem(): ItemGet
    getItems(): ItemGet[]
    getPath(): string
    // getSelectedItems(): ItemGet[]
    // getSelectedItemsPaths(): string[]
    getUrl(): Url
    // itemFromPath(path: string): ItemGet
    listen(listener: PanelListener): void
    // selectAll(): void
    setItems(items: ItemSet[]): Panel
    // step(d: number, select?: boolean)
    // toggleSel(): void
}

export interface StatusBar {
    clear(key: string): void
    err(key: string, msg: Msg, clearTimeout?: number): void
    info(key: string, msg: Msg, clearTimeout?: number): void
    msg(classes: string[]): (kwy: string, msg: Msg, clearTimeout?: number) => void
    warn(key: string, msg: Msg, clearTimeout?: number): void
}

export interface JumpFm {
    readonly package
    readonly statusBar: StatusBar
    readonly root: string
    readonly settings: Settings
    readonly dialog: Dialog
    readonly panels: Panel[]
    // Electron.AllElectron
    readonly electron

    bindKeys(name: string, keys?: string[], action?: () => void): {
        filterMode(differentKeys?: string[],
            differentAction?: () => void,
        )
    }
    getActivePanel(): Panel
    getActivePanelIndex(): 0 | 1
    getPassivePanel(): Panel
    switchPanel(): void
    swapPanels(): void
}