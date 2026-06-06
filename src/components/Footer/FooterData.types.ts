export interface FooterData {
    type: string;
    title: string;
    description?: string;
    items?: {
        label: string;
        url: string
    }[]
    email?: string;
    workingHours?: string;
}