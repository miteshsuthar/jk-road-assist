/* ========================================
   CAR BRANDS & MODELS DATABASE
   ======================================== */

export const CAR_BRANDS = [
  {
    id: "maruti",
    name: "Maruti Suzuki",
    shortName: "Maruti",
    color: "#1a3c8f",
    logo: "MS",
    popular: true,
  },
  {
    id: "hyundai",
    name: "Hyundai",
    shortName: "Hyundai",
    color: "#002c5f",
    logo: "H",
    popular: true,
  },
  {
    id: "tata",
    name: "Tata Motors",
    shortName: "Tata",
    color: "#486aae",
    logo: "T",
    popular: true,
  },
  {
    id: "honda",
    name: "Honda",
    shortName: "Honda",
    color: "#cc0000",
    logo: "H",
    popular: true,
  },
  {
    id: "toyota",
    name: "Toyota",
    shortName: "Toyota",
    color: "#eb0a1e",
    logo: "T",
    popular: true,
  },
  {
    id: "mahindra",
    name: "Mahindra",
    shortName: "Mahindra",
    color: "#e32726",
    logo: "M",
    popular: true,
  },
  {
    id: "kia",
    name: "Kia",
    shortName: "Kia",
    color: "#05141f",
    logo: "K",
    popular: true,
  },
  {
    id: "ford",
    name: "Ford",
    shortName: "Ford",
    color: "#003478",
    logo: "F",
    popular: true,
  },
  {
    id: "volkswagen",
    name: "Volkswagen",
    shortName: "VW",
    color: "#001e50",
    logo: "VW",
    popular: true,
  },
  {
    id: "renault",
    name: "Renault",
    shortName: "Renault",
    color: "#ffcc00",
    logo: "R",
    popular: true,
  },
  {
    id: "skoda",
    name: "Skoda",
    shortName: "Skoda",
    color: "#4ba82e",
    logo: "S",
    popular: false,
  },
  {
    id: "nissan",
    name: "Nissan",
    shortName: "Nissan",
    color: "#c3002f",
    logo: "N",
    popular: false,
  },
  {
    id: "mg",
    name: "MG Motor",
    shortName: "MG",
    color: "#c41230",
    logo: "MG",
    popular: false,
  },
  {
    id: "chevrolet",
    name: "Chevrolet",
    shortName: "Chevrolet",
    color: "#d1a332",
    logo: "C",
    popular: false,
  },
  {
    id: "bmw",
    name: "BMW",
    shortName: "BMW",
    color: "#1c69d4",
    logo: "B",
    popular: false,
  },
  {
    id: "mercedes",
    name: "Mercedes-Benz",
    shortName: "Mercedes",
    color: "#333333",
    logo: "MB",
    popular: false,
  },
  {
    id: "audi",
    name: "Audi",
    shortName: "Audi",
    color: "#bb0a30",
    logo: "A",
    popular: false,
  },
];

/* ========================================
   CAR MODELS BY BRAND
   type: "hatchback" | "sedan" | "suv" | "muv" | "luxury"
   ======================================== */

export const CAR_MODELS = {
  maruti: [
    { id: "swift", name: "Swift", type: "hatchback", fuelTypes: ["petrol"] },
    { id: "wagonr", name: "WagonR", type: "hatchback", fuelTypes: ["petrol", "cng"] },
    { id: "baleno", name: "Baleno", type: "hatchback", fuelTypes: ["petrol"] },
    { id: "alto", name: "Alto", type: "hatchback", fuelTypes: ["petrol", "cng"] },
    { id: "alto-k10", name: "Alto K10", type: "hatchback", fuelTypes: ["petrol", "cng"] },
    { id: "celerio", name: "Celerio", type: "hatchback", fuelTypes: ["petrol", "cng"] },
    { id: "ignis", name: "Ignis", type: "hatchback", fuelTypes: ["petrol"] },
    { id: "dzire", name: "Swift Dzire", type: "sedan", fuelTypes: ["petrol", "cng"] },
    { id: "ciaz", name: "Ciaz", type: "sedan", fuelTypes: ["petrol"] },
    { id: "ertiga", name: "Ertiga", type: "muv", fuelTypes: ["petrol", "cng"] },
    { id: "brezza", name: "Brezza", type: "suv", fuelTypes: ["petrol", "cng"] },
    { id: "s-presso", name: "S-Presso", type: "hatchback", fuelTypes: ["petrol", "cng"] },
    { id: "xl6", name: "XL6", type: "muv", fuelTypes: ["petrol"] },
    { id: "fronx", name: "Fronx", type: "suv", fuelTypes: ["petrol"] },
    { id: "jimny", name: "Jimny", type: "suv", fuelTypes: ["petrol"] },
    { id: "invicto", name: "Invicto", type: "suv", fuelTypes: ["petrol"] },
  ],
  hyundai: [
    { id: "i10", name: "Grand i10 Nios", type: "hatchback", fuelTypes: ["petrol", "cng"] },
    { id: "i20", name: "i20", type: "hatchback", fuelTypes: ["petrol", "diesel"] },
    { id: "santro", name: "Santro", type: "hatchback", fuelTypes: ["petrol", "cng"] },
    { id: "verna", name: "Verna", type: "sedan", fuelTypes: ["petrol"] },
    { id: "aura", name: "Aura", type: "sedan", fuelTypes: ["petrol", "cng"] },
    { id: "xcent", name: "Xcent", type: "sedan", fuelTypes: ["petrol", "diesel"] },
    { id: "creta", name: "Creta", type: "suv", fuelTypes: ["petrol", "diesel"] },
    { id: "venue", name: "Venue", type: "suv", fuelTypes: ["petrol", "diesel"] },
    { id: "tucson", name: "Tucson", type: "suv", fuelTypes: ["petrol", "diesel"] },
    { id: "alcazar", name: "Alcazar", type: "suv", fuelTypes: ["petrol", "diesel"] },
    { id: "exter", name: "Exter", type: "suv", fuelTypes: ["petrol", "cng"] },
  ],
  tata: [
    { id: "nexon", name: "Nexon", type: "suv", fuelTypes: ["petrol", "diesel"] },
    { id: "punch", name: "Punch", type: "suv", fuelTypes: ["petrol"] },
    { id: "altroz", name: "Altroz", type: "hatchback", fuelTypes: ["petrol", "diesel"] },
    { id: "tiago", name: "Tiago", type: "hatchback", fuelTypes: ["petrol", "cng"] },
    { id: "tigor", name: "Tigor", type: "sedan", fuelTypes: ["petrol", "cng"] },
    { id: "harrier", name: "Harrier", type: "suv", fuelTypes: ["diesel"] },
    { id: "safari", name: "Safari", type: "suv", fuelTypes: ["diesel"] },
    { id: "nexon-ev", name: "Nexon EV", type: "suv", fuelTypes: ["petrol"] },
  ],
  honda: [
    { id: "city", name: "City", type: "sedan", fuelTypes: ["petrol"] },
    { id: "amaze", name: "Amaze", type: "sedan", fuelTypes: ["petrol", "diesel"] },
    { id: "jazz", name: "Jazz", type: "hatchback", fuelTypes: ["petrol"] },
    { id: "wrv", name: "WR-V", type: "suv", fuelTypes: ["petrol", "diesel"] },
    { id: "elevate", name: "Elevate", type: "suv", fuelTypes: ["petrol"] },
    { id: "civic", name: "Civic", type: "sedan", fuelTypes: ["petrol", "diesel"] },
  ],
  toyota: [
    { id: "innova", name: "Innova Crysta", type: "muv", fuelTypes: ["petrol", "diesel"] },
    { id: "fortuner", name: "Fortuner", type: "suv", fuelTypes: ["petrol", "diesel"] },
    { id: "glanza", name: "Glanza", type: "hatchback", fuelTypes: ["petrol", "cng"] },
    { id: "urban-cruiser", name: "Urban Cruiser Hyryder", type: "suv", fuelTypes: ["petrol"] },
    { id: "etios", name: "Etios", type: "sedan", fuelTypes: ["petrol", "diesel"] },
    { id: "innova-hycross", name: "Innova Hycross", type: "muv", fuelTypes: ["petrol"] },
    { id: "hilux", name: "Hilux", type: "suv", fuelTypes: ["diesel"] },
  ],
  mahindra: [
    { id: "xuv300", name: "XUV300", type: "suv", fuelTypes: ["petrol", "diesel"] },
    { id: "xuv700", name: "XUV700", type: "suv", fuelTypes: ["petrol", "diesel"] },
    { id: "scorpio", name: "Scorpio N", type: "suv", fuelTypes: ["petrol", "diesel"] },
    { id: "thar", name: "Thar", type: "suv", fuelTypes: ["petrol", "diesel"] },
    { id: "bolero", name: "Bolero", type: "suv", fuelTypes: ["diesel"] },
    { id: "xuv500", name: "XUV500", type: "suv", fuelTypes: ["diesel"] },
    { id: "marazzo", name: "Marazzo", type: "muv", fuelTypes: ["diesel"] },
    { id: "xuv400", name: "XUV400 EV", type: "suv", fuelTypes: ["petrol"] },
  ],
  kia: [
    { id: "seltos", name: "Seltos", type: "suv", fuelTypes: ["petrol", "diesel"] },
    { id: "sonet", name: "Sonet", type: "suv", fuelTypes: ["petrol", "diesel"] },
    { id: "carens", name: "Carens", type: "muv", fuelTypes: ["petrol", "diesel"] },
    { id: "carnival", name: "Carnival", type: "muv", fuelTypes: ["diesel"] },
    { id: "ev6", name: "EV6", type: "suv", fuelTypes: ["petrol"] },
  ],
  ford: [
    { id: "ecosport", name: "EcoSport", type: "suv", fuelTypes: ["petrol", "diesel"] },
    { id: "figo", name: "Figo", type: "hatchback", fuelTypes: ["petrol", "diesel"] },
    { id: "aspire", name: "Aspire", type: "sedan", fuelTypes: ["petrol", "diesel"] },
    { id: "endeavour", name: "Endeavour", type: "suv", fuelTypes: ["diesel"] },
    { id: "freestyle", name: "Freestyle", type: "hatchback", fuelTypes: ["petrol", "diesel"] },
  ],
  volkswagen: [
    { id: "polo", name: "Polo", type: "hatchback", fuelTypes: ["petrol"] },
    { id: "vento", name: "Vento", type: "sedan", fuelTypes: ["petrol", "diesel"] },
    { id: "taigun", name: "Taigun", type: "suv", fuelTypes: ["petrol"] },
    { id: "virtus", name: "Virtus", type: "sedan", fuelTypes: ["petrol"] },
  ],
  renault: [
    { id: "kwid", name: "Kwid", type: "hatchback", fuelTypes: ["petrol"] },
    { id: "triber", name: "Triber", type: "muv", fuelTypes: ["petrol"] },
    { id: "kiger", name: "Kiger", type: "suv", fuelTypes: ["petrol"] },
    { id: "duster", name: "Duster", type: "suv", fuelTypes: ["petrol", "diesel"] },
  ],
  skoda: [
    { id: "kushaq", name: "Kushaq", type: "suv", fuelTypes: ["petrol"] },
    { id: "slavia", name: "Slavia", type: "sedan", fuelTypes: ["petrol"] },
    { id: "rapid", name: "Rapid", type: "sedan", fuelTypes: ["petrol", "diesel"] },
    { id: "octavia", name: "Octavia", type: "sedan", fuelTypes: ["petrol"] },
  ],
  nissan: [
    { id: "magnite", name: "Magnite", type: "suv", fuelTypes: ["petrol"] },
    { id: "kicks", name: "Kicks", type: "suv", fuelTypes: ["petrol"] },
  ],
  mg: [
    { id: "hector", name: "Hector", type: "suv", fuelTypes: ["petrol", "diesel"] },
    { id: "astor", name: "Astor", type: "suv", fuelTypes: ["petrol"] },
    { id: "gloster", name: "Gloster", type: "suv", fuelTypes: ["diesel"] },
    { id: "comet", name: "Comet EV", type: "hatchback", fuelTypes: ["petrol"] },
  ],
  chevrolet: [
    { id: "beat", name: "Beat", type: "hatchback", fuelTypes: ["petrol", "diesel"] },
    { id: "cruze", name: "Cruze", type: "sedan", fuelTypes: ["diesel"] },
    { id: "enjoy", name: "Enjoy", type: "muv", fuelTypes: ["petrol", "diesel"] },
    { id: "spark", name: "Spark", type: "hatchback", fuelTypes: ["petrol"] },
    { id: "tavera", name: "Tavera", type: "muv", fuelTypes: ["diesel"] },
  ],
  bmw: [
    { id: "3-series", name: "3 Series", type: "luxury", fuelTypes: ["petrol", "diesel"] },
    { id: "5-series", name: "5 Series", type: "luxury", fuelTypes: ["petrol", "diesel"] },
    { id: "x1", name: "X1", type: "luxury", fuelTypes: ["petrol", "diesel"] },
    { id: "x3", name: "X3", type: "luxury", fuelTypes: ["petrol", "diesel"] },
    { id: "x5", name: "X5", type: "luxury", fuelTypes: ["diesel"] },
  ],
  mercedes: [
    { id: "c-class", name: "C-Class", type: "luxury", fuelTypes: ["petrol", "diesel"] },
    { id: "e-class", name: "E-Class", type: "luxury", fuelTypes: ["petrol", "diesel"] },
    { id: "gla", name: "GLA", type: "luxury", fuelTypes: ["petrol", "diesel"] },
    { id: "glc", name: "GLC", type: "luxury", fuelTypes: ["petrol", "diesel"] },
    { id: "a-class", name: "A-Class", type: "luxury", fuelTypes: ["petrol", "diesel"] },
  ],
  audi: [
    { id: "a4", name: "A4", type: "luxury", fuelTypes: ["petrol"] },
    { id: "a6", name: "A6", type: "luxury", fuelTypes: ["petrol"] },
    { id: "q3", name: "Q3", type: "luxury", fuelTypes: ["petrol"] },
    { id: "q5", name: "Q5", type: "luxury", fuelTypes: ["petrol", "diesel"] },
    { id: "q7", name: "Q7", type: "luxury", fuelTypes: ["petrol", "diesel"] },
  ],
};

/* ========================================
   FUEL TYPES
   ======================================== */

export const FUEL_TYPES = [
  { id: "petrol", name: "Petrol", icon: "fuel", color: "#22c55e" },
  { id: "diesel", name: "Diesel", icon: "diesel", color: "#eab308" },
  { id: "cng", name: "CNG", icon: "cng", color: "#3b82f6" },
];

/* ========================================
   SERVICE CATEGORIES
   ======================================== */

export const SERVICE_CATEGORIES = [
  { id: "all", name: "All Services", icon: "grid" },
  { id: "sos", name: "SOS / Emergency", icon: "alert" },
  { id: "towing", name: "Towing Services", icon: "truck" },
  { id: "repair", name: "Repair & Maintenance", icon: "wrench" },
  { id: "battery", name: "Battery Services", icon: "battery" },
  { id: "tyre", name: "Tyre Services", icon: "tyre" },
];

/* ========================================
   PRICING MULTIPLIERS BY VEHICLE TYPE
   ======================================== */

const PRICE_MULTIPLIER = {
  hatchback: 1.0,
  sedan: 1.15,
  suv: 1.35,
  muv: 1.3,
  luxury: 1.8,
};

/* ========================================
   SERVICES WITH BASE PRICING
   ======================================== */

export const SERVICES = [
  {
    id: "battery-jumpstart",
    name: "Battery Jumpstart",
    shortDesc: "Dead battery? Quick jumpstart to get you moving.",
    category: "sos",
    basePrice: 599,
    image: "/images/cardService/battery-jumpstart.jpg",
    duration: "30-45 min",
    rating: 4.8,
    reviews: 342,
    popular: true,
    includes: [
      "Professional jump-start equipment",
      "Battery health check",
      "Alternator output test",
      "Terminal cleaning",
    ],
    link: "/services/battery-jumpstart",
  },
  {
    id: "tyre-puncture",
    name: "Tyre Puncture Repair & Stepny Change",
    shortDesc: "Flat tyre fix or spare wheel replacement on the spot.",
    category: "tyre",
    basePrice: 499,
    image: "/images/cardService/flat-tyre.jpg",
    duration: "20-40 min",
    rating: 4.7,
    reviews: 289,
    popular: true,
    includes: [
      "Puncture detection & repair",
      "Spare tyre installation",
      "Tyre pressure check (all 4)",
      "Lug nut torque check",
    ],
    link: "/services/flat-tyre",
  },
  {
    id: "fuel-delivery",
    name: "Fuel Delivery Service",
    shortDesc: "Ran out of fuel? We deliver petrol/diesel to your location.",
    category: "sos",
    basePrice: 499,
    image: null,
    duration: "30-50 min",
    rating: 4.6,
    reviews: 178,
    popular: true,
    includes: [
      "Up to 5 litres fuel delivery",
      "Quality-assured fuel",
      "Safe fuel transfer",
      "Engine start assistance",
    ],
    link: null,
  },
  {
    id: "car-towing",
    name: "Car Towing Service",
    shortDesc: "Safe flatbed towing for cars — up to 10 km included.",
    category: "towing",
    basePrice: 1499,
    image: "/images/cardService/towing-service.jpg",
    duration: "45-60 min",
    rating: 4.9,
    reviews: 412,
    popular: true,
    includes: [
      "Flatbed / wheel-lift tow truck",
      "Up to 10 km covered",
      "Vehicle condition documentation",
      "Secure strapping & transport",
    ],
    link: "/services/towing",
  },
  {
    id: "key-lockout",
    name: "Car Key Lockout Service",
    shortDesc: "Locked out? Non-destructive unlocking by experts.",
    category: "sos",
    basePrice: 799,
    image: "/images/cardService/key-lockout.jpg",
    duration: "20-35 min",
    rating: 4.8,
    reviews: 256,
    popular: true,
    includes: [
      "Non-destructive entry tools",
      "All lock types supported",
      "Ownership verification",
      "Zero damage guarantee",
    ],
    link: "/services/key-lockout",
  },
  {
    id: "battery-replacement",
    name: "Battery Replacement",
    shortDesc: "Old battery? New battery installed at your doorstep.",
    category: "battery",
    basePrice: 2499,
    image: "/images/cardService/battery-jumpstart.jpg",
    duration: "30-45 min",
    rating: 4.7,
    reviews: 198,
    popular: false,
    includes: [
      "Brand new battery (warranty)",
      "Old battery disposal",
      "Terminal cleaning & connection",
      "Electrical system check",
    ],
    link: null,
  },
  {
    id: "motorcycle-towing",
    name: "Motorcycle / Bike Towing",
    shortDesc: "Two-wheeler breakdown? We tow bikes safely.",
    category: "towing",
    basePrice: 999,
    image: null,
    duration: "30-45 min",
    rating: 4.6,
    reviews: 134,
    popular: false,
    fixedPrice: true,
    includes: [
      "Bike-specific tow equipment",
      "Up to 10 km included",
      "Handlebar & frame protection",
      "Safe loading & unloading",
    ],
    link: null,
  },
  {
    id: "special-vehicle-towing",
    name: "Special / Heavy Vehicle Towing",
    shortDesc: "SUVs, trucks, and commercial vehicle towing.",
    category: "towing",
    basePrice: 2499,
    image: "/images/cardService/towing-service.jpg",
    duration: "60-90 min",
    rating: 4.8,
    reviews: 87,
    popular: false,
    includes: [
      "Heavy-duty flatbed truck",
      "Up to 15 km included",
      "Commercial vehicle capable",
      "Winch & recovery equipment",
    ],
    link: null,
  },
  {
    id: "minor-repair",
    name: "On Road Minor Repair Service",
    shortDesc: "Quick fixes for belts, hoses, fuses & minor faults.",
    category: "repair",
    basePrice: 699,
    image: "/images/cardService/mechanical-fault.jpg",
    duration: "30-60 min",
    rating: 4.5,
    reviews: 167,
    popular: false,
    includes: [
      "OBD-II diagnostic scan",
      "Belt & hose replacement",
      "Fuse & relay checks",
      "Fluid top-ups",
    ],
    link: "/services/mechanical-fault",
  },
  {
    id: "breakdown-help",
    name: "Car / Bike Breakdown Help",
    shortDesc: "Engine stalled? Overheating? Immediate roadside help.",
    category: "sos",
    basePrice: 699,
    image: "/images/cardService/emergency-breakdown.png",
    duration: "30-45 min",
    rating: 4.8,
    reviews: 321,
    popular: true,
    includes: [
      "Quick diagnosis on-site",
      "Coolant & fluid top-up",
      "Engine stabilization",
      "Tow arrangement if needed",
    ],
    link: "/services/emergency-breakdown",
  },
  {
    id: "roadside-assistance",
    name: "24x7 Roadside Assistance",
    shortDesc: "Complete emergency coverage — anytime, anywhere.",
    category: "sos",
    basePrice: 599,
    image: "/images/cardService/emergency-breakdown.png",
    duration: "30 min response",
    rating: 4.9,
    reviews: 456,
    popular: true,
    includes: [
      "Priority dispatch",
      "All emergency types covered",
      "Pan-Jaipur coverage",
      "24/7/365 availability",
    ],
    link: null,
  },
  {
    id: "emergency-breakdown",
    name: "Emergency Breakdown Service",
    shortDesc: "Stranded on the highway? Rapid response rescue team.",
    category: "sos",
    basePrice: 799,
    image: "/images/cardService/emergency-breakdown.png",
    duration: "Under 30 min",
    rating: 4.9,
    reviews: 389,
    popular: true,
    includes: [
      "Fastest response priority",
      "On-site diagnosis & repair",
      "Traffic safety setup",
      "Insurance coordination",
    ],
    link: "/services/emergency-breakdown",
  },
  {
    id: "tyre-change",
    name: "Tyre Change / Wheel Replacement",
    shortDesc: "New tyre installation or stepny change at your location.",
    category: "tyre",
    basePrice: 599,
    image: "/images/cardService/flat-tyre.jpg",
    duration: "20-30 min",
    rating: 4.6,
    reviews: 201,
    popular: false,
    includes: [
      "Professional wheel change",
      "Torque-spec lug nut tightening",
      "Tyre pressure calibration",
      "Wheel alignment check",
    ],
    link: "/services/flat-tyre",
  },
  {
    id: "battery-check",
    name: "Battery Health Check",
    shortDesc: "Free diagnostic check for your car battery health.",
    category: "battery",
    basePrice: 199,
    image: "/images/cardService/battery-jumpstart.jpg",
    duration: "15-20 min",
    rating: 4.5,
    reviews: 145,
    popular: false,
    includes: [
      "Battery voltage test",
      "Alternator output check",
      "Terminal corrosion check",
      "Battery life estimate",
    ],
    link: null,
  },
  {
    id: "car-fluid-leakage",
    name: "Car Fluid Leakage Fix",
    shortDesc: "Coolant, oil, or brake fluid leak? Quick inspection & fix.",
    category: "repair",
    basePrice: 899,
    image: "/images/cardService/mechanical-fault.jpg",
    duration: "30-60 min",
    rating: 4.5,
    reviews: 98,
    popular: false,
    includes: [
      "Leak source identification",
      "Hose & gasket repair",
      "Fluid refill & top-up",
      "System pressure test",
    ],
    link: null,
  },
];

/* ========================================
   PRICE CALCULATOR
   ======================================== */

export const calculatePrice = (service, vehicleType, fuelType) => {
  if (service.fixedPrice) return service.basePrice;

  const multiplier = PRICE_MULTIPLIER[vehicleType] || 1.0;
  let price = Math.round(service.basePrice * multiplier);

  // CNG vehicles have a slight surcharge for certain services
  if (fuelType === "cng" && ["minor-repair", "car-fluid-leakage"].includes(service.id)) {
    price = Math.round(price * 1.1);
  }

  // Diesel vehicles cost slightly more for battery services
  if (fuelType === "diesel" && ["battery-jumpstart", "battery-replacement", "battery-check"].includes(service.id)) {
    price = Math.round(price * 1.1);
  }

  return price;
};

/* ========================================
   UTILITY: GET VEHICLE TYPE LABEL
   ======================================== */

export const getVehicleTypeLabel = (type) => {
  const labels = {
    hatchback: "Hatchback",
    sedan: "Sedan",
    suv: "SUV",
    muv: "MUV / MPV",
    luxury: "Luxury",
  };
  return labels[type] || type;
};
