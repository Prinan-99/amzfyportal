
import React from 'react';
import { ShoppingBag, Store, ShieldCheck } from 'lucide-react';
import { UserRole, PortalOption } from './types';

export const PORTAL_OPTIONS: PortalOption[] = [
  {
    role: UserRole.CUSTOMER,
    title: 'Customer Panel',
    description: 'Shop the latest trends, track your orders, and manage your wishlist with ease.',
    icon: 'ShoppingBag',
    color: 'from-blue-500 to-indigo-600',
    link: 'https://amzify-v1-customer.vercel.app/'
  },
  {
    role: UserRole.SELLER,
    title: 'Seller Central',
    description: 'List your products, manage inventory, and scale your business globally.',
    icon: 'Store',
    color: 'from-emerald-500 to-teal-600',
    link: 'https://your-seller-hub-url.vercel.app/'
  },
  {
    role: UserRole.ADMIN,
    title: 'Super Admin',
    description: 'Complete control over the platform, user management, and advanced analytics.',
    icon: 'ShieldCheck',
    color: 'from-purple-600 to-pink-600',
    link: 'https://amzify-v1-admin.vercel.app/'
  }
];
