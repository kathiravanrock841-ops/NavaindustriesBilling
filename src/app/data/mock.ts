import { LayoutDashboard, Users, Package, FileText, BarChart3, Settings, LogOut, FilePlus2, Mail, DollarSign, ShoppingCart } from 'lucide-react';

export const mockStats = {
  totalSales: 0,
  todaySales: 0,
  totalCustomers: 0,
  totalProducts: 0
};

export const mockCustomers = [];

export const mockProducts = [];

export const mockRecentBills = [];

const currentYear = new Date().getFullYear();

export const salesDataByYear: Record<number, any> = {
  [currentYear]: [],
};

export const salesData = salesDataByYear[currentYear];

export const menuItems = [
  { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { name: 'Create Invoice', path: '/create-invoice', icon: FilePlus2 },
  { name: 'Create Letter', path: '/create-letter', icon: Mail },
  { name: 'Customers', path: '/customers', icon: Users },
  { name: 'Products', path: '/products', icon: Package },
  { name: 'Invoices', path: '/invoices', icon: FileText },
  { name: 'Salary', path: '/salary', icon: DollarSign },
  { name: 'My Purchases', path: '/purchases', icon: ShoppingCart },
  { name: 'Reports', path: '/reports', icon: BarChart3 },
];
