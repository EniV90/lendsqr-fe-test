
export type ID = string | number;

export type UserStatus =
  | "active"
  | "inactive"
  | "pending"
  | "blacklisted"
  | string;

// Minimal shape used on the Users table/list
export interface UserListItem {
  id: ID;
  organization: string;
  userName: string;
  email: string;
  phoneNumber: string;
  dateJoined: string; // from API
  status: UserStatus;
}

// Sub-objects for the detail page
export interface Profile {
  firstName: string;
  lastName: string;
  avatar?: string;
  phoneNumber: string;
  bvn: string;
  gender: string;
  address: string;
  currency: string;
  maritalStatus?: string;
  children?: string;
  typeOfResidence?: string;
  personalEmail?: string;
}

export interface Guarantor {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gender: string;
  address: string;
  accountNumber: string;
}

export interface Education {
  level: string;
  employmentStatus: string;
  sector: string;
  duration: string;
  officeEmail: string;
  monthlyIncome: string[]; // [min, max]
  loanRepayment: string;
}

export interface Socials {
  facebook: string;
  instagram: string;
  twitter: string;
}

// Full shape for the User Details page
export interface UserDetail extends UserListItem {
  accountNumber: string;
  accountBalance: string;
  profile: Profile;
  guarantor: Guarantor;
  education: Education;
  socials: Socials;
  loanRepayment: string;
}

// Auth/Login
export interface LoginFormData {
  email: string;
  password: string;
}

// Pagination component props
export interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  paginate: (page: number) => void;
}
