export type filter = (item: Item) => boolean

export interface Bindable {
    bind(name: string, keys: string[], action: () => void): void
}

export interface Suggestion {
    value: string
    html: string
}

export interface DialogSpec {
    label: string
    suggest?: (val: string) => Suggestion[]
    onOpen?: (input: HTMLInputElement) => void
    onAccept: (val: string, sug: Suggestion) => void
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

    setAttribute(name: string, val?: string): Item

    setIcon(src: string): Item
    setSize(size: number): Item
    setTime(time: number): Item

    setHidden(hidden: boolean): void
    setSelected(selected: boolean): void
}

export interface Url {
    path: string
    protocol: string
    query: { [key: string]: any }
}

export interface JumpFm extends Bindable {
    readonly package
    readonly root: string
    readonly dialog: Dialog
    // Electron.AllElectron
    readonly electron
    readonly panels: Panel[]
    readonly settings: Settings
    readonly statusBar: StatusBar
    readonly argv: string[]

    getPanelActive: () => Panel
    getPanelPassive: () => Panel

    panelsSwap: () => void
    panelsSwitch: () => void

    watchStart(name: string, path: string, then: () => void)
    watchStop(name: string)
}

export interface Panel extends Bindable {
    filterBox: FilterBox

    cd(path: string): void
    cd(url: Url): void

    onCd: (then: () => void) => void
    onItemsAdded: (then: (newItems: Item[]) => void) => void
    onLoad: (then: () => void) => void

    step: (d: number, select?: boolean) => void
    stepPgUp: (select?: boolean) => void
    stepPgDown: (select?: boolean) => void
    stepStart: (select?: boolean) => void
    stepEnd: (select?: boolean) => void

    selectNone: () => void
    selectAll: () => void
    selectToggleCurrent: () => void

    getUrl: () => Url
    getItems: () => Item[]
    getSelectedItems: () => Item[]
    getCurrentItem: () => Item

    setItems: (items: File[]) => Panel

    filterSet: (name: string, filter: filter) => void
    filterRemove: (name: string) => void
}

export interface FilterBox extends Bindable {
    focus(): void
    hide(): void
    onChange(handler: (val: string) => void): void
    set(val: string): void
    get(): string
}

export type msgType = 'info' | 'warn' | 'err'

export interface Msg {
    setType: (type: msgType) => Msg
    setText: (txt: string) => Msg
    setTooltip: (txt: string) => Msg
    setClearTimeout: (timeout: number) => Msg
    setAttr(name: string, b: boolean)
}

export interface StatusBar {
    msg: (name: string) => Msg
    clear: (name: string) => void
}