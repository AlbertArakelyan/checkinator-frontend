export interface IPlanItem {
  name: string;
  _id: string;
  created_at: string;
  updated_at: string;
}

export interface IPlan {
  _id: string;
  name: string;
  price: number;
  planItems: IPlanItem[];
  color: string;
  created_at: string;
  updated_at: string;
}
