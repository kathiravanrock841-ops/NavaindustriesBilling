import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Purchase {
  id: string;
  productName: string;
  amount: number;
  date: string;
  quantity: string;
  attachmentName: string;
  attachmentFile: string;
  createdAt: Date;
}

interface PurchasesContextType {
  purchases: Purchase[];
  addPurchase: (productName: string, amount: number, date: string, quantity: string, attachmentName: string, attachmentFile: string) => void;
  updatePurchase: (id: string, productName: string, amount: number, date: string, quantity: string, attachmentName: string, attachmentFile: string) => void;
  deletePurchase: (id: string) => void;
}

const PurchasesContext = createContext<PurchasesContextType | undefined>(undefined);

export function PurchasesProvider({ children }: { children: ReactNode }) {
  const [purchases, setPurchases] = useState<Purchase[]>([]);

  const addPurchase = (productName: string, amount: number, date: string, quantity: string, attachmentName: string, attachmentFile: string) => {
    const newPurchase: Purchase = {
      id: Date.now().toString(),
      productName,
      amount,
      date,
      quantity,
      attachmentName,
      attachmentFile,
      createdAt: new Date(),
    };
    setPurchases([...purchases, newPurchase]);
  };

  const updatePurchase = (id: string, productName: string, amount: number, date: string, quantity: string, attachmentName: string, attachmentFile: string) => {
    setPurchases(
      purchases.map((purchase) =>
        purchase.id === id ? { ...purchase, productName, amount, date, quantity, attachmentName, attachmentFile } : purchase
      )
    );
  };

  const deletePurchase = (id: string) => {
    setPurchases(purchases.filter((purchase) => purchase.id !== id));
  };

  return (
    <PurchasesContext.Provider value={{ purchases, addPurchase, updatePurchase, deletePurchase }}>
      {children}
    </PurchasesContext.Provider>
  );
}

export function usePurchases() {
  const context = useContext(PurchasesContext);
  if (!context) {
    throw new Error('usePurchases must be used within a PurchasesProvider');
  }
  return context;
}
