
export interface ButtonData {
    label: string;
    description: string;
  }
  export const mockData = [
    { label: 'new in', 
      description: 'Latest arrivals and trends.' 
    },
    { label: 'sofas', 
      description: 'Comfortable and stylish sofas.' 
    },
    { label: 'tables', 
      description: 'Various styles of tables.' 
    },
    { label: 'beds', 
      description: 'Cozy beds for a good night sleep.' 
    },
    { label: 'lighting', 
      description: 'Modern lighting options.' 
    },
    { label: 'kitchen', 
      description: 'Kitchen essentials and decor.' 
    },
    { label: 'storage', 
      description: 'Storage solutions for every space.' 
    },
  ];


  export interface mockDatailType {
    label: string;
    img: string;
    imgURL: string;
    description: {
        id: number;
        desc: string;
    }[],
  }
  export const mockDatail = [
    { 
      label: 'new in', 
      img: "https://image2.lotteimall.com/goods/57/29/08/2326082957_L.jpg",
      imgURL: "https://dankz.com.au/cdn/shop/collections/SP57.57_Warwick_Nishi_Black_IMG1.jpg?v=1707790957&width=2400",
      description: [
        { id: 1, desc: "Modern Sofas" },
        { id: 2, desc: "Convertible Tables" },
        { id: 3, desc: "Ergonomic Beds" },
        { id: 4, desc: "Smart Lighting" },
        { id: 5, desc: "Innovative Storage" },
        { id: 6, desc: "Multi-functional Kitchen Islands" },
    ]
    },
    { 
      label: 'sofas', 
      img: "https://www.thebackstore.com/media/catalog/category/IDK_1.jpg",
      imgURL: "https://d2j6dbq0eux0bg.cloudfront.net/images/18704172/2941561589.jpg",
      description: [
        { id: 1, desc: "Recliner Sofas" },
        { id: 2, desc: "Sectional Sofas" },
        { id: 3, desc: "Sofa Beds" },
        { id: 4, desc: "Loveseats" },
        { id: 5, desc: "Chaise Lounges" },
        { id: 6, desc: "Modular Sofas" },
        { id: 7, desc: "Sleeper Sofas" },
        { id: 8, desc: "Futons" },
    ]
    },
    { 
      label: 'tables', 
      img: "https://www.imgcomfort.com/th/-/media/imgsite/category/relaxer/diecut/rm395_brando_l655_img1948.png?la=th-TH&h=550&w=451&mw=790&hash=4C49CD4E59CA5E5DE6FCC2B42AC287ED",
      imgURL: "https://wohlers.com.au/wp-content/uploads/2022/02/Luna-lowback-LS-Wohlers.jpg",
      description: [
        { id: 1, desc: "Coffee Tables" },
        { id: 2, desc: "Dining Tables" },
        { id: 3, desc: "Console Tables" },
        { id: 4, desc: "Side Tables" },
        { id: 5, desc: "Bar Tables" },
        { id: 6, desc: "Folding Tables" },
    ]
    },
    { 
      label: 'beds', 
      img: "https://www.shutterstock.com/image-photo/modern-peaceful-bedroom-zen-style-600nw-1106930285.jpg",
      imgURL: "https://www.imgcomfort.com/us/-/media/imgsite/tileteaserlinkwithimage/sp4100w.jpg?la=en&h=444&w=790&mw=790&hash=BC41B627BC6CCC49C91246D18F4555E9",
      description: [
        { id: 1, desc: "Platform Beds" },
        { id: 2, desc: "Storage Beds" },
        { id: 3, desc: "Canopy Beds" },
        { id: 4, desc: "Bunk Beds" },
        { id: 5, desc: "Sleigh Beds" },
        { id: 6, desc: "Murphy Beds" },
    ]
    },
    { 
      label: 'lighting', 
      img: "https://umage.com/cdn/shop/files/UMAGE_lifestyle_Faraday_medium_Faraday_large__1_600x.png?v=1691567784",
      imgURL: "https://images.squarespace-cdn.com/content/v1/58bf1dcde3df287015e9b9ea/1678148864756-6JTPWPKMJ8T04OQGUNJR/08+Pablo+Designs+-+Totem+-+Environmental+Image+-+06_300.jpg",
      description: [
        { id: 1, desc: "Pendant Lights" },
        { id: 2, desc: "Floor Lamps" },
        { id: 3, desc: "Table Lamps" },
        { id: 4, desc: "Wall Sconces" },
        { id: 5, desc: "Chandeliers" },
        { id: 6, desc: "Recessed Lighting" },
    ]
    },
    { 
      label: 'kitchen', 
      img: "https://plus.unsplash.com/premium_photo-1680382578857-c331ead9ed51?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2l0Y2hlbiUyMGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      imgURL: "https://imgix.cosentino.com/en-my/wp-content/uploads/2020/12/RS11284_Dekton-Kitchen-Bedrock-lpr-1.jpg?auto=format%2Ccompress&ixlib=php-3.3.0",
      description: [
        { id: 1, desc: "Kitchen Cabinets" },
        { id: 2, desc: "Kitchen Islands" },
        { id: 3, desc: "Pantry Storage" },
        { id: 4, desc: "Bar Stools" },
        { id: 5, desc: "Dining Sets" },
        { id: 6, desc: "Open Shelving" },
    ]
    },
    { 
      label: 'storage', 
      img: "https://mrnanyang.com/cdn/shop/files/1_dd6bfbf7-f6ac-4980-8120-1b8c719de6e9_1024x1024@2x.jpg?v=1689751440",
      imgURL: "https://www.bludot.com/media/catalog/category/WebM2_CategoryBrowsePageImages_Office_Storage_A1.jpg",
      description: [
        { id: 1, desc: "Closet Systems" },
        { id: 2, desc: "Storage Ottomans" },
        { id: 3, desc: "Bookshelves" },
        { id: 4, desc: "Wardrobes" },
        { id: 5, desc: "Storage Bins" },
        { id: 6, desc: "Floating Shelves" },
    ]
    }
  ];
  


