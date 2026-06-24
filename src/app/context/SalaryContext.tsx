import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Labour {
  id: string;
  name: string;
  salary: number;
  createdAt: Date;
}

interface SalaryContextType {
  labours: Labour[];
  addLabour: (name: string, salary: number) => void;
  updateLabour: (id: string, name: string, salary: number) => void;
  deleteLabour: (id: string) => void;
}

const SalaryContext = createContext<SalaryContextType | undefined>(undefined);

export function SalaryProvider({ children }: { children: ReactNode }) {
  const [labours, setLabours] = useState<Labour[]>([]);

  const addLabour = (name: string, salary: number) => {
    const newLabour: Labour = {
      id: Date.now().toString(),
      name,
      salary,
      createdAt: new Date(),
    };
    setLabours([...labours, newLabour]);
  };

  const updateLabour = (id: string, name: string, salary: number) => {
    setLabours(
      labours.map((labour) =>
        labour.id === id ? { ...labour, name, salary } : labour
      )
    );
  };

  const deleteLabour = (id: string) => {
    setLabours(labours.filter((labour) => labour.id !== id));
  };

  return (
    <SalaryContext.Provider value={{ labours, addLabour, updateLabour, deleteLabour }}>
      {children}
    </SalaryContext.Provider>
  );
}

export function useSalary() {
  const context = useContext(SalaryContext);
  if (!context) {
    throw new Error('useSalary must be used within a SalaryProvider');
  }
  return context;
}
