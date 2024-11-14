export interface Tprops {
    count: number; 
}
export interface Ttype {
    type: 'increment' | 'decrement' | 'refresh'; 
    payload?: number;
}
export const initialState: Tprops = { count: 0 }; 
export function reducer(state: Tprops, action: Ttype) {
    switch (action.type) {
      case 'increment':
        return { count: state.count + (action.payload || 0) };
      case 'decrement':
        return { count: Math.max(1, state.count - (action.payload || 1)) };
      case 'refresh':
        return { count: 0 }; 
      default:
        return state;
    }
}
// === mock and Type ===
export interface datatestT {
    img: string;
    text: string;
    cost: string;
    seil: string;
} 
export const datatest = [
    {
      img: 'https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185',
      text: 'ebro bedside table',
      cost: '$250',
      seil: 'ebro bedside table'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185',
      text: 'Tirado chair',
      cost: '$280',
      seil: 'ebro bedside table',
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185',
      text: 'caleido lamp',
      cost: '$355',
      seil: 'ebro bedside table',
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185',
      text: 'caleido lamp',
      cost: '$240',
      seil: 'ebro bedside table',
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185',
      text: 'emmi set',
      cost: '$200',
      seil: 'ebro bedside table',
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185',
      text: 'textiles',
      cost: '$260',
      seil: 'ebro bedside table',
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185',
      text: 'Sofas set',
      cost: '$230',
      seil: 'ebro bedside table',
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185',
      text: 'beds set',
      cost: '$210',
      seil: 'ebro bedside table',
    },
];