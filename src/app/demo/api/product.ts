interface InventoryStatus {
    label: string;
    value: string;
}

export interface Product {
    id?: string;
    contratante?: string;
    email?: string;
    fornecedor?: string;
    obs?: string;
    valor?: string;
    vencimento?: string;
    inventoryStatus?: InventoryStatus;
}
