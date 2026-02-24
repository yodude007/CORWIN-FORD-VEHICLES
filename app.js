const categories = [
  "SUVs & Cars",
  "Trucks & Vans",
  "Electric & Hybrid",
  "Performance",
  "Commercial",
  "Future Vehicles",
  "Technology"
];

// Vehicle data — sample for Mustang + Escape
const vehicles = {
  "SUVs & Cars": [
    {
      name: "Mustang",
      image: "./images/Mustang.jpg",
      price: "$31,920",
      trims: [
        {
          name: "EcoBoost Fastback",
          price: "$31,920",
          engine: "2.3L I4 EcoBoost",
          engineOptions: "None",
          horsepower: "315 hp",
          torque: "350 lb-ft",
          gasTankSize: "16 Gallons",
          gasTankOptions: "None",
          mpg: "22 City / 33 Hwy / 26 Combined",
          travelMiles: "416 Miles (2.3L I4 EcoBoost)",
          transmission: "10-speed Automatic",
          transmissionOptions: "None",
          drivetrain: "RWD",
          drivetrainOptions: "None",
          towing: "1,000 lbs",
          suspension: "Independent Rear Suspension",
          groundClearance: "5.3 in",
          bedSize: null,
          bluecruise: "No",
          cam360: "No",
          heatedSeats: "No",
          clothSeats: "Yes",
          is2026: true,
          changes2026: [
            "New standard 13.2-inch Digital Instrument Cluster",
            "Updated Co-Pilot360 2.0 safety features",
            "Available Bronze Appearance Package",
            "New exterior color: Molten Magenta"
          ],
          upgradedOptions: "Mustang Nite Pony Package, Wheel & Stripe Package, 2.3L High Performance Package",
          other: "SYNC 4, 13.2-inch Touchscreen, Apple CarPlay, Electronic Line-Lock, Launch Control",
          competitors: "Competitors: Chevrolet Camaro 1LT, Dodge Challenger SXT.",
          image: "./images/Mustang_EcoBoost.jpg",
          useTitle: "Best for Entry-Level Performance",
          strengths: [
            "Strong 310 hp for a four-cylinder.",
            "Best fuel economy in the Mustang lineup.",
            "Affordable entry point to sports car ownership.",
            "Towing limited to 1,000 lbs.",
            "Lacks premium features like BlueCruise¹ and heated seats."
          ],
          usage: [
            "Daily driving and spirited weekend cruising.",
            "Car enthusiasts looking for an accessible RWD coupe."
          ],
          demographic: [
            "Students or young professionals.",
            "Buyers prioritizing performance and looks over luxury."
          ],
          footnote: "¹ BlueCruise is a hands-free highway driving feature that works on pre-mapped sections of divided highways (Hands-Free Blue Zones). It requires an active subscription after a trial period."
        },
        {
          name: "EcoBoost Premium Fastback",
          price: "$37,445",
          engine: "2.3L I4 EcoBoost",
          engineOptions: "None",
          horsepower: "315 hp",
          torque: "350 lb-ft",
          gasTankSize: "16 Gallons",
          gasTankOptions: "None",
          mpg: "22 City / 33 Hwy / 26 Combined",
          travelMiles: "416 Miles (2.3L I4 EcoBoost)",
          transmission: "10-speed Automatic",
          transmissionOptions: "None",
          drivetrain: "RWD",
          drivetrainOptions: "None",
          towing: "1,000 lbs",
          suspension: "Independent Rear Suspension",
          groundClearance: "5.3 in",
          bedSize: null,
          bluecruise: "Yes",
          cam360: "Yes",
          heatedSeats: "Yes",
          clothSeats: "No",
          is2026: true,
          changes2026: [
            "New standard 13.2-inch Digital Instrument Cluster",
            "Updated Co-Pilot360 2.0 safety features",
            "Available Bronze Appearance Package",
            "New exterior color: Molten Magenta"
          ],
          upgradedOptions: "Leather Seats, Premium Audio",
          other: "SYNC 4, Apple CarPlay, Premium Audio",
          competitors: "Competitors: Chevrolet Camaro 2LT, Dodge Challenger GT.",
          image: "./images/Mustang_EcoBoost_Premium.jpg",
          useTitle: "Best for Tech & Comfort EcoBoost",
          strengths: [
            "Adds BlueCruise¹ and 360-degree camera.",
            "Includes heated seats and premium interior materials.",
            "Maintains 310 hp and good fuel efficiency.",
            "Significantly higher starting price than the base trim."
          ],
          usage: [
            "Long-distance commuting with BlueCruise¹.",
            "Daily driver for the tech-focused buyer."
          ],
          demographic: [
            "Professionals wanting a sporty daily driver.",
            "Buyers transitioning from luxury SUVs/sedans."
          ],
          footnote: "¹ BlueCruise is a hands-free highway driving feature that works on pre-mapped sections of divided highways (Hands-Free Blue Zones). It requires an active subscription after a trial period."
        },
        {
          name: "GT Fastback",
          price: "$45,460",
          engine: "5.0L V8",
          engineOptions: "None",
          horsepower: "480 hp",
          torque: "415 lb-ft",
          gasTankSize: "16 Gallons",
          gasTankOptions: "None",
          mpg: "15 City / 24 Hwy / 18 Combined",
          travelMiles: "288 Miles (5.0L V8)",
          transmission: "6-speed Manual",
          transmissionOptions: "10-speed Automatic",
          drivetrain: "RWD",
          drivetrainOptions: "None",
          towing: "1,500 lbs",
          suspension: "Independent Rear Suspension",
          groundClearance: "5.3 in",
          bedSize: null,
          bluecruise: "Yes",
          cam360: "Yes",
          heatedSeats: "Yes",
          clothSeats: "No",
          is2026: true,
          changes2026: [
            "New standard 13.2-inch Digital Instrument Cluster",
            "Updated Co-Pilot360 2.0 safety features",
            "Available Bronze Appearance Package",
            "New exterior color: Molten Magenta"
          ],
          upgradedOptions: "Recaro Seats, Premium Audio Package",
          other: "SYNC 4, Apple CarPlay",
          competitors: "Competitors: Chevrolet Camaro SS 1LE, Dodge Challenger R/T.",
          image: "./images/Mustang_GT.jpg",
          useTitle: "Best for Classic V8 Power",
          strengths: [
            "Legendary 5.0L V8 with 450 hp.",
            "Standard 6-speed manual transmission.",
            "MagneRide suspension for superior handling.",
            "Fuel economy is lower than EcoBoost¹ trims.",
            "High performance for the price point."
          ],
          usage: [
            "Dedicated performance driving and track days.",
            "Owners who prioritize the V8 engine experience."
          ],
          demographic: [
            "V8 purists and traditional muscle car buyers.",
            "Drivers looking for the best performance value."
          ],
          footnote: "¹ EcoBoost is a Ford engine technology that uses turbocharging and direct injection to deliver power similar to a larger engine, but with better fuel efficiency."
        },
        {
          name: "GT Premium Fastback",
          price: "$49,980",
          engine: "5.0L V8",
          engineOptions: "None",
          horsepower: "480 hp",
          torque: "415 lb-ft",
          gasTankSize: "16 Gallons",
          gasTankOptions: "None",
          mpg: "15 City / 24 Hwy / 18 Combined",
          travelMiles: "288 Miles (5.0L V8)",
          transmission: "10-speed Automatic",
          transmissionOptions: "6-speed Manual",
          drivetrain: "RWD",
          drivetrainOptions: "None",
          towing: "1,500 lbs",
          suspension: "Independent Rear Suspension",
          groundClearance: "5.3 in",
          bedSize: null,
          bluecruise: "Yes",
          cam360: "Yes",
          heatedSeats: "Yes",
          clothSeats: "No",
          is2026: true,
          changes2026: [
            "New standard 13.2-inch Digital Instrument Cluster",
            "Updated Co-Pilot360 2.0 safety features",
            "Available Bronze Appearance Package",
            "New exterior color: Molten Magenta"
          ],
          upgradedOptions: "Recaro Seats, Track Package",
          other: "SYNC 4, Premium Audio",
          competitors: "Competitors: Chevrolet Camaro 2SS",
          image: "./images/Mustang_GT_Premium.jpg",
          useTitle: "Best for Luxury V8 Touring",
          strengths: [
            "Combines V8 power with premium luxury features.",
            "Offers full tech package including BlueCruise¹.",
            "Performance-tuned MagneRide suspension.",
            "Highest price point before the specialized Dark Horse."
          ],
          usage: [
            "Premium daily driver with high-performance capability.",
            "Long-distance grand touring."
          ],
          demographic: [
            "Affluent buyers seeking both performance and comfort.",
            "Drivers who use their V8 Mustang as their primary vehicle."
          ],
          footnote: "¹ BlueCruise is a hands-free highway driving feature that works on pre-mapped sections of divided highways (Hands-Free Blue Zones). It requires an active subscription after a trial period."
        },
        {
          name: "Dark Horse",
          price: "$63,280",
          engine: "5.0L V8",
          engineOptions: "None",
          horsepower: "500 hp",
          torque: "418 lb-ft",
          gasTankSize: "16 Gallons",
          gasTankOptions: "None",
          mpg: "14 City / 22 Hwy / 17 Combined",
          travelMiles: "272 Miles (5.0L V8)",
          transmission: "6-speed Manual",
          transmissionOptions: "10-speed Automatic",
          drivetrain: "RWD",
          drivetrainOptions: "None",
          towing: "1,500 lbs",
          suspension: "MagneRide Damping system",
          groundClearance: "5.3 in",
          bedSize: null,
          bluecruise: "Yes",
          cam360: "Yes",
          heatedSeats: "Yes",
          clothSeats: "No",
          is2026: true,
          changes2026: [
            "New standard 13.2-inch Digital Instrument Cluster",
            "Updated Co-Pilot360 2.0 safety features",
            "Available Bronze Appearance Package",
            "New exterior color: Molten Magenta"
          ],
          upgradedOptions: "Recaro Seats, Dark Horse Handling Package",
          other: "Drift Brake",
          competitors: "Competitors: Chevrolet Camaro ZL1",
          image: "./images/Mustang_DarkHorse.jpg",
          useTitle: "Best for Track-Ready Power",
          strengths: [
            "Maximum 480 hp from the naturally aspirated V8.",
            "Designed and tuned for track performance.",
            "Advanced cooling and performance tech.",
            "Higher-priced entry point for extreme performance."
          ],
          usage: [
            "Weekend track days and high-performance driving events.",
            "Serious performance enthusiasts who want a street-legal racer."
          ],
          demographic: [
            "Track drivers and motorsports enthusiasts.",
            "Collectors of specialized performance models."
          ],
          footnote: ""
        },
        {
          name: "Dark Horse Premium",
          price: "$68,275",
          engine: "5.0L V8",
          engineOptions: "None",
          horsepower: "500 hp",
          torque: "418 lb-ft",
          gasTankSize: "16 Gallons",
          gasTankOptions: "None",
          mpg: "14 City / 22 Hwy / 17 Combined",
          travelMiles: "272 Miles (5.0L V8)",
          transmission: "10-speed Automatic",
          transmissionOptions: "6-speed Manual",
          drivetrain: "RWD",
          drivetrainOptions: "None",
          towing: "1,500 lbs",
          suspension: "MagneRide Damping system",
          groundClearance: "5.3 in",
          bedSize: null,
          bluecruise: "Yes",
          cam360: "Yes",
          heatedSeats: "Yes",
          clothSeats: "No",
          is2026: true,
          changes2026: [
            "New standard 13.2-inch Digital Instrument Cluster",
            "Updated Co-Pilot360 2.0 safety features",
            "Available Bronze Appearance Package",
            "New exterior color: Molten Magenta"
          ],
          upgradedOptions: "Carbon Fiber Wheels",
          other: "Performance Tech",
          competitors: "Competitors: Dodge Challenger SRT Hellcat",
          image: "./images/Mustang_DarkHorse_Premium.jpg",
          useTitle: "Best for Ultimate Track & Luxury",
          strengths: [
            "Highest V8 performance with luxury and tech options.",
            "Standard 10-speed automatic for quick shifts.",
            "Includes premium audio and advanced tech package.",
            "Highest price in the Mustang core lineup."
          ],
          usage: [
            "Track performance combined with a premium daily driving experience.",
            "Drivers who want top-tier performance without sacrificing comfort."
          ],
          demographic: [
            "High-net-worth performance buyers.",
            "Buyers looking for the best-equipped Mustang for both street and track."
          ],
          footnote: ""
        }
      ]
    },
    {
    name: "Escape",
    image: "./images/Escape.jpg",
    price: "$30,350",
    trims: [
      {
        name: "Escape Plug-in Hybrid",
        price: "$35,400",
        engine: "2.5L I4 Hybrid",
        engineOptions: "None",
        horsepower: "200 hp",
        torque: "170 lb-ft",
        gasTank: "11.1 gal",
        gasTankOptions: "14.8 gal (1.5L EcoBoost FWD), 15.7 gal (1.5L EcoBoost AWD), 15.7 gal (2.0L EcoBoost), 14.3 gal (2.5L Hybrid), 11.1 gal (2.5L Plug-in Hybrid)",
        mpg: "42 City / 36 Hwy / 101 MPGe",
        travelMiles: "37 Miles (Electric) / 400 Miles (Total)",
        transmission: "eCVT",
        transmissionOptions: "None",
        drivetrain: "FWD",
        drivetrainOptions: "None",
        towing: "1,000 lbs",
        suspension: "Independent",
        groundClearance: "7.8 in",
        bedSize: null,
        bluecruise: "Yes",
        cam360: "No",
        heatedSeats: "Yes",
        clothSeats: "No",
        upgradedOptions: "Premium Audio, Leather Seats",
        other: "SYNC 4, Apple CarPlay",
        competitors: "Competitors: Toyota RAV4 Prime, Honda CR-V Hybrid. The Escape Plug-in Hybrid offers a larger battery for a longer electric-only range than the Toyota RAV4 Prime, and is available with BlueCruise hands-free driving assistance.",
        image: "./images/Escape_PlugInHybrid.jpg",
        useTitle: "Max Efficiency & EV Range",
        strengths: [
          "Ability to drive on pure electric power for short distances.",
          "Available BlueCruise hands-free driving.",
          "Strong combined 200 hp powertrain.",
          "Limited to 1,000 lbs towing capacity."
        ],
        usage: [
          "Eco-conscious daily commuting and city driving.",
          "Drivers with short commutes who can charge at home."
        ],
        demographic: [
          "Urban/Suburban commuters.",
          "Environmentally focused buyers."
        ]
      },
      {
        name: "Escape Active",
        price: "$30,350",
        engine: "1.5L I4 Turbo",
        engineOptions: "None",
        horsepower: "181 hp",
        torque: "190 lb-ft",
        gasTank: "14.8 gal",
        gasTankOptions: "14.8 gal (1.5L EcoBoost FWD), 15.7 gal (1.5L EcoBoost AWD), 15.7 gal (2.0L EcoBoost), 14.3 gal (2.5L Hybrid), 11.1 gal (2.5L Plug-in Hybrid)",
        mpg: "27 City / 34 Hwy / 30 Combined",
        travelMiles: "444 Miles (1.5L EcoBoost FWD)",
        transmission: "8-speed Automatic",
        transmissionOptions: "None",
        drivetrain: "FWD",
        drivetrainOptions: "AWD",
        towing: "1,000 lbs",
        suspension: "Independent",
        groundClearance: "7.5 in",
        bedSize: null,
        bluecruise: "No",
        cam360: "No",
        heatedSeats: "No",
        clothSeats: "Yes",
        upgradedOptions: "Standard Package",
        other: "SYNC 4, Apple CarPlay",
        competitors: "Competitors: Toyota RAV4 LE, Honda CR-V LX. Escape Active provides a more powerful standard engine and a superior 8-speed automatic transmission compared to the CEO used in both Toyota RAV4 LE and Honda CR-V LX.",
        image: "./images/Escape_Active.jpg",
        useTitle: "Best Entry-Level Value",
        strengths: [
          "More powerful standard engine than many base competitors.",
          "Standard 8-speed automatic transmission (not a CVT).",
          "Most affordable starting price in the lineup.",
          "Lacks advanced driver assistance features like BlueCruise."
        ],
        usage: [
          "Primary family transportation and school drop-offs.",
          "Budget-conscious buyers who need a reliable small SUV."
        ],
        demographic: [
          "Young families and first-time SUV buyers.",
          "Rental fleet or company car buyers."
        ]
      },
      {
        name: "Escape ST-Line",
        price: "$31,195",
        engine: "2.0L I4 Turbo",
        engineOptions: "None",
        horsepower: "250 hp",
        torque: "280 lb-ft",
        gasTank: "15.7 gal",
        gasTankOptions: "14.8 gal (1.5L EcoBoost FWD), 15.7 gal (1.5L EcoBoost AWD), 15.7 gal (2.0L EcoBoost), 14.3 gal (2.5L Hybrid), 11.1 gal (2.5L Plug-in Hybrid)",
        mpg: "23 City / 31 Hwy / 26 Combined",
        travelMiles: "408 Miles (2.0L EcoBoost)",
        transmission: "8-speed Automatic",
        transmissionOptions: "None",
        drivetrain: "AWD",
        drivetrainOptions: "None",
        towing: "1,200 lbs",
        suspension: "Sport",
        groundClearance: "7.5 in",
        bedSize: null,
        bluecruise: "No",
        cam360: "Yes",
        heatedSeats: "Yes",
        clothSeats: "No",
        upgradedOptions: "Leather Seats, Sport Package",
        other: "SYNC 4, Apple CarPlay",
        competitors: "Competitors: Toyota RAV4 XSE, Honda CR-V Sport-L. The Escape ST-Line features a 2.0L EcoBoost engine delivering 250 hp, significantly more power than the standard engines in the Toyota RAV4 XSE and Honda CR-V Sport-L.",
        image: "./images/Escape_STLine.jpg",
        useTitle: "Sporty Performance Look",
        strengths: [
          "Powerful 250 hp 2.0L EcoBoost engine.",
          "Sport-tuned suspension for better handling.",
          "Aggressive ST-Line exterior styling.",
          "Doesn't include BlueCruise option."
        ],
        usage: [
          "Drivers who want a sportier, more responsive SUV.",
          "Highway cruising with faster merging and passing power."
        ],
        demographic: [
          "Enthusiast buyers who want a powerful compact SUV.",
          "Drivers stepping up from a sporty sedan/haddock."
        ]
      },
      {
        name: "Escape ST-Line Select",
        price: "$35,015",
        engine: "2.0L I4 Turbo",
        engineOptions: "None",
        horsepower: "250 hp",
        torque: "280 lb-ft",
        gasTank: "15.7 gal",
        gasTankOptions: "14.8 gal (1.5L EcoBoost FWD), 15.7 gal (1.5L EcoBoost AWD), 15.7 gal (2.0L EcoBoost), 14.3 gal (2.5L Hybrid), 11.1 gal (2.5L Plug-in Hybrid)",
        mpg: "23 City / 31 Hwy / 26 Combined",
        travelMiles: "408 Miles (2.0L EcoBoost)",
        transmission: "8-speed Automatic",
        transmissionOptions: "None",
        drivetrain: "AWD",
        drivetrainOptions: "None",
        towing: "1,200 lbs",
        suspension: "Sport",
        groundClearance: "7.5 in",
        bedSize: null,
        bluecruise: "Yes",
        cam360: "Yes",
        heatedSeats: "Yes",
        clothSeats: "No",
        upgradedOptions: "Leather Seats, Premium Audio",
        other: "SYNC 4, Apple CarPlay",
        competitors: "Competitors: Toyota RAV4 Limited, Honda CR-V Touring. Escape ST-Line Select offers the advanced BlueCruise hands-free driving system, which is not available on either the Toyota RAV4 Limited or Honda CR-V Touring.",
        image: "./images/Escape_STLineSelect.jpg",
        useTitle: "ST-Line with BlueCruise",
        strengths: [
          "First ST-Line trim to include BlueCruise hands-free driving.",
          "Retains 250 hp engine and sport suspension.",
          "Excellent blend of performance and advanced technology.",
          "Higher cost than base ST-Line trim."
        ],
        usage: [
          "Frequent highway drivers who want hands-free assistance.",
          "Long road trips requiring comfort and driver tech."
        ],
        demographic: [
          "Tech-savvy commuters and travelers.",
          "Buyers prioritizing safety and convenience features."
        ]
      },
      {
        name: "Escape ST-Line Elite",
        price: "$38,935",
        engine: "2.0L I4 Turbo",
        engineOptions: "None",
        horsepower: "250 hp",
        torque: "280 lb-ft",
        gasTank: "15.7 gal",
        gasTankOptions: "14.8 gal (1.5L EcoBoost FWD), 15.7 gal (1.5L EcoBoost AWD), 15.7 gal (2.0L EcoBoost), 14.3 gal (2.5L Hybrid), 11.1 gal (2.5L Plug-in Hybrid)",
        mpg: "23 City / 31 Hwy / 26 Combined",
        travelMiles: "408 Miles (2.0L EcoBoost)",
        transmission: "8-speed Automatic",
        transmissionOptions: "None",
        drivetrain: "AWD",
        drivetrainOptions: "None",
        towing: "1,200 lbs",
        suspension: "Sport",
        groundClearance: "7.5 in",
        bedSize: null,
        bluecruise: "Yes",
        cam360: "Yes",
        heatedSeats: "Yes",
        clothSeats: "No",
        upgradedOptions: "Leather Seats, Premium Tech",
        other: "SYNC 4, Apple CarPlay",
        competitors: "Competitors: Toyota RAV4 Limited, Honda CR-V Touring. The Escape ST-Line Elite combines the powerful 250 hp engine with BlueCruise and a 360-degree camera, a package of features that is not matched by competitors at this price point.",
        image: "./images/Escape_STLineElite.jpg",
        useTitle: "Top-Tier Sport Tech",
        strengths: [
          "Fully equipped with 250 hp, BlueCruise, and 360 camera.",
          "Premium interior finishes and tech.",
          "Excellent feature-to-price ratio against competitors.",
          "Highest cost ST-Line trim."
        ],
        usage: [
          "Customers who want all available tech and comfort in a sporty package.",
          "Daily driving with a focus on convenience and safety."
        ],
        demographic: [
          "Affluent families and tech enthusiasts.",
          "Buyers seeking a luxury compact SUV feel."
        ]
      },
      {
        name: "Escape Platinum",
        price: "$37,940",
        engine: "2.0L I4 Turbo",
        engineOptions: "None",
        horsepower: "250 hp",
        torque: "280 lb-ft",
        gasTank: "15.7 gal",
        gasTankOptions: "14.8 gal (1.5L EcoBoost FWD), 15.7 gal (1.5L EcoBoost AWD), 15.7 gal (2.0L EcoBoost), 14.3 gal (2.5L Hybrid), 11.1 gal (2.5L Plug-in Hybrid)",
        mpg: "23 City / 31 Hwy / 26 Combined",
        travelMiles: "408 Miles (2.0L EcoBoost)",
        transmission: "8-speed Automatic",
        transmissionOptions: "None",
        drivetrain: "AWD",
        drivetrainOptions: "None",
        towing: "1,200 lbs",
        suspension: "Luxury",
        groundClearance: "7.5 in",
        bedSize: null,
        bluecruise: "Yes",
        cam360: "Yes",
        heatedSeats: "Yes",
        clothSeats: "No",
        upgradedOptions: "Leather Seats, Premium Audio, Tech Package",
        other: "SYNC 4, Apple CarPlay",
        competitors: "Competitors: Toyota RAV4 Limited, Honda CR-V Touring. The Escape Platinum provides premium luxury features, the powerful 250 hp engine, and the BlueCruise hands-free system, offering a more complete top-trim package than competitors.",
        image: "./images/Escape_Platinum.jpg",
        useTitle: "Ultimate Luxury & Tech",
        strengths: [
          "Focus on luxury-tuned suspension and high-end materials.",
          "Includes BlueCruise and a 360-degree camera.",
          "250 hp engine provides ample power.",
          "The most expensive and feature-rich trim."
        ],
        usage: [
          "Drivers prioritizing a quiet, comfortable ride.",
          "Executive or premium daily driver."
        ],
        demographic: [
          "Empty-nesters and high-end compact SUV buyers.",
          "Customers who prioritize luxury over sportiness."
        ]
      }
    ]
  },
  {
  name: "Bronco Sport",
  image: "./images/BroncoSport.jpg", 
  price: "$31,695",
  trims: [
    {
      name: "Bronco Sport Big Bend",
      price: "$31,695",
      engine: "1.5L EcoBoost I3", 
      engineOptions: "None",
      horsepower: "180 hp",
      torque: "200 lb-ft",
      gasTank: "16.0 gal",
      gasTankOptions: "16.0 gal",
      mpg: "25 City / 29 Hwy / 27 Combined",
      travelMiles: "432 Miles",
      transmission: "8-speed Automatic",
      transmissionOptions: "None",
      drivetrain: "4x4",
      drivetrainOptions: "None",
      towing: "2,200 lbs",
      suspension: "Independent (HOSS 1.0)",
      groundClearance: "7.8 in", 
      bedSize: null,
      bluecruise: "No",
      cam360: "No",
      heatedSeats: "No",
      clothSeats: "Yes",
      infotainmentScreen: "13.2-inch LCD Touchscreen (SYNC 4)",
      digitalInstrumentPanel: "12.3-inch Fully Digital Cluster",
      upgradedOptions: "Wireless Charging Pad, Ford Co-Pilot360 Assist+, Wireless Apple CarPlay/Android Auto",
      other: "5 G.O.A.T. Modes: Normal, Eco, Sport, Slippery, and Off-Road",
      competitors: "Competitors: Jeep Compass Latitude, Toyota RAV4 LE. Bronco Sport Big Bend includes standard 4x4 and 5 G.O.A.T. Modes, offering significantly greater off-road capability and driver control than Jeep Compass Latitude or Toyota RAV4 LE.",
      image: "./images/BroncoSport_BigBend.jpg",
      useTitle: "Best Value Off-Road",
      strengths: [
        "Standard 4x4 and 5 G.O.A.T. Modes.",
        "Massive standard technology suite for the price point.",
        "Updated 1.5L engine with 200 lb-ft of torque.",
        "Heated seats are optional via the Convenience Package."
      ],
      usage: [
        "Light off-roading, camping, and handling snowy conditions.",
        "Daily commuting with rugged capabilities."
      ],
      demographic: [
        "First-time off-roaders and outdoor enthusiasts.",
        "Customers needing standard 4x4 capability."
      ]
    },
    {
      name: "Bronco Sport Heritage",
      price: "$33,995",
      engine: "1.5L EcoBoost I3",
      engineOptions: "None",
      horsepower: "180 hp",
      torque: "200 lb-ft",
      gasTank: "16.0 gal",
      gasTankOptions: "16.0 gal",
      mpg: "25 City / 29 Hwy / 27 Combined",
      travelMiles: "432 Miles",
      transmission: "8-speed Automatic",
      transmissionOptions: "None",
      drivetrain: "4x4",
      drivetrainOptions: "None",
      towing: "2,200 lbs",
      suspension: "Independent (HOSS 1.0)",
      groundClearance: "7.8 in", 
      bedSize: null,
      bluecruise: "No",
      cam360: "No",
      heatedSeats: "No",
      clothSeats: "Yes",
      infotainmentScreen: "13.2-inch LCD Touchscreen (SYNC 4)",
      digitalInstrumentPanel: "12.3-inch Fully Digital Cluster",
      upgradedOptions: "Oxford White roof/wheels, Plaid cloth seats, Navy Pier micro suede center console",
      other: "Classic retro styling with modern tech as standard",
      competitors: "Competitors: Jeep Compass Altitude, Toyota RAV4 Adventure. Bronco Sport Heritage offers unique vintage styling and standard 4x4, providing more character and off-road readiness than Jeep Compass Altitude or Toyota RAV4 Adventure.",
      image: "./images/BroncoSport_Heritage.jpg",
      useTitle: "Unique Retro Style",
      strengths: [
        "Distinctive vintage-inspired styling package.",
        "Standard 4x4 and 5 G.O.A.T. Modes.",
        "Modern digital dash and large touchscreen standard.",
        "Exclusive interior textures and colors."
      ],
      usage: [
        "Drivers who prioritize a unique and nostalgic look.",
        "Casual daily driving and light weekend adventures."
      ],
      demographic: [
        "Style-conscious buyers.",
        "Bronco brand loyalists who appreciate heritage."
      ]
    },
    {
      name: "Bronco Sport Outer Banks",
      price: "$36,795",
      engine: "1.5L EcoBoost I3",
      engineOptions: "None",
      horsepower: "180 hp",
      torque: "200 lb-ft",
      gasTank: "16.0 gal",
      gasTankOptions: "16.0 gal",
      mpg: "25 City / 29 Hwy / 27 Combined",
      travelMiles: "432 Miles",
      transmission: "8-speed Automatic",
      transmissionOptions: "None",
      drivetrain: "4x4",
      drivetrainOptions: "None",
      towing: "2,200 lbs",
      suspension: "Independent (HOSS 1.0)",
      groundClearance: "7.8 in", 
      bedSize: null,
      bluecruise: "No",
      cam360: "No",
      heatedSeats: "Yes",
      clothSeats: "No",
      infotainmentScreen: "13.2-inch LCD Touchscreen (SYNC 4)",
      digitalInstrumentPanel: "12.3-inch Fully Digital Cluster",
      upgradedOptions: "Premium leather-trimmed heated front seats, Heated steering wheel, Remote Start",
      other: "Shadow Black-painted roof, Dual-zone automatic climate control",
      competitors: "Competitors: Jeep Compass Limited, Toyota RAV4 Limited. Bronco Sport Outer Banks provides heated, premium-trimmed front seats and standard 4x4, offering a better blend of luxury and off-road capability than competitors.",
      image: "./images/BroncoSport_OuterBanks.jpg",
      useTitle: "Luxury & Comfort",
      strengths: [
        "Standard heated seats and steering wheel.",
        "Premium interior materials and 8-way power driver seat.",
        "Sasquatch Package now an option for serious off-roading.",
        "Enhanced cabin quietness and tech focus."
      ],
      usage: [
        "Daily commuting with a focus on comfort and premium feel.",
        "Light off-roading where interior comfort is a priority."
      ],
      demographic: [
        "Buyers seeking a luxury feel in a small SUV.",
        "Drivers upgrading from a lower-trim compact SUV."
      ]
    },
    {
      name: "Bronco Sport Badlands",
      price: "$40,115",
      engine: "2.0L EcoBoost I4", 
      engineOptions: "None",
      horsepower: "238 hp",
      torque: "277 lb-ft",
      gasTank: "16.0 gal",
      gasTankOptions: "16.0 gal",
      mpg: "21 City / 26 Hwy / 23 Combined",
      travelMiles: "368 Miles",
      transmission: "8-speed Automatic with Paddle Shifters",
      transmissionOptions: "None",
      drivetrain: "Advanced 4x4 with Twin-Clutch Rear Drive",
      drivetrainOptions: "None",
      towing: "2,700 lbs",
      suspension: "Off-Road Tuned (HOSS 2.0)",
      groundClearance: "8.8 in", 
      bedSize: null,
      bluecruise: "No",
      cam360: "Standard (180-degree front)",
      heatedSeats: "Yes",
      clothSeats: "No",
      infotainmentScreen: "13.2-inch LCD Touchscreen (SYNC 4)",
      digitalInstrumentPanel: "12.3-inch Fully Digital Cluster",
      upgradedOptions: "7 G.O.A.T. Modes, Metal bash plates, Trail Control, All-terrain tires",
      other: "Off-road suspension with 180-degree split-view camera",
      competitors: "Competitors: Jeep Compass Trailhawk, Toyota RAV4 TRD Off-Road. Bronco Sport Badlands features a 238 hp engine and advanced 4x4 with a twin-clutch rear drive unit, providing superior power and traction technology compared to the Jeep Compass Trailhawk or Toyota RAV4 TRD Off-Road.",
      image: "./images/BroncoSport_Badlands.jpg",
      useTitle: "Maximum Off-Road Power",
      strengths: [
        "Class-leading 2.0L performance.",
        "Advanced twin-clutch rear drive system.",
        "Standard heavy-duty bash plates and tow hooks.",
        "7 G.O.A.T. modes including Rock Crawl."
      ],
      usage: [
        "Serious off-roading, rock crawling, and heavy trail use.",
        "Outdoor adventurers needing maximum capability."
      ],
      demographic: [
        "Hardcore off-roading enthusiasts.",
        "Drivers prioritizing capability over luxury features."
      ]
    }
  ]
},
{
  name: "Bronco",
  image: "./images/Bronco.jpg", 
  price: "$39,995",
  trims: [
    {
      name: "Bronco Base",
      price: "$39,995",
      engine: "2.3L EcoBoost I-4",
      engineOptions: "2.7L EcoBoost V6",
      horsepower: "300 hp",
      torque: "320 lb-ft",
      gasTank: "16.9 gal",
      gasTankOptions: "16.9 gal (2.3L/2.7L 2-Door), 20.8 gal (2.3L/2.7L 4-Door), 21.2 gal (3.0L Raptor)",
      mpg: "20 City / 21 Hwy / 20 Combined",
      travelMiles: "338 Miles (2.3L EcoBoost 2-Door)",
      transmission: "7-speed Manual",
      transmissionOptions: "10-speed Automatic",
      drivetrain: "4x4",
      drivetrainOptions: "Advanced 4x4",
      towing: "3,500 lbs",
      suspension: "Independent",
      groundClearance: "8.4 in", 
      bedSize: null,
      bluecruise: "No",
      cam360: "No",
      heatedSeats: "No",
      clothSeats: "Yes",
      upgradedOptions: "Two-door or four-door, Seven-speed manual or ten-speed automatic transmission, Available Sasquatch Package",
      other: "Extra-cost color option shown.",
      competitors: "Competitors: Jeep Wrangler Sport, Toyota 4Runner SR5. Bronco Base offers versatile off-road capability, flexible door options, and when the doors are removed, the side mirrors remain attached to the body, unlike the Jeep Wrangler, whose mirrors are attached to the removable doors.",
      image: "./images/Bronco_Base.jpg",
      useTitle: "Pure Off-Road Focus",
      strengths: [
        "Highly capable off-roader at the best price.",
        "Standard 300 hp engine and 7-speed manual.",
        "Removable doors/roof for open-air driving.",
        "Basic interior features and technology."
      ],
      usage: [
        "Enthusiasts who plan to heavily modify their vehicle.",
        "Dedicated off-road use and recreational trail driving."
      ],
      demographic: [
        "Off-road enthusiasts on a budget.",
        "Drivers who prioritize mechanical capability over comfort."
      ]
    },
    {
      name: "Bronco Big Bend",
      price: "$40,845",
      engine: "2.3L EcoBoost I-4",
      engineOptions: "2.7L EcoBoost V6",
      horsepower: "300 hp",
      torque: "320 lb-ft",
      gasTank: "16.9 gal",
      gasTankOptions: "16.9 gal (2.3L/2.7L 2-Door), 20.8 gal (2.3L/2.7L 4-Door), 21.2 gal (3.0L Raptor)",
      mpg: "20 City / 21 Hwy / 20 Combined",
      travelMiles: "338 Miles (2.3L EcoBoost 2-Door)",
      transmission: "10-speed Automatic",
      transmissionOptions: "7-speed Manual",
      drivetrain: "4x4",
      drivetrainOptions: "Advanced 4x4",
      towing: "3,500 lbs",
      suspension: "Independent",
      groundClearance: "8.4 in", 
      bedSize: null,
      bluecruise: "No",
      cam360: "No",
      heatedSeats: "No",
      clothSeats: "Yes",
      upgradedOptions: "Four-door, Available Black Diamond Package",
      other: "",
      competitors: "Competitors: Jeep Wrangler Sport S, Toyota 4Runner TRD Sport. Bronco Big Bend adds more comfort and convenience features over Base, and maintains the unique feature that the side mirrors stay attached to the vehicle body when the doors are removed.",
      image: "./images/Bronco_BigBend.jpg",
      useTitle: "Daily Driver Off-Roader",
      strengths: [
        "Adds convenience features over the Base trim.",
        "Strong 300 hp engine with optional manual/auto.",
        "Maintains the core removable body panels.",
        "A modest price increase for added comfort."
      ],
      usage: [
        "Regular commuting with weekend off-road trips.",
        "Drivers who need more practicality than the Base."
      ],
      demographic: [
        "Families or couples needing a capable and comfortable SUV.",
        "Buyers who value the Bronco lifestyle."
      ]
    },
    {
      name: "Bronco Outer Banks",
      price: "$47,940",
      engine: "2.7L EcoBoost V6",
      engineOptions: "2.3L EcoBoost I-4",
      horsepower: "330 hp",
      torque: "415 lb-ft",
      gasTank: "20.8 gal",
      gasTankOptions: "16.9 gal (2.3L/2.7L 2-Door), 20.8 gal (2.3L/2.7L 4-Door), 21.2 gal (3.0L Raptor)",
      mpg: "20 City / 21 Hwy / 20 Combined",
      travelMiles: "416 Miles (2.7L EcoBoost 4-Door)",
      transmission: "10-speed Automatic",
      transmissionOptions: "None",
      drivetrain: "4x4",
      drivetrainOptions: "Advanced 4x4",
      towing: "3,500 lbs",
      suspension: "Independent",
      groundClearance: "9.0 in", 
      bedSize: null,
      bluecruise: "No",
      cam360: "No",
      heatedSeats: "Yes",
      clothSeats: "No",
      upgradedOptions: "Signature LED lighting, Available Black Appearance Package",
      other: "Extra-cost color option shown.",
      competitors: "Competitors: Jeep Wrangler Sahara, Toyota 4Runner Limited. Bronco Outer Banks provides a more powerful 330 hp V6 engine and premium interior options while maintaining off-road capability and the door-removal convenience feature.",
      image: "./images/Bronco_OuterBanks.jpg",
      useTitle: "Premium Comfort & Power",
      strengths: [
        "Powerful 330 hp V6 engine.",
        "Heated, premium interior materials and LED lighting.",
        "Increased ground clearance for slightly better capability.",
        "Lacks the most extreme off-road hardware of the Badlands/Raptor."
      ],
      usage: [
        "Daily driver for buyers prioritizing luxury and power.",
        "Overlanding and light-to-moderate trail use."
      ],
      demographic: [
        "Affluent suburban buyers.",
        "Drivers upgrading from luxury SUVs who want off-road style."
      ]
    },
    {
      name: "Bronco Badlands",
      price: "$49,585",
      engine: "2.7L EcoBoost V6",
      engineOptions: "2.3L EcoBoost I-4",
      horsepower: "330 hp",
      torque: "415 lb-ft",
      gasTank: "20.8 gal",
      gasTankOptions: "16.9 gal (2.3L/2.7L 2-Door), 20.8 gal (2.3L/2.7L 4-Door), 21.2 gal (3.0L Raptor)",
      mpg: "17 City / 17 Hwy / 17 Combined",
      travelMiles: "353 Miles (2.7L EcoBoost 4-Door)",
      transmission: "10-speed Automatic",
      transmissionOptions: "7-speed Manual",
      drivetrain: "Advanced 4x4",
      drivetrainOptions: "None",
      towing: "3,500 lbs",
      suspension: "Independent",
      groundClearance: "10.5 in", 
      bedSize: null,
      bluecruise: "No",
      cam360: "No",
      heatedSeats: "Yes",
      clothSeats: "No",
      upgradedOptions: "Available Sasquatch Package, Seven-speed manual or ten-speed automatic transmission",
      other: "Extra-cost color option shown.",
      competitors: "Competitors: Jeep Wrangler Rubicon, Toyota 4Runner TRD Off-Road Premium. Bronco Badlands offers advanced off-road technology and the optional Sasquatch Package for superior terrain handling, and provides the best combination of power and standard off-road tech in its class.",
      image: "./images/Bronco_Badlands.jpg",
      useTitle: "Maximum Capability",
      strengths: [
        "Best combination of power and off-road tech (330 hp V6).",
        "High 10.5-inch ground clearance.",
        "Advanced suspension and G.O.A.T. modes.",
        "High starting price focused on off-road features."
      ],
      usage: [
        "Serious rock crawling and extreme trail driving.",
        "Owners who demand the most off-road capability from the factory."
      ],
      demographic: [
        "Hardcore off-road enthusiasts.",
        "Buyers who frequently travel to remote, rugged areas."
      ]
    },
    {
      name: "Bronco Heritage Edition",
      price: "$51,475",
      engine: "2.7L EcoBoost V6",
      engineOptions: "None",
      horsepower: "330 hp",
      torque: "415 lb-ft",
      gasTank: "20.8 gal",
      gasTankOptions: "16.9 gal (2.3L/2.7L 2-Door), 20.8 gal (2.3L/2.7L 4-Door), 21.2 gal (3.0L Raptor)",
      mpg: "17 City / 17 Hwy / 17 Combined",
      travelMiles: "353 Miles (2.7L EcoBoost 4-Door)",
      transmission: "10-speed Automatic",
      transmissionOptions: "None",
      drivetrain: "Advanced 4x4",
      drivetrainOptions: "None",
      towing: "3,500 lbs",
      suspension: "Independent",
      groundClearance: "11.5 in", 
      bedSize: null,
      bluecruise: "No",
      cam360: "No",
      heatedSeats: "Yes",
      clothSeats: "No",
      upgradedOptions: "Standard Sasquatch Package, Seven-speed manual or ten-speed automatic transmission",
      other: "Extra-cost color option shown.",
      competitors: "Competitors: Jeep Wrangler Willys, Toyota 4Runner Trail Special Edition. Heritage Edition combines classic styling with off-road readiness and a standard Sasquatch Package, offering superior standard off-road capability features compared to its competitors.",
      image: "./images/Bronco_Heritage.jpg",
      useTitle: "Retro Style, Max Clearance",
      strengths: [
        "Iconic retro styling with a white roof and grille.",
        "Standard Sasquatch Package for maximum ground clearance (11.5 in).",
        "Includes the powerful 330 hp V6 engine.",
        "A specialty trim with a higher price tag."
      ],
      usage: [
        "Drivers who want extreme capability with a unique look.",
        "Collectors of special edition vehicles."
      ],
      demographic: [
        "Bronco brand enthusiasts and collectors.",
        "Off-roaders prioritizing aesthetics and capability."
      ]
    },
    {
      name: "Bronco Stroppe Edition",
      price: "$75,635",
      engine: "2.7L EcoBoost V6",
      engineOptions: "None",
      horsepower: "330 hp",
      torque: "350 lb-ft",
      gasTank: "20.8 gal",
      gasTankOptions: "16.9 gal (2.3L/2.7L 2-Door), 20.8 gal (2.3L/2.7L 4-Door), 21.2 gal (3.0L Raptor)",
      mpg: "17 City / 17 Hwy / 17 Combined",
      travelMiles: "353 Miles (2.7L EcoBoost 4-Door)",
      transmission: "10-Speed Automatic",
      transmissionOptions: "None",
      drivetrain: "Advanced 4x4",
      drivetrainOptions: "None",
      towing: "2,000 lbs",
      suspension: "HOSS 3.0 with FOX Internal Bypass Dampers",
      groundClearance: "11.5 in", 
      bedSize: null,
      bluecruise: "No",
      cam360: "No",
      heatedSeats: "No",
      clothSeats: "Yes",
      upgradedOptions: "10-Speed automatic transmission, Trail One-Pedal Drive, HOSS 3.0 Package, Front Steel Bumper with Fog Lamps, Engine Block Heater (requires 10-Speed Automatic)",
      other: "Four-Wheel Disc Brakes with ABS and ESC, Adaptive Cruise Control, Trail Control Optional, Trail Turn Assist Optional",
      competitors: "Competitors: Jeep Wrangler Rubicon X, Toyota 4Runner TRD Pro. Stroppe Edition offers advanced HOSS 3.0 suspension, Trail One-Pedal Drive, and unique off-road performance features that make it more capable off-road and provides a better suspension system than the Jeep Wrangler Rubicon X or Toyota 4Runner TRD Pro.",
      image: "./images/Bronco_Stroppe.jpg",
      useTitle: "Rally-Inspired Special",
      strengths: [
        "Advanced HOSS 3.0 suspension for high-speed desert running.",
        "Unique 'Stroppe' heritage and specialized tuning.",
        "Features like Trail One-Pedal Drive.",
        "Limited-edition vehicle with the highest price for the 2.7L V6."
      ],
      usage: [
        "High-speed off-roading and dune climbing.",
        "Buyers wanting a highly specialized, race-ready vehicle."
      ],
      demographic: [
        "Affluent off-road racing enthusiasts.",
        "Collectors of special edition, high-performance models."
      ]
    },
    {
      name: "Bronco Raptor",
      price: "$79,995",
      engine: "3.0L EcoBoost V6",
      engineOptions: "None",
      horsepower: "418 hp",
      torque: "440 lb-ft",
      gasTank: "21.2 gal",
      gasTankOptions: "16.9 gal (2.3L/2.7L 2-Door), 20.8 gal (2.3L/2.7L 4-Door), 21.2 gal (3.0L Raptor)",
      mpg: "15 City / 16 Hwy / 15 Combined",
      travelMiles: "318 Miles (3.0L EcoBoost V6)",
      transmission: "10-speed Automatic",
      transmissionOptions: "None",
      drivetrain: "Advanced 4x4",
      drivetrainOptions: "None",
      towing: "3,500 lbs",
      suspension: "HOSS 4.0 with FOX Live Valve 3.1 Internal Bypass Semi-Active Dampers",
      groundClearance: "13.1 in", 
      bedSize: null,
      bluecruise: "No",
      cam360: "No",
      heatedSeats: "Yes",
      clothSeats: "No",
      upgradedOptions: "Ten-speed automatic transmission",
      other: "Extra-cost color option shown.",
      competitors: "Competitors: Jeep Wrangler Rubicon 392, Toyota 4Runner. Bronco Raptor delivers the ultimate power (418 hp), HOSS 4.0 suspension, and off-road performance for unmatched capability, far exceeding the performance features of the Jeep Wrangler Rubicon 392 or Toyota 4Runner.",
      image: "./images/Bronco_Raptor.jpg",
      useTitle: "Ultimate Desert Runner",
      strengths: [
        "Unmatched 418 hp and extreme capability.",
        "HOSS 4.0 suspension with FOX Live Valve dampers.",
        "Massive 13.1 inches of ground clearance.",
        "Highest cost and most specialized vehicle in the lineup."
      ],
      usage: [
        "High-speed off-road racing and desert bombing.",
        "Buyers who want the absolute top-tier off-road SUV."
      ],
      demographic: [
        "Extreme performance enthusiasts.",
        "High-income buyers prioritizing off-road dominance."
      ]
    }
  ]
},
{ 
  name: "Explorer",
  image: "./images/Explorer.jpg",
  price: "$38,465",
  trims: [
    {
      name: "Explorer Active 100A",
      price: "$38,465",
      engine: "2.3L EcoBoost I4",
      engineOptions: "None",
      horsepower: "300 hp",
      torque: "310 lb-ft",
      gasTank: "17.9 gal",
      gasTankOptions: "17.9 gal (2.3L EcoBoost I-4), 20.2 gal (3.0L EcoBoost V6)",
      mpg: "21 City / 28 Hwy / 24 Combined",
      travelMiles: "429 Miles (2.3L EcoBoost I-4)",
      transmission: "10-speed Automatic",
      transmissionOptions: "None",
      drivetrain: "RWD",
      drivetrainOptions: "Intelligent 4WD",
      towing: "5,300 lbs",
      suspension: "Independent",
      groundClearance: "7.9 in", 
      bedSize: null,
      bluecruise: "No",
      cam360: "Yes",
      heatedSeats: "No",
      clothSeats: "Yes",
      upgradedOptions: "Class III Trailer Tow Package, Selectable drive modes, Ford Co-Pilot360 Assist+",
      other: "Extra-cost color option shown",
      competitors: "Competitors: Jeep Grand Cherokee Laredo, Toyota Highlander L. Explorer Active 100A offers higher towing capacity (5,300 lbs) and a more powerful standard engine (300 hp) than both the Jeep Grand Cherokee Laredo and Toyota Highlander L.",
      image: "./images/Explorer_Active100A.jpg",
      useTitle: "Best Base Tow/Power",
      strengths: [
        "Class-leading 300 hp standard engine.",
        "High 5,300 lbs towing capacity.",
        "Standard 360-degree camera.",
        "Lacks heated seats and luxury options."
      ],
      usage: [
        "Hauling moderate loads and family transportation.",
        "Buyers needing power and utility at the lowest cost."
      ],
      demographic: [
        "Large families and fleet customers.",
        "Value-focused utility buyers."
      ]
    },
    {
      name: "Explorer Active",
      price: "$40,585",
      engine: "2.3L EcoBoost I4",
      engineOptions: "None",
      horsepower: "300 hp",
      torque: "310 lb-ft",
      gasTank: "17.9 gal",
      gasTankOptions: "17.9 gal (2.3L EcoBoost I-4), 20.2 gal (3.0L EcoBoost V6)",
      mpg: "21 City / 28 Hwy / 24 Combined",
      travelMiles: "429 Miles (2.3L EcoBoost I-4)",
      transmission: "10-speed Automatic",
      transmissionOptions: "None",
      drivetrain: "RWD",
      drivetrainOptions: "Intelligent 4WD",
      towing: "5,300 lbs",
      suspension: "Independent",
      groundClearance: "7.9 in", 
      bedSize: null,
      bluecruise: "No",
      cam360: "Yes",
      heatedSeats: "Yes",
      clothSeats: "No",
      upgradedOptions: "Power liftgate, Heated front-row seats",
      other: "Extra-cost color option shown",
      competitors: "Competitors: Jeep Grand Cherokee Limited, Toyota Highlander XLE. Explorer Active adds comfort features like heated front seats not always standard on competitors, while maintaining superior towing capacity (5,300 lbs) and a powerful 300 hp engine.",
      image: "./images/Explorer_Active.jpg",
      useTitle: "Best Standard Comfort",
      strengths: [
        "Adds key comfort features like heated front seats.",
        "Excellent blend of power and everyday convenience.",
        "Maintains 300 hp and 5,300 lbs towing capacity.",
        "Still lacks BlueCruise."
      ],
      usage: [
        "Cold-weather climates and comfortable daily commuting.",
        "Family vehicle for long drives."
      ],
      demographic: [
        "Middle-income families.",
        "Buyers prioritizing comfort features."
      ]
    },
    {
      name: "Explorer ST-Line",
      price: "$45,155",
      engine: "2.3L EcoBoost I4",
      engineOptions: "None",
      horsepower: "300 hp",
      torque: "310 lb-ft",
      gasTank: "17.9 gal",
      gasTankOptions: "17.9 gal (2.3L EcoBoost I-4), 20.2 gal (3.0L EcoBoost V6)",
      mpg: "21 City / 28 Hwy / 24 Combined",
      travelMiles: "429 Miles (2.3L EcoBoost I-4)",
      transmission: "10-speed Automatic",
      transmissionOptions: "None",
      drivetrain: "RWD",
      drivetrainOptions: "Intelligent 4WD",
      towing: "5,300 lbs",
      suspension: "Sport-tuned",
      groundClearance: "7.9 in", 
      bedSize: null,
      bluecruise: "No",
      cam360: "Yes",
      heatedSeats: "Yes",
      clothSeats: "Yes",
      upgradedOptions: "B&O 10-speaker sound, 360-Degree Camera, Red-stitched cloth seats",
      other: "Extra-cost color option shown",
      competitors: "Competitors: Jeep Grand Cherokee Overland, Toyota Highlander Limited. Explorer ST-Line offers sport styling and premium tech like the B&O sound system and a 360-degree camera, which are often expensive options or not available on entry-level trims of competitors.",
      image: "./images/Explorer_STLine.jpg",
      useTitle: "Sport Style & Sound",
      strengths: [
        "Sport-tuned suspension for better handling.",
        "Includes B&O Premium Sound System.",
        "Distinctive sporty interior and exterior styling.",
        "Does not feature the 400 hp V6 engine."
      ],
      usage: [
        "Drivers wanting a sporty feel without the high cost of the ST.",
        "Daily driving with a focus on audio quality and style."
      ],
      demographic: [
        "Younger families and audio enthusiasts.",
        "Customers prioritizing style and infotainment."
      ]
    },
    {
      name: "Explorer Tremor",
      price: "$48,465",
      engine: "3.0L EcoBoost V6",
      engineOptions: "None",
      horsepower: "400 hp",
      torque: "415 lb-ft",
      gasTank: "20.2 gal",
      gasTankOptions: "17.9 gal (2.3L EcoBoost I-4), 20.2 gal (3.0L EcoBoost V6)",
      mpg: "18 City / 24 Hwy / 21 Combined",
      travelMiles: "424 Miles (3.0L EcoBoost V6)",
      transmission: "10-speed Automatic",
      transmissionOptions: "None",
      drivetrain: "Intelligent 4WD",
      drivetrainOptions: "None",
      towing: "5,600 lbs",
      suspension: "Off-road tuned",
      groundClearance: "8.66 in", 
      bedSize: null,
      bluecruise: "No",
      cam360: "Yes",
      heatedSeats: "Yes",
      clothSeats: "Yes",
      upgradedOptions: "Torsen limited-slip rear axle, Underbody protection",
      other: "Extra-cost color option shown",
      competitors: "Competitors: Jeep Grand Cherokee Trailhawk, Toyota 4Runner TRD Off-Road. Explorer Tremor provides a superior 400 hp engine and Torsen limited-slip rear axle, giving it better performance both on and off-road than Jeep Grand Cherokee Trailhawk or Toyota 4Runner TRD Off-Road.",
      image: "./images/Explorer_Tremor.jpg",
      useTitle: "Off-Road Powerhouse",
      strengths: [
        "Powerful 400 hp V6 engine and higher 5,600 lbs towing.",
        "Off-road tuned suspension and increased ground clearance (8.66 in).",
        "Torsen limited-slip rear axle for superior traction.",
        "Ride quality is firmer than luxury trims."
      ],
      usage: [
        "Moderate off-roading, camping, and overlanding.",
        "Towing boats or trailers that require more power."
      ],
      demographic: [
        "Outdoor adventurers and overlanding enthusiasts.",
        "Buyers who need a capable all-weather tow vehicle."
      ]
    },
    {
      name: "Explorer Platinum",
      price: "$50,965",
      engine: "2.3L EcoBoost I4",
      engineOptions: "3.0L EcoBoost V6 (400 hp)",
      horsepower: "300 hp",
      torque: "310 lb-ft",
      gasTank: "17.9 gal",
      gasTankOptions: "17.9 gal (2.3L EcoBoost I-4), 20.2 gal (3.0L EcoBoost V6)",
      mpg: "21 City / 28 Hwy / 24 Combined",
      travelMiles: "429 Miles (2.3L EcoBoost I-4)",
      transmission: "10-speed Automatic",
      transmissionOptions: "None",
      drivetrain: "RWD",
      drivetrainOptions: "Intelligent 4WD",
      towing: "5,300 lbs",
      suspension: "Luxury",
      groundClearance: "7.9 in", 
      bedSize: null,
      bluecruise: "Yes",
      cam360: "Yes",
      heatedSeats: "Yes",
      clothSeats: "No",
      upgradedOptions: "Massaging front-row seats, Leather inserts, Panoramic glass roof",
      other: "Extra-cost color option shown",
      competitors: "Competitors: Jeep Grand Cherokee Summit, Toyota Highlander Platinum. Luxury features plus BlueCruise hands-free tech and massaging front seats surpass what is offered in similarly priced trims like the Jeep Grand Cherokee Summit or Toyota Highlander Platinum.",
      image: "./images/Explorer_Platinum.jpg",
      useTitle: "Ultimate Luxury Touring",
      strengths: [
        "Includes BlueCruise and massaging front seats.",
        "Panoramic glass roof and premium interior materials.",
        "Focus on quiet, comfortable on-road driving.",
        "Uses the 2.3L I4 engine (not the 400 hp V6)."
      ],
      usage: [
        "Executive transportation and premium daily driving.",
        "Long-distance road trips with a focus on comfort."
      ],
      demographic: [
        "Luxury SUV buyers and high-income professionals.",
        "Customers prioritizing comfort and advanced tech."
      ]
    },
    {
      name: "Explorer ST",
      price: "$54,905",
      engine: "3.0L EcoBoost V6",
      engineOptions: "None",
      horsepower: "400 hp",
      torque: "415 lb-ft",
      gasTank: "20.2 gal",
      gasTankOptions: "17.9 gal (2.3L EcoBoost I-4), 20.2 gal (3.0L EcoBoost V6)",
      mpg: "18 City / 24 Hwy / 21 Combined",
      travelMiles: "424 Miles (3.0L EcoBoost V6)",
      transmission: "10-speed Automatic",
      transmissionOptions: "None",
      drivetrain: "Intelligent 4WD",
      drivetrainOptions: "None",
      towing: "5,600 lbs",
      suspension: "Sport-tuned",
      groundClearance: "7.9 in", 
      bedSize: null,
      bluecruise: "Yes",
      cam360: "Yes",
      heatedSeats: "Yes",
      clothSeats: "No",
      upgradedOptions: "Performance brakes, Sport suspension, Leather seats",
      other: "Extra-cost color option shown",
      competitors: "Competitors: Jeep Grand Cherokee SRT, Toyota Highlander. Explorer ST is the highest performance trim with a 400 hp engine, BlueCruise, and sport-tuned suspension that exceeds competitors’ sport trims in power and advanced driver technology.",
      image: "./images/Explorer_ST.jpg",
      useTitle: "Pure Performance SUV",
      strengths: [
        "Top-tier 400 hp V6 engine.",
        "Performance brakes and specialized sport suspension.",
        "Combines maximum power with BlueCruise technology.",
        "Highest cost trim in the lineup."
      ],
      usage: [
        "Performance driving and spirited road trips.",
        "Drivers needing an extremely fast family SUV."
      ],
      demographic: [
        "Performance sedan/SUV enthusiasts.",
        "High-income buyers prioritizing power and handling."
      ]
    }
  ]
},
{ 
  name: "Expedition",
  image: "./images/Expedition.jpg",
  price: "$62,400",
  trims: [
    {
      name: "Expedition Active",
      price: "$62,400",
      engine: "3.5L EcoBoost V6",
      engineOptions: "None",
      horsepower: "400 hp",
      torque: "480 lb-ft",
      gasTank: "23.2 gal",
      gasTankOptions: "23.2 gal (3.5L EcoBoost Standard), 27.8 gal (3.5L EcoBoost MAX)",
      transmission: "10-speed Automatic",
      transmissionOptions: "None",
      drivetrain: "RWD", // Default
      drivetrainOptions: "Intelligent 4WD",
      towing: "9,300 lbs",
      suspension: "Independent",
      groundClearance: "8.7 in", 
      bedSize: null,
      bluecruise: "No",
      cam360: "Yes",
      heatedSeats: "Yes",
      clothSeats: "Yes",
      upgradedOptions: "Ford Split Gate, Class III Trailer Tow Package, Panoramic 13.2” display",
      other: "Extra-cost color option shown",
      competitors: "Competitors: Chevrolet Tahoe LS, GMC Yukon SLE. Expedition Active has a superior standard engine (400 hp) and offers a best-in-class towing capacity of 9,300 lbs when properly equipped, outperforming the Chevrolet Tahoe LS and GMC Yukon SLE.",
      image: "./images/Expedition_Active.jpg",
      useTitle: "Best-in-Class Base Tow",
      strengths: [
        "Best-in-class 9,300 lbs maximum towing capacity.",
        "Powerful 400 hp standard engine.",
        "Standard 360-degree camera.",
        "Lacks BlueCruise and luxury materials."
      ],
      usage: [
        "Heavy family hauling and boat/trailer towing.",
        "Daily driver for large families."
      ],
      demographic: [
        "Large families and boat/RV owners.",
        "Buyers prioritizing utility and space."
      ]
    },
    {
      name: "Expedition Platinum",
      price: "$74,850",
      engine: "3.5L EcoBoost V6 High-Output",
      engineOptions: "None",
      horsepower: "440 hp",
      torque: "510 lb-ft",
      gasTank: "23.2 gal",
      gasTankOptions: "23.2 gal (3.5L EcoBoost Standard), 27.8 gal (3.5L EcoBoost MAX)",
      transmission: "10-speed Automatic",
      transmissionOptions: "None",
      drivetrain: "Intelligent 4WD",
      drivetrainOptions: "None",
      towing: "9,300 lbs",
      suspension: "Luxury",
      groundClearance: "8.7 in", 
      bedSize: null,
      bluecruise: "Yes",
      cam360: "Yes",
      heatedSeats: "Yes",
      clothSeats: "No",
      upgradedOptions: "Platinum Ultimate Package, 360° Zone Lighting, Third-row flexible seating",
      other: "Extra-cost color option shown",
      competitors: "Competitors: Chevrolet Tahoe High Country, GMC Yukon Denali Ultimate. Expedition Platinum features a high-output 440 hp V6 engine and BlueCruise hands-free highway driving technology, surpassing the luxury and tech of competitors’ similar trims.",
      image: "./images/Expedition_Platinum.jpg",
      useTitle: "Ultimate Luxury & Power",
      strengths: [
        "High-Output 440 hp engine.",
        "Includes BlueCruise hands-free driving.",
        "Top-tier luxury interior finishes.",
        "Highest cost trim focused on luxury."
      ],
      usage: [
        "Executive transportation and premium family hauling.",
        "Long-distance touring with maximum comfort."
      ],
      demographic: [
        "High-net-worth buyers and executives.",
        "Drivers prioritizing comfort, tech, and performance."
      ]
    },
    {
      name: "Expedition Tremor",
      price: "$81,400",
      engine: "3.5L EcoBoost V6 High-Output",
      engineOptions: "None",
      horsepower: "440 hp", 
      torque: "510 lb-ft", 
      gasTank: "23.2 gal",
      gasTankOptions: "23.2 gal (3.5L High-Output Standard), 27.8 gal (3.5L High-Output MAX)",
      transmission: "10-speed Automatic",
      transmissionOptions: "None",
      drivetrain: "Intelligent 4WD",
      drivetrainOptions: "None",
      towing: "9,300 lbs", 
      suspension: "Modified Higher Ride Suspension with Premium Passive Shocks",
      groundClearance: "10.6 in", 
      bedSize: null,
      bluecruise: "No",
      cam360: "Yes", 
      heatedSeats: "Yes",
      clothSeats: "No", 
      upgradedOptions: "3.73 electronic-locking differential, 18\" Dark Carbonized Gray-painted aluminum wheels w/ Electric Spice pocket, 33\" all-terrain tires, Heated/Ventilated Perforated Leather Seats, Heated Second-Row Captain's Chairs",
      other: "Fuel Tank Underbody Protection, Modified Raptor Skid Plates - Front and Transmission Underbody, Customizable 24\" Panoramic Display and 13.2\" Center Display (Ford Digital Experience), Trail Control™ (Includes Trail One Pedal Drive and Trail Turn Assist)",
      competitors: "Competitors: Chevrolet Tahoe Z71, GMC Yukon AT4. Expedition Tremor provides superior off-road hardware including 33” all-terrain tires and a 3.73 electronic locking differential, giving it a clear advantage in trail capability and ground clearance (10.6 inches) over Chevrolet Tahoe Z71 and GMC Yukon AT4.",
      image: "./images/Expedition_Tremor.jpg",
      useTitle: "Off-Road Max Clearance",
      strengths: [
        "Superior 10.6 inches of ground clearance.",
        "Includes 440 hp High-Output V6 engine.",
        "33-inch all-terrain tires and electronic locking differential.",
        "Ride is optimized for off-road, firmer on-road."
      ],
      usage: [
        "Overlanding and extreme off-road family adventures.",
        "Heavy-duty towing on unpaved surfaces."
      ],
      demographic: [
        "Off-road enthusiasts and campers.",
        "Buyers who live in remote or rugged locations."
      ]
    },
    {
      name: "Expedition King Ranch",
      price: "$84,060",
      engine: "3.5L EcoBoost V6 High-Output", 
      engineOptions: "None",
      horsepower: "440 hp", 
      torque: "510 lb-ft", 
      gasTank: "23.2 gal",
      gasTankOptions: "23.2 gal (3.5L High-Output Standard), 27.8 gal (3.5L High-Output MAX)",
      transmission: "10-speed Automatic",
      transmissionOptions: "None",
      drivetrain: "Intelligent 4WD",
      drivetrainOptions: "None",
      towing: "9,300 lbs", 
      suspension: "Luxury", 
      groundClearance: "8.7 in", 
      bedSize: null,
      bluecruise: "Yes", 
      cam360: "Yes", 
      heatedSeats: "Yes",
      clothSeats: "No",
      upgradedOptions: "Del Rio and Mesa Del Rio leather with Kingsville stitching, Finely crafted heated and ventilated first-row seats, Heated Second-Row Captain's Chairs, 22\" Sinister Bronze diamond-cut machined-face aluminum wheels with exclusive King Ranch center cap",
      other: "Non-Limited-Slip 3.73 Rear Axle, Optional Skid Plates, Hill Start Assist and Hill Descent Control™",
      competitors: "Competitors: Chevrolet Tahoe Premier, GMC Yukon Denali. King Ranch trim combines unique luxury materials, the 440 hp High-Output engine, and BlueCruise hands-free highway driving, a combination of features unmatched by competitors.",
      image: "./images/Expedition_KingRanch.jpg",
      useTitle: "Unique Western Luxury",
      strengths: [
        "Exclusive King Ranch leather and interior styling.",
        "High-Output 440 hp engine and BlueCruise.",
        "High level of luxury with unique character.",
        "Highest cost trim in the lineup."
      ],
      usage: [
        "Ranch owners and buyers who appreciate unique luxury.",
        "Premium daily driver and tow vehicle."
      ],
      demographic: [
        "High-net-worth buyers with a rural/western aesthetic preference.",
        "Customers seeking maximum luxury and exclusivity."
      ]
    }
  ]
}
],
"Trucks & Vans": [
    {
      name: "Maverick",
      image: "./images/Maverick.jpg",
      price: "$28,145",
      trims: [
        {
          name: "XL",
          price: "$28,145",
          engine: "2.5L Hybrid I4",
          engineOptions: "2.5L Hybrid AWD, 2.0L EcoBoost® FWD, 2.0L EcoBoost® AWD",
          horsepower: "191 hp",
          torque: "155 lb-ft",
          transmission: "eCVT",
          transmissionOptions: "8-Speed Automatic Transmission",
          towing: "2,000 lbs",
          suspension: "Independent",
          groundClearance: "8.6 in",
          bedSize: "4.5 ft",
          bluecruise: "No",
          cam360: "No",
          heatedSeats: "No",
          clothSeats: "Yes",
          upgradedOptions: "FLEXBED Storage System, Ford Co-Pilot360 Technology, Conventional 17\" Spare Tire (215/70R17) with available 4K Tow/FX4 Off-Road packages",
          other: "Standard 2.5L Hybrid FWD, 17\" Steel Wheels with Sparkle Silver Painted Covers, SYNC® 4 Technology, Electronic Brake Boost – (Hybrid Only)",
          competitors:
            "Competitors: Hyundai Santa Cruz SE. Maverick XL offers standard hybrid efficiency and a more durable FLEXBED system than the Hyundai Santa Cruz SE.",
          image: "./images/Maverick_XL.jpg",
          // UPDATED FLASHCARD DATA HERE
          useTitle: "Best MPG",
          strengths: [
            "Very efficient hybrid (40+ MPG City).",
            "Lowest base cost of any hybrid truck.",
            "Flexible bed storage¹ (FLEXBED).",
            "More basic interior for practicality and ease of cleaning.",
            "Limited towing capacity (2,000 lbs) is a trade-off."
          ],
          usage: [
            "Ideal for daily driving and commuting where fuel economy is the top priority.",
            "Suitable for light-duty home projects and weekend gear hauling."
          ],
          demographic: [
            "Urban commuters who value fuel economy.",
            "First-time truck owners or students.",
            "Homeowners needing light utility."
          ]
        },
        {
          name: "XLT",
          price: "$30,645",
          engine: "2.5L Hybrid I4",
          engineOptions: "2.5L Hybrid AWD, 2.0L EcoBoost® FWD, 2.0L EcoBoost® AWD",
          horsepower: "191 hp",
          torque: "155 lb-ft",
          transmission: "eCVT",
          transmissionOptions: "8-speed Automatic Transmission",
          towing: "2,000 lbs",
          suspension: "Independent",
          groundClearance: "8.6 in",
          bedSize: "4.5 ft",
          bluecruise: "No",
          cam360: "No",
          heatedSeats: "No",
          clothSeats: "Yes",
          upgradedOptions: "FX4 Off-Road Package, 17\" Carbonized Gray-painted aluminum wheels, 2K trailer hitch receiver w/ 4-pin connector, Conventional 17\" Spare Tire (215/70R17) with available 4K Tow/FX4 Off-Road packages, 19\" Black Painted Aluminum Wheels (optional)",
          other: "Intelligent Access with Push-button Start, Extra storage and tie-downs in the bed, Tire Inflator and Sealant Kit (Standard on Hybrid AWD and 2.0L EcoBoost®), Electronic Brake Boost – (Hybrid Only)",
          competitors:
            "Competitors: Hyundai Santa Cruz SEL. Maverick XLT's available FX4 Off-Road Package provides better off-road capability than the Santa Cruz SEL.",
          image: "./images/Maverick_XLT.jpg",
          // UPDATED FLASHCARD DATA HERE
          useTitle: "Best Value/Flexibility",
          strengths: [
            "The most popular trim, offering a great balance of features and cost.",
            "Higher-end features like cruise control, power mirrors, and power door locks included.",
            "Can be optioned with the FX4 Off-Road Package (better off-road capability).",
            "Available 2.0L EcoBoost engine option allows for 4,000 lbs towing (Requires 4K Tow Package).",
            "Better resale value due to feature upgrades over the XL."
          ],
          usage: [
            "Excellent for family use and those who want some added convenience without stepping up to Lariat.",
            "Best choice if you need the 4,000 lb towing capacity (requires EcoBoost engine and 4K Tow Package)."
          ],
          demographic: [
            "Small families or couples needing versatile vehicle.",
            "Buyers stepping up from a sedan/SUV who need a truck bed.",
            "Those who plan to occasionally tow or use the FX4 package."
          ]
        },
        {
          name: "Lobo",
          price: "$35,930",
          engine: "2.0L EcoBoost I4",
          engineOptions: "None",
          horsepower: "250 hp",
          torque: "277 lb-ft",
          transmission: "7-speed Quick Shift",
          transmissionOptions: "None",
          towing: "4,000 lbs", // Estimated for EcoBoost 4K Tow Package
          suspension: "Performance-tuned",
          groundClearance: "8.6 in",
          bedSize: "4.5 ft",
          bluecruise: "No",
          cam360: "No",
          heatedSeats: "No",
          clothSeats: "No",
          upgradedOptions: "Torque vectoring twin clutch rear drive unit, Unique grille, ActiveX®-trimmed seats with unique accent stitching, Available 19\" open-spoke aluminum wheels, Conventional 17\" Spare Tire (215/70R17) with available 4K Tow/FX4 Off-Road packages",
          other: "Performance-tuned steering and brakes, Advanced AWD drivetrain, Exclusive track-only configuration: Lobo mode, 19\" Turbofan-Styled Black Painted Aluminum Wheels (standard)",
          competitors:
            "Competitors: Hyundai Santa Cruz Night. Maverick Lobo offers a dedicated performance powertrain with a 7-speed quick shift transmission and performance-tuned steering.",
          image: "./images/Maverick_Lobo.jpg",
          // UPDATED FLASHCARD DATA HERE
          useTitle: "Best Performance/Handling",
          strengths: [
            "Quickest acceleration in the lineup with a 7-speed quick-shift transmission.",
            "Performance-tuned suspension and steering for superior on-road dynamics.",
            "Aggressive, sporty exterior styling and distinct wheel design.",
            "Capable of 4,000 lbs towing (with proper package).",
            "Not as practical as XLT/Lariat for off-roading or rough roads."
          ],
          usage: [
            "Daily driving that prioritizes quick, responsive handling and sporty feel.",
            "Light-duty hauling where the owner desires a performance aesthetic."
          ],
          demographic: [
            "Performance enthusiasts and younger buyers who want a sport truck feel.",
            "Customers who primarily drive on pavement but want the utility of a truck."
          ]
        },
        {
          name: "Lariat",
          price: "$38,090",
          engine: "2.5L Hybrid AWD",
          engineOptions: "2.0L EcoBoost AWD",
          horsepower: "191 hp (Hybrid), 250 hp (EcoBoost)",
          torque: "155 lb-ft (Hybrid), 280 lb-ft (EcoBoost)", // Updated EcoBoost torque to 280 lb-ft
          transmission: "Power-Split Electric CVT Transmission",
          transmissionOptions: "8-Speed Automatic Transmission",
          towing: "4,000 lbs (with 4K Tow Package)",
          suspension: "Independent",
          groundClearance: "8.6 in",
          bedSize: "4.5 ft",
          bluecruise: "No",
          cam360: "Yes",
          heatedSeats: "Yes",
          clothSeats: "No",
          upgradedOptions: "4K Tow Package, Black Appearance Package, Power Moonroof",
          other: "Heated steering wheel, 19\" machine-face bright aluminum wheels, power-adjustable driver’s seat, Dual-Zone Electronic Automatic Temperature Control (DEATC), 8-speaker B&O® Sound System, 13.2\" Center Display, Smoked Truffle ActiveX® Seats, Adaptive Cruise Control (ACC)",
          competitors:
            "Competitors: Hyundai Santa Cruz Limited. Maverick Lariat provides premium features like Pro Trailer Backup Assist, a heated steering wheel, and an 8-speaker B&O® Sound System, often not found in similar competitor trims.",
          image: "./images/Maverick_Lariat.jpg",
          // UPDATED FLASHCARD DATA HERE
          useTitle: "Best Comfort/Tech",
          strengths: [
            "Highest level of standard comfort and luxury features (ActiveX seating, heated steering wheel, 8-speaker B&O® Sound System).",
            "Available 360-degree camera and Pro Trailer Backup Assist.",
            "Premium interior finishes and larger, distinctive 19” wheels.",
            "Access to both Hybrid and EcoBoost (4,000 lbs towing) powertrains.",
            "Highest starting price point in the core lineup."
          ],
          usage: [
            "A premium daily driver for business or pleasure, where comfort is prioritized.",
            "Ideal for those who occasionally tow and appreciate advanced parking/towing tech."
          ],
          demographic: [
            "Empty nesters, professionals, or buyers prioritizing luxury car features in a compact truck.",
            "Customers looking for the best interior experience in the Maverick family."
          ]
        },
        {
          name: "Tremor",
          price: "$40,645",
          engine: "2.0L EcoBoost Advanced 4WD",
          engineOptions: "None",
          horsepower: "250 hp",
          torque: "277 lb-ft",
          transmission: "8-Speed Automatic Transmission",
          transmissionOptions: "None",
          towing: "2,000 lbs",
          suspension: "Off-road tuned",
          groundClearance: "9.4 in", // Tremor specific clearance
          bedSize: "4.5 ft",
          bluecruise: "No",
          cam360: "No",
          heatedSeats: "Yes",
          clothSeats: "No",
          upgradedOptions: "Skid plates, Lockable rear differential, Trail Control™",
          other: "Advanced 4WD with twin clutch rear drive unit, Unique springs and shocks, 17\" machined-face tarnished dark painted wheels with orange pockets, orange front tow hooks, B&O Sound System",
          competitors:
            "Competitors: None directly comparable. Maverick Tremor offers a unique, factory-backed off-road package with specialized suspension, elevated ground clearance, and a lockable rear differential not available from competitors.",
          image: "./images/Maverick_Tremor.jpg",
          // UPDATED FLASHCARD DATA HERE
          useTitle: "Best Off-Road Capability",
          strengths: [
            "Specialized off-road tuned suspension with 9.4 inches of ground clearance.",
            "Advanced 4WD system with twin-clutch rear drive unit (lockable rear differential).",
            "Unique off-road features: Trail Control and dedicated skid plates.",
            "Rugged, unique exterior styling with orange accents and all-terrain tires.",
            "Lower towing capacity (2,000 lbs) than the Lariat with 4K package."
          ],
          usage: [
            "Frequent off-road use, camping, or handling rough, unpaved terrain.",
            "Buyers who need a highly capable truck that fits into a small footprint."
          ],
          demographic: [
            "Outdoor adventurers, off-roading enthusiasts, and customers in rural areas.",
            "Buyers coming from Jeeps or off-road SUVs who want a truck bed."
          ]
        }
      ]
    },
    {
      name: "Ranger",
      image: "./images/Ranger.jpg",
      price: "$33,350",
      trims: [
        {
          name: "XL",
          price: "$33,350",
          engine: "2.3L EcoBoost I4",
          engineOptions: "None",
          horsepower: "270 hp",
          torque: "310 lb-ft",
          transmission: "10-speed Automatic",
          transmissionOptions: "None",
          towing: "7,500 lbs (Standard 4-Pin Wiring and Ball Mounting Provisions)",
          suspension: "Independent Front/Leaf Rear", // Corrected Leaf Rear for consistency
          groundClearance: "8.9 in",
          bedSize: "6 ft", // Based on SuperCab
          bluecruise: "No",
          cam360: "No",
          heatedSeats: "No",
          clothSeats: "Yes",
          upgradedOptions: "STX Appearance Package (Standard), Trailer Tow Package (Optional), 4x4 with Electronic-Locking Rear Differential (Optional)",
          other: "Remote Keyless Entry System, LED Reflector Headlamps, Halogen Fog Lamps, Power Locking Tailgate, Power Glass Side Mirrors, Rear View Camera, AdvanceTrac® with RSC®",
          competitors:
            "Competitors: Chevrolet Colorado WT, Toyota Tacoma SR. Ranger XL offers a superior 2.3L EcoBoost engine providing best-in-class standard performance and towing capacity.",
          image: "./images/Ranger_XL.jpg",
          useTitle: "Best Base Tow/Power",
          strengths: [
            "Best-in-class standard 270 hp engine.",
            "High 7,500 lbs max towing capacity.",
            "Affordable entry into the mid-size truck segment.",
            "Basic interior with limited tech features."
          ],
          usage: [
            "Work truck or daily driver with high towing needs.",
            "Fleet and commercial buyers."
          ],
          demographic: [
            "Tradespeople and value-focused buyers.",
            "Customers prioritizing utility over luxury."
          ]
        },
        {
          name: "XLT",
          price: "$35,375",
          engine: "2.3L EcoBoost I4",
          engineOptions: "2.7L EcoBoost V6",
          horsepower: "270 hp",
          torque: "310 lb-ft",
          transmission: "10-speed Automatic",
          transmissionOptions: "None",
          towing: "7,500 lbs",
          suspension: "Independent Front/Solid Rear",
          groundClearance: "8.9 in",
          bedSize: "5 ft", // Based on SuperCrew
          bluecruise: "No",
          cam360: "No",
          heatedSeats: "No",
          clothSeats: "Yes",
          upgradedOptions: "FX4 Off-Road Package, Advanced Towing Package, Power-Sliding Rear Window, 12\" Center Display, 360-Degree Camera (Optional)",
          other: "Sport Appearance Package (Standard), LED Fog Lamps, Power-Folding Side Mirrors, Rear Parking Sensors, SYNC®4A with 10\" Display, Ford Co-Pilot360® Technology (BLIS, Lane-Keeping, etc.)",
          competitors:
            "Competitors: Chevrolet Colorado Z71, Toyota Tacoma TRD Sport. Ranger XLT offers an available 2.7L EcoBoost V6 engine, providing higher power than competitors' mid-level trims.",
          image: "./images/Ranger_XLT.jpg",
          useTitle: "Best Mid-Range Value",
          strengths: [
            "Significant upgrade in standard safety and technology (Co-Pilot360, SYNC®4A, 10\" Display).",
            "Available 2.7L V6 engine for a significant power boost.",
            "Access to specialized off-road features (FX4 Package, Ford Trail Control®).",
            "Maintains 7,500 lbs towing capacity.",
            "Still uses cloth seats as standard."
          ],
          usage: [
            "Family use and moderate recreational towing.",
            "Commuters who appreciate added convenience and safety tech."
          ],
          demographic: [
            "Small families and buyers upgrading from smaller trucks.",
            "Weekend adventurers."
          ]
        },
        {
          name: "Lariat",
          price: "$43,755",
          engine: "2.3L EcoBoost I4",
          engineOptions: "2.7L EcoBoost V6",
          horsepower: "270 hp",
          torque: "310 lb-ft",
          transmission: "10-speed Automatic",
          transmissionOptions: "None",
          towing: "7,500 lbs",
          suspension: "Independent Front/Solid Rear",
          groundClearance: "9.3 in",
          bedSize: "5 ft",
          bluecruise: "No",
          cam360: "Yes",
          heatedSeats: "Yes",
          clothSeats: "No",
          upgradedOptions: "FX4 Off-Road Package, Advanced Towing Package, Wireless Charging Pad, 120V/400W In-Cab/In-Bed Power Outlets (Optional)",
          other: "Power, heated, leather-trimmed front seats with driver memory, 12\" Digital Cluster and Center Display, B&O® Sound System, Adaptive Cruise Control, LED Projector Headlamps, Zone Lighting",
          competitors:
            "Competitors: Chevrolet Colorado ZR2, Toyota Tacoma Limited. Ranger Lariat delivers more luxury features like driver memory seats and zone lighting while offering the powerful 2.7L EcoBoost V6 option.",
          image: "./images/Ranger_Lariat.jpg",
          useTitle: "Luxury & High Power",
          strengths: [
            "Comprehensive luxury and tech standard (Leather, Heated Seats, 12\" Screens, B&O Audio).",
            "Standard 360-Degree Camera and Adaptive Cruise Control.",
            "Available powerful 315 hp V6 engine.",
            "Access to FX4 Off-Road Package and high-end towing packages.",
            "Highest cost trim before the specialized Raptor."
          ],
          usage: [
            "Premium daily driving and long road trips.",
            "Occasional towing where comfort is prioritized."
          ],
          demographic: [
            "Affluent buyers seeking a luxury mid-size truck.",
            "Professionals and empty nesters."
          ]
        },
        {
          name: "Raptor",
          price: "$56,070",
          engine: "3.0L EcoBoost V6",
          engineOptions: "None",
          horsepower: "405 hp",
          torque: "430 lb-ft",
          transmission: "10-speed Automatic",
          transmissionOptions: "None",
          towing: "5,510 lbs",
          suspension: "Forged Aluminum Double A-Arm / Watts-Link Rear with 2.5-inch Fox Live Valve Shocks",
          groundClearance: "10.7 in",
          bedSize: "5 ft",
          bluecruise: "No",
          cam360: "Yes",
          heatedSeats: "Yes",
          clothSeats: "No",
          upgradedOptions: "Beadlock Capable Wheels (Optional), Engine Block Heater (Optional)",
          other: "Electronic Locking Front & Rear Axles (Standard), Unique Ford Lettering Grille, Heavy Duty Exposed Steel Bash Plate, Zone Lighting, B&O Sound System, 12\" Digital Cluster and Center Display, Advanced Towing Package (Standard)",
          competitors:
            "Competitors: Chevrolet Colorado ZR2 Bison. Ranger Raptor features a 405 hp 3.0L EcoBoost V6 and advanced FOX Live Valve Shocks, providing superior high-speed off-road performance over its rivals.",
          image: "./images/Ranger_Raptor.jpg",
          useTitle: "High-Speed Off-Road",
          strengths: [
            "Extreme 405 hp V6 engine.",
            "FOX Live Valve Shocks and Watts-link rear suspension for superior off-roading.",
            "Electronic locking front and rear axles standard.",
            "Comprehensive luxury and tech standard (Heated Seats, 12\" Screens, B&O Audio).",
            "Towing capacity is lower than standard Ranger trims."
          ],
          usage: [
            "High-speed desert running and serious off-roading.",
            "Enthusiast buyers who want the ultimate mid-size truck performance."
          ],
          demographic: [
            "Off-road racing enthusiasts and adrenaline junkies.",
            "High-income performance buyers."
          ]
        }
      ]
    },
    {
      name: "F-150",
      image: "./images/F150.jpg",
      price: "$38,810",
      trims: [
        {
          name: "XL",
          price: "$38,810",
          engine: "2.7L EcoBoost V6",
          engineOptions: "3.5L EcoBoost V6, 5.0L Ti-VCT V8",
          horsepower: "325 hp",
          torque: "400 lb-ft",
          transmission: "10-speed Automatic",
          transmissionOptions: "3.5L EcoBoost V6, 5.0L V8",
          towing: "8,400 lbs", // Estimated max for 2.7L
          suspension: "Independent Front/Solid Rear (Leaf, Two-Stage Variable Rate)",
          groundClearance: "9.4 in",
          bedSize: "6.5 ft",
          bluecruise: "No",
          cam360: "No",
          heatedSeats: "No",
          clothSeats: "Yes",
          upgradedOptions: "36-gallon fuel tank, Power-Sliding Rear Window, Dual-Zone Auto Climate Control (Optional)",
          other: "Standard 12\" Digital Cluster and 12\" Capacitive Touchscreen (SYNC® 4), BLIS® w/ Cross-Traffic Alert and Trailer Tow Coverage, Reverse Sensing System, LED Reflector Headlamps, Power Lock Tailgate",
          competitors:
            "Competitors: Chevrolet Silverado 1500 WT, Ram 1500 Tradesman. F-150 XL boasts a more powerful standard 2.7L EcoBoost V6 engine and a larger 12\" standard touchscreen than base models of the Chevrolet Silverado and Ram 1500.",
          image: "./images/F150_XL.jpg",
          useTitle: "Best Base Power/Work",
          strengths: [
            "Best-in-class standard 325 hp V6 engine.",
            "Standard dual 12\" screens (Cluster and Center Stack).",
            "Excellent towing capability for a base model.",
            "Includes essential safety features (BLIS, Reverse Sensing) as standard."
          ],
          usage: [
            "Commercial fleet and heavy job site use.",
            "Work truck with high durability needs."
          ],
          demographic: [
            "Tradespeople, contractors, and fleet managers.",
            "Budget-conscious truck buyers."
          ]
        },
        {
          name: "STX",
          price: "$42,015",
          engine: "2.7L EcoBoost V6",
          engineOptions: "5.0L Ti-VCT V8",
          horsepower: "325 hp",
          torque: "400 lb-ft",
          transmission: "10-speed Automatic",
          transmissionOptions: "5.0L V8",
          towing: "8,400 lbs",
          suspension: "Independent Front/Solid Rear (Leaf, Two-Stage Variable Rate)",
          groundClearance: "9.4 in",
          bedSize: "5.5 ft",
          bluecruise: "No",
          cam360: "No",
          heatedSeats: "No",
          clothSeats: "Yes",
          upgradedOptions: "FX4 Off-Road Package (Skid Plates, A/T Tires), Mobile Office Package (Console Work Surface, 400W Outlet)",
          other: "18\" Gloss Black Wheels, Body-Color Bumpers, LED Fog Lamps with Cornering Lamps, Unique Sport Cloth Seating, 12\" Digital Cluster and 12\" Touchscreen (SYNC® 4)",
          competitors:
            "Competitors: Chevrolet Silverado 1500 Custom, Ram 1500 Big Horn. F-150 STX focuses on sporty styling (body-color bumpers, black grille, black wheels) and a feature-rich package at a lower entry price than competitor mid-range trims.",
          image: "./images/F150_STX.jpg",
          useTitle: "Best Value/Style",
          strengths: [
            "Adds sporty, stylish elements over the XL.",
            "Standard dual 12\" screens and LED Fog Lamps.",
            "Optional V8 and dedicated Mobile Office Package.",
            "Good middle ground of features and price."
          ],
          usage: [
            "Drivers who prioritize the look of their truck.",
            "Commuting and light recreational use, with an eye on affordability."
          ],
          demographic: [
            "Younger buyers and those wanting a sporty aesthetic.",
            "Buyers stepping up from the XL who want more style."
          ]
        },
        {
          name: "XLT",
          price: "$45,695",
          engine: "2.7L EcoBoost V6",
          engineOptions: "3.5L EcoBoost V6, 5.0L Ti-VCT V8, 3.5L PowerBoost Full Hybrid V6 (430 hp)",
          horsepower: "325 hp",
          torque: "400 lb-ft",
          transmission: "10-speed Automatic",
          transmissionOptions: "3.5L PowerBoost Full Hybrid V6, 5.0L V8",
          towing: "8,400 lbs",
          suspension: "Independent Front/Solid Rear (Leaf, Two-Stage Variable Rate)",
          groundClearance: "9.4 in",
          bedSize: "5.5 ft",
          bluecruise: "No",
          cam360: "No",
          heatedSeats: "No", // Optional
          clothSeats: "Yes",
          upgradedOptions: "360-degree camera, Zone Lighting (Standard), Heated Seats (Optional), Pro Power Onboard (2kW/2.4kW/7.2kW), Pro Trailer Hitch Assist™ (Optional)",
          other: "Standard 12\" SYNC 4 Touchscreen, LED Fog Lamps, Chrome Exterior Package, Available BlueCruise, Optional B&O Sound System",
          competitors:
            "Competitors: Chevrolet Silverado 1500 LT, Ram 1500 Laramie. F-150 XLT offers the unique option of a full hybrid powertrain (PowerBoost) for 430 hp, fuel economy and high Pro Power Onboard wattage, giving it an edge in versatility.",
          image: "./images/F150_XLT.jpg",
          useTitle: "Best-Selling Balance",
          strengths: [
            "Optimal balance of price, features, and capability.",
            "Optional 430 hp PowerBoost Hybrid for power and mobile Pro Power Onboard.",
            "Adds available heating, Zone Lighting, and advanced towing tech.",
            "Still uses cloth seats as standard."
          ],
          usage: [
            "Do-it-all family vehicle, daily driver, and light work truck.",
            "Buyers interested in the hybrid option and mobile power."
          ],
          demographic: [
            "General truck buyers and mid-size families.",
            "Customers needing versatility and moderate features."
          ]
        },
        {
          name: "Lariat",
          price: "$63,360",
          engine: "5.0L V8",
          engineOptions: "3.5L EcoBoost V6, 3.5L PowerBoost Full Hybrid V6",
          horsepower: "400 hp",
          torque: "410 lb-ft",
          transmission: "10-speed Automatic",
          transmissionOptions: "3.5L PowerBoost Full Hybrid V6",
          towing: "11,300 lbs", // Estimated max for 5.0L
          suspension: "Independent Front/Solid Rear (Leaf, Two-Stage Variable Rate)",
          groundClearance: "9.4 in",
          bedSize: "5.5 ft",
          bluecruise: "Yes", // BlueCruise Equipped (90-Day Trial) Standard
          cam360: "Yes",
          heatedSeats: "Yes",
          clothSeats: "No",
          upgradedOptions: "Two-speed automatic 4WD (Standard), B&O Unleashed sound system (Optional), Pro Access Tailgate (Optional), Heads-Up Display (Optional)",
          other: "Standard 4x4, Heated/Ventilated ActiveX-Trimmed Seats, LED Projector Headlamps, Standard B&O Sound System, Pro Trailer Hitch Assist™ and Pro Trailer Backup Assist™ (Standard)",
          competitors:
            "Competitors: Chevrolet Silverado 1500 RST, Ram 1500 Rebel. F-150 Lariat provides high-end audio options (B&O Unleashed) and available hybrid power, offering a higher level of technology and luxury than competitor mid-high trims.",
          image: "./images/F150_Lariat.jpg",
          useTitle: "Premium Power & Tech",
          strengths: [
            "Powerful 400 hp V8 engine and high 11,300 lbs towing.",
            "Luxury interior with Heated/Ventilated ActiveX seats and advanced tech.",
            "Standard BlueCruise capability (90-Day Trial) and 360-Degree Camera.",
            "High starting price point."
          ],
          usage: [
            "Premium daily driver, business vehicle, and serious recreational towing.",
            "Drivers prioritizing in-cabin luxury and performance."
          ],
          demographic: [
            "High-income professionals and small business owners.",
            "Buyers seeking luxury features in a light-duty truck."
          ]
        },
        {
          name: "Tremor",
          price: "$64,915",
          engine: "5.0L V8",
          engineOptions: "3.5L EcoBoost V6",
          horsepower: "400 hp",
          torque: "410 lb-ft",
          transmission: "10-speed Automatic",
          transmissionOptions: "3.5L EcoBoost V6",
          towing: "10,900 lbs", // Estimated max for Tremor
          suspension: "Long Travel, Unique Control Arms/Off-Road Shocks",
          groundClearance: "9.6 in", // Tremor specific clearance
          bedSize: "5.5 ft",
          bluecruise: "Yes", // BlueCruise Equipped (90-Day Trial) Standard
          cam360: "No", // Not explicitly listed as standard
          heatedSeats: "Yes",
          clothSeats: "Yes",
          upgradedOptions: "Trail Control, Trail 1-Pedal Drive, Trail Turn Assist, Warn Xeon 12S Winch (Optional)",
          other: "Standard 4x4, Electronic-Locking Rear Diff, Skid Plates, 33\" All-Terrain Tires, Pro Power Onboard (2kW), Unique Dual-Outlet Exhaust, Heated Front Seats (Standard)",
          competitors:
            "Competitors: Chevrolet Silverado 1500 Trail Boss, Ram 1500 Rebel. F-150 Tremor offers advanced off-road technologies like Trail 1-Pedal Drive and Trail Turn Assist, giving it a high-tech advantage on the trail.",
          image: "./images/F150_Tremor.jpg",
          useTitle: "Off-Road Tech & Power",
          strengths: [
            "400 hp V8 engine with excellent standard off-road tech (Trail Control/1-Pedal Drive).",
            "Long-travel suspension with 9.6 in of clearance and standard skid plates.",
            "Standard BlueCruise capability (90-Day Trial) and Heated Front Seats.",
            "Towing capacity is slightly limited compared to Lariat."
          ],
          usage: [
            "Serious off-roading, overlanding, and trail riding.",
            "Drivers who need capability beyond basic 4x4."
          ],
          demographic: [
            "Off-road enthusiasts and heavy recreational users.",
            "Buyers valuing capability and trail technology."
          ]
        },
        {
          name: "King Ranch",
          price: "$74,905",
          engine: "3.5L EcoBoost V6",
          engineOptions: "3.5L PowerBoost Full Hybrid V6",
          horsepower: "400 hp",
          torque: "500 lb-ft",
          transmission: "10-speed Automatic",
          transmissionOptions: "3.5L PowerBoost Full Hybrid V6",
          towing: "13,500 lbs", // Estimated max for 3.5L
          suspension: "Luxury",
          groundClearance: "9.4 in",
          bedSize: "5.5 ft",
          bluecruise: "Yes", // BlueCruise Equipped (1-year Plan) Standard
          cam360: "Yes",
          heatedSeats: "Yes",
          clothSeats: "No",
          upgradedOptions: "Exclusive King Ranch Del Rio Leather, Twin Panel Moonroof (Standard), Heads-Up Display (Standard), Pro Power Onboard (2kW)",
          other: "BlueCruise hands-free highway driving (1-year plan), Power Deployable Running Boards, B&O Unleashed Sound System, Two-Tone Paint, 20\" Chrome-Like PVD Wheels",
          competitors:
            "Competitors: Chevrolet Silverado 1500 High Country, Ram 1500 Limited. F-150 King Ranch is one of the few luxury trucks to offer BlueCruise hands-free driving assistance, a feature not matched by competitors.",
          image: "./images/F150_KingRanch.jpg",
          useTitle: "Premium Luxury & Style",
          strengths: [
            "Exclusive King Ranch Del Rio Leather and styling.",
            "Includes BlueCruise hands-free highway driving (1-year plan).",
            "Powerful 3.5L EcoBoost with high towing capacity (13,500 lbs).",
            "Standard Heads-Up Display, Power Deployable Running Boards, and B&O Unleashed."
          ],
          usage: [
            "Premium daily driver for buyers seeking unique luxury.",
            "Long-distance travel and light recreational towing."
          ],
          demographic: [
            "High-net-worth buyers with an aesthetic preference.",
            "Customers prioritizing luxury and advanced driver assist."
          ]
        },
        {
          name: "Platinum",
          price: "$74,905",
          engine: "3.5L EcoBoost V6",
          engineOptions: "3.5L PowerBoost Full Hybrid V6",
          horsepower: "400 hp",
          torque: "500 lb-ft",
          transmission: "10-speed Automatic",
          transmissionOptions: "3.5L PowerBoost Full Hybrid V6",
          towing: "13,500 lbs", // Estimated max for 3.5L
          suspension: "Luxury",
          groundClearance: "9.4 in",
          bedSize: "5.5 ft",
          bluecruise: "Yes", // BlueCruise Equipped (1-year Plan) Standard
          cam360: "Yes",
          heatedSeats: "Yes",
          clothSeats: "No",
          upgradedOptions: "Available Platinum Plus, 3.5L PowerBoost Full Hybrid V6 engine, Unique Multicontour Leather Seats, 20\" Painted Gloss Black Wheels",
          other: "BlueCruise hands-free highway driving (1-year plan), Power Deployable Running Boards, Power Tailgate, Pro Access Tailgate (Standard), B&O Unleashed Sound System",
          competitors:
            "Competitors: Chevrolet Silverado 1500 High Country, Ram 1500 Limited. F-150 Platinum offers a blend of top-tier towing capability, the BlueCruise system, and available hybrid power, setting it apart in the luxury segment.",
          image: "./images/F150_Platinum.jpg",
          useTitle: "Max Tow/Luxury & Tech",
          strengths: [
            "Highest conventional towing capacity (13,500 lbs).",
            "Powerful 3.5L EcoBoost engine (500 lb-ft torque).",
            "Includes BlueCruise and top-tier luxury features with a modern aesthetic.",
            "Standard B&O Unleashed and Multicontour Seats."
          ],
          usage: [
            "Drivers needing maximum towing capacity and luxury features.",
            "Executive transportation and long-distance hauling."
          ],
          demographic: [
            "High-income buyers and business owners.",
            "Customers prioritizing maximum capability and modern luxury."
          ]
        },
        {
          name: "Raptor",
          price: "$79,005",
          engine: "3.5L EcoBoost High-Output V6",
          engineOptions: "High-Output 5.2L Supercharged V8 (Raptor R)",
          horsepower: "450 hp",
          torque: "510 lb-ft",
          transmission: "10-speed Automatic",
          transmissionOptions: "5.2L Supercharged V8",
          towing: "8,200 lbs", // Estimated max for Raptor
          suspension: "Long Travel/FOX Racing Shox™ with Live Valve Technology",
          groundClearance: "12.0 in",
          bedSize: "5.5 ft",
          bluecruise: "No",
          cam360: "Yes", // Included with Heads-Up Display and Pro Trailer Assist features
          heatedSeats: "Yes",
          clothSeats: "Yes",
          upgradedOptions: "5.2L Supercharged V8 engine, FOX Dual-Live Valve Shox, 37-inch Tires, Recaro® Black Leather Seats",
          other: "4x4 with Hi-Lock Transfer Case, Heads-Up Display (Standard), B&O Unleashed Sound System (Standard), Trail Control/1-Pedal Drive, 35\" All-Terrain Tires (Standard)",
          competitors:
            "Competitors: Ram 1500 TRX. F-150 Raptor's available 5.2L Supercharged V8 (Raptor R) offers comparable performance to the Ram 1500 TRX, with a highly refined off-road suspension system.",
          image: "./images/F150_Raptor.jpg",
          useTitle: "High-Speed Off-Road V6",
          strengths: [
            "Extreme 450 hp High-Output V6.",
            "Long-travel suspension with advanced FOX Shocks.",
            "Best-in-class desert running performance with standard 35\" tires.",
            "Lower towing and payload than standard F-150s."
          ],
          usage: [
            "High-speed desert exploration and dune climbing.",
            "Performance enthusiasts who want the ultimate off-road experience."
          ],
          demographic: [
            "Off-road racing enthusiasts and adrenaline junkies.",
            "High-income buyers prioritizing off-road dominance."
          ]
        },
        {
          name: "Raptor R",
          price: "$109,145",
          engine: "5.2L Supercharged V8",
          engineOptions: "None",
          horsepower: "720 hp",
          torque: "640 lb-ft",
          transmission: "10-speed Automatic",
          transmissionOptions: "None",
          towing: "8,700 lbs",
          suspension: "Long Travel/Dual Live Valve FOX Shocks",
          groundClearance: "13.1 in",
          bedSize: "5.5 ft",
          bluecruise: "No",
          cam360: "Yes",
          heatedSeats: "Yes",
          clothSeats: "No",
          upgradedOptions: "Recaro Black Leather Seats, Carbon Fiber Package",
          other: "Standard 37-Inch Tires, Unique R Badging and Graphics, All standard Raptor features (Heads-Up Display, B&O Unleashed, etc.)",
          competitors:
            "Competitors: Ram 1500 TRX. F-150 Raptor R features the 5.2L Supercharged V8 engine, delivering 720 hp to directly compete with and outperform the Ram 1500 TRX in high-speed desert running.",
          image: "./images/F150_RaptorR.jpg",
          useTitle: "Ultimate Performance V8",
          strengths: [
            "Massive 720 hp Supercharged V8 engine.",
            "Highest performance and capability in the lineup.",
            "Standard 37-inch tires and 13.1 in of clearance.",
            "Highest price point and specialized use case."
          ],
          usage: [
            "Extreme high-speed off-road performance.",
            "Collectors and buyers seeking the highest horsepower truck."
          ],
          demographic: [
            "Wealthy performance vehicle collectors.",
            "Buyers of specialized, top-tier performance trucks."
          ]
        }
      ]
    },
{
      name: "Super Duty",
      image: "./images/SuperDuty.jpg",
      price: "$45,300",
      trims: [
        {
          name: "F-250 XL",
          price: "$45,300",
          engine: "6.8L 2-valve DEVCT NA PFI V8 Gas",
          engineOptions: "7.3L 2-valve DEVCT NA PFI V8 Gas, 6.7L Power Stroke® V8 Turbo Diesel, 6.7L High Output Power Stroke® V8 Turbo Diesel",
          horsepower: "405 hp @ 5,000 rpm",
          torque: "445 lb.-ft. @ 4,000 rpm",
          transmission: "TorqShift®-G 10-speed Automatic with Selectable Drive Modes",
          transmissionOptions: "TorqShift® 10-speed Automatic",
          drivetrain: "4x2 (RWD)",
          drivetrainOptions: "4x4",
          towing: "18,200 lbs",
          suspension: "Front - Independent Twin-I-Beam (4x2); Mono-beam (4x4) with Coil Springs",
          groundClearance: "9.4 in",
          bedSize: "6.75 ft or 8 ft",
          gasTankSize: "34.0 gal (Crew Cab/Short Bed)",
          gasTankOptions: "48.0 gal (Crew Cab/Long Bed or Diesel)",
          bluecruise: "No",
          cam360: "No",
          heatedSeats: "No",
          clothSeats: "No",
          upgradedOptions: "XL Off-Road Package, STX Appearance Package, XL Chrome Package, 5th-Wheel/Gooseneck Hitch Prep Package",
          other: "Standard 5G Wi-Fi connectivity and 8-inch LCD productivity screen.",
          competitors:
            "Competitors: Chevrolet Silverado 2500HD WT, Ram 2500 Tradesman. F-250 XL offers a strong V8 standard, focusing purely on work capability.",
          image: "./images/SuperDuty_XL.jpg",
          useTitle: "Maximum Work Power",
          strengths: [
            "Powerful 6.8L V8 engine standard.",
            "High conventional towing capacity.",
            "Heavy-duty chassis for commercial work.",
            "Lowest starting price for a Super Duty."
          ],
          usage: [
            "Heavy-duty commercial work and trailer towing.",
            "Fleet and job site use."
          ],
          demographic: [
            "Tradespeople and construction company fleet buyers.",
            "Buyers prioritizing max capability at the lowest price."
          ]
        },
        {
          name: "F-250 XLT",
          price: "$51,295",
          engine: "6.8L V8 Gas",
          engineOptions: "7.3L V8 Gas, 6.7L Power Stroke V8 Diesel",
          horsepower: "405 hp",
          torque: "445 lb-ft",
          transmission: "TorqShift-G 10-speed Automatic",
          transmissionOptions: "7.3L V8 Gas, 6.7L Power Stroke V8 Diesel",
          drivetrain: "4x2 (RWD)",
          drivetrainOptions: "4x4",
          towing: "18,000 lbs",
          suspension: "Heavy Duty",
          groundClearance: "8.4 in",
          bedSize: "8 ft",
          gasTankSize: "34.0 gal (Crew Cab/Short Bed)",
          gasTankOptions: "48.0 gal (Crew Cab/Long Bed or Diesel)",
          bluecruise: "No",
          cam360: "No",
          heatedSeats: "No",
          clothSeats: "Yes",
          upgradedOptions: "Tremor Off-Road Package, Integrated trailer brake controller, Power-adjustable pedals",
          other: "Adds chrome exterior accents and cloth 40/20/40 seating.",
          competitors:
            "Competitors: Chevrolet Silverado 2500HD LT, Ram 2500 Big Horn. XLT adds convenience and comfort features while maintaining high towing capacity.",
          image: "./images/SuperDuty_XLT.jpg",
          useTitle: "Work/Convenience Mix",
          strengths: [
            "Adds convenience features (cruise control, power options).",
            "Available Tremor Off-Road Package for off-road enthusiasts.",
            "Maintains strong V8 and high towing.",
            "Balance of utility and moderate comfort."
          ],
          usage: [
            "Tradespeople who use the truck for both work and personal driving.",
            "Buyers needing work capacity with moderate technology."
          ],
          demographic: [
            "Small business owners and private heavy haulers.",
            "Customers needing a balance of utility and features."
          ]
        },
        {
          name: "F-250 LARIAT",
          price: "$64,740",
          engine: "7.3L V8 Gas",
          engineOptions: "6.7L Power Stroke V8 Diesel",
          horsepower: "430 hp",
          torque: "485 lb-ft",
          transmission: "TorqShift 10-speed Automatic",
          transmissionOptions: "6.7L Power Stroke V8 Diesel",
          drivetrain: "4x2 (RWD)",
          drivetrainOptions: "4x4, Electronic Shift-on-the-Fly",
          towing: "20,000 lbs", // Max conventional with 7.3L
          suspension: "Heavy Duty",
          groundClearance: "8.4 in",
          bedSize: "6.75 ft",
          gasTankSize: "34.0 gal (Crew Cab/Short Bed)",
          gasTankOptions: "48.0 gal (Crew Cab/Long Bed or Diesel)",
          bluecruise: "No",
          cam360: "Yes",
          heatedSeats: "Yes",
          clothSeats: "No",
          upgradedOptions: "Sport Appearance Package, Pro Trailer Hitch Assist, PowerScope trailer tow mirrors",
          other: "Standard 7.3L Gas V8 engine and leather seating.",
          competitors:
            "Competitors: Chevrolet Silverado 2500HD LTZ, Ram 2500 Laramie. Lariat introduces premium features like leather and towing technologies, making it the sweet spot for comfort and capability.",
          image: "./images/SuperDuty_Lariat.jpg",
          useTitle: "Premium Towing Technology",
          strengths: [
            "Standard powerful 7.3L V8 and leather interior.",
            "Includes advanced towing features (360-degree camera, PowerScope mirrors).",
            "Major technology jump (larger touchscreen, advanced driver aids)."
          ],
          usage: [
            "Drivers who frequently tow large trailers or fifth wheels.",
            "Premium daily driving and long-haul towing."
          ],
          demographic: [
            "Serious recreational tow enthusiasts (RVs, large boats).",
            "Business owners prioritizing comfort and towing tech."
          ]
        },
        {
          name: "F-250 King Ranch",
          price: "$76,975",
          engine: "7.3L V8 Gas",
          engineOptions: "6.7L Power Stroke V8 Diesel",
          horsepower: "430 hp",
          torque: "485 lb-ft",
          transmission: "TorqShift 10-speed Automatic",
          transmissionOptions: "6.7L Power Stroke V8 Diesel",
          drivetrain: "4x4, Electronic Shift-on-the-Fly, Two-Speed Automatic 4WD",
          towing: "20,000 lbs",
          suspension: "Luxury Heavy Duty",
          groundClearance: "8.4 in",
          bedSize: "6.75 ft",
          gasTankSize: "34.0 gal (Crew Cab/Short Bed)",
          gasTankOptions: "48.0 gal (Crew Cab/Long Bed or Diesel)",
          bluecruise: "Yes",
          cam360: "Yes",
          heatedSeats: "Yes",
          clothSeats: "No",
          upgradedOptions: "King Ranch Ultimate Package, Trailer reverse guidance, Head-Up Display",
          other: "Unique Kingsville Antique leather, includes BlueCruise hands-free driving.",
          competitors:
            "Competitors: Chevrolet Silverado 2500HD High Country, Ram 2500 Limited. Offers a unique western-themed luxury and BlueCruise technology.",
          image: "./images/SuperDuty_KingRanch.jpg",
          useTitle: "Western Luxury & BlueCruise",
          strengths: [
            "Unique Kingsville Antique leather and styling.",
            "Includes BlueCruise hands-free highway driving.",
            "Standard 7.3L V8 (430 hp) and high-end tech.",
            "Focus on comfort and advanced driver aids."
          ],
          usage: [
            "Premium daily driver with frequent highway use.",
            "Long-distance towing where driver assistance is valued."
          ],
          demographic: [
            "Affluent truck buyers with a preference for unique styling.",
            "Ranch owners and executives."
          ]
        },
        {
          name: "F-250 Platinum",
          price: "$77,865",
          engine: "7.3L V8 Gas",
          engineOptions: "6.7L Power Stroke V8 Diesel",
          horsepower: "430 hp",
          torque: "485 lb-ft",
          transmission: "TorqShift 10-speed Automatic",
          transmissionOptions: "6.7L Power Stroke V8 Diesel",
          drivetrain: "4x4, Two-Speed Automatic 4WD",
          towing: "20,000 lbs",
          suspension: "Luxury Heavy Duty",
          groundClearance: "8.4 in",
          bedSize: "6.75 ft",
          gasTankSize: "34.0 gal (Crew Cab/Short Bed)",
          gasTankOptions: "48.0 gal (Crew Cab/Long Bed or Diesel)",
          bluecruise: "Yes",
          cam360: "Yes",
          heatedSeats: "Yes",
          clothSeats: "No",
          upgradedOptions: "Platinum Plus Package, Power deployable running boards, Black Appearance Package",
          other: "Highest level of comfort, convenience, and modern technology in the F-250 lineup.",
          competitors:
            "Competitors: Chevrolet Silverado 2500HD High Country, Ram 2500 Limited. Platinum focuses on modern, polished luxury and convenience features like power-deployable running boards.",
          image: "./images/SuperDuty_Platinum.jpg",
          useTitle: "Top-Tier Modern Luxury",
          strengths: [
            "Includes BlueCruise, power running boards, and power tailgate.",
            "Standard 7.3L V8 and available Power Stroke Diesel.",
            "Highest level of comfort and convenience features.",
            "Modern, premium exterior finish."
          ],
          usage: [
            "Executive daily driver and premium heavy-duty towing.",
            "Buyers who demand max power and max luxury."
          ],
          demographic: [
            "High-income business owners and executives.",
            "Customers prioritizing modern luxury and convenience."
          ]
        },
        // --- F-350 Trims ---
        {
          name: "F-350 XL",
          price: "$46,595",
          engine: "6.8L V8 Gas",
          engineOptions: "7.3L V8 Gas, 6.7L Power Stroke V8 Diesel",
          horsepower: "405 hp",
          torque: "445 lb-ft",
          transmission: "TorqShift-G 10-speed Automatic",
          transmissionOptions: "7.3L V8 Gas, 6.7L Power Stroke V8 Diesel",
          drivetrain: "4x2 (RWD)",
          drivetrainOptions: "4x4, Dual Rear Wheel (DRW) available",
          towing: "18,500 lbs", // Max conventional with 6.8L
          suspension: "Heavy Duty",
          groundClearance: "8.4 in",
          bedSize: "8 ft",
          gasTankSize: "34.0 gal (Standard)",
          gasTankOptions: "48.0 gal (Crew Cab/Long Bed or Diesel)",
          bluecruise: "No",
          cam360: "No",
          heatedSeats: "No",
          clothSeats: "Yes",
          upgradedOptions: "High-capacity Axle Upgrade, Dual Rear Wheel option",
          other: "Increased payload capacity over F-250 XL due to stronger chassis.",
          competitors:
            "Competitors: Chevrolet Silverado 3500HD WT, Ram 3500 Tradesman. F-350 XL offers a higher max payload and the option for DRW, essential for heavy commercial hauling.",
          image: "./images/SuperDuty_F350_XL.jpg",
          useTitle: "High Payload Work Truck",
          strengths: [
            "Higher payload capacity than F-250.",
            "Available Dual Rear Wheel configuration.",
            "Entry-level price for 1-ton capability.",
            "Ideal for heavy slide-in campers and cargo."
          ],
          usage: [
            "Heavy equipment hauling and major towing (Gooseneck/Fifth Wheel).",
            "Fleet and major commercial applications."
          ],
          demographic: [
            "Commercial haulers, heavy-duty fleet operators.",
            "Buyers requiring maximum payload."
          ]
        },
        {
          name: "F-350 XLT",
          price: "$52,600",
          engine: "6.8L V8 Gas",
          engineOptions: "7.3L V8 Gas, 6.7L Power Stroke V8 Diesel",
          horsepower: "405 hp",
          torque: "445 lb-ft",
          transmission: "TorqShift-G 10-speed Automatic",
          transmissionOptions: "7.3L V8 Gas, 6.7L Power Stroke V8 Diesel",
          drivetrain: "4x2 (RWD)",
          drivetrainOptions: "4x4, DRW available",
          towing: "18,500 lbs",
          suspension: "Heavy Duty",
          groundClearance: "8.4 in",
          bedSize: "8 ft",
          gasTankSize: "34.0 gal (Standard)",
          gasTankOptions: "48.0 gal (Crew Cab/Long Bed or Diesel)",
          bluecruise: "No",
          cam360: "No",
          heatedSeats: "No",
          clothSeats: "Yes",
          upgradedOptions: "Snow Plow Prep Package, available upfitter switches",
          other: "Mid-level features on the heavy-duty 1-ton platform.",
          competitors:
            "Competitors: Chevrolet Silverado 3500HD LT, Ram 3500 Big Horn. Provides an excellent blend of 1-ton capability and desirable features.",
          image: "./images/SuperDuty_F350_XLT.jpg",
          useTitle: "Payload and Comfort",
          strengths: [
            "Higher payload and optional DRW over F-250 XLT.",
            "Comfort and convenience items over XL trim.",
            "Still highly configurable for commercial use."
          ],
          usage: [
            "Professional landscaping, construction, or transport requiring 1-ton capability.",
            "Frequent heavy towing."
          ],
          demographic: [
            "Contractors and small fleet owners who prioritize utility but desire some comfort."
          ]
        },
        {
          name: "F-350 LARIAT",
          price: "$66,040",
          engine: "7.3L V8 Gas",
          engineOptions: "6.7L Power Stroke V8 Diesel",
          horsepower: "430 hp",
          torque: "485 lb-ft",
          transmission: "TorqShift 10-speed Automatic",
          transmissionOptions: "6.7L Power Stroke V8 Diesel",
          drivetrain: "4x2 (RWD)",
          drivetrainOptions: "4x4, DRW available",
          towing: "20,000 lbs",
          suspension: "Heavy Duty",
          groundClearance: "8.4 in",
          bedSize: "6.75 ft",
          gasTankSize: "34.0 gal (Crew Cab/Short Bed)",
          gasTankOptions: "48.0 gal (Crew Cab/Long Bed or Diesel)",
          bluecruise: "No",
          cam360: "Yes",
          heatedSeats: "Yes",
          clothSeats: "No",
          upgradedOptions: "5th Wheel/Gooseneck Prep Package, Ventilated Front Seats",
          other: "Combines 1-ton capacity with luxury features.",
          competitors:
            "Competitors: Chevrolet Silverado 3500HD LTZ, Ram 3500 Laramie. Offers premium features and technology with higher payload ratings than F-250 Lariat.",
          image: "./images/SuperDuty_F350_Lariat.jpg",
          useTitle: "High-Capacity Premium",
          strengths: [
            "Luxury leather and advanced tech with 1-ton capacity.",
            "Ideal for large fifth-wheel RVs.",
            "Excellent blend of power, capability, and comfort."
          ],
          usage: [
            "High-end recreational towing and commercial executives.",
            "Long-distance travel with heavy loads."
          ],
          demographic: [
            "Affluent RV owners and business owners needing both luxury and high payload."
          ]
        },
        {
          name: "F-350 King Ranch",
          price: "$78,275",
          engine: "7.3L V8 Gas",
          engineOptions: "6.7L Power Stroke V8 Diesel",
          horsepower: "430 hp",
          torque: "485 lb-ft",
          transmission: "TorqShift 10-speed Automatic",
          transmissionOptions: "6.7L Power Stroke V8 Diesel",
          drivetrain: "4x4, DRW available",
          towing: "20,000 lbs",
          suspension: "Luxury Heavy Duty",
          groundClearance: "8.4 in",
          bedSize: "6.75 ft",
          gasTankSize: "34.0 gal (Crew Cab/Short Bed)",
          gasTankOptions: "48.0 gal (Crew Cab/Long Bed or Diesel)",
          bluecruise: "Yes",
          cam360: "Yes",
          heatedSeats: "Yes",
          clothSeats: "No",
          upgradedOptions: "Heavy-Duty Trailer Tow Package, Twin Panel Moonroof",
          other: "Luxury interior with 1-ton capability and BlueCruise.",
          competitors:
            "Competitors: Chevrolet Silverado 3500HD High Country, Ram 3500 Limited. Blends unique luxury, BlueCruise, and superior payload/towing capacity.",
          image: "./images/SuperDuty_F350_KingRanch.jpg",
          useTitle: "High-Capacity Western Luxury",
          strengths: [
            "Unique interior on the high-payload F-350 platform.",
            "BlueCruise and advanced trailering tech.",
            "Ideal for luxury RV towing."
          ],
          usage: [
            "High-end recreational towing for large RVs and boats.",
            "Executive and large farm/ranch use."
          ],
          demographic: [
            "Affluent buyers needing high capacity with a unique, premium aesthetic."
          ]
        },
        {
          name: "F-350 Platinum",
          price: "$79,165",
          engine: "7.3L V8 Gas",
          engineOptions: "6.7L Power Stroke V8 Diesel",
          horsepower: "430 hp",
          torque: "485 lb-ft",
          transmission: "TorqShift 10-speed Automatic",
          transmissionOptions: "6.7L Power Stroke V8 Diesel",
          drivetrain: "4x4, DRW available",
          towing: "20,000 lbs",
          suspension: "Luxury Heavy Duty",
          groundClearance: "8.4 in",
          bedSize: "6.75 ft",
          gasTankSize: "34.0 gal (Crew Cab/Short Bed)",
          gasTankOptions: "48.0 gal (Crew Cab/Long Bed or Diesel)",
          bluecruise: "Yes",
          cam360: "Yes",
          heatedSeats: "Yes",
          clothSeats: "No",
          upgradedOptions: "Max Tow Package, Adaptive Steering, Advanced Security Pack",
          other: "Modern luxury with the highest F-350 capacity, including optional DRW.",
          competitors:
            "Competitors: Chevrolet Silverado 3500HD High Country, Ram 3500 Limited. Platinum trim with 1-ton capacity for maximum towing and payload with executive-level features.",
          image: "./images/SuperDuty_F350_Platinum.jpg",
          useTitle: "High-Capacity Executive Luxury",
          strengths: [
            "Max capacity (including DRW option) with the highest luxury level.",
            "Standard BlueCruise and high-end materials.",
            "Ideal blend of modern tech and power."
          ],
          usage: [
            "Executive-level travel and towing of the largest RVs or equipment.",
            "Long-haul, hands-free highway driving with heavy loads."
          ],
          demographic: [
            "Executives who need 1-ton capacity for frequent, heavy, long-distance hauling."
          ]
        },
        // --- F-450 Trims ---
        {
          name: "F-450 XL",
          price: "$59,955",
          engine: "6.7L Power Stroke V8 Diesel",
          engineOptions: "High Output 6.7L Power Stroke V8 Diesel",
          horsepower: "500 hp",
          torque: "1200 lb-ft",
          transmission: "TorqShift 10-speed Automatic",
          transmissionOptions: "High Output 6.7L Power Stroke V8 Diesel",
          drivetrain: "4x2 (RWD)",
          drivetrainOptions: "4x4 (standard in certain cab/bed configurations), DRW",
          towing: "24,000 lbs", // Conventional Max (Gooseneck higher)
          suspension: "Heavy Duty with Wide Track Front Axle",
          groundClearance: "8.4 in",
          bedSize: "8 ft",
          gasTankSize: "48.0 gal (Standard)",
          gasTankOptions: "N/A (Highest factory capacity)",
          bluecruise: "No",
          cam360: "No",
          heatedSeats: "No",
          clothSeats: "Yes",
          upgradedOptions: "Integrated Live-Drive Power Take-Off (PTO) Provision",
          other: "Standard Diesel engine; highest tow rating platform.",
          competitors:
            "Competitors: Chevrolet Silverado 4500HD (Chassis Cab), Ram 4500 (Chassis Cab). F-450 XL is the highest-rated standard pickup in the segment, offering superior maneuverability via the wide-track front axle.",
          image: "./images/SuperDuty_F450_XL.jpg",
          useTitle: "Ultimate Towing & Chassis",
          strengths: [
            "Highest towing and hauling ratings available.",
            "Standard Power Stroke Diesel engine.",
            "Wide-Track front axle for better turning radius.",
            "Commercial/Chassis Cab capability in a pickup format."
          ],
          usage: [
            "Massive Fifth Wheel/Gooseneck trailer towing.",
            "Specialty equipment and utility truck applications."
          ],
          demographic: [
            "Extreme heavy haulers, utility companies, RV manufacturers.",
            "Buyers needing the absolute highest capability."
          ]
        },
        {
          name: "F-450 XLT",
          price: "$67,195",
          engine: "6.7L Power Stroke V8 Diesel",
          engineOptions: "High Output 6.7L Power Stroke V8 Diesel",
          horsepower: "500 hp",
          torque: "1200 lb-ft",
          transmission: "TorqShift 10-speed Automatic",
          transmissionOptions: "High Output 6.7L Power Stroke V8 Diesel",
          drivetrain: "4x2 (RWD)",
          drivetrainOptions: "4x4, DRW",
          towing: "24,000 lbs",
          suspension: "Heavy Duty with Wide Track Front Axle",
          groundClearance: "8.4 in",
          bedSize: "8 ft",
          gasTankSize: "48.0 gal (Standard)",
          gasTankOptions: "N/A (Highest factory capacity)",
          bluecruise: "No",
          cam360: "No",
          heatedSeats: "No",
          clothSeats: "Yes",
          upgradedOptions: "Power-adjustable pedals, tailgate step",
          other: "Brings the power of the F-450 platform to a mid-level feature set.",
          competitors:
            "Competitors: Closest equivalent medium-duty truck trims. F-450 XLT is for buyers who need maximum power but don't require the top-tier luxury of higher trims.",
          image: "./images/SuperDuty_F450_XLT.jpg",
          useTitle: "Max Capability with Upgrades",
          strengths: [
            "Standard 6.7L Power Stroke Diesel and max ratings.",
            "Wide-track front axle for maneuverability.",
            "Added interior comfort/tech over XL."
          ],
          usage: [
            "Specialized heavy towing/hauling for mid-size businesses.",
            "Large equipment transport."
          ],
          demographic: [
            "Buyers who need the F-450's capacity but want more than a base work truck."
          ]
        },
        {
          name: "F-450 LARIAT",
          price: "$80,165",
          engine: "6.7L Power Stroke V8 Diesel",
          engineOptions: "High Output 6.7L Power Stroke V8 Diesel",
          horsepower: "500 hp",
          torque: "1200 lb-ft",
          transmission: "TorqShift 10-speed Automatic",
          transmissionOptions: "High Output 6.7L Power Stroke V8 Diesel",
          drivetrain: "4x4, DRW",
          towing: "24,000 lbs",
          suspension: "Heavy Duty with Wide Track Front Axle",
          groundClearance: "8.4 in",
          bedSize: "8 ft",
          gasTankSize: "48.0 gal (Standard)",
          gasTankOptions: "N/A (Highest factory capacity)",
          bluecruise: "No",
          cam360: "Yes",
          heatedSeats: "Yes",
          clothSeats: "No",
          upgradedOptions: "Lariat Value Package, 5th Wheel/Gooseneck Prep Package",
          other: "First trim level on F-450 to introduce significant luxury and technology.",
          competitors:
            "Competitors: Ram 3500/4500 Limited. F-450 Lariat provides class-leading tow ratings combined with leather and advanced camera systems.",
          image: "./images/SuperDuty_F450_Lariat.jpg",
          useTitle: "Ultimate Towing Comfort",
          strengths: [
            "Max towing and hauling capability.",
            "Wide-track axle for superior turning.",
            "High-end leather and technology features.",
            "Standard Power Stroke Diesel engine."
          ],
          usage: [
            "Drivers who prioritize comfort while pulling the heaviest trailers.",
            "Luxury transport of specialized equipment."
          ],
          demographic: [
            "Affluent buyers needing the F-450's capacity but demanding premium features."
          ]
        },
        {
          name: "F-450 King Ranch",
          price: "$92,590",
          engine: "6.7L Power Stroke V8 Diesel",
          engineOptions: "High Output 6.7L Power Stroke V8 Diesel",
          horsepower: "500 hp",
          torque: "1200 lb-ft",
          transmission: "TorqShift 10-speed Automatic",
          transmissionOptions: "High Output 6.7L Power Stroke V8 Diesel",
          drivetrain: "4x4, DRW",
          towing: "24,000 lbs",
          suspension: "Luxury Heavy Duty with Wide Track Front Axle",
          groundClearance: "8.4 in",
          bedSize: "8 ft",
          gasTankSize: "48.0 gal (Standard)",
          gasTankOptions: "N/A (Highest factory capacity)",
          bluecruise: "Yes",
          cam360: "Yes",
          heatedSeats: "Yes",
          clothSeats: "No",
          upgradedOptions: "Optional High-Output Diesel, Max Trailer Tow Package",
          other: "Highest towing/hauling capacity with the unique King Ranch luxury features.",
          competitors:
            "Competitors: Highest Ram 3500/4500 Limited trims. The combination of F-450 capacity, wide-track axle, BlueCruise, and King Ranch styling is unmatched.",
          image: "./images/SuperDuty_F450_KingRanch.jpg",
          useTitle: "Ultimate Towing with Western Luxury",
          strengths: [
            "Maximum towing/hauling capability with luxury appointments.",
            "Standard Power Stroke Diesel.",
            "BlueCruise for long-haul, hands-free highway towing."
          ],
          usage: [
            "Ultimate long-distance heavy-hauling in comfort.",
            "Executives with extreme towing needs."
          ],
          demographic: [
            "Top-tier executives and individuals requiring the best combination of power and luxury."
          ]
        },
        {
          name: "F-450 Platinum",
          price: "$94,035",
          engine: "6.7L Power Stroke V8 Diesel",
          engineOptions: "High Output 6.7L Power Stroke V8 Diesel",
          horsepower: "500 hp",
          torque: "1200 lb-ft",
          transmission: "TorqShift 10-speed Automatic",
          transmissionOptions: "High Output 6.7L Power Stroke V8 Diesel",
          drivetrain: "4x4, DRW",
          towing: "24,000 lbs",
          suspension: "Luxury Heavy Duty with Wide Track Front Axle",
          groundClearance: "8.4 in",
          bedSize: "8 ft",
          gasTankSize: "48.0 gal (Standard)",
          gasTankOptions: "N/A (Highest factory capacity)",
          bluecruise: "Yes",
          cam360: "Yes",
          heatedSeats: "Yes",
          clothSeats: "No",
          upgradedOptions: "High-Output Diesel Engine, Power Tailgate, Adaptive Cruise Control",
          other: "The absolute top of the line, combining max capability with max luxury and technology.",
          competitors:
            "Competitors: Closest rival heavy-duty premium trucks. F-450 Platinum is arguably the most capable and luxurious conventional pickup on the market.",
          image: "./images/SuperDuty_F450_Platinum.jpg",
          useTitle: "Ultimate Towing & Ultimate Luxury",
          strengths: [
            "Unrivaled towing/hauling capability with best-in-class features.",
            "Standard Power Stroke Diesel.",
            "Includes BlueCruise, premium leather, and all convenience features.",
            "Wide-Track front axle."
          ],
          usage: [
            "The top choice for all-out luxury, power, and towing.",
            "High-profile, executive-level heavy transport."
          ],
          demographic: [
            "Buyers demanding the highest level of capability, technology, and luxury available in a heavy-duty pickup."
          ]
        },
      ]
    },
{
      name: "Transit",
      image: "./images/Transit.jpg",
      price: "$47,400", // Updated to the lowest starting price (Cargo Van T-150)
      
      // SPECS OBJECT REMAINS UNCHANGED
      specs: {
        identityMatrix: [
          { name: "Transit-150", wheelbase: ["130 in", "148 in"], roof: ["Low", "Medium"], bodyLength: ["Regular", "Long"] },
          { name: "Transit-250", wheelbase: ["130 in", "148 in"], roof: ["Low", "Medium", "High"], bodyLength: ["Regular", "Long"] },
          { name: "Transit-350", wheelbase: ["130 in", "148 in"], roof: ["Low", "Medium", "High"], bodyLength: ["Regular", "Long"] },
          { name: "Transit-350HD (DRW)", wheelbase: ["148 in"], roof: ["High"], bodyLength: ["Extended (EL)"] }
        ],
        dimensions: {
          wheelbases: ["130 in", "148 in"],
          lowRoofHeight: "82.4 in – 82.9 in",
          mediumRoofHeight: "99.1 in – 101.3 in",
          highRoofHeight: "109.6 in – 110.4 in",
          regularLength: "217.8 in – 237.6 in",
          extendedLength: "263.9 in",
        },
        maxCapacities: {
          cargoVanVolume: "487.3 cu ft (High Roof, Extended)",
          passengerVanVolume: "461.9 cu ft (High Roof, Extended)",
        },
        uniqueIdentifier: "Transit-350HD is the only model with Dual Rear Wheels (DRW)."
      },
      // END SPECS OBJECT

      trims: [
      {
          name: "Cargo Van T-150 (LR)",
          price: "$47,400",
          engine: "3.5L PFDi V6",
          engineOptions: "3.5L EcoBoost V6", 
          horsepower: "275 hp",
          torque: "260 lb-ft",
          transmission: "10-speed Automatic SelectShift",
          transmissionOptions: "None",
          towing: "7,500 lbs",
          suspension: "Independent MacPherson-strut / Leaf springs",
          groundClearance: "7.0 in",
          bedSize: "126 in (at floor)",
          bluecruise: "No",
          cam360: "Optional",
          heatedSeats: "No",
          clothSeats: "Optional",
          upgradedOptions: "Intelligent All-Wheel Drive, SYNC 4 w/ 12\" Display",
          other: "Standard Ford Pro Telematics, Max Payload 3,668 lbs (RWD)",
          competitors:
            "Competitors: Ram ProMaster Cargo Van, Chevrolet Express Cargo Van. The Transit T-150 offers superior payload capacity and the flexibility of the powerful EcoBoost V6 and Intelligent All-Wheel Drive options.",
          image: "./images/Transit_CargoVan_T150.jpg",
          useTitle: "Versatile Standard Cargo",
          strengths: [
            "High Payload Capacity (up to 3,668 lbs) for a T-150.",
            "Standard powerful 3.5L PFDi V6 engine.",
            "Features the Ford Pro Telematics system for fleet management.",
            "Low roof and regular length make it easy to maneuver in urban environments."
          ],
          usage: [
            "Local delivery and light service work.",
            "Tradespeople needing a reliable, maneuverable work van."
          ],
          demographic: [
            "Small business owners, contractors, and light fleet operators.",
            "Users prioritizing maneuverability and payload over extreme volume."
          ]
        },
        {
          name: "Passenger Van XL",
          price: "$58,680",
          engine: "3.5L PFDi V6",
          engineOptions: "3.5L EcoBoost V6",
          horsepower: "275 hp",
          torque: "262 lb-ft",
          transmission: "10-speed Automatic",
          transmissionOptions: "None",
          towing: "5,100 lbs",
          suspension: "Heavy Duty",
          groundClearance: "6.0 in",
          bedSize: "N/A",
          bluecruise: "No",
          cam360: "No",
          heatedSeats: "No",
          clothSeats: "Yes",
          upgradedOptions: "AWD available",
          other: "50/50 Hinged Rear Door, Standard SYNC 4 with 12\" Center Display",
          competitors:
            "Competitors: Ram ProMaster Passenger Van, Mercedes-Benz Sprinter Passenger. Transit Passenger Van XL offers the option of a 3.5L EcoBoost V6 and a standard 10-speed automatic, providing better overall performance than the Ram ProMaster.",
          image: "./images/Transit_CargoVan.jpg",
          useTitle: "Base Passenger Hauler",
          strengths: [
            "Powerful standard V6 engine and 10-speed auto.",
            "Standard SYNC 4 with 12\" center display.",
            "Flexible seating for a large number of passengers.",
            "Minimal comfort and tech features."
          ],
          usage: [
            "Shuttle service, church groups, and large family transport.",
            "Commercial passenger transport."
          ],
          demographic: [
            "Churches, schools, and commercial shuttle operators.",
            "Very large families."
          ]
        },
        {
          name: "Passenger Van XLT",
          price: "$61,665",
          engine: "3.5L PFDi V6",
          engineOptions: "3.5L EcoBoost V6",
          horsepower: "275 hp",
          torque: "262 lb-ft",
          transmission: "10-speed Automatic",
          transmissionOptions: "None",
          towing: "5,100 lbs",
          suspension: "Heavy Duty",
          groundClearance: "6.0 in",
          bedSize: "N/A",
          bluecruise: "No",
          cam360: "No",
          heatedSeats: "No",
          clothSeats: "Yes",
          upgradedOptions: "Available 253-Degree Rear Door Opening",
          other: "Large Center Console, Standard SYNC 4 with 12\" Center Display",
          competitors:
            "Competitors: Ram ProMaster Passenger Van, Mercedes-Benz Sprinter Passenger. Transit Passenger Van XLT includes a large center console and more utility options, giving it a comfort advantage over base competitors.",
          image: "./images/Transit_XLT.jpg",
          useTitle: "Comfort Passenger Hauler",
          strengths: [
            "Adds comfort and convenience features like a large center console.",
            "Still offers the powerful V6 engine options.",
            "Improved utility with wider rear door opening option.",
            "Higher starting price point."
          ],
          usage: [
            "Long-distance touring for large groups.",
            "Executive shuttle service or specialized transport."
          ],
          demographic: [
            "Hospitality and resort shuttle services.",
            "Buyers who convert vans for travel (van life)."
          ]
        }
      ]
    }
],
// NEW ELECTRIC AND HYBRID CATEGORY DATA
"Electric & Hybrid": [
    // MOVED from "SUVs & Cars"
    {
      name: "Mustang Mach-E",
      image: "./images/MustangMachE.jpg",
      price: "$37,995",
      trims: [
        {
          name: "Mustang Mach-E Select",
          price: "$37,995",
          engine: "All Electric",
          horsepower: "266 hp",
          torque: "428 lb-ft",
          transmission: "Single Speed",
          transmissionOptions: "None",
          towing: "1,500 lbs",
          suspension: "Independent",
          groundClearance: "5.7 in",
          bedSize: null,
          bluecruise: "No",
          cam360: "Yes",
          heatedSeats: "No",
          clothSeats: "Yes",
          upgradedOptions: "SYNC 4A, Wireless Apple CarPlay & Android Auto, Phone As A Key",
          other: "All Electric",
          competitors: "Competitors: Tesla Model Y, Volkswagen ID.4 Pro. Mustang Mach-E Select offers better standard infotainment and a more affordable entry than Tesla Model Y, and superior performance to Volkswagen ID.4 Pro.",
          image: "./images/MustangMachE_Select.jpg",
          useTitle: "Best Value EV Performance",
          strengths: [
            "Affordable entry price for a performance EV.",
            "Strong 428 lb-ft of instant torque.",
            "Great infotainment with standard 360 camera.",
            "Lower range than higher trims."
          ],
          usage: [
            "Daily commuting in a performance-oriented EV.",
            "First-time EV buyers seeking style and power."
          ],
          demographic: [
            "Younger, tech-savvy buyers.",
            "Performance enthusiasts on a budget."
          ]
        },
        {
          name: "Mustang Mach-E Premium",
          price: "$41,995",
          engine: "All Electric",
          horsepower: "333 hp",
          torque: "428 lb-ft",
          transmission: "Single Speed",
          transmissionOptions: "None",
          towing: "1,500 lbs",
          suspension: "Independent",
          groundClearance: "5.7 in",
          bedSize: null,
          bluecruise: "No",
          cam360: "Yes",
          heatedSeats: "Yes",
          clothSeats: "No",
          upgradedOptions: "B&O Sound System by Bang & Olufsen, 10-way power driver & 8-way power passenger seats",
          other: "All Electric",
          competitors: "Competitors: Tesla Model Y Long Range, Volkswagen ID.4 Pro S. Mustang Mach-E Premium provides superior audio and seating comfort over competitors’ standard trims.",
          image: "./images/MustangMachE_Premium.jpg",
          useTitle: "Luxury & Range",
          strengths: [
            "Highest available range option.",
            "Premium B&O sound system and heated seats.",
            "Increased horsepower (333 hp).",
            "Mid-range price point."
          ],
          usage: [
            "Long-distance EV road trips.",
            "Drivers prioritizing comfort and maximum range."
          ],
          demographic: [
            "Luxury-focused EV buyers.",
            "Customers needing a blend of performance and range."
          ]
        },
        {
          name: "Mustang Mach-E GT",
          price: "$54,495",
          engine: "All Electric",
          horsepower: "480 hp",
          torque: "600 lb-ft",
          transmission: "Single Speed",
          transmissionOptions: "None",
          towing: "1,500 lbs",
          suspension: "Sport-tuned",
          groundClearance: "5.3 in",
          bedSize: null,
          bluecruise: "No",
          cam360: "Yes",
          heatedSeats: "Yes",
          clothSeats: "No",
          upgradedOptions: "Performance Upgrade available",
          other: "All Electric",
          competitors: "Competitors: Tesla Model Y Performance, Hyundai IONIQ 5 N. Mustang Mach-E GT has faster acceleration and higher torque than Hyundai IONIQ 5 N and offers better standard handling features than Tesla Model Y Performance.",
          image: "./images/MustangMachE_GT.jpg",
          useTitle: "Pure Electric Performance",
          strengths: [
            "Extreme 480 hp and 600 lb-ft of torque.",
            "Sport-tuned suspension for sharper handling.",
            "Sub-4 second 0-60 mph time.",
            "Range is lower than the Premium trim."
          ],
          usage: [
            "Drivers prioritizing maximum speed and acceleration.",
            "Track days and spirited driving."
          ],
          demographic: [
            "Performance enthusiasts and speed junkies.",
            "High-income EV buyers."
          ]
        },
        {
          name: "Mustang Mach-E Rally",
          price: "$58,490",
          engine: "All Electric",
          horsepower: "480 hp",
          torque: "700 lb-ft",
          transmission: "Single Speed",
          transmissionOptions: "None",
          towing: "1,500 lbs",
          suspension: "Sport-tuned",
          groundClearance: "6.7 in",
          bedSize: null,
          bluecruise: "No",
          cam360: "Yes",
          heatedSeats: "Yes",
          clothSeats: "No",
          upgradedOptions: "GT Performance Upgrade included",
          other: "All Electric",
          competitors: "Competitors: Tesla Model Y Performance, Kia EV6 GT. Mustang Mach-E Rally offers the highest torque and rally-focused suspension that outperforms competitors in driving excitement and unique off-road styling.",
          image: "./images/MustangMachE_Rally.jpg",
          useTitle: "All-Terrain Thrills",
          strengths: [
            "Highest 700 lb-ft of torque for instant acceleration.",
            "Rally-focused suspension and unique high ground clearance (6.7 in).",
            "Unique exterior styling and rally driving mode.",
            "Most expensive and specialized trim."
          ],
          usage: [
            "Driving on unpaved roads and light off-roading.",
            "Drivers who value a unique, aggressive EV look."
          ],
          demographic: [
            "Rally enthusiasts and niche performance buyers.",
            "Customers looking for an aggressive EV aesthetic."
          ]
        }
      ]
    },
    // MOVED from "Trucks & Vans"
    {
      name: "F-150 Lightning",
      image: "./images/F150Lightning.jpg",
      price: "$54,780",
      trims: [
        {
          name: "Pro",
          price: "$54,780",
          engine: "Dual Electric Motors (Standard Range)",
          horsepower: "452 hp",
          torque: "775 lb-ft",
          transmission: "Single Speed",
          transmissionOptions: "Extended Range Battery",
          towing: "7,700 lbs",
          suspension: "Independent Rear",
          groundClearance: "8.4 in",
          bedSize: "5.5 ft",
          bluecruise: "No",
          cam360: "No",
          heatedSeats: "Yes",
          clothSeats: "Yes",
          upgradedOptions: "2.4 kW or available 9.6 kW Pro Power Onboard",
          other: "Heated vinyl front seats, Immediate commercial utility",
          competitors:
            "Competitors: Chevrolet Silverado EV Work Truck. F-150 Lightning Pro offers immediate availability, a proven truck bed design, and powerful Pro Power Onboard, giving it an advantage in immediate commercial utility.",
          image: "./images/F150Lightning_Pro.jpg",
          useTitle: "Commercial Workhorse",
          strengths: [
            "Affordable entry point to EV truck ownership.",
            "Massive 775 lb-ft of torque.",
            "Available 9.6 kW Pro Power Onboard for job sites.",
            "Lacks many premium comfort features."
          ],
          usage: [
            "Job site power and fleet commercial use.",
            "Buyers prioritizing utility and low running costs."
          ],
          demographic: [
            "Fleet managers and small business owners.",
            "Truck buyers focused on maximum value."
          ]
        },
        {
          name: "XLT",
          price: "$63,345",
          engine: "Dual Electric Motors (Standard Range)",
          horsepower: "452 hp",
          torque: "775 lb-ft",
          transmission: "Single Speed",
          transmissionOptions: "Extended Range Battery",
          towing: "7,700 lbs",
          suspension: "Independent Rear",
          groundClearance: "8.4 in",
          bedSize: "5.5 ft",
          bluecruise: "No",
          cam360: "Yes",
          heatedSeats: "Yes",
          clothSeats: "Yes",
          upgradedOptions: "2.4 kW or available 9.6 kW Pro Power Onboard, LED Signature Front Lighting",
          other: "Heated cloth seats, Mega Power Frunk",
          competitors:
            "Competitors: Tesla Cybertruck All-Wheel Drive. F-150 Lightning XLT provides traditional truck utility and heated cloth seats, offering more conventional comfort and features than its futuristic competitors.",
          image: "./images/F150Lightning_XLT.jpg",
          useTitle: "Best Everyday Value",
          strengths: [
            "Adds comfort and exterior styling features.",
            "Features the Mega Power Frunk for secure storage.",
            "Optional Extended Range battery.",
            "Lacks BlueCruise hands-free driving."
          ],
          usage: [
            "Family vehicle, daily driver, and light utility.",
            "Customers who need the utility of a truck with EV benefits."
          ],
          demographic: [
            "Mid-level income families and couples.",
            "Buyers looking for a modern, feature-rich truck."
          ]
        },
        {
          name: "Flash",
          price: "$69,995",
          engine: "Dual Electric Motors (Extended Range)",
          horsepower: "580 hp",
          torque: "775 lb-ft",
          transmission: "Single Speed",
          transmissionOptions: "None",
          towing: "10,000 lbs",
          suspension: "Independent Rear",
          groundClearance: "8.4 in",
          bedSize: "5.5 ft",
          bluecruise: "Yes",
          cam360: "Yes",
          heatedSeats: "Yes",
          clothSeats: "No",
          upgradedOptions: "15.5-in. center stack touchscreen, B&O Sound System w/ 8 speakers",
          other: "BlueCruise hands-free highway driving equipped, ActiveX seating surfaces",
          competitors:
            "Competitors: Chevrolet Silverado EV RST. F-150 Lightning Flash delivers BlueCruise hands-free driving and a massive 15.5-inch touchscreen as standard features, surpassing the tech integration of its rivals at this price.",
          image: "./images/F150Lightning_Flash.jpg",
          useTitle: "Tech & Extended Range",
          strengths: [
            "Includes BlueCruise and the large 15.5-inch screen.",
            "Standard Extended Range battery (580 hp).",
            "High 10,000 lbs maximum towing capacity.",
            "The trim focuses on tech and range, not ultimate luxury."
          ],
          usage: [
            "Long-distance commuting and frequent highway driving.",
            "Towing mid-to-large trailers over longer distances."
          ],
          demographic: [
            "Tech-focused buyers and long-distance travelers.",
            "Customers who prioritize range and advanced driver assistance."
          ]
        },
        {
          name: "Lariat",
          price: "$76,995",
          engine: "Dual Electric Motors (Extended Range)",
          horsepower: "580 hp",
          torque: "775 lb-ft",
          transmission: "Single Speed",
          transmissionOptions: "None",
          towing: "10,000 lbs",
          suspension: "Independent Rear",
          groundClearance: "8.4 in",
          bedSize: "5.5 ft",
          bluecruise: "Yes",
          cam360: "Yes",
          heatedSeats: "Yes",
          clothSeats: "No",
          upgradedOptions: "Twin panel moonroof, Phone As A Key",
          other: "Heated & ventilated front seats, Signature rear lighting",
          competitors:
            "Competitors: Rivian R1T Adventure. F-150 Lightning Lariat offers luxury amenities like a twin panel moonroof and Phone As A Key, providing a blend of familiar luxury and high-tech EV features.",
          image: "./images/F150Lightning_Lariat.jpg",
          useTitle: "Mid-Range Luxury & Power",
          strengths: [
            "Adds luxury features (heated/ventilated seats, moonroof).",
            "High 580 hp and 10,000 lbs towing.",
            "Includes BlueCruise and Phone As A Key.",
            "Highest price point before the Platinum trim."
          ],
          usage: [
            "Premium daily driver with luxury appointments.",
            "Drivers who value comfort and advanced convenience."
          ],
          demographic: [
            "High-income professionals and empty-nesters.",
            "Buyers seeking the traditional F-150 luxury experience."
          ]
        },
        {
          name: "Platinum",
          price: "$84,995",
          engine: "Dual Electric Motors (Extended Range)",
          horsepower: "580 hp",
          torque: "775 lb-ft",
          transmission: "Single Speed",
          transmissionOptions: "None",
          towing: "8,500 lbs",
          suspension: "Independent Rear",
          groundClearance: "8.4 in",
          bedSize: "5.5 ft",
          bluecruise: "Yes",
          cam360: "Yes",
          heatedSeats: "Yes",
          clothSeats: "No",
          upgradedOptions: "22-in. Bright Machined Face wheels, Premium Nirvana Leather, 9.6 kW Pro Power Onboard",
          other: "B&O Unleashed Sound System w/ 14 speakers",
          competitors:
            "Competitors: Tesla Cybertruck Cyberbeast. F-150 Lightning Platinum provides a highly refined, traditional luxury interior with premium leather and a top-tier B&O Unleashed sound system, offering a more luxurious experience than the Spartan Cybertruck.",
          image: "./images/F150Lightning_Platinum.jpg",
          useTitle: "Ultimate Luxury EV",
          strengths: [
            "Top-tier Nirvana Leather and B&O Unleashed audio.",
            "Standard 9.6 kW Pro Power Onboard.",
            "Highest level of comfort and advanced technology.",
            "Towing capacity is slightly reduced for luxury features."
          ],
          usage: [
            "Executive transportation and premium personal use.",
            "Drivers prioritizing the absolute best luxury experience."
          ],
          demographic: [
            "Wealthy truck buyers and executives.",
            "Customers seeking max luxury and advanced EV features."
          ]
        }
      ]
    },
    // MOVED from "Trucks & Vans"
    {
      name: "E-Transit Commercial Van",
      image: "./images/ETransit.jpg",
      price: "$45,700",
      trims: [
        {
          name: "Cutaway",
          price: "$45,700",
          engine: "Fully Electric Powertrain",
          horsepower: "266 hp",
          torque: "317 lb-ft",
          transmission: "Single Speed",
          transmissionOptions: "None",
          towing: "N/A",
          suspension: "Heavy Duty",
          groundClearance: "6.0 in",
          bedSize: "N/A",
          bluecruise: "No",
          cam360: "No",
          heatedSeats: "No",
          clothSeats: "Yes",
          upgradedOptions: "Available Pro Power Onboard",
          other: "Maximum Payload of 3,997 lbs. and GVWR of 9,500 lbs., Intelligent Access",
          competitors:
            "Competitors: Mercedes-Benz eSprinter Cutaway. E-Transit Cutaway offers superior maximum payload and GVWR ratings in the cutaway configuration compared to the eSprinter.",
          image: "./images/ETransit_Cutaway.jpg",
          useTitle: "Custom Upfit Base",
          strengths: [
            "Platform designed for custom upfitting (e.g., box truck, utility body).",
            "Superior payload and GVWR ratings over competitors.",
            "All-electric powertrain for low running costs.",
            "Requires third-party upfitting before use."
          ],
          usage: [
            "Specialized commercial applications (delivery, refrigeration).",
            "Fleets requiring a unique body style."
          ],
          demographic: [
            "Commercial fleets and upfit specialists.",
            "Businesses requiring specialized transportation."
          ]
        },
        {
          name: "Chassis Cab",
          price: "$46,200",
          engine: "Fully Electric Powertrain",
          horsepower: "266 hp",
          torque: "317 lb-ft",
          transmission: "Single Speed",
          transmissionOptions: "None",
          towing: "N/A",
          suspension: "Heavy Duty",
          groundClearance: "6.0 in",
          bedSize: "N/A",
          bluecruise: "No",
          cam360: "No",
          heatedSeats: "No",
          clothSeats: "Yes",
          upgradedOptions: "Available Pro Power Onboard",
          other: "Max Payload of 3,960 lbs. and GVWR of 9,500 lbs., Intelligent Access",
          competitors:
            "Competitors: Ram ProMaster EV Chassis Cab. E-Transit Chassis Cab offers higher payload and GVWR options, providing more flexibility for heavy-duty commercial upfitting than the Ram ProMaster EV.",
          image: "./images/ETransit_ChassisCab.jpg",
          useTitle: "Best Flat-Body Platform",
          strengths: [
            "Robust platform for utility and stake beds.",
            "High max payload and GVWR.",
            "All-electric efficiency for reduced costs.",
            "Requires third-party upfitting."
          ],
          usage: [
            "Utility companies, landscapers, and flat-bed transport.",
            "Commercial transport requiring a separate body/bed."
          ],
          demographic: [
            "Utility and municipal fleets.",
            "Businesses needing a heavy-duty EV platform."
          ]
        },
        {
          name: "Cargo Van",
          price: "$51,000",
          engine: "Fully Electric Powertrain",
          horsepower: "266 hp",
          torque: "317 lb-ft",
          transmission: "Single Speed",
          transmissionOptions: "None",
          towing: "3,000 lbs",
          suspension: "Heavy Duty",
          groundClearance: "6.0 in",
          bedSize: "N/A",
          bluecruise: "No",
          cam360: "No",
          heatedSeats: "No",
          clothSeats: "Yes",
          upgradedOptions: "Available Pro Power Onboard",
          other: "Standard SYNC 4 With 12-Inch Display, Available in Three Roof Heights and Two Body Lengths",
          competitors:
            "Competitors: Mercedes-Benz eSprinter Cargo Van. E-Transit Cargo Van offers a larger standard 12-inch SYNC 4 display and a greater variety of configurations (roof heights/body lengths) than the eSprinter.",
          image: "./images/ETransit_CargoVan.jpg",
          useTitle: "Best Delivery Van",
          strengths: [
            "Multiple roof heights and lengths for max cargo flexibility.",
            "Standard large 12-inch SYNC 4 display.",
            "Low running costs and reduced maintenance.",
            "Limited range compared to gasoline vans for very long routes."
          ],
          usage: [
            "Last-mile delivery and urban logistics.",
            "Tradespeople using a mobile workshop."
          ],
          demographic: [
            "Logistics and delivery companies.",
            "Urban commercial vehicle operators."
          ]
        }
      ]
    }
]
};
// Data for the Comprehensive Super Duty Table (8 Columns) - UPDATED STRUCTURE FOR ENGINE/CAPABILITY BREAKDOWN
const comprehensiveSuperDutyData = [
    // --- F-250 Series (SRW) ---
    // Gas Engine (Best F-250 Payload)
    { model: "F-250 SRW", trim: "XL/XLT", duty: "Max Plyd", engine: "7.3L Gas", gcwr: "26.7k", gvwr: "10.0k", payload: "4.2k", tow: "19.5k" },
    // Diesel HO (Best F-250 Towing)
    { model: "F-250 SRW", trim: "Lariat+", duty: "Max Tow", engine: "6.7L HO", gcwr: "30.0k", gvwr: "10.8k", payload: "3.9k", tow: "23.0k" },
    
    // --- F-350 Series (SRW) ---
    // Gas Engine (Best F-350 SRW Payload)
    { model: "F-350 SRW", trim: "XL/XLT", duty: "Max Plyd", engine: "7.3L Gas", gcwr: "32.5k", gvwr: "11.9k", payload: "4.9k", tow: "22.4k" },
    // Diesel HO (Best F-350 SRW Towing)
    { model: "F-350 SRW", trim: "Lariat+", duty: "Max Tow", engine: "6.7L HO", gcwr: "40.0k", gvwr: "12.4k", payload: "4.8k", tow: "27.6k" },

    // --- F-350 Series (DRW) ---
    // Gas Engine (Absolute Best Payload due to low engine weight + DRW)
    { model: "F-350 DRW", trim: "XL/XLT", duty: "Max Plyd", engine: "6.8L Gas", gcwr: "32.0k", gvwr: "14.0k", payload: "**8.0k**", tow: "18.9k" },
    // Diesel HO (Best F-350 DRW Towing)
    { model: "F-350 DRW", trim: "Lariat+", duty: "Max Tow", engine: "6.7L HO", gcwr: "45.0k", gvwr: "14.0k", payload: "6.9k", tow: "**38.0k**" },
    
    // --- F-450 Series (DRW) ---
    // F-450 is Diesel-only for consumers, and its Max rating requires H.O.
    { model: "F-450 DRW", trim: "All", duty: "Max", engine: "6.7L HO", gcwr: "45.0k", gvwr: "14.0k", payload: "6.3k", tow: "**40.0k**" },
];

// Data for F-150 Comprehensive Table
const comprehensiveF150Data = [
    { engine: "3.5L EcoBoost", hp: "400", torque: "500", tow: "13,500", payload: "2,440", config: "SuperCrew 6.5' Box, 4x4" },
    { engine: "5.0L Ti-VCT V8", hp: "400", torque: "410", tow: "12,900", payload: "2,225", config: "SuperCrew 5.5' Box, 4x4" },
    { engine: "3.5L PowerBoost Hybrid", hp: "430", torque: "570", tow: "11,200", payload: "1,740", config: "SuperCrew 5.5' Box, 4x4" },
    { engine: "2.7L EcoBoost V6", hp: "325", torque: "400", tow: "8,400", payload: "1,785", config: "Regular Cab 8' Box, 4x2" },
    { engine: "3.5L HO EcoBoost (Raptor)", hp: "450", torque: "510", tow: "8,200", payload: "1,400", config: "SuperCrew 5.5' Box, 4x4" },
    { engine: "5.2L SC V8 (Raptor R)", hp: "720", torque: "640", tow: "8,700", payload: "1,400", config: "SuperCrew 5.5' Box, 4x4" },
];

// Updated: Data for F-150 Towing & Axle Breakdown (Hierarchical)
const f150AxleData = [
    { trim: "XL/STX/XLT", engine: "5.0L V8", maxTow: "No", axle: "3.31/3.73", gvwr: "7,050", gcwr: "14,800" },
    { trim: "XL/STX/XLT", engine: "5.0L V8", maxTow: "Yes", axle: "3.73", gvwr: "7,100", gcwr: "17,300" },
    { trim: "XL/STX/XLT", engine: "3.5L EB", maxTow: "No", axle: "3.31/3.55", gvwr: "7,050", gcwr: "17,500" },
    { trim: "XL/STX/XLT", engine: "3.5L EB", maxTow: "Yes", axle: "3.55/3.73", gvwr: "7,100", gcwr: "19,400" },
    { trim: "Lariat", engine: "3.5L EB", maxTow: "No", axle: "3.31/3.55", gvwr: "7,100", gcwr: "17,500" },
    { trim: "Lariat", engine: "3.5L EB", maxTow: "Yes", axle: "3.55", gvwr: "7,200", gcwr: "18,400" },
    { trim: "Tremor", engine: "5.0L V8", maxTow: "N/A", axle: "3.73", gvwr: "7,100", gcwr: "14,500" },
    { trim: "King Ranch", engine: "3.5L PowerBoost", maxTow: "N/A", axle: "3.73", gvwr: "7,350", gcwr: "17,000" },
    { trim: "Platinum", engine: "3.5L PowerBoost", maxTow: "N/A", axle: "3.73", gvwr: "7,350", gcwr: "17,000" },
    { trim: "Raptor/Raptor R", engine: "3.5L HO/5.2L SC", maxTow: "N/A", axle: "4.10", gvwr: "7,400", gcwr: "15,500" },
];

// NEW: Sort Button Helper Component
function SortHeader({ label, sortKey, sortConfig, requestSort, style, width }) {
    return React.createElement(
        "th",
        { style: { ...style, width: width }, onClick: () => requestSort(sortKey) },
        React.createElement("div", { style: { display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' } },
            label,
            React.createElement("span", { style: { marginLeft: '4px', fontSize: '8px' } }, 
                sortConfig.key === sortKey ? (sortConfig.direction === 'asc' ? '▲' : '▼') : '↕'
            )
        )
    );
}

// Global Trim Hierarchy for Sorting logic
const trimHierarchy = {
    "XL": 1, "STX": 2, "XLT": 3, "LARIAT": 4, "TREMOR": 5, "KING RANCH": 6, "PLATINUM": 7, "RAPTOR": 8, "RAPTOR R": 9
};

const getTrimPriority = (trimStr) => {
    const upper = trimStr.toUpperCase();
    for (const [key, value] of Object.entries(trimHierarchy)) {
        if (upper.includes(key)) return value;
    }
    return 99; // Default for others
};

// Font size calculation for category buttons
const maxTextLength = Math.max(...categories.map((c) => c.length));
const baseFontVW = 1.6;
const fontSizeVW = (baseFontVW * 14) / maxTextLength;

// Helper to render the competitor text without breaking
function renderCompetitorText(competitors) {
  const competitorLabel = "Competitors: ";
  const separator = ". ";
  const periodIndex = competitors.indexOf(separator);

  if (periodIndex === -1 || competitors.indexOf(competitorLabel) !== 0) {
    // Fallback: Display the whole string if it doesn't match the expected format
    return React.createElement(
      "div",
      { style: { margin: "2px 0 0 0", fontSize: "12px", textAlign: "left" } },
      competitors
    );
  }

  // Normal successful logic
  const competitorList = competitors.substring(competitorLabel.length, periodIndex + 1);
  const advantageText = competitors.substring(periodIndex + separator.length).trim();

  return React.createElement(
    "div",
    { style: { margin: "10px 0 0 0", fontSize: "12px", textAlign: "left" } },
    React.createElement("span", null, competitorLabel),
    React.createElement("span", null, competitorList),
    " ",
    React.createElement("b", null, advantageText)
  );
}

// --- THE SMARTER FOOTNOTE DETECTIVE ---
function getFootnoteText(trimData) {
  const footnotes = [];
  const taggedTermMap = {};
  
  // 1. COMBINE ALL TEXT FROM THE BACK OF THE CARD
  const allBackText = [
      ...(trimData.strengths || []),
      ...(trimData.usage || []),
      ...(trimData.demographic || [])
  ].join(" | ");

  // --- DEFINITIONS (Add more terms here!) ---
  const definitions = [
      { term: "BlueCruise", note: "BlueCruise is a hands-free highway driving feature that works on pre-mapped sections of divided highways (Hands-Free Blue Zones). It requires an active subscription after a trial period." },
      { term: "FlexBed", note: "The Ford FlexBed is the Maverick’s uniquely designed truck bed system that lets you reconfigure, divide, organize, power, and customize the bed without needing expensive aftermarket equipment. It’s basically a modular cargo management system built into the Maverick’s 4.5-foot bed." },
      { term: "EcoBoost", note: "EcoBoost is a Ford engine technology that uses turbocharging and direct injection to deliver power similar to a larger engine, but with better fuel efficiency." },
      { term: "Trail Control", note: "Trail Control is an off-road cruise control system that manages throttle and braking on rough terrain, allowing the driver to focus on steering." },
      { term: "Active X seating", note: "Active X seating is Ford's durable, stain-resistant synthetic material that offers the look and feel of leather." },
      { term: "Pro Trailer Backup Assist", note: "Pro Trailer Backup Assist allows the driver to steer the trailer using a knob, while the truck handles the steering wheel and controls the trailer's direction." }
  ];

  // 2. SEARCH THE TEXT AND COLLECT FOOTNOTES
  definitions.forEach((def) => {
      if (allBackText.toLowerCase().includes(def.term.toLowerCase())) {
          const superscript = footnotes.length + 1;
          const superscriptChar = superscript === 1 ? '¹' : superscript === 2 ? '²' : (superscript + ' ');
          
          footnotes.push(`${superscriptChar} ${def.note}`);
          
          taggedTermMap[def.term] = superscriptChar;
      }
  });

  return { footnotes, taggedTermMap };
}

// Data for the Comprehensive Transit Table (7 Columns)
const comprehensiveTransitData = [
    // --- Transit-150 Series ---
    { model: "T-150 Cargo", duty: "Std", gvwr: "8.6k", payload: "3.8k", towing: "6.9k", roof: "L/M/H", seating: "2" },
    { model: "T-150 Pass XL", duty: "Std", gvwr: "9.0k", payload: "2.8k", towing: "4.6k", roof: "L/M/H", seating: "8-12" },
    { model: "T-150 Pass XLT", duty: "Std", gvwr: "9.0k", payload: "2.8k", towing: "4.6k", roof: "L/M/H", seating: "8-12" },
    
    // --- Transit-250 Series ---
    { model: "T-250 Cargo", duty: "Hvy", gvwr: "9.1-9.9k", payload: "4.5k", towing: "6.9k", roof: "M/H", seating: "2" },
    { model: "T-250 Pass XL", duty: "Hvy", gvwr: "9.4k", payload: "3.3k", towing: "4.6k", roof: "M/H", seating: "12-15" },
    { model: "T-250 Pass XLT", duty: "Hvy", gvwr: "9.4k", payload: "3.3k", towing: "4.6k", roof: "M/H", seating: "12-15" },
    
    // --- Transit-350 Series (SRW) ---
    { model: "T-350 Cargo (SRW)", duty: "Max", gvwr: "9.5k", payload: "4.2k", towing: "6.9k", roof: "M/H", seating: "2" },
    { model: "T-350 Pass XL (SRW)", duty: "Max", gvwr: "9.5k", payload: "3.2k", towing: "4.6k", roof: "M/H", seating: "15" },
    
    // --- Transit-350 Series (DRW) ---
    { model: "T-350 Cargo (DRW)", duty: "DRW", gvwr: "11.0k", payload: "4.6k", towing: "7.5k", roof: "H Only", seating: "2" },
    { model: "T-350 Pass XL (DRW)", duty: "DRW", gvwr: "11.0k", payload: "3.1k", towing: "7.5k", roof: "H Only", seating: "15" },
];


// --- TRANSIT CONFIG CARD COMPONENT ---

function TransitConfigCard({ vehicleSpecs }) {
  const [data, setData] = React.useState(comprehensiveTransitData);
  const [sortConfig, setSortConfig] = React.useState({ key: null, direction: 'asc' });

  const resetSort = () => {
    setData(comprehensiveTransitData);
    setSortConfig({ key: null, direction: 'asc' });
  };

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
        direction = 'desc';
    }
    const sortedData = [...data].sort((a, b) => {
        if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
        if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
        return 0;
    });
    setData(sortedData);
    setSortConfig({ key, direction });
  };

  const cardStyle = {
    display: 'inline-block',
    border: '1px solid #004d40', 
    margin: '5px',
    padding: '15px',
    background: '#e8f5e9', // Light green background
    borderRadius: '10px',
    verticalAlign: 'top',
    width: '100%',
    maxWidth: '450px',
    boxSizing: 'border-box',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    textAlign: 'center'
  };

  const tableWrapperStyle = {
    marginBottom: '10px',
    maxWidth: '100%',
    overflowX: 'hidden' 
  };
    
  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: '8px', 
    backgroundColor: 'white',
    border: '1px solid #a5d6a7'
  };

  const thStyle = {
    border: '1px solid #a5d6a7',
    padding: '4px 1px', 
    textAlign: 'center',
    backgroundColor: '#c8e6c9', 
    fontWeight: 'bold',
    color: '#004d40',
    fontSize: '8px' 
  };

  const tdStyle = {
    border: '1px solid #a5d6a7',
    padding: '3px 1px', 
    textAlign: 'center'
  };
  
  const h4Style = {
      color: '#004d40', 
      marginBottom: '10px', 
      fontWeight: 'bold', 
      borderBottom: '2px solid #a5d6a7', 
      paddingBottom: '5px'
  };
  
  const modelWidth = "25%"; 
  const evenColWidth = "12.5%"; 
  
  const renderComprehensiveTable = () => React.createElement(
      "div",
      { style: tableWrapperStyle },
      React.createElement(
          "table",
          { style: tableStyle },
          React.createElement(
              "thead",
              null,
              React.createElement(
                  "tr",
                  null,
                  React.createElement(SortHeader, { style: thStyle, width: modelWidth, label: "Model / Trim", sortKey: "model", sortConfig: sortConfig, requestSort: requestSort }),
                  React.createElement(SortHeader, { style: thStyle, width: evenColWidth, label: "Duty", sortKey: "duty", sortConfig: sortConfig, requestSort: requestSort }),
                  React.createElement(SortHeader, { style: thStyle, width: evenColWidth, label: "Weight", sortKey: "gvwr", sortConfig: sortConfig, requestSort: requestSort }),
                  React.createElement(SortHeader, { style: thStyle, width: evenColWidth, label: "Plyd", sortKey: "payload", sortConfig: sortConfig, requestSort: requestSort }),
                  React.createElement(SortHeader, { style: thStyle, width: evenColWidth, label: "Tow", sortKey: "towing", sortConfig: sortConfig, requestSort: requestSort }),
                  React.createElement(SortHeader, { style: thStyle, width: evenColWidth, label: "Roof", sortKey: "roof", sortConfig: sortConfig, requestSort: requestSort }),
                  React.createElement(SortHeader, { style: thStyle, width: evenColWidth, label: "Seats", sortKey: "seating", sortConfig: sortConfig, requestSort: requestSort })
              )
          ),
          React.createElement(
              "tbody",
              null,
              data.map((item, index) =>
                  React.createElement(
                      "tr",
                      { key: index },
                      React.createElement("td", { style: { ...tdStyle, fontWeight: 'bold', textAlign: 'left', paddingLeft: '3px', fontSize: '9px' } }, item.model),
                      React.createElement("td", { style: tdStyle }, item.duty),
                      React.createElement("td", { style: tdStyle }, item.gvwr),
                      React.createElement("td", { style: tdStyle }, item.payload),
                      React.createElement("td", { style: tdStyle }, item.towing),
                      React.createElement("td", { style: tdStyle }, item.roof),
                      React.createElement("td", { style: tdStyle }, item.seating)
                  )
              )
          )
      )
  );
  
  const formattedNotes = [
      "SRW = Single Rear Wheel",
      "DRW = Dual Rear Wheel",
      "L/M/H = Low, Medium, High Roof Heights",
      "Plyd = Payload",
      "Tow = Towing",
      "Weight = GVWR (Gross Vehicle Weight Rating)",
      "k = 1,000 lbs (used for Weight, Plyd, Tow figures)",
      "NOTE: Max figures are approximate and based on optimal configuration.",
  ];


  return React.createElement(
    "div",
    { style: cardStyle },
    
    React.createElement("h3", { style: { color: '#004d40', marginBottom: '5px' } }, "TRANSIT CONFIGURATION GUIDE"),
    React.createElement("p", { style: { fontSize: '12px', color: '#388e3c', marginTop: '0', fontWeight: 'bold', fontStyle: 'italic' } }, "Quick Reference for Dimensions & Models"),
    
    React.createElement("div", { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' } },
        React.createElement("h4", { style: { ...h4Style, flexGrow: 1, borderBottom: 'none' } }, "MODEL SPECIFICATIONS"),
        React.createElement("button", { onClick: resetSort, style: { fontSize: '10px', cursor: 'pointer', padding: '2px 5px', marginBottom: '10px' } }, "Reset Sort")
    ),
    React.createElement("div", { style: { borderBottom: '2px solid #a5d6a7', marginBottom: '10px' } }),
    renderComprehensiveTable(),
    
    React.createElement(
      "ul",
      { style: { listStyleType: 'none', padding: '0', fontSize: '9px', textAlign: 'left', margin: '0 0 15px 0' } },
      formattedNotes.map((note, index) => 
        React.createElement("li", { key: index, style: { color: '#999', lineHeight: '1.4' } }, note)
      )
    ),

    React.createElement("h4", { style: h4Style }, "KEY ROOF & LENGTH DIMENSIONS"),
    
    React.createElement("h5", { style: { color: '#00796b', marginBottom: '5px', marginTop: '0', textAlign: 'center' } }, "Roof Height Comparison"),
    React.createElement("div", { style: { textAlign: 'center', marginBottom: '15px' } },
        React.createElement("img", {
          src: "./images/transit_height_visual.jpg", 
          alt: "Ford Transit Height Dimensions: Low, Medium, and High Roofs",
          style: { 
            width: "100%", 
            height: "auto", 
            maxWidth: '350px',
            border: "1px solid black", 
            borderRadius: "5px", 
            marginBottom: "5px" 
          }
        }),
        React.createElement("p", { style: { fontSize: '10px', color: '#666', marginBottom: '0' } }, "")
    ),

    React.createElement("h5", { style: { color: '#00796b', marginBottom: '5px', marginTop: '0', textAlign: 'center' } }, "Body and Wheelbase Lengths"),
    React.createElement("div", { style: { textAlign: 'center', marginBottom: '15px' } },
        React.createElement("img", {
          src: "./images/transit_length_visual.jpg", 
          alt: "Ford Transit Length Dimensions: Regular, Long, and Extended",
          style: { 
            width: "100%", 
            height: "auto", 
            maxWidth: '350px',
            border: "1px solid black", 
            borderRadius: "5px", 
            marginBottom: "5px" 
          }
        }),
        React.createElement("p", { style: { fontSize: '10px', color: '#666', marginBottom: '0' } }, "")
    ),
    
    React.createElement("h4", { style: h4Style }, "MAX CARGO VOLUME"),
    React.createElement(
      "ul",
      { style: { listStyleType: 'none', padding: '0', fontSize: '12px', textAlign: 'left' } },
      
      React.createElement("li", { style: { marginBottom: '5px' } }, 
          React.createElement("b", { style: { color: '#00796b' } }, "Cargo Van (Max Capacity): "), vehicleSpecs.maxCapacities.cargoVanVolume),
      
      React.createElement("li", { style: { marginBottom: '5px' } }, 
          React.createElement("b", { style: { color: '#00796b' } }, "Passenger Van (Max Capacity): "), vehicleSpecs.maxCapacities.passengerVanVolume),
    ),
    
    React.createElement("p", { style: { fontSize: '10px', color: 'red', marginTop: '15px', fontWeight: 'bold', borderTop: '1px dashed #a5d6a7', paddingTop: '5px' } }, vehicleSpecs.uniqueIdentifier)
  );
}

// --- END OF TRANSIT CONFIG CARD COMPONENT ---

// --- F-150 CONFIG CARD COMPONENT ---

function F150ConfigCard() {
  const [data, setData] = React.useState(comprehensiveF150Data);
  const [axleData, setAxleData] = React.useState(f150AxleData);
  const [sortConfig, setSortConfig] = React.useState({ key: null, direction: 'asc' });
  const [axleSortConfig, setAxleSortConfig] = React.useState({ key: null, direction: 'asc' });

  const resetSort = (isAxleTable = false) => {
    if (isAxleTable) {
        setAxleData(f150AxleData);
        setAxleSortConfig({ key: null, direction: 'asc' });
    } else {
        setData(comprehensiveF150Data);
        setSortConfig({ key: null, direction: 'asc' });
    }
  };

  const requestSort = (key, isAxleTable = false) => {
    let direction = 'asc';
    const config = isAxleTable ? axleSortConfig : sortConfig;
    const currentData = isAxleTable ? axleData : data;

    if (config.key === key && config.direction === 'asc') {
        direction = 'desc';
    }

    const sortedData = [...currentData].sort((a, b) => {
        // Handle custom Trim hierarchy sorting
        if (key === 'trim') {
            const priA = getTrimPriority(a[key]);
            const priB = getTrimPriority(b[key]);
            return direction === 'asc' ? priA - priB : priB - priA;
        }

        const valA = a[key].toString().replace(/,/g, '').replace(/\*/g, '');
        const valB = b[key].toString().replace(/,/g, '').replace(/\*/g, '');
        
        const numA = parseFloat(valA);
        const numB = parseFloat(valB);

        if (!isNaN(numA) && !isNaN(numB)) {
            return direction === 'asc' ? numA - numB : numB - numA;
        }
        if (valA < valB) return direction === 'asc' ? -1 : 1;
        if (valA > valB) return direction === 'asc' ? 1 : -1;
        return 0;
    });

    if (isAxleTable) {
        setAxleData(sortedData);
        setAxleSortConfig({ key, direction });
    } else {
        setData(sortedData);
        setSortConfig({ key, direction });
    }
  };

  const cardStyle = {
    display: 'inline-block',
    border: '1px solid #fbc02d', 
    margin: '5px',
    padding: '15px',
    background: '#fff9c4', 
    borderRadius: '10px',
    verticalAlign: 'top',
    width: '100%',
    maxWidth: '550px', 
    boxSizing: 'border-box',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    textAlign: 'center'
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: '8px',
    backgroundColor: 'white',
    border: '1px solid #fbc02d',
    marginBottom: '15px'
  };

  const thStyle = {
    border: '1px solid #fbc02d',
    padding: '4px',
    backgroundColor: '#fff176', 
    fontWeight: 'bold',
    fontSize: '9px',
    color: '#827717' 
  };

  const tdStyle = {
    border: '1px solid #fbc02d',
    padding: '4px',
    textAlign: 'center'
  };

  const h4Style = {
    color: '#827717',
    marginTop: '15px'
  };

  return React.createElement(
    "div",
    { style: cardStyle },
    React.createElement("h3", { style: { color: '#827717', marginBottom: '5px' } }, "F-150 CONFIGURATION GUIDE"),
    React.createElement("p", { style: { fontSize: '12px', color: '#827717', marginTop: '0', fontWeight: 'bold', fontStyle: 'italic' } }, "Quick Reference for Max Capacity & Trims"),
    
    React.createElement("div", { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' } },
        React.createElement("h4", { style: { ...h4Style, flexGrow: 1 } }, "ENGINE & TOWING SPECS"),
        React.createElement("button", { onClick: () => resetSort(false), style: { fontSize: '10px', cursor: 'pointer', padding: '2px 5px' } }, "Reset Sort")
    ),
    React.createElement("div", { style: { borderBottom: '2px solid #fbc02d', marginBottom: '10px' } }),
    React.createElement(
      "table",
      { style: tableStyle },
      React.createElement("thead", null, 
        React.createElement("tr", null,
          React.createElement(SortHeader, { style: thStyle, label: "Engine", sortKey: "engine", sortConfig: sortConfig, requestSort: (k) => requestSort(k, false) }),
          React.createElement(SortHeader, { style: thStyle, label: "HP/Torque", sortKey: "hp", sortConfig: sortConfig, requestSort: (k) => requestSort(k, false) }),
          React.createElement(SortHeader, { style: thStyle, label: "Max Tow", sortKey: "tow", sortConfig: sortConfig, requestSort: (k) => requestSort(k, false) }),
          React.createElement(SortHeader, { style: thStyle, label: "Max Payload", sortKey: "payload", sortConfig: sortConfig, requestSort: (k) => requestSort(k, false) }),
          React.createElement(SortHeader, { style: thStyle, label: "Optimal Configuration", sortKey: "config", sortConfig: sortConfig, requestSort: (k) => requestSort(k, false) })
        )
      ),
      React.createElement("tbody", null,
        data.map((item, i) => React.createElement("tr", { key: i },
          React.createElement("td", { style: { ...tdStyle, fontWeight: 'bold', textAlign: 'left' } }, item.engine),
          React.createElement("td", { style: tdStyle }, `${item.hp} / ${item.torque}`),
          React.createElement("td", { style: { ...tdStyle, fontWeight: 'bold', color: '#1976d2' } }, item.tow),
          React.createElement("td", { style: { ...tdStyle, fontWeight: 'bold', color: '#388e3c' } }, item.payload),
          React.createElement("td", { style: tdStyle }, item.config)
        ))
      )
    ),

    React.createElement("div", { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' } },
        React.createElement("h4", { style: { ...h4Style, flexGrow: 1 } }, "MAX TOW & AXLE RATIO GUIDE"),
        React.createElement("button", { onClick: () => resetSort(true), style: { fontSize: '10px', cursor: 'pointer', padding: '2px 5px' } }, "Reset Sort")
    ),
    React.createElement("div", { style: { borderBottom: '2px solid #fbc02d', marginBottom: '10px' } }),
    React.createElement(
      "table",
      { style: tableStyle },
      React.createElement("thead", null, 
        React.createElement("tr", null,
          React.createElement(SortHeader, { style: thStyle, label: "Trim Tier", sortKey: "trim", sortConfig: axleSortConfig, requestSort: (k) => requestSort(k, true) }),
          React.createElement(SortHeader, { style: thStyle, label: "Engine", sortKey: "engine", sortConfig: axleSortConfig, requestSort: (k) => requestSort(k, true) }),
          React.createElement(SortHeader, { style: thStyle, label: "Max Tow Pkg", sortKey: "maxTow", sortConfig: axleSortConfig, requestSort: (k) => requestSort(k, true) }),
          React.createElement(SortHeader, { style: thStyle, label: "Axle Ratio", sortKey: "axle", sortConfig: axleSortConfig, requestSort: (k) => requestSort(k, true) }),
          React.createElement(SortHeader, { style: thStyle, label: "GVWR", sortKey: "gvwr", sortConfig: axleSortConfig, requestSort: (k) => requestSort(k, true) }),
          React.createElement(SortHeader, { style: thStyle, label: "GCWR", sortKey: "gcwr", sortConfig: axleSortConfig, requestSort: (k) => requestSort(k, true) })
        )
      ),
      React.createElement("tbody", null,
        axleData.map((item, i) => React.createElement("tr", { key: i },
          React.createElement("td", { style: { ...tdStyle, fontWeight: 'bold' } }, item.trim),
          React.createElement("td", { style: tdStyle }, item.engine),
          React.createElement("td", { style: { ...tdStyle, color: item.maxTow === 'Yes' ? '#388e3c' : '#000', fontWeight: item.maxTow === 'Yes' ? 'bold' : 'normal' } }, item.maxTow),
          React.createElement("td", { style: tdStyle }, item.axle),
          React.createElement("td", { style: tdStyle }, item.gvwr),
          React.createElement("td", { style: { ...tdStyle, fontWeight: 'bold', color: '#1976d2' } }, item.gcwr)
        ))
      )
    ),

    React.createElement("p", { style: { fontSize: '9px', color: '#666', marginTop: '10px', textAlign: 'left' } }, 
      "Note: GCWR and Tow ratings assume Max Trailer Tow Package where indicated. High trim levels (Platinum/Limited) usually have lower payload due to curb weight."
    )
  );
}

// --- SUPER DUTY CONFIG CARD COMPONENT (FIXED WITH ENGINE) ---

function SuperDutyConfigCard() {
  const [data, setData] = React.useState(comprehensiveSuperDutyData);
  const [sortConfig, setSortConfig] = React.useState({ key: null, direction: 'asc' });

  const resetSort = () => {
    setData(comprehensiveSuperDutyData);
    setSortConfig({ key: null, direction: 'asc' });
  };

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
        direction = 'desc';
    }

    const sortedData = [...data].sort((a, b) => {
        // Trim logic (even if combined like XL/XLT)
        if (key === 'trim') {
            const priA = getTrimPriority(a[key].split('/')[0]);
            const priB = getTrimPriority(b[key].split('/')[0]);
            return direction === 'asc' ? priA - priB : priB - priA;
        }

        const valA = a[key].toString().replace(/\*/g, '').replace(/k/g, '');
        const valB = b[key].toString().replace(/\*/g, '').replace(/k/g, '');
        
        const numA = parseFloat(valA);
        const numB = parseFloat(valB);

        if (!isNaN(numA) && !isNaN(numB)) {
            return direction === 'asc' ? numA - numB : numB - numA;
        }
        if (valA < valB) return direction === 'asc' ? -1 : 1;
        if (valA > valB) return direction === 'asc' ? 1 : -1;
        return 0;
    });

    setData(sortedData);
    setSortConfig({ key, direction });
  };

  const cardStyle = {
    display: 'inline-block',
    border: '1px solid #1976d2', 
    margin: '5px',
    padding: '15px',
    background: '#e3f2fd', 
    borderRadius: '10px',
    verticalAlign: 'top',
    width: '100%',
    maxWidth: '550px', 
    boxSizing: 'border-box',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    textAlign: 'center'
  };

  const tableWrapperStyle = {
    marginBottom: '10px',
    maxWidth: '100%',
    overflowX: 'hidden'
  };
    
  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: '7.5px', 
    backgroundColor: 'white',
    border: '1px solid #90caf9'
  };

  const thStyle = {
    border: '1px solid #90caf9',
    padding: '3px 1px', 
    textAlign: 'center',
    backgroundColor: '#bbdefb', 
    fontWeight: 'bold',
    color: '#1976d2', 
    fontSize: '8px'
  };

  const tdStyle = {
    border: '1px solid #90caf9',
    padding: '2px 1px', 
    textAlign: 'center'
  };
  
  const h4Style = {
      color: '#1976d2', 
      marginBottom: '10px', 
      fontWeight: 'bold'
  };
  
  const modelWidth = "15%"; 
  const trimWidth = "15%"; 
  const dutyWidth = "12%"; 
  const evenColWidth = (100 - 15 - 15 - 12) / 4; 
  
  const renderComprehensiveTable = () => React.createElement(
      "div",
      { style: tableWrapperStyle },
      React.createElement(
          "table",
          { style: tableStyle },
          React.createElement(
              "thead",
              null,
              React.createElement(
                  "tr",
                  null,
                  React.createElement(SortHeader, { style: thStyle, width: modelWidth, label: "Model", sortKey: "model", sortConfig: sortConfig, requestSort: requestSort }),
                  React.createElement(SortHeader, { style: thStyle, width: trimWidth, label: "Trim", sortKey: "trim", sortConfig: sortConfig, requestSort: requestSort }),
                  React.createElement(SortHeader, { style: thStyle, width: dutyWidth, label: "Duty", sortKey: "duty", sortConfig: sortConfig, requestSort: requestSort }),
                  React.createElement(SortHeader, { style: thStyle, width: evenColWidth + "%", label: "Engine", sortKey: "engine", sortConfig: sortConfig, requestSort: requestSort }),
                  React.createElement(SortHeader, { style: thStyle, width: evenColWidth + "%", label: "GCWR", sortKey: "gcwr", sortConfig: sortConfig, requestSort: requestSort }),
                  React.createElement(SortHeader, { style: thStyle, width: evenColWidth + "%", label: "GVWR", sortKey: "gvwr", sortConfig: sortConfig, requestSort: requestSort }),
                  React.createElement(SortHeader, { style: thStyle, width: evenColWidth + "%", label: "Plyd", sortKey: "payload", sortConfig: sortConfig, requestSort: requestSort }),
                  React.createElement(SortHeader, { style: thStyle, width: evenColWidth + "%", label: "Tow", sortKey: "tow", sortConfig: sortConfig, requestSort: requestSort })
              )
          ),
          React.createElement(
              "tbody",
              null,
              data.map((item, index) =>
                  React.createElement(
                      "tr",
                      { key: index },
                      React.createElement("td", { style: { ...tdStyle, fontWeight: 'bold', textAlign: 'left', paddingLeft: '3px', fontSize: '8px' } }, item.model),
                      React.createElement("td", { style: tdStyle }, item.trim),
                      React.createElement("td", { style: { ...tdStyle, fontWeight: 'bold', color: item.duty.includes('Plyd') ? '#004d40' : '#1976d2' } }, item.duty),
                      React.createElement("td", { style: { ...tdStyle, fontWeight: 'bold' } }, item.engine), 
                      React.createElement("td", { style: tdStyle }, item.gcwr),
                      React.createElement("td", { style: tdStyle }, item.gvwr),
                      React.createElement("td", { style: { ...tdStyle, fontWeight: item.payload.includes('k') ? 'bold' : 'normal', color: item.payload.includes('k') ? '#004d40' : '#000' } }, item.payload), 
                      React.createElement("td", { style: { ...tdStyle, fontWeight: item.tow.includes('k') ? 'bold' : 'normal', color: item.tow.includes('k') ? '#1976d2' : '#000' } }, item.tow) 
                  )
              )
          )
      )
  );
  
  const formattedNotes = [
      "SRW = Single Rear Wheel; DRW = Dual Rear Wheel",
      "**Engine listed is the one required to achieve the listed capacity.**",
      "Max Plyd = Max Payload Configuration (usually lightest engine, 6.8L/7.3L Gas)",
      "Max Tow = Max Towing Configuration (always the 6.7L HO Diesel)",
      "GCWR = Gross Combined Weight Rating (Max 5th Wheel/Gooseneck Towing)",
      "GVWR = Gross Vehicle Weight Rating (Max)",
      "Plyd = Payload (Max); Tow = 5th Wheel / Gooseneck Towing (Max)",
      "6.7L HO = High Output Power Stroke Diesel",
      "k = 1,000 lbs (used for GCWR, GVWR, Plyd, and Tow figures)",
      "NOTE: Ratings are approximate and based on optimal configuration (Regular Cab 4x2, long bed)."
  ];


  return React.createElement(
    "div",
    { style: cardStyle },
    
    React.createElement("h3", { style: { color: '#1976d2', marginBottom: '5px' } }, "SUPER DUTY CONFIGURATION GUIDE"),
    React.createElement("p", { style: { fontSize: '12px', color: '#4fc3f7', marginTop: '0', fontWeight: 'bold', fontStyle: 'italic' } }, "Quick Reference for Max Capacity & Trims"),
    
    React.createElement("div", { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' } },
        React.createElement("h4", { style: { ...h4Style, flexGrow: 1 } }, "CAPACITY BY OPTIMIZED CONFIGURATION"),
        React.createElement("button", { onClick: resetSort, style: { fontSize: '10px', cursor: 'pointer', padding: '2px 5px' } }, "Reset Sort")
    ),
    React.createElement("div", { style: { borderBottom: '2px solid #90caf9', marginBottom: '10px' } }),
    renderComprehensiveTable(),
    
    React.createElement(
      "ul",
      { style: { listStyleType: 'none', padding: '0', fontSize: '9px', textAlign: 'left', margin: '0 0 15px 0' } },
      formattedNotes.map((note, index) => 
        React.createElement("li", { key: index, style: { color: '#999', lineHeight: '1.4' } }, note)
      )
    ),

    React.createElement("h4", { style: { ...h4Style, borderBottom: '2px solid #90caf9', paddingBottom: '5px' } }, "ENGINE LINEUP REFERENCE"),
    React.createElement(
      "ul",
      { style: { listStyleType: 'none', padding: '0', fontSize: '11px', textAlign: 'left', margin: '0 0 10px 0', lineHeight: '1.6' } },
      React.createElement("li", null, React.createElement("b", { style: { color: '#1976d2' } }, "6.8L Gas V8: "), "Standard on XL. Max payload leader for DRW."),
      React.createElement("li", null, React.createElement("b", { style: { color: '#1976d2' } }, "7.3L Gas V8: "), "Standard on XLT+. Best overall gas engine."),
      React.createElement("li", null, React.createElement("b", { style: { color: '#1976d2' } }, "6.7L Power Stroke V8 Diesel: "), "Standard output diesel. Excellent balance of tow/payload."),
      React.createElement("li", null, React.createElement("b", { style: { color: '#1976d2' } }, "6.7L H.O. Power Stroke V8 Diesel: "), "High Output version. **Max towing capability**.")
    ),
    
    React.createElement("p", { style: { fontSize: '10px', color: '#ff0000', marginTop: '15px', fontWeight: 'bold', borderTop: '1px dashed #90caf9', paddingTop: '5px' } }, "Super Duty Config Card")
  );
}

// --- END OF SUPER DUTY CONFIG CARD COMPONENT ---

function FlashCard({ trimData }) {
  const [isFlipped, setIsFlipped] = React.useState(false);
  
  const cardStyle = {
    display: 'inline-block',
    border: '1px solid #ccc',
    margin: '5px',
    padding: '10px',
    background: '#f9f9f9',
    borderRadius: '6px',
    verticalAlign: 'top',
    width: '240px',
    perspective: '1000px',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
  };

  const innerStyle = {
    position: 'relative',
    width: '100%',
    height: 'auto',
    textAlign: 'center',
    transition: 'transform 0.6s',
    transformStyle: 'preserve-3d',
    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1
  };

  const sideStyle = {
    width: '100%',
    height: 'auto', 
    WebkitBackfaceVisibility: 'hidden',
    backfaceVisibility: 'hidden',
    borderRadius: '6px',
    padding: '10px',
    boxSizing: 'border-box',
    flexDirection: 'column',
    flexGrow: 1, 
    top: 0, 
    left: 0,
    background: isFlipped ? '#e0f7fa' : '#f9f9f9',
  };

  const listItemStyle = {
    fontSize: '12px', 
    listStyleType: 'disc', 
    marginLeft: '5px', 
    marginBottom: '10px',
    textAlign: 'left' 
  };

  const categoryTitleStyle = {
    color: '#388e3c', 
    marginTop: '15px', 
    marginBottom: '0px',
    textAlign: 'left'
  };
  
  const backContentStyle = { 
    flexGrow: 1, 
    paddingBottom: '20px',
    position: 'relative', 
  };
  
  const backDividerStyle = {
      border: "0", 
      borderTop: "1px solid #aaa", 
      margin: "10px 5px 10px 5px" 
  };

  const tagTextWithSuperscript = (text, taggedTermMap) => {
    let resultText = text;
    for (const term in taggedTermMap) {
      const superscript = taggedTermMap[term];
      const regex = new RegExp(`\\b(${term})\\b`, 'gi');
      resultText = resultText.replace(regex, (match) => `${match}${superscript}`);
    }
    return resultText;
  };
  
  const { footnotes, taggedTermMap } = getFootnoteText(trimData); 

  const backContent = React.createElement(
    'div',
    { style: backContentStyle }, 
    React.createElement(
      'div',
      { style: { textAlign: 'center', marginBottom: '10px' }},
      React.createElement(
        'div',
        { style: { backgroundColor: '#4caf50', color: 'white', padding: '2px 8px', borderRadius: '12px', fontWeight: 'bold', fontSize: '10px', display: 'inline-block' }},
        (() => {
          let title = trimData.useTitle.trim();
          const lowerTitle = title.toLowerCase();
          if (lowerTitle.startsWith('best for ')) title = title.substring(9).trim(); 
          else if (lowerTitle.startsWith('best ')) title = title.substring(5).trim(); 
          title = title.charAt(0).toUpperCase() + title.slice(1);
          return "Best for " + title;
        })()
      )
    ),
    React.createElement('h4', { style: { color: '#004d40', marginBottom: '10px', textAlign: 'center' } }, trimData.name),
    React.createElement('h5', { style: categoryTitleStyle }, "Strengths & Trade-offs"),
    React.createElement('ul', { style: { paddingLeft: '20px', marginTop: '5px', textAlign: 'left' } },
      trimData.strengths.map((s, i) => React.createElement('li', { key: i, style: listItemStyle }, tagTextWithSuperscript(s, taggedTermMap)))
    ),
    React.createElement('h5', { style: categoryTitleStyle }, "Usage"),
    React.createElement('ul', { style: { paddingLeft: '20px', marginTop: '5px', textAlign: 'left' } },
      trimData.usage.map((t, i) => React.createElement('li', { key: i, style: listItemStyle }, tagTextWithSuperscript(t, taggedTermMap)))
    ),
    trimData.demographic && React.createElement('h5', { style: categoryTitleStyle }, "Target Demographic"),
    trimData.demographic && React.createElement('ul', { style: { paddingLeft: '20px', marginTop: '5px', textAlign: 'left' } },
      trimData.demographic.map((d, i) => React.createElement('li', { key: i, style: listItemStyle }, tagTextWithSuperscript(d, taggedTermMap)))
    ),
    React.createElement("hr", { style: backDividerStyle }),
    footnotes.length > 0 ? (
        footnotes.map((text, index) => 
            React.createElement("p", { key: index, style: { fontSize: '10px', marginTop: '5px', textAlign: 'left', lineHeight: '1.2', color: '#666' } }, text)
        )
    ) : null
  );

  const frontSide = React.createElement(
    'div', 
    { 
      key: 'front-content', 
      style: { 
        ...sideStyle, 
        position: isFlipped ? 'absolute' : 'relative',
        display: isFlipped ? 'none' : 'flex',
        transform: 'rotateY(0deg)',
        zIndex: isFlipped ? 1 : 2, 
      } 
    },
    React.createElement(
      'div', 
      { style: { flexGrow: 1, display: 'flex', flexDirection: 'column', paddingBottom: '20px' } }, 
      React.createElement("img", { src: trimData.image, alt: trimData.name, style: { width: "100%", borderRadius: "6px", marginBottom: "5px" } }),
      React.createElement("div", { style: { fontWeight: "bold", textAlign: "center", fontSize: "16px", marginBottom: "5px" } }, trimData.name),
      React.createElement("div", { style: { fontSize: "14px", marginBottom: "5px" } }, "Starting at " + trimData.price),
      React.createElement("ul", { style: { fontSize: "12px", paddingLeft: "16px", flexGrow: 1, textAlign: 'left', marginBottom: '0px' } },
        React.createElement("li", {style: {marginBottom: '2px'}}, "Engine: " + trimData.engine),
        React.createElement("li", {style: {marginBottom: '2px'}}, "MPG: " + trimData.mpg),
        React.createElement("li", {style: {marginBottom: '2px'}}, "Travel Miles: " + trimData.travelMiles),
        trimData.engineOptions != null ? React.createElement("li", {style: {marginBottom: '2px'}}, "Engine Options: " + trimData.engineOptions) : null,
        React.createElement("li", {style: {marginBottom: '2px'}}, "Horsepower: " + trimData.horsepower),
        React.createElement("li", {style: {marginBottom: '2px'}}, "Torque: " + trimData.torque),
        React.createElement("li", {style: {marginBottom: '2px'}}, "Gas Tank Size: " + trimData.gasTankSize),
        trimData.gasTankOptions != null ? React.createElement("li", {style: {marginBottom: '2px'}}, "Gas Tank Options: " + trimData.gasTankOptions) : null,
        React.createElement("li", {style: {marginBottom: '2px'}}, "Transmission: " + trimData.transmission),
        trimData.transmissionOptions != null ? React.createElement("li", {style: {marginBottom: '2px'}}, "Transmission Options: " + trimData.transmissionOptions) : null,
        trimData.drivetrain != null ? React.createElement("li", {style: {marginBottom: '2px'}}, "Drivetrain: " + trimData.drivetrain) : null,
        trimData.drivetrainOptions != null ? React.createElement("li", {style: {marginBottom: '2px'}}, "Drivetrain Options: " + trimData.drivetrainOptions) : null,
        React.createElement("li", {style: {marginBottom: '2px'}}, "Towing: " + trimData.towing),
        React.createElement("li", {style: {marginBottom: '2px'}}, "Suspension: " + trimData.suspension),
        trimData.groundClearance != null ? React.createElement("li", {style: {marginBottom: '2px'}}, "Ground Clearance: " + trimData.groundClearance) : null,
        trimData.bedSize != null ? React.createElement("li", {style: {marginBottom: '2px'}}, "Bed Size: " + trimData.bedSize) : null,
        React.createElement("li", {style: {marginBottom: '2px'}}, "BlueCruise: " + trimData.bluecruise),
        React.createElement("li", {style: {marginBottom: '2px'}}, "360 Cam: " + trimData.cam360),
        React.createElement("li", {style: {marginBottom: '2px'}}, "Heated Seats: " + trimData.heatedSeats),
        React.createElement("li", {style: {marginBottom: '2px'}}, "Cloth Seats: " + trimData.clothSeats),
        React.createElement("li", {style: {marginBottom: '2px'}}, "Upgraded Options: " + trimData.upgradedOptions),
        React.createElement("li", {style: {marginBottom: '2px'}}, "Other: " + trimData.other), 
      ),
      React.createElement("hr", { style: { border: "0", borderTop: "1px solid #aaa", margin: "10px 5px 0 5px" } }), 
      renderCompetitorText(trimData.competitors)
    ),
    React.createElement("div", { style: { marginTop: 'auto', color: 'blue', fontWeight: 'bold', fontSize: '10px', fontStyle: 'italic', paddingBottom: '0px' } }, "Tap for Strengths/Usage")
  );

  const backSide = React.createElement(
    'div',
    { 
      key: 'back-content', 
      style: { 
        ...sideStyle, 
        position: isFlipped ? 'relative' : 'absolute',
        display: isFlipped ? 'flex' : 'none',
        transform: 'rotateY(180deg)',
        zIndex: isFlipped ? 2 : 1, 
      } 
    },
    backContent,
    React.createElement("div", { style: { marginTop: 'auto', paddingTop: '5px', color: 'blue', fontWeight: 'bold', textAlign: 'center', fontSize: '10px', fontStyle: 'italic', paddingBottom: '0px' } }, "Tap to flip back")
  );

  return React.createElement("div", { style: cardStyle, onClick: () => setIsFlipped(!isFlipped) },
    React.createElement("div", { style: innerStyle }, frontSide, backSide)
  );
}

function StandardTrimCard({ trimData }) {
  return React.createElement(
    "div",
    {
      key: trimData.name,
      style: {
        display: "inline-block",
        border: "1px solid #ccc",
        margin: "5px",
        padding: "10px",
        background: "#f9f9f9",
        borderRadius: "6px",
        verticalAlign: "top",
        width: "240px",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }
    },
    React.createElement(
      'div', 
      { style: { flexGrow: 1, display: 'flex', flexDirection: 'column', paddingBottom: '10px' } }, 
      React.createElement("img", { src: trimData.image, alt: trimData.name, style: { width: "100%", borderRadius: "6px", marginBottom: "5px" } }),
      React.createElement("div", { style: { fontWeight: "bold", textAlign: "center", fontSize: "16px", marginBottom: "5px" } }, trimData.name),
      React.createElement("div", { style: { fontSize: "14px", marginBottom: "5px" } }, "Starting at " + trimData.price),
      React.createElement("ul", { style: { fontSize: "12px", paddingLeft: "16px", textAlign: 'left', flexGrow: 1, marginBottom: '0px' } }, 
        React.createElement("li", {style: {marginBottom: '2px'}}, "Engine: " + trimData.engine),
        React.createElement("li", {style: {marginBottom: '2px'}}, "MPG: " + trimData.mpg),
        React.createElement("li", {style: {marginBottom: '2px'}}, "Travel Miles: " + trimData.travelMiles),
        trimData.engineOptions != null ? React.createElement("li", {style: {marginBottom: '2px'}}, "Engine Options: " + trimData.engineOptions) : null,
        React.createElement("li", {style: {marginBottom: '2px'}}, "Horsepower: " + trimData.horsepower),
        React.createElement("li", {style: {marginBottom: '2px'}}, "Torque: " + trimData.torque),
        React.createElement("li", {style: {marginBottom: '2px'}}, "Gas Tank Size: " + trimData.gasTankSize),
        trimData.gasTankOptions != null ? React.createElement("li", {style: {marginBottom: '2px'}}, "Gas Tank Options: " + trimData.gasTankOptions) : null,
        React.createElement("li", {style: {marginBottom: '2px'}}, "Transmission: " + trimData.transmission),
        trimData.transmissionOptions != null ? React.createElement("li", {style: {marginBottom: '2px'}}, "Transmission Options: " + trimData.transmissionOptions) : null,
        trimData.drivetrain != null ? React.createElement("li", {style: {marginBottom: '2px'}}, "Drivetrain: " + trimData.drivetrain) : null,
        trimData.drivetrainOptions != null ? React.createElement("li", {style: {marginBottom: '2px'}}, "Drivetrain Options: " + trimData.drivetrainOptions) : null,
        React.createElement("li", {style: {marginBottom: '2px'}}, "Towing: " + trimData.towing),
        React.createElement("li", {style: {marginBottom: '2px'}}, "Suspension: " + trimData.suspension),
        trimData.groundClearance != null ? React.createElement("li", {style: {marginBottom: '2px'}}, "Ground Clearance: " + trimData.groundClearance) : null,
        trimData.bedSize != null ? React.createElement("li", {style: {marginBottom: '2px'}}, "Bed Size: " + trimData.bedSize) : null,
        React.createElement("li", {style: {marginBottom: '2px'}}, "BlueCruise: " + trimData.bluecruise),
        React.createElement("li", {style: {marginBottom: '2px'}}, "360 Cam: " + trimData.cam360),
        React.createElement("li", {style: {marginBottom: '2px'}}, "Heated Seats: " + trimData.heatedSeats),
        React.createElement("li", {style: {marginBottom: '2px'}}, "Cloth Seats: " + trimData.clothSeats),
        React.createElement("li", {style: {marginBottom: '2px'}}, "Upgraded Options: " + trimData.upgradedOptions),
        React.createElement("li", {style: {marginBottom: '2px'}}, "Other: " + trimData.other)
      ),
    ),
    React.createElement("hr", { style: { border: "0", borderTop: "1px solid #aaa", margin: "10px 5px 0 5px" } }),
    renderCompetitorText(trimData.competitors)
  );
}


function CategoryPage({ category, onSelectVehicle, selectedYear }) {
  const filteredVehicles = (vehicles[category] || []).map(v => {
    if (v.name.toLowerCase().includes("explorer")) {
      return {
        ...v,
        trims: v.trims.filter(trim => {
          const isTremor = trim.name.toLowerCase().includes("tremor");
          if (isTremor) return selectedYear === 2026;
          return true;
        })
      };
    }
    return v;
  });

  return React.createElement(
    "div",
    { className: "category" },
    filteredVehicles.map((v) => {
      // Logic for Discontinued 2026 Escape
      const isEscape2026 = v.name.toLowerCase().includes("escape") && selectedYear === 2026;

      return React.createElement(
        "div",
        {
          key: v.name,
          style: { 
            border: "1px solid #ddd", 
            borderRadius: "10px", 
            margin: "10px 0", 
            padding: "10px", 
            display: "flex", 
            alignItems: "center", 
            gap: "10px",
            backgroundColor: isEscape2026 ? "#fff3e0" : "transparent" // Slight warning tint
          }
        },
        React.createElement("img", { 
          src: v.image, 
          alt: v.name, 
          style: { 
            width: "200px", 
            borderRadius: "8px", 
            filter: isEscape2026 ? "grayscale(100%) opacity(0.5)" : "none" // Visual cue for discontinued
          } 
        }),
        React.createElement(
          "div",
          { style: { textAlign: "left" } },
          React.createElement("h3", { style: { margin: "0" } }, v.name),
          
          isEscape2026 ? 
            // Discontinued Content for 2026 Escape
            React.createElement(
              "div",
              null,
              React.createElement("p", { style: { color: "#d32f2f", fontWeight: "bold", margin: "5px 0" } }, "STATUS: DISCONTINUED FOR 2026"),
              React.createElement("p", { style: { fontSize: "12px", color: "#666", maxWidth: "400px" } }, 
                "Ford has officially retired the Escape nameplate for the 2026 model year. As the brand shifts focus toward a fully electrified future and more robust off-road offerings, the Escape's segment is being consolidated into newer EV platforms."
              ),
              React.createElement("div", { style: { fontSize: "11px", fontStyle: "italic", marginTop: "5px", color: "#00796b" } }, 
                "Looking for a compact SUV? Check out the **2026 Bronco Sport** or the **2026 Mustang Mach-E**."
              )
            )
            :
            // Standard View for all other vehicles
            React.createElement(
              "div",
              null,
              React.createElement("p", null, "Starting at " + v.price),
              React.createElement(
                "button",
                {
                  onClick: () => onSelectVehicle(v),
                  style: { padding: "6px 10px", marginTop: "6px", cursor: "pointer", borderRadius: "6px", border: "none", background: "#f4f4f4" }
                },
                "View Trims"
              )
            )
        )
      );
    })
  );
}

function VehiclePage({ vehicle, onBack, onHome }) {
  const isPortrait = window.innerWidth < window.innerHeight;
  const isTransit = vehicle.name === "Transit"; 
  const isSuperDuty = vehicle.name === "Super Duty"; 
  const isF150 = vehicle.name === "F-150"; 
  const mainFlexDirection = "column";

  const mainFlexStyle = {
    marginTop: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: mainFlexDirection,
    gap: "20px"
  };

  let trimsContainerStyle;
  if (isPortrait) {
    trimsContainerStyle = { display: "flex", justifyContent: "center", flexWrap: "nowrap", flexDirection: "column", alignItems: "center", width: "100%" };
  } else {
    trimsContainerStyle = { display: "flex", justifyContent: "flex-start", flexWrap: "nowrap", flexDirection: "row", alignItems: "flex-start", width: "100%", overflowX: "auto", padding: "0 20px" };
  }

  return React.createElement(
    "div",
    { className: "vehicle-detail" },
    React.createElement(
      "div",
      { style: { marginBottom: "10px", display: "flex", gap: "10px" } },
      React.createElement("button", { onClick: onBack }, "Back"),
      React.createElement("button", { onClick: onHome }, "Home")
    ),
    React.createElement("h2", { style: { textAlign: "center", fontWeight: "bold" } }, vehicle.name),
    React.createElement(
      "div",
      { style: { display: "flex", justifyContent: "center", marginBottom: "20px" } },
      React.createElement("img", { src: vehicle.image, alt: vehicle.name, style: { width: "100%", maxWidth: "600px", borderRadius: "10px" } })
    ),
    React.createElement(
      "div",
      { style: mainFlexStyle },
      (() => {
          if (isTransit && vehicle.specs) return React.createElement(TransitConfigCard, { vehicleSpecs: vehicle.specs });
          else if (isSuperDuty) return React.createElement(SuperDutyConfigCard);
          else if (isF150) return React.createElement(F150ConfigCard); 
          return null;
      })(),
      React.createElement(
        "div",
        { style: trimsContainerStyle },
        vehicle.trims.map((trim) => {
          if (trim.strengths) return React.createElement(FlashCard, { key: trim.name, trimData: trim });
          return React.createElement(StandardTrimCard, { key: trim.name, trimData: trim });
        })
      )
    ) 
  );
}

function App() {
  const [activeCategory, setActiveCategory] = React.useState(null);
  const [selectedVehicle, setSelectedVehicle] = React.useState(null);
  const [categoryClicked, setCategoryClicked] = React.useState(false);
  const [windowSize, setWindowSize] = React.useState({ width: window.innerWidth, height: window.innerHeight });
  const [showGateway, setShowGateway] = React.useState(true);
  const [selectedYear, setSelectedYear] = React.useState(null);

  React.useEffect(() => {
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goHome = () => { setActiveCategory(null); setSelectedVehicle(null); setCategoryClicked(false); };
  const handleYearSelect = (year) => { setSelectedYear(year); setShowGateway(false); };
  const changeYear = () => { goHome(); setShowGateway(true); };

  if (selectedVehicle) return React.createElement(VehiclePage, { vehicle: selectedVehicle, onBack: () => setSelectedVehicle(null), onHome: goHome });

  return React.createElement(
    "div",
    { style: { position: 'relative', minHeight: '100vh' } },
    React.createElement(
      "div",
      { style: { filter: showGateway ? 'blur(8px)' : 'none', transition: 'filter 0.3s ease', pointerEvents: showGateway ? 'none' : 'auto' } },
      React.createElement(
        "header",
        { style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 10px", position: "relative" } },
        categoryClicked && React.createElement("button", { onClick: goHome, style: { position: "absolute", left: 0, padding: "6px 10px", cursor: "pointer" } }, "Home"),
        React.createElement("img", { src: "./images/logo.png", alt: "AutoX Logo", style: { maxHeight: "50px", objectFit: "contain", margin: "0 auto", display: "block" } }),
        React.createElement("button", { onClick: changeYear, style: { position: "absolute", right: 0, padding: "6px 10px", cursor: "pointer" } }, "Change Year")
      ),
      React.createElement(
        "nav",
        { style: { display: "flex", flexWrap: "nowrap", gap: "4px", justifyContent: "space-between", overflow: "hidden", marginTop: "10px" } },
        categories.map((c) =>
          React.createElement(
            "button",
            {
              key: c,
              onClick: () => { setActiveCategory(c); setCategoryClicked(true); },
              style: { fontSize: `${fontSizeVW}vw`, background: "#f4f4f4", border: "1px solid black", borderRadius: "4px", flex: 1, minWidth: 0, padding: "4px 2px", whiteSpace: "nowrap", fontWeight: "bold", textAlign: "center", cursor: "pointer" }
            },
            c
          )
        )
      ),
      categoryClicked && React.createElement("div", { style: { textAlign: "center", fontWeight: "bold", marginTop: "10px", display: "flex", justifyContent: "center", alignItems: "flex-start" } },
          React.createElement(CategoryPage, { category: activeCategory, onSelectVehicle: setSelectedVehicle, selectedYear: selectedYear })
      )
    ),
    showGateway && React.createElement(
        "div",
        { style: { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(255,255,255,0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', zIndex: 9999 } },
        React.createElement("button", { onClick: () => handleYearSelect(2026), style: { padding: '20px 60px', fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', borderRadius: '12px', border: '2px solid #000', backgroundColor: '#fff', cursor: 'pointer', boxShadow: '0 4px 15px rgba(0,0,0,0.2)' } }, "2026"),
        React.createElement("button", { onClick: () => handleYearSelect(2025), style: { padding: '20px 60px', fontSize: '24px', fontWeight: 'bold', borderRadius: '12px', border: '2px solid #000', backgroundColor: '#fff', cursor: 'pointer', boxShadow: '0 4px 15px rgba(0,0,0,0.2)' } }, "2025")
    )
  );
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
