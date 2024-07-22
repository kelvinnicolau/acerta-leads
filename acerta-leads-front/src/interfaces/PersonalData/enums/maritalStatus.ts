export enum MARITAL_STATUS {
    SINGLE = 'solteiro',
    MARRIED = 'casado',
    DIVORCED = 'divorciado',
    WIDOWER = 'viúvo',
}

export const MARITAL_STATUS_OPTIONS = Object.entries(MARITAL_STATUS).map(([key, value]) => ({
    value,
    label: value.charAt(0).toUpperCase() + value.slice(1),
}));
