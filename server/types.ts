export interface Account {
  account_id: string;
  balances: {
    available: number;
    current: number;
    iso_currency_code: "USD";
  };
  name: string;
  official_name: string;
  subtype: string;
  type: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface Transaction {
  account_id: string;
  amount: number;
  iso_currency_code: "USD";
  category_id: string;
  date: string;
  merchant_name: string;
  merchant_id: string;
  logo_url: string;
  website: string;
  payment_channel: string;
  pending: boolean;
}

export enum TrackerType {
  SAVING = 'saving',
  SPENDING = 'spending',
}

export enum Cadence {
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
}

// export enum SpendingCategory {
//   TRANSPORT = 'transport',
//   FOOD = 'food',
//   SHOPPING = 'shopping',
//   EDUCATION = 'education',
//   RENT = 'rent',
//   BILLS = 'bills',
// }

export type SpendingCategory = string;

export interface Tracker {
  id: string;
  label: string;
  balance: number;
  goal: number;
  type: TrackerType;
  cadence: Cadence;
  category?: SpendingCategory;
}