
export enum ServiceType {
  PRECISE = 'PRECISE',
  SURPRISE = 'SURPRISE'
}

export enum OrderStatus {
  ANALYZING = '待分析',
  DESIGNING = '设计中',
  PRODUCING = '制作中',
  SHIPPED = '已发货',
  COMPLETED = '已完成'
}

export interface GarmentAnalysis {
  material: { name: string; percentage: number }[];
  colors: string[];
  condition: 'Excellent' | 'Good' | 'Fair';
  recommendationIndex: number;
  suggestions: UpcyclingOption[];
}

export interface UpcyclingOption {
  id: string;
  title: string;
  description: string;
  previewUrl: string;
  estimatedPrice: number;
}

export interface Order {
  id: string;
  garmentImage: string;
  serviceType: ServiceType;
  status: OrderStatus;
  date: string;
  story?: string;
}
