export {};

declare global {
  interface FourthwallProduct {
    id: string;
    name: string;
    slug: string;
    description: string;
    state: {
      type: "AVAILABLE" | "SOLD_OUT";
    };
    access: {
      type: "PUBLIC" | "ARCHIVED";
    };
    images: {
      id: string;
      url: string;
      width: number;
      height: number;
    }[];
    variants: {
      id: string;
      name: string;
      sku: string;
      unitPrice: {
        value: number;
        currency: string;
      };
      compareAtPrice: {
        value: number;
        currency: string;
      };
      attributes: {
        description: string;
        color: {
          name: string;
          swatch: string;
        };
        size: {
          name: string;
        };
      };
      stock: {
        type: "UNLIMITED";
      };
      weight: {
        value: number;
        unit: string;
      };
      dimensions: {
        length: number;
        width: number;
        height: number;
        unit: string;
      };
      images: {
        id: string;
        url: string;
        width: number;
        height: number;
      }[];
    }[];
    createdAt: string;
    updatedAt: string;
  }
}
