const data = [
  {
    id: 0,
    value: "--- Please select ---",
  },
  {
    id: 1,
    label: "Manufacturing ",
    value: "Manufacturing",
  },
  {
    id: 2,
    label: "Electronics and Optics",
    value: "Electronics and Optics",
  },
  {
    id: 3,
    label: "Food and Beverage",
    value: "Food and Beverage",
  },
  {
    id: 4,
    label: "Bakery confectionery products",
    value: "Bakery confectionery products",
  },
  {
    id: 5,
    label: "Beverages",
    value: "Beverages",
  },
  {
    id: 6,
    label: "Fish fish products",
    value: "Fish fish products",
  },
  {
    id: 7,
    label: "Meat &amp; meat products",
    value: "Meat meat products",
  },
  {
    id: 8,
    label: "Milk  dairy products",
    value: "Milk dairy products",
  },
  {
    id: 9,
    label: "Sweets snack food",
    value: "Sweets snack food",
  },
  {
    id: 10,
    label: "Furniture",
    value: "Furniture",
  },
  {
    id: 11,
    label: "Bathroom/sauna",
    value: "Bathroom/sauna",
  },
  {
    id: 12,
    label: "Bedroom",
    value: "Bedroom",
  },
  {
    id: 13,
    label: "Childrenâ€™s room",
    value: "Childrenâ€™s room",
  },
  {
    id: 14,
    label: "Kitchen",
    value: "Kitchen",
  },
  {
    id: 15,
    label: "Living room",
    value: "Living room",
  },
  {
    id: 16,
    label: "office",
    value: "office",
  },
  {
    id: 17,
    label: "Other (Furniture)",
    value: "Other (Furniture)",
  },
  {
    id: 18,
    label: "Project furniture",
    value: "Project furniture",
  },
  {
    id: 19,
    label: "Machinery",
    value: "Machinery",
  },
  {
    id: 20,
    label: "Machinery components",
    value: "Machinery components",
  },
  {
    id: 21,
    label: "Machinery equipment/tools",
    value: "Machinery equipment/tools",
  },
  {
    id: 22,
    label: " Manufacture of machinery",
    value: " Manufacture of machinery",
  },
  {
    id: 23,
    label: "Maritime",
    value: "Maritime",
  },
  {
    id: 24,
    label: "Aluminium and steel workboats    ",
    value: "Aluminium and steel workboats    ",
  },
  {
    id: 25,
    label: "Boat/Yacht building",
    value: "Boat/Yacht building",
  },
  {
    id: 26,
    label: "Ship repair and conversion   ",
    value: "Ship repair and conversion ",
  },
  {
    id: 27,
    label: "Metal structures",
    value: "Metal structures",
  },
  {
    id: 28,
    label: "Other ",
    value: "Other ",
  },
  {
    id: 29,
    label: "   Repair and maintenance service  ",
    value: "   Repair and maintenance service  ",
  },
    {
    id: 30,
    label: "Metalworking",
    value: "Metalworking",
  },
  {
    id: 31,
    label: "Construction of metal structures",
    value: "Construction of metal structures",
  },
  {
    id: 32,
    label: "Houses and buildings  ",
    value: "Houses and buildings  ",
  },
  {
    id: 33,
    label: "Metal products",
    value: "Metal products",
  },
  {
    id: 34,
    label: "Metal works",
    value: "Metal works",
  },
  {
    id: 35,
    label: "CNC-machining",
    value: "CNC-machining",
  },
  {
    id: 36,
    label: " Forgings, Fasteners  ",
    value: " Forgings, Fasteners  ",
  },
  {
    id: 37,
    label: " Gas, Plasma, Laser cutting",
    value: " Gas, Plasma, Laser cutting",
  },
  {
    id: 38,
    label: "Gas, Plasma, Laser cutting",
    value: "Gas, Plasma, Laser cutting",
  },
  {
    id: 39,
    label: "MIG, TIG, Aluminum welding  ",
    value: "MIG, TIG, Aluminum welding  ",
  },
  {
    id: 40,
    label: "Plastic and Rubber",
    value: "Plastic and Rubber",
  },
  {
    id: 41,
    label: "Packaging",
    value: "Packaging",
  },
  {
    id: 42,
    label: "Plastic goods ",
    value: "Plastic goods ",
  },
  {
    id: 43,
    label: "Plastic processing technology",
    value: "Plastic processing technology",
  },
  {
    id: 44,
    label: "Blowing",
    value: "Blowing",
  },
  {
    id: 45,
    label: "Moulding",
    value: "Moulding",
  },
  {
    id: 46,
    label: "Plastics welding and processing",
    value: "Plastics welding and processing",
  },
  {
    id: 47,
    label: "Plastic profiles ",
    value: "Plastic profiles ",
  },
  {
    id: 48,
    label: "Printing",
    value: "Printing",
  },
  {
    id: 49,
    label: "Advertising",
    value: "Advertising",
  },
  {
    id: 50,
    label: "Book/Periodicals printing ",
    value: "Book/Periodicals printing ",
  },
  {
    id: 51,
    label: "Ship repair and conversion ",
    value: "Ship repair and conversion ",
  },
  {
    id: 52,
    label: "Metal structures ",
    value: "Metal structures ",
  },
  {
    id: 53,
    label: "Labelling and packaging printing ",
    value: "Labelling and packaging printing ",
  },
  {
    id: 54,
    label: "Textile and Clothing ",
    value: "Textile and Clothing ",
  },
   {
    id: 55,
    label: "Clothing",
    value: "Clothing",
  },
   {
    id: 56,
    label: "Textile",
    value: "Textile",
  }, {
    id: 57,
    label: "Wood",
    value: "Wood",
  },

   {
    id: 58,
    label: "Other (Wood)",
    value: "Other (Wood)",
  }, {
    id: 59,
    label: " Wooden building materials ",
    value: " Wooden building materials ",
  },
  {
    id: 60,
    label: "Wooden houses",
    value: "Wooden houses",
  },
  {
    id: 61,
    label: "Other",
    value: "Other",
  },
  {
    id: 62,
    label: "Creative industries",
    value: "Creative industries",
  }, {
    id: 63,
    label: "Energy technology",
    value: "Energy technology",
  },
  {
    id: 64,
    label: "Environment",
    value: "Environment",
  },
  {
    id: 65,
    label: "Service",
    value: "Service",
  },
  {
    id: 66,
    label: "Business services",
    value: "Business services",
  },
    {
    id: 67,
    label: "Information Technology and Telecommunications",
    value: "Information Technology and Telecommunications",
  },
  {
    id: 68,
    label: "Data processing, Web portals, E-marketing",
    value: "Data processing, Web portals, E-marketing",
  },
  {
    id: 69,
    label: "Programming, Consultancy",
    value: "Programming, Consultancy",
  },
  {
    id: 70,
    label: " Software, Hardwar",
    value: " Software, Hardwar",
  },
    {
    id: 71,
    label: "Programming, Consultancy ",
    value: "Programming, Consultancy ",
  },
    {
    id: 72,
    label: "Telecommunications",
    value: "Telecommunications",
  },
    {
    id: 73,
    label: "Tourism",
    value: "Tourism",
  },
    {
    id: 74,
    label: "Translation services",
    value: "Translation services",
  },
    {
    id: 75,
    label: "Transport and Logistics",
    value: "Transport and Logistics",
  },
  {
    id: 76,
    label: "Air",
    value: "Air",
  },
  {
    id: 77,
    label: "Rail",
    value: "Rail",
  },
  {
    id: 78,
    label: "Road",
    value: "Road",
  },
  {
    id: 79,
    label: "Water",
    value: "Water",
  },


];
export default data;

// Manufacturing  
//   Construction materials    Electronics and Optics    Food and Beverage 
    //    Bakery & confectionery products        Beverages        Fish & fish products        Meat & meat products        Milk & dairy products        Other        Sweets & snack food  
    //   Furniture    
        // Bathroom/sauna        Bedroom        Childrenâ€™s room        Kitchen        Living room        Office        Other (Furniture)        Outdoor        Project furniture  
        //   Machinery      
        //   Machinery components        Machinery equipment/tools        Manufacture of machinery        Maritime          
        //   Aluminium and steel workboats            Boat/Yacht building            Ship repair and conversion   
            //  Metal structures        Other        Repair and maintenance service  
            //   Metalworking   
                //  Construction of metal structures        Houses and buildings        Metal products        Metal works     
                    //    CNC-machining            Forgings, Fasteners            Gas, Plasma, Laser cutting            MIG, TIG, Aluminum welding  
                    //   Plastic and Rubber     
                        //  Packaging        Plastic goods        Plastic processing technology        
                            // Blowing            Moulding            Plastics welding and processing        Plastic profiles   
                            //  Printing       
                            //  Advertising        Book/Periodicals printing        Labelling and packaging printing    
                            // Textile and Clothing      
                            //   Clothing        Textile    
                            // Wood     
                            //    Other (Wood)        Wooden building materials        Wooden houses 
                            // Other    
                            // Creative industries    Energy technology    Environment 
                            
                            // Service 
                               
                            // Business services Engineering    Information Technology and Telecommunications       
                            //  Data processing, Web portals, E-marketing        Programming, Consultancy        Software, Hardware        Telecommunications   
                            //  Tourism    Translation services    Transport and Logistics    
                                // Air        Rail        Road        Water
