export type ItemList = {
    name: string;
    image?: any;
}

export type MultiItemList = {
    items: Record<string, ItemList|undefined>;
    image?: any;
};