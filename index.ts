import { } from 'electron'

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

export interface PanelView {
    getRowCountInPage(): number
    showFilter(): void
    hideFilter(): void
    scroll(rowNum: number): void
}

export interface Panel {
    view: PanelView

    getSelectedItemsPaths(): string[]
    getUrl(): Url
    getPath(): string
    getItems(): Item[]
    listen(listener: PanelListener): void
    cd(path: string): void
    cd(url: Url): void
    setItems(items: Item[]): void
    itemFromPath(path: string): Item
    getCurItem(): Item
    getSelectedItems(): Item[]
    step(d: number, select?: boolean)
    getCur(): number
    selectAll(): void
    deselectAll(): void
    toggleSel(): void
    filter(substr: string): void
}

export interface StatusBar {
    msg(classes: string[]): (kwy: string, msg: Msg, clearTimeout?: number) => void
    info(key: string, msg: Msg, clearTimeout?: number): void
    warn(key: string, msg: Msg, clearTimeout?: number): void
    err(key: string, msg: Msg, clearTimeout?: number): void
    clear(key: string): void
}

export interface JumpFm {
    readonly package
    readonly statusBar: StatusBar
    readonly root: string
    readonly settings: Settings
    readonly dialog: Dialog
    readonly panels: Panel[]
    readonly nodegit
    readonly electron: Electron.AllElectron

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