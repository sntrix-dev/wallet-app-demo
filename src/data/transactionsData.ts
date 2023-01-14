export interface TransactionData {
    id: string,
    // userId: number,
    type: "debit" | "credit"
    amount: number
    merchant: string,
    category: "re-charge" | "online-shopping" | "investment" | "account-transfer"
    cardId: number,
    date: string
}

export const transactionsData: TransactionData[] = [
    {
        id: "ACRAF23DB3C4G001",
        amount: 12,
        cardId: 1,
        category: "re-charge",
        merchant: "Jio",
        type: "debit",
        // userId: 1
        date: "04 Jan 2023"
    },
    {
        id: "ACRAF23DB3C4G002",
        amount: 100,
        cardId: 1,
        category: "investment",
        merchant: "Small Case",
        type: "debit",
        // userId: 1
        date: "04 Jan 2023"
    },
    {
        id: "ACRAF23DB3C4G003",
        amount: 18000,
        cardId: 1,
        category: "account-transfer",
        merchant: "XYZ Company Pvt. Ltd.",
        type: "credit",
        // userId: 1
        date: "04 Jan 2023"
    },
    {
        id: "ACRAF23DB3C4G004",
        amount: 3650,
        cardId: 1,
        category: "account-transfer",
        merchant: "William Drake",
        type: "debit",
        // userId: 1
        date: "29 Dec 2022"
    },
    {
        id: "ACRAF23DB3C4G005",
        amount: 400,
        cardId: 1,
        category: "investment",
        merchant: "Small Case",
        type: "debit",
        // userId: 1
        date: "24 Dec 2022"
    },
    {
        id: "ACRAF23DB3C4G006",
        amount: 1000,
        cardId: 1,
        category: "account-transfer",
        merchant: "Jenna",
        type: "debit",
        // userId: 1
        date: "22 Dec 2022"
    },
    {
        id: "ACRAF23DB3C4G007",
        amount: 600,
        cardId: 1,
        category: "online-shopping",
        merchant: "Amazon",
        type: "debit",
        // userId: 1
        date: "14 Dec 2022"
    },
    {
        id: "ACRAF23DB3C4G008",
        amount: 800,
        cardId: 1,
        category: "online-shopping",
        merchant: "Amazon",
        type: "debit",
        // userId: 1
        date: "14 Dec 2022"
    },
    {
        id: "ACRAF23DB3C4G009",
        amount: 12,
        cardId: 1,
        category: "re-charge",
        merchant: "Jio",
        type: "debit",
        // userId: 1
        date: "03 Dec 2022"
    },
    {
        id: "ACRAF23DB3C4G0010",
        amount: 23000,
        cardId: 1,
        category: "account-transfer",
        merchant: "XYZ Company Pvt. Ltd.",
        type: "credit",
        // userId: 1
        date: "02 Dec 2022"
    }
]