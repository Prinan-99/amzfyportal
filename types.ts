
export enum UserRole {
  CUSTOMER = 'customer',
  SELLER = 'seller',
  ADMIN = 'admin'
}

export interface PortalOption {
  role: UserRole;
  title: string;
  description: string;
  icon: string;
  color: string;
  link: string;
}
