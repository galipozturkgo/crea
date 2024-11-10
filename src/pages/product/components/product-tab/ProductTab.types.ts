export type ProductTabs = 'details' | 'reviews';

export interface ProductTabProps {
  activeTab: string;
  setActiveTab: (tab: ProductTabs) => void;
}
