import path from "path";

export type SofasData = {
  id: number;
  images: string;
  name: string;
}
export interface Tname { 
  name: string;
}
export interface Tnames { 
  name: string;
  names: string
}
export interface T {
  name1: string,
  name2: string,
  name3: string,
  name4: string,
  name5: string,
  name6: string,
  name7: string,
  name8: string,
  name9: string,
}
export type Images = {
    name?: {
      str: string;
      srcset: string;
      srcse: string;
      texts: string;
      skidka: string;
      cost: string;
      line: string;
    }[];
  };
  export type SofasType = {
      id: number;
      label: string;
      images: string;
      images2: string;
      images3: string;
      images4: string;
      image5: string;
      videos1: string;
      Height: number;
      Width: number;
      ArmDimensions_HWD: string;
      SeatDimensions_HWD: string;
      LegHeight_CM: number;
      PackagingDimensions: string;
      Weight_KG: number;
      Assembly: string;
      NumberOfSeats: string;
      CaringInstructions: string;
      Material: string;
      Assemblys: string;
      description: string;
      customerReviews: string;
      chair: string;
      cost: string;
  }
 