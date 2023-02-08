export interface LinkMutation {
    url: string;
}

export interface ApiLink {
    _id: string;
    shortUrl: string;
    originalUrl: string;
}