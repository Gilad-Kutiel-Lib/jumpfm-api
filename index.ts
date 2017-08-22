export interface Suggestion {
    value: string
    html: string
}

export interface DialogSpec {
    label: string
    onChange?: (val: string) => Suggestion[]
    onOpen?: (input: HTMLInputElement) => void

    onAccept: (val: string, sug: Suggestion) => void
    onDialogOpen: (input: HTMLInputElement) => void
}

export interface Dialog {
    open(spec: DialogSpec): void
}

export interface Settings {
    getStr(key: string, defaultValue: string): string
    getNum(key: string, defaultValue: number): number
}

export interface File {
    path: string
    name: string
}

export interface Item {
    path: string
    name: string

    setIcon(icon: string): Item
    setSize(size: number): Item
    setTime(time: number): Item
    hide(): Item
    show(): Item
}

export interface Msg {
    dataTitle?: string
    txt: string
}

export interface StyledMsg extends Msg {
    classes: string[]
}

export interface Url {
    path: string
    protocol: string
    query: { [key: string]: any }
}

export interface PanelListener {
    onPanelCd?: (url?: Url) => void
    onPanelItemsSet?: () => void
}

export interface Panel {
    filter: Filter

    cd(path: string): void
    cd(url: Url): void
    deselectAll(): void
    getCurItem(): Item
    getItems(): Item[]
    getPath(): string
    getSelectedItems(): Item[]
    getUrl(): Url
    listen(listener: PanelListener): void
    selectAll(): void
    setItems(items: File[]): Panel
    step(d: number, select?: boolean)
    toggleCurSel(): void
}

export interface StatusBar {
    clear(key: string): void
    err(key: string, msg: Msg, clearTimeout?: number): void
    info(key: string, msg: Msg, clearTimeout?: number): void
    msg(classes: string[]): (kwy: string, msg: Msg, clearTimeout?: number) => void
    warn(key: string, msg: Msg, clearTimeout?: number): void
}

export interface Filter {
    focus(): void
    hide(): void
    onChange(handler: (val: string) => void): void
    // reset does not trigger onChange
    reset(): void
    set(val: string): void
    get(): string
}

export interface JumpFm {
    // readonly dialog: Dialog
    // Electron.AllElectron
    readonly electron
    // readonly package
    readonly panels: Panel[]
    // readonly root: string
    // readonly settings: Settings
    // readonly statusBar: StatusBar

    bindKeys(name: string, keys?: string[], action?: () => void): {
        filterMode(differentKeys?: string[],
            differentAction?: () => void,
        )
    }
    getActivePanel(): Panel
    getPassivePanel(): Panel
    swapPanels(): void
    switchPanel(): void
}