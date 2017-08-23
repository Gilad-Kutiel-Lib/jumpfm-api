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
    onChange?: (val: string) => Suggestion[]
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

    setIcon(icon: string): Item
    setSize(size: number): Item
    setTime(time: number): Item

    setHidden(hidden: boolean): void
    setSelected(selected: boolean): void
}

export interface Msg {
    dataTitle?: string
    txt: string
}

export interface Url {
    path: string
    protocol: string
    query: { [key: string]: any }
}

export interface JumpFm extends Bindable {
    // readonly dialog: Dialog
    // Electron.AllElectron
    readonly panels: Panel[]
    readonly electron
    // readonly package
    // readonly root: string
    // readonly settings: Settings
    // readonly statusBar: StatusBar

    getPanelActive: () => Panel
    getPanelPassive: () => Panel

    panelsSwap: () => void
    panelsSwitch: () => void
}

export interface Panel extends Bindable {
    filterBox: Filter

    cd(path: string): void
    cd(url: Url): void

    onCd: (then: () => void) => void
    onItemsAdded: (then: (newItems: Item[]) => void) => void


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

export interface Filter extends Bindable {
    focus(): void
    hide(): void
    onChange(handler: (val: string) => void): void
    // reset does not trigger onChange
    clear(): void
    set(val: string): void
    get(): string
}

export interface StatusBar {
    clear(key: string): void
    err(key: string, msg: Msg, clearTimeout?: number): void
    info(key: string, msg: Msg, clearTimeout?: number): void
    msg(classes: string[]): (kwy: string, msg: Msg, clearTimeout?: number) => void
    warn(key: string, msg: Msg, clearTimeout?: number): void
}