export interface DataType {
    sofas: {
      modern: string[];
      recliners: string[];
      sectionals: string[];
      loveseats: string[];
    };
    chairs: {
      armchairs: string[];
      office: string[];
    };
    beds: {
      queen: string[];
      king: string[];
    };
    kitchen: {
      appliances: string[];
      cabinets: string[];
    };
    lighting: {
      table: string[];
      floor: string[];
    };
    storage: {
      shelves: string[];
      cabinets: string[];
    };
  }
  
  export const mockData: any = {
    sofas: {
      modern: ['Modern Sofa 1', 'Modern Sofa 2', 'Modern Sofa 3'],
      recliners: ['Recliner 1', 'Recliner 2', 'Recliner 3'],
      sectionals: ['Sectional 1', 'Sectional 2'],
      loveseats: ['Loveseat 1', 'Loveseat 2'],
    },
    chairs: {
      armchairs: ['Armchair 1', 'Armchair 2', 'Armchair 3'],
      office: ['Office Chair 1', 'Office Chair 2'],
    },
    beds: {
      queen: ['Queen Bed 1', 'Queen Bed 2'],
      king: ['King Bed 1', 'King Bed 2'],
    },
    kitchen: {
      appliances: ['Refrigerator', 'Oven'],
      cabinets: ['Kitchen Cabinet 1', 'Kitchen Cabinet 2'],
    },
    lighting: {
      table: ['Table Lamp 1', 'Table Lamp 2'],
      floor: ['Floor Lamp 1', 'Floor Lamp 2'],
    },
    storage: {
      shelves: ['Wooden Shelf 1', 'Wooden Shelf 2'],
      cabinets: ['Storage Cabinet 1', 'Storage Cabinet 2'],
    },
  };
  