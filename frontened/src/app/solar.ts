export interface Solar {
  id?: number;
  fullName: string | null;
  phone: string | null;
  email: string | null;
  location: string | null;
  propertyType: string | null;
  systemSizeKw: number | null;
  source: string | null;
  status: string | null;
  createdAt?: string;
  updatedAt?: string;
}
