export type ItemList = {
    slug: string;
    name: string;
    image?: any;
}

export type MultiItemList = {
    items: Record<string, string>;
    image?: any;
};