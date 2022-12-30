export interface Country {
    name?: string;
    code?: string;
}

export interface Representative {
    name?: string;
    image?: string;
}

export interface Customer {
    vencimento: string | number | Date;
    id?: number;
    name?: string;
    country?: Country;
    company?: string;
    date?: string;
    status?: string;
    activity?: number;
    representative?: Representative;
}

export interface Provider {
    contratante?: string;
    email?: string;
    fornecedor?: string;
    obs?: string;
    valor?: string;
    vencimento?: string;
}
