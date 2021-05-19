export interface Policy {
  name: string;
  category: string;
  favorite: boolean;
  version: string;
  status: "success" | "danger" | "standard";
  group: "pending" | "attested";
}
