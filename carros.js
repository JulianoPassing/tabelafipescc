const carrosData = [
    {
        "Carro": "Grotti 599 FD",
        "Ano": "2006",
        "Valor": "100 Moedas",
        "Categoria": "Sport"
    },
    {
        "Carro": "Invetero Corvette C6",
        "Ano": "2005",
        "Valor": "140 Moedas",
        "Categoria": "Sport"
    },
    {
        "Carro": "Karin Celsior",
        "Ano": "1989",
        "Valor": "R$ 246.990",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Karin Chaser 90",
        "Ano": "1992",
        "Valor": "180 Moedas",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Karin Chaser JZX 80",
        "Ano": "1990",
        "Valor": "R$ 385.990",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Karin Corolla GR",
        "Ano": "2022",
        "Valor": "R$ 567.990",
        "Categoria": "Hatch"
    },
    {
        "Carro": "Karin Cresta 90",
        "Ano": "1992",
        "Valor": "120 Moedas",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Karin GT86",
        "Ano": "2012",
        "Valor": "1 DLC",
        "Categoria": "Coupe"
    },
    {
        "Carro": "Karin Levin ae86",
        "Ano": "1983",
        "Valor": "R$ 216.800",
        "Categoria": "Coupe"
    },
    {
        "Carro": "Karin Mark ll 90",
        "Ano": "1992",
        "Valor": "140 Moedas",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Karin Supra A70 Mk3",
        "Ano": "1986",
        "Valor": "R$ 306.990",
        "Categoria": "Coupe"
    },
    {
        "Carro": "Karin Supra A90 FD",
        "Ano": "2019",
        "Valor": "R$ 652.990",
        "Categoria": "Coupe"
    },
    {
        "Carro": "Karin Supra A90",
        "Ano": "2019",
        "Valor": "140 Moedas",
        "Categoria": "Sport"
    },
    {
        "Carro": "Karin Supra MK4",
        "Ano": "1995",
        "Valor": "200 Moedas",
        "Categoria": "Coupe"
    },
    {
        "Carro": "Laurel C35",
        "Ano": "1997",
        "Valor": "R$ 289.990",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Progen P1 GTR",
        "Ano": "2015",
        "Valor": "1 DLC",
        "Categoria": "Super"
    },
    {
        "Carro": "Ubermacht M3 EuroFighter",
        "Ano": "2010",
        "Valor": "160 Moedas",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Vapid Mutang RTR FD",
        "Ano": "2010",
        "Valor": "200 Moedas",
        "Categoria": "Sport"
    },
    {
        "Carro": "Benefactor C300 2022",
        "Ano": "2022",
        "Valor": "R$ 198.900",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Apollo Project EVO",
        "Ano": "2021",
        "Valor": "Leilão",
        "Categoria": "Super"
    },
    {
        "Carro": "Aston Martin Victor",
        "Ano": "2020",
        "Valor": "Leilão",
        "Categoria": "Sport"
    },
    {
        "Carro": "Benefactor C63s AMG 2020",
        "Ano": "2020",
        "Valor": "R$ 936.950",
        "Categoria": "Sedan"
    },
    {
        "Carro": "BF Jetta GLI 2025",
        "Ano": "2025",
        "Valor": "R$ 258.950",
        "Categoria": "Sedan"
    },
    {
        "Carro": "BF Jetta TSI 2013",
        "Ano": "2013",
        "Valor": "R$ 88.990",
        "Categoria": "Sedan"
    },
    {
        "Carro": "BF Passat 2018",
        "Ano": "2018",
        "Valor": "R$ 150.990",
        "Categoria": "Sedan"
    },
    {
        "Carro": "BF Up TSI",
        "Ano": "2016",
        "Valor": "R$ 52.550",
        "Categoria": "Compacto"
    },
    {
        "Carro": "Declase Vectra CD",
        "Ano": "2000",
        "Valor": "R$ 21.900",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Declasse Celta",
        "Ano": "2004",
        "Valor": "R$ 13.500",
        "Categoria": "Compacto"
    },
    {
        "Carro": "Declasse Onix Hatch",
        "Ano": "2023",
        "Valor": "R$ 81.900",
        "Categoria": "Compacto"
    },
    {
        "Carro": "Dinka Civic G10",
        "Ano": "2018",
        "Valor": "R$ 102.900",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Dinka Civic SI 2008",
        "Ano": "2008",
        "Valor": "R$ 138.990",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Ferrari 599 XX",
        "Ano": "2009",
        "Valor": "Leilão",
        "Categoria": "Super"
    },
    {
        "Carro": "Ferrari F-50",
        "Ano": "1995",
        "Valor": "Leilão",
        "Categoria": "Super"
    },
    {
        "Carro": "Ferrari FXX 2005",
        "Ano": "2005",
        "Valor": "Leilão",
        "Categoria": "Super"
    },
    {
        "Carro": "Ford GT40",
        "Ano": "1964",
        "Valor": "Leilão",
        "Categoria": "Sport"
    },
    {
        "Carro": "Friat 500",
        "Ano": "2012",
        "Valor": "R$ 78.900",
        "Categoria": "Compacto"
    },
    {
        "Carro": "Friat Marea HLX",
        "Ano": "2007",
        "Valor": "R$ 42.500",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Koenigsegg Gemera",
        "Ano": "2021",
        "Valor": "Leilão",
        "Categoria": "Super"
    },
    {
        "Carro": "Lotus LOTUS GT1",
        "Ano": "1997",
        "Valor": "Leilão",
        "Categoria": "Sport"
    },
    {
        "Carro": "Maibatsu Lancer GT 2017",
        "Ano": "2017",
        "Valor": "R$ 58.900",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Maserati MC-12",
        "Ano": "2004",
        "Valor": "Leilão",
        "Categoria": "Sport"
    },
    {
        "Carro": "McLaren Sabre",
        "Ano": "2020",
        "Valor": "Leilão",
        "Categoria": "Super"
    },
    {
        "Carro": "McLaren SpeedTail",
        "Ano": "2020",
        "Valor": "Leilão",
        "Categoria": "Super"
    },
    {
        "Carro": "Mercedes Maybach S650 Pullman Maybach",
        "Ano": "2020",
        "Valor": "Leilão",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Obey A3 2015",
        "Ano": "2015",
        "Valor": "R$ 143.990",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Pagani Utopia",
        "Ano": "2022",
        "Valor": "Leilão",
        "Categoria": "Super"
    },
    {
        "Carro": "RAM 1500 TRX 6x6 Warlord",
        "Ano": "2021",
        "Valor": "Leilão",
        "Categoria": "Pick-up"
    },
    {
        "Carro": "Rimac Nevera",
        "Ano": "2021",
        "Valor": "Leilão",
        "Categoria": "Super"
    },
    {
        "Carro": "Saleen S7 Le-Mans",
        "Ano": "2002",
        "Valor": "Leilão",
        "Categoria": "Super"
    },
    {
        "Carro": "Schyster HB20",
        "Ano": "2024",
        "Valor": "R$ 93.550",
        "Categoria": "Compacto"
    },
    {
        "Carro": "Schyster HB20s 2016",
        "Ano": "2016",
        "Valor": "R$ 43.900",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Schyster Kwid",
        "Ano": "2022",
        "Valor": "R$ 49.950",
        "Categoria": "Compacto"
    },
    {
        "Carro": "Schyster Logan",
        "Ano": "2010",
        "Valor": "R$ 19.590",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Shelby Cobra Daytona",
        "Ano": "1964",
        "Valor": "Leilão",
        "Categoria": "Coupe"
    },
    {
        "Carro": "Shelby Cobra",
        "Ano": "1962",
        "Valor": "Leilão",
        "Categoria": "Coupe"
    },
    {
        "Carro": "Western CBR 650 RR",
        "Ano": "2024",
        "Valor": "R$ 63.590",
        "Categoria": "Moto"
    },
    {
        "Carro": "A45 AMG",
        "Ano": "2018",
        "Valor": "R$576.900,00",
        "Categoria": "Hatch"
    },
    {
        "Carro": "Agera RS",
        "Ano": "2018",
        "Valor": "350 Moedas",
        "Categoria": "Super"
    },
    {
        "Carro": "Babus B800",
        "Ano": "2023",
        "Valor": "160 Moedas",
        "Categoria": "SUV"
    },
    {
        "Carro": "Benefactor GLE 53 AMG",
        "Ano": "2024",
        "Valor": "120 Moedas",
        "Categoria": "SUV"
    },
    {
        "Carro": "Benefactor GT63-S",
        "Ano": "2021",
        "Valor": "160 Moedas",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Benefactor Hammer",
        "Ano": "1985",
        "Valor": "R$72.500,00",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Bentayga Startech",
        "Ano": "2016",
        "Valor": "120 Moedas",
        "Categoria": "Sedan"
    },
    {
        "Carro": "BF Fusca TSI",
        "Ano": "2013",
        "Valor": "R$ 120.000",
        "Categoria": "Coupe"
    },
    {
        "Carro": "BF Fusca",
        "Ano": "1974",
        "Valor": "R$13.000,00",
        "Categoria": "Compacto"
    },
    {
        "Carro": "BF Gol G2 GTI 2p",
        "Ano": "1999",
        "Valor": "R$25.200,00",
        "Categoria": "Compacto"
    },
    {
        "Carro": "BF Golf GLX MK3",
        "Ano": "1991",
        "Valor": "R$44.400,00",
        "Categoria": "Hatch"
    },
    {
        "Carro": "BF Golf GTI MK7",
        "Ano": "2015",
        "Valor": "R$ 168.900",
        "Categoria": "Sport"
    },
    {
        "Carro": "BF Golf Wagon MK8",
        "Ano": "2022",
        "Valor": "R$ 281.900",
        "Categoria": "Sport"
    },
    {
        "Carro": "BF Parati G1",
        "Ano": "1995",
        "Valor": "R$13.000,00",
        "Categoria": "Wagon"
    },
    {
        "Carro": "BF Passat Pointer",
        "Ano": "1984",
        "Valor": "R$24.400,00",
        "Categoria": "Compacto"
    },
    {
        "Carro": "BF Polo GTS",
        "Ano": "2018",
        "Valor": "R$ 108.990",
        "Categoria": "Sport"
    },
    {
        "Carro": "BF Santana EX",
        "Ano": "1990",
        "Valor": "R$21.200,00",
        "Categoria": "Sedan"
    },
    {
        "Carro": "BF Saveiro G1",
        "Ano": "1982",
        "Valor": "R$11.000,00",
        "Categoria": "Picape"
    },
    {
        "Carro": "BF Saveiro G3",
        "Ano": "2005",
        "Valor": "R$ 42.900",
        "Categoria": "Off-Road"
    },
    {
        "Carro": "BF Saveiro G7",
        "Ano": "2019",
        "Valor": "R$ 129.900",
        "Categoria": "Off-Road"
    },
    {
        "Carro": "BF Tiguan",
        "Ano": "2017",
        "Valor": "R$ 215.990",
        "Categoria": "SUV"
    },
    {
        "Carro": "Caminhão Cegonha",
        "Ano": "2000",
        "Valor": "220 Moedas",
        "Categoria": "Caminhão"
    },
    {
        "Carro": "Challenger Hellcat SRT",
        "Ano": "2015",
        "Valor": "160 Moedas",
        "Categoria": "Muscle"
    },
    {
        "Carro": "Corsa GSi",
        "Ano": "1996",
        "Valor": "R$31.200,00",
        "Categoria": "Hatch"
    },
    {
        "Carro": "CVR COE",
        "Ano": "2000",
        "Valor": "150 Moedas",
        "Categoria": "Caminhão"
    },
    {
        "Carro": "Declasse Camaro SS",
        "Ano": "2012",
        "Valor": "R$ 211.900",
        "Categoria": "Coupe"
    },
    {
        "Carro": "Declasse Caravan Diplomata",
        "Ano": "1968",
        "Valor": "R$25.000,00",
        "Categoria": "Wagon"
    },
    {
        "Carro": "Declasse Caravan",
        "Ano": "1978",
        "Valor": "R$45.300,00",
        "Categoria": "Wagon"
    },
    {
        "Carro": "Declasse Chevette DL",
        "Ano": "1992",
        "Valor": "R$16.000,00",
        "Categoria": "Compacto"
    },
    {
        "Carro": "Declasse Chevette GP",
        "Ano": "1976",
        "Valor": "R$22.400,00",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Declasse Kadett GSI",
        "Ano": "1991",
        "Valor": "R$22.400,00",
        "Categoria": "Hatch"
    },
    {
        "Carro": "Declasse Montana",
        "Ano": "2014",
        "Valor": "R$ 54.690",
        "Categoria": "Off-Road"
    },
    {
        "Carro": "Declasse Omega CD",
        "Ano": "1998",
        "Valor": "R$25.400,00",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Declasse Opala",
        "Ano": "1979",
        "Valor": "R$28.000,00",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Declasse S10 CS",
        "Ano": "2011",
        "Valor": "R$ 78.900",
        "Categoria": "Off-Road"
    },
    {
        "Carro": "Declasse Tracker Premier",
        "Ano": "2018",
        "Valor": "R$ 128.900",
        "Categoria": "SUV"
    },
    {
        "Carro": "Declasse Veraneio",
        "Ano": "1964",
        "Valor": "R$28.000,00",
        "Categoria": "Picape"
    },
    {
        "Carro": "Dedge Charger Hellcat",
        "Ano": "2014",
        "Valor": "200 Moedas",
        "Categoria": "Muscle"
    },
    {
        "Carro": "Dedge Charger RT",
        "Ano": "1966",
        "Valor": "R$152.500,00",
        "Categoria": "Muscle"
    },
    {
        "Carro": "Dedge Dakota RT",
        "Ano": "2000",
        "Valor": "R$55.900,00",
        "Categoria": "Picape"
    },
    {
        "Carro": "Dedge Dart",
        "Ano": "1969",
        "Valor": "R$52.500,00",
        "Categoria": "Muscle"
    },
    {
        "Carro": "Dedge Ram 1500",
        "Ano": "2024",
        "Valor": "120 Moedas",
        "Categoria": "Picape"
    },
    {
        "Carro": "Dedge Ram TRX",
        "Ano": "2020",
        "Valor": "180 Moedas",
        "Categoria": "Picape"
    },
    {
        "Carro": "Dedge Viper",
        "Ano": "2016",
        "Valor": "200 Moedas",
        "Categoria": "Sport"
    },
    {
        "Carro": "Dinka Africa Twin",
        "Ano": "2024",
        "Valor": "100 Moedas",
        "Categoria": "Moto"
    },
    {
        "Carro": "Dinka Civic FL5",
        "Ano": "2023",
        "Valor": "60 Moedas",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Dinka Del Sol",
        "Ano": "1993",
        "Valor": "R$26.400,00",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Dudge Viper",
        "Ano": "1999",
        "Valor": "Leilão",
        "Categoria": "Sport"
    },
    {
        "Carro": "Enus Continelntal GT",
        "Ano": "2020",
        "Valor": "R$ 3.650.000",
        "Categoria": "Coupe"
    },
    {
        "Carro": "Escalade ESV SP",
        "Ano": "2023",
        "Valor": "140 Moedas",
        "Categoria": "SUV"
    },
    {
        "Carro": "Exige S",
        "Ano": "2012",
        "Valor": "Leilão",
        "Categoria": "Super"
    },
    {
        "Carro": "F100",
        "Ano": "1957",
        "Valor": "R$55.600,00",
        "Categoria": "Picape"
    },
    {
        "Carro": "F430 Scuderia",
        "Ano": "2009",
        "Valor": "R$1.250.900,00",
        "Categoria": "Super"
    },
    {
        "Carro": "Ferruri 250 GTO",
        "Ano": "1964",
        "Valor": "Leilão",
        "Categoria": "Super"
    },
    {
        "Carro": "Ferruri 288 GTO",
        "Ano": "1984",
        "Valor": "Leilão",
        "Categoria": "Super"
    },
    {
        "Carro": "Ferruri Dino 246 GT",
        "Ano": "1973",
        "Valor": "Leilão",
        "Categoria": "Super"
    },
    {
        "Carro": "Frait Uno Turbo",
        "Ano": "1996",
        "Valor": "R$14.000,00",
        "Categoria": "Compacto"
    },
    {
        "Carro": "Friat Palio Weekend ADV",
        "Ano": "2008",
        "Valor": "R$ 66.900",
        "Categoria": "SUV"
    },
    {
        "Carro": "Friat Strada",
        "Ano": "2021",
        "Valor": "R$ 85.900",
        "Categoria": "Off-Road"
    },
    {
        "Carro": "Gallivanter Classic V8",
        "Ano": "1970",
        "Valor": "R$58.000,00",
        "Categoria": "Muscle"
    },
    {
        "Carro": "Gallivanter Evoque",
        "Ano": "2013",
        "Valor": "R$ 99.900",
        "Categoria": "SUV"
    },
    {
        "Carro": "Golf Sportline",
        "Ano": "2012",
        "Valor": "R$49.900,00",
        "Categoria": "Hatch"
    },
    {
        "Carro": "Grotti 296 GTS",
        "Ano": "2022",
        "Valor": "220 Moedas",
        "Categoria": "Super"
    },
    {
        "Carro": "Grotti 488 Pista",
        "Ano": "2019",
        "Valor": "220 Moedas",
        "Categoria": "Super"
    },
    {
        "Carro": "Grotti 812 Superfast",
        "Ano": "2017",
        "Valor": "220 Moedas",
        "Categoria": "Super"
    },
    {
        "Carro": "Gurgel X-12 Xavante",
        "Ano": "1974",
        "Valor": "R$13.000,00",
        "Categoria": "SUV"
    },
    {
        "Carro": "Henessei Velociraptor",
        "Ano": "2023",
        "Valor": "Leilão",
        "Categoria": "Picape"
    },
    {
        "Carro": "Holls Cullinan Blindada",
        "Ano": "2018",
        "Valor": "Leilão",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Holls Ghost Extended",
        "Ano": "2020",
        "Valor": "Leilão",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Karin Corolla Cross",
        "Ano": "2019",
        "Valor": "R$ 176.900",
        "Categoria": "SUV"
    },
    {
        "Carro": "Karin Hilux",
        "Ano": "2015",
        "Valor": "R$ 162.500",
        "Categoria": "Off-Road"
    },
    {
        "Carro": "Karin RAV4",
        "Ano": "2020",
        "Valor": "R$ 218.900",
        "Categoria": "SUV"
    },
    {
        "Carro": "Karin Santa Fé",
        "Ano": "2018",
        "Valor": "R$ 138.600",
        "Categoria": "SUV"
    },
    {
        "Carro": "Kavasak H2",
        "Ano": "2019",
        "Valor": "140 Moedas",
        "Categoria": "Moto"
    },
    {
        "Carro": "Lambo Miura P-400",
        "Ano": "1969",
        "Valor": "R$752.500,00",
        "Categoria": "Super"
    },
    {
        "Carro": "Lambo Murcielago",
        "Ano": "2010",
        "Valor": "220 Moedas",
        "Categoria": "Super"
    },
    {
        "Carro": "Lambo Sesto Elemento",
        "Ano": "2010",
        "Valor": "Leilão",
        "Categoria": "Super"
    },
    {
        "Carro": "Lambo SVJ Roadster",
        "Ano": "2019",
        "Valor": "220 Moedas",
        "Categoria": "Super"
    },
    {
        "Carro": "Lambo Temario",
        "Ano": "2024",
        "Valor": "Leilão",
        "Categoria": "Super"
    },
    {
        "Carro": "Lambo Urus Perfomante",
        "Ano": "2021",
        "Valor": "170 Moedas",
        "Categoria": "SUV"
    },
    {
        "Carro": "Lambo Urus Venatus Blin.",
        "Ano": "2023",
        "Valor": "Leilão",
        "Categoria": "Super"
    },
    {
        "Carro": "LFA NB Pack",
        "Ano": "2010",
        "Valor": "200 Moedas",
        "Categoria": "Sport"
    },
    {
        "Carro": "MacLaren P1",
        "Ano": "2013",
        "Valor": "220 Moedas",
        "Categoria": "Super"
    },
    {
        "Carro": "Mitsuba L200",
        "Ano": "2021",
        "Valor": "R$ 189.900",
        "Categoria": "Off-Road"
    },
    {
        "Carro": "Niffan 180sx",
        "Ano": "1991",
        "Valor": "180 Moedas",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Niffan 400z Nismo",
        "Ano": "2024",
        "Valor": "180 Moedas",
        "Categoria": "Sport"
    },
    {
        "Carro": "Niffan GTR LM",
        "Ano": "2015",
        "Valor": "Leilão",
        "Categoria": "Super"
    },
    {
        "Carro": "Niffan R32",
        "Ano": "1989",
        "Valor": "160 Moedas",
        "Categoria": "Sport"
    },
    {
        "Carro": "Niffan R34",
        "Ano": "1999",
        "Valor": "200 Moedas",
        "Categoria": "Sport"
    },
    {
        "Carro": "Niffan R35",
        "Ano": "2007",
        "Valor": "200 Moedas",
        "Categoria": "Sport"
    },
    {
        "Carro": "Niffan S14",
        "Ano": "1998",
        "Valor": "R$552.500,00",
        "Categoria": "Sport"
    },
    {
        "Carro": "Obey R8 V10",
        "Ano": "2008",
        "Valor": "200 Moedas",
        "Categoria": "Super"
    },
    {
        "Carro": "Obey RS3 Sportback",
        "Ano": "2022",
        "Valor": "60 Moedas",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Obey RS5",
        "Ano": "2020",
        "Valor": "R$ 461.900",
        "Categoria": "Coupe"
    },
    {
        "Carro": "Obey RS6",
        "Ano": "2020",
        "Valor": "160 Moedas",
        "Categoria": "Wagon"
    },
    {
        "Carro": "Obey TT RS",
        "Ano": "2022",
        "Valor": "R$ 802.990",
        "Categoria": "Sport"
    },
    {
        "Carro": "Pajani Zonda Cinque",
        "Ano": "2009",
        "Valor": "Leilão",
        "Categoria": "Super"
    },
    {
        "Carro": "Pfister 911 Carrera S Conversivel",
        "Ano": "2025",
        "Valor": "180 Moedas",
        "Categoria": "Sport"
    },
    {
        "Carro": "Pfister 911 Carrera S",
        "Ano": "2020",
        "Valor": "R$ 2.781.000",
        "Categoria": "Super"
    },
    {
        "Carro": "Pfister 911 GT3 RS",
        "Ano": "2023",
        "Valor": "180 Moedas",
        "Categoria": "Sport"
    },
    {
        "Carro": "Pfister 911 Turbo S",
        "Ano": "2019",
        "Valor": "200 Moedas",
        "Categoria": "Sport"
    },
    {
        "Carro": "Pfister 987.1 Carrera S",
        "Ano": "2021",
        "Valor": "220 Moedas",
        "Categoria": "Sport"
    },
    {
        "Carro": "Pfister 992 GTS",
        "Ano": "2025",
        "Valor": "140 Moedas",
        "Categoria": "Sport"
    },
    {
        "Carro": "Pigani Imola",
        "Ano": "2020",
        "Valor": "220 Moedas",
        "Categoria": "Super"
    },
    {
        "Carro": "S10 High Contry",
        "Ano": "2024",
        "Valor": "R$185.900,00",
        "Categoria": "Picape"
    },
    {
        "Carro": "Schyster Sandero RS",
        "Ano": "2016",
        "Valor": "R$ 68.950",
        "Categoria": "Sport"
    },
    {
        "Carro": "Schyster Twingo",
        "Ano": "1992",
        "Valor": "R$ 11.900",
        "Categoria": "Compacto"
    },
    {
        "Carro": "STI WRX",
        "Ano": "2010",
        "Valor": "220 Moedas",
        "Categoria": "Hatch"
    },
    {
        "Carro": "Toyuta AE86",
        "Ano": "1983",
        "Valor": "R$36.000,00",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Toyuta SW4 Diamond",
        "Ano": "2022",
        "Valor": "R$ 328.900",
        "Categoria": "Off-Road"
    },
    {
        "Carro": "Trailer 20 metros",
        "Ano": "2025",
        "Valor": "100 Moedas",
        "Categoria": "Caminhão"
    },
    {
        "Carro": "Trailer 2C Fechado",
        "Ano": "2025",
        "Valor": "120 Moedas",
        "Categoria": "Caminhão"
    },
    {
        "Carro": "Trailer 3C Fechado",
        "Ano": "2025",
        "Valor": "140 Moedas",
        "Categoria": "Caminhão"
    },
    {
        "Carro": "Trailer 40 Metros",
        "Ano": "2025",
        "Valor": "140 Moedas",
        "Categoria": "Caminhão"
    },
    {
        "Carro": "Trailer Caminhão",
        "Ano": "2025",
        "Valor": "40 Moedas",
        "Categoria": "Caminhão"
    },
    {
        "Carro": "Trailer Carreta 4C",
        "Ano": "2025",
        "Valor": "150 Moedas",
        "Categoria": "Caminhão"
    },
    {
        "Carro": "Trailer Carreta",
        "Ano": "2025",
        "Valor": "160 Moedas",
        "Categoria": "Caminhão"
    },
    {
        "Carro": "Trailer DF/DR",
        "Ano": "2025",
        "Valor": "20 Moedas",
        "Categoria": "Caminhão"
    },
    {
        "Carro": "Ubermatch 320i 2021",
        "Ano": "2021",
        "Valor": "R$ 239.990",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Ubermatch 635i",
        "Ano": "1986",
        "Valor": "R$40.000,00",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Ubermatch M2 G87",
        "Ano": "2024",
        "Valor": "200 Moedas",
        "Categoria": "Sport"
    },
    {
        "Carro": "Ubermatch M3 E36",
        "Ano": "1999",
        "Valor": "180 Moedas",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Ubermatch M3 F80",
        "Ano": "2014",
        "Valor": "160 Moedas",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Ubermatch M5 E39",
        "Ano": "1997",
        "Valor": "R$68.000,00",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Ubermatch M5 E60 V10",
        "Ano": "2005",
        "Valor": "180 Moedas",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Ubermatch M5 Touring G60",
        "Ano": "2023",
        "Valor": "120 Moedas",
        "Categoria": "Wagon"
    },
    {
        "Carro": "Ubermatch X1",
        "Ano": "2016",
        "Valor": "R$ 182.990",
        "Categoria": "SUV"
    },
    {
        "Carro": "Vapid Express",
        "Ano": "2024",
        "Valor": "R$ 518.590",
        "Categoria": "Off-Road"
    },
    {
        "Carro": "Vapid F-450",
        "Ano": "2024",
        "Valor": "200 Moedas",
        "Categoria": "Picape"
    },
    {
        "Carro": "Vapid Fastback 2+2",
        "Ano": "1966",
        "Valor": "R$155.500,00",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Vapid Galaxie 500",
        "Ano": "1967",
        "Valor": "R$67.900,00",
        "Categoria": "Muscle"
    },
    {
        "Carro": "Vapid GT",
        "Ano": "2017",
        "Valor": "Leilão",
        "Categoria": "Super"
    },
    {
        "Carro": "Vapid GT40",
        "Ano": "2005",
        "Valor": "180 Moedas",
        "Categoria": "Sport"
    },
    {
        "Carro": "Vulcar S60 2018",
        "Ano": "2018",
        "Valor": "R$ 193.900",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Western Tenere 700",
        "Ano": "2025",
        "Valor": "R$ 56.900",
        "Categoria": "Moto"
    },
    {
        "Carro": "Zunvo TS1",
        "Ano": "2016",
        "Valor": "Leilão",
        "Categoria": "Super"
    },
    {
        "Carro": "12 Cilindri 2025",
        "Ano": "2025",
        "Valor": "180 Moedas",
        "Categoria": "Super"
    },
    {
        "Carro": "2000 GTR",
        "Ano": "1973",
        "Valor": "R$210.000,00",
        "Categoria": "Sport"
    },
    {
        "Carro": "300ZX",
        "Ano": "1989",
        "Valor": "R$ 305.990",
        "Categoria": "Coupe"
    },
    {
        "Carro": "675 LT",
        "Ano": "2016",
        "Valor": "200 Moedas",
        "Categoria": "Super"
    },
    {
        "Carro": "992 Turbo S Convertible",
        "Ano": "2020",
        "Valor": "160 Moedas",
        "Categoria": "Sport"
    },
    {
        "Carro": "Nagasaki Z1000",
        "Ano": "2016",
        "Valor": "80 Moedas",
        "Categoria": "Moto"
    },
    {
        "Carro": "NSX",
        "Ano": "1990",
        "Valor": "R$625.000,00",
        "Categoria": "Sport"
    },
    {
        "Carro": "Obey RS2",
        "Ano": "1994",
        "Valor": "R$ 72.000",
        "Categoria": "Wagon"
    },
    {
        "Carro": "Obey SQ5",
        "Ano": "2013",
        "Valor": "R$ 452.990",
        "Categoria": "SUV"
    },
    {
        "Carro": "Obey SQ7",
        "Ano": "2016",
        "Valor": "140 Moedas",
        "Categoria": "SUV"
    },
    {
        "Carro": "Opala V8 1300HP",
        "Ano": "1968",
        "Valor": "1 DLC",
        "Categoria": "Drag"
    },
    {
        "Carro": "Pajero Evo 1997",
        "Ano": "1997",
        "Valor": "120 Moedas",
        "Categoria": "Off-road"
    },
    {
        "Carro": "Panamera 24",
        "Ano": "2024",
        "Valor": "180 Moedas",
        "Categoria": "Sport"
    },
    {
        "Carro": "Patrol-D Y60",
        "Ano": "1998",
        "Valor": "R$80.900,00",
        "Categoria": "Off-road"
    },
    {
        "Carro": "Pegassi Countach 2022",
        "Ano": "2022",
        "Valor": "200 Moedas",
        "Categoria": "Super"
    },
    {
        "Carro": "Pegassi Gallardo Superleggera",
        "Ano": "2014",
        "Valor": "R$ 2.590.990",
        "Categoria": "Sport"
    },
    {
        "Carro": "Pegassi Huracan EVO",
        "Ano": "2020",
        "Valor": "200 Moedas",
        "Categoria": "Sport"
    },
    {
        "Carro": "Pegassi Revuelto",
        "Ano": "2023",
        "Valor": "220 Moedas",
        "Categoria": "Super"
    },
    {
        "Carro": "Pfister 718 Boxter S",
        "Ano": "2017",
        "Valor": "R$ 522.990",
        "Categoria": "Sport"
    },
    {
        "Carro": "Pfister 918 Spyder",
        "Ano": "2014",
        "Valor": "300 Moedas",
        "Categoria": "Hiper"
    },
    {
        "Carro": "Pfister Carrera GT",
        "Ano": "2005",
        "Valor": "200 Moedas",
        "Categoria": "Sport"
    },
    {
        "Carro": "Pfister Cayenne Turbo",
        "Ano": "2022",
        "Valor": "140 Moedas",
        "Categoria": "SUV"
    },
    {
        "Carro": "Pfister GT2 RS",
        "Ano": "2012",
        "Valor": "140 Moedas",
        "Categoria": "Super"
    },
    {
        "Carro": "Pfister Taycan",
        "Ano": "2021",
        "Valor": "R$ 560.990",
        "Categoria": "Wagon"
    },
    {
        "Carro": "Pigassi Aventador",
        "Ano": "2011",
        "Valor": "220 Moedas",
        "Categoria": "Super"
    },
    {
        "Carro": "Pigassi Sterrato",
        "Ano": "2023",
        "Valor": "200 Moedas",
        "Categoria": "Sport"
    },
    {
        "Carro": "Pigassi STO Pista",
        "Ano": "2021",
        "Valor": "220 Moedas",
        "Categoria": "Sport"
    },
    {
        "Carro": "Polaris General",
        "Ano": "2019",
        "Valor": "R$75.900,00",
        "Categoria": "Off-road"
    },
    {
        "Carro": "Polaris TurboS",
        "Ano": "2018",
        "Valor": "40 Moedas",
        "Categoria": "Off-road"
    },
    {
        "Carro": "Principe V4 Streetfighter",
        "Ano": "2019",
        "Valor": "100 Moedas",
        "Categoria": "Moto"
    },
    {
        "Carro": "Principe V4-R Drag",
        "Ano": "2019",
        "Valor": "1 DLC",
        "Categoria": "Moto"
    },
    {
        "Carro": "Principe V4-R",
        "Ano": "2019",
        "Valor": "200 Moedas",
        "Categoria": "Moto"
    },
    {
        "Carro": "Progen 765 LT",
        "Ano": "2021",
        "Valor": "220 Moedas",
        "Categoria": "Sport"
    },
    {
        "Carro": "Progen MP4-12c",
        "Ano": "2022",
        "Valor": "R$ 2.730.990",
        "Categoria": "Super"
    },
    {
        "Carro": "Progen Senna",
        "Ano": "2019",
        "Valor": "300 Moedas",
        "Categoria": "Super"
    },
    {
        "Carro": "Progen W1",
        "Ano": "2024",
        "Valor": "300 Moedas",
        "Categoria": "Super"
    },
    {
        "Carro": "Puma GTE",
        "Ano": "1976",
        "Valor": "R$47.800,00",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Pure Quad",
        "Ano": "2010",
        "Valor": "R$80.000,00",
        "Categoria": "Off-road"
    },
    {
        "Carro": "R35 AWD 1000HP",
        "Ano": "2007",
        "Valor": "1 DLC",
        "Categoria": "Drag"
    },
    {
        "Carro": "Ram 2500 1999",
        "Ano": "1999",
        "Valor": "R$139.000,00",
        "Categoria": "Off-road"
    },
    {
        "Carro": "Ram 2500",
        "Ano": "2024",
        "Valor": "140 Moedas",
        "Categoria": "Picape"
    },
    {
        "Carro": "RAM SRTV10",
        "Ano": "2006",
        "Valor": "1 DLC",
        "Categoria": "Off-road"
    },
    {
        "Carro": "Ranger 2009 Lift",
        "Ano": "2009",
        "Valor": "R$115.000,00",
        "Categoria": "Off-road"
    },
    {
        "Carro": "Ranger Raptor 2019",
        "Ano": "2019",
        "Valor": "R$212.900,00",
        "Categoria": "Off-road"
    },
    {
        "Carro": "Renegade",
        "Ano": "2021",
        "Valor": "R$ 112.990",
        "Categoria": "SUV"
    },
    {
        "Carro": "Rivian R1S",
        "Ano": "2023",
        "Valor": "R$759.000,00",
        "Categoria": "Off-road"
    },
    {
        "Carro": "RX7 FC",
        "Ano": "1999",
        "Valor": "R$252.500,00",
        "Categoria": "Sport"
    },
    {
        "Carro": "S15 Missile",
        "Ano": "1999",
        "Valor": "R$ 425.880",
        "Categoria": "Sedan"
    },
    {
        "Carro": "S-15",
        "Ano": "1998",
        "Valor": "160 Moedas",
        "Categoria": "Sport"
    },
    {
        "Carro": "S63 Mayba Coupe",
        "Ano": "2014",
        "Valor": "140 Moedas",
        "Categoria": "Coupe"
    },
    {
        "Carro": "Schyster Azera 2008",
        "Ano": "2008",
        "Valor": "R$ 75.990",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Schyster DS3",
        "Ano": "2016",
        "Valor": "R$ 74.900",
        "Categoria": "Sport"
    },
    {
        "Carro": "Schyster I30 GLS",
        "Ano": "2011",
        "Valor": "R$ 63.990",
        "Categoria": "Hatch"
    },
    {
        "Carro": "Schyster Punto T-jet",
        "Ano": "2014",
        "Valor": "R$ 91.900",
        "Categoria": "Sport"
    },
    {
        "Carro": "Schyster Stinger GT 3.3",
        "Ano": "2020",
        "Valor": "R$ 285.500",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Schyster Superbird",
        "Ano": "1970",
        "Valor": "R$ 210.000",
        "Categoria": "Muscle"
    },
    {
        "Carro": "Schyster Toro Volcano",
        "Ano": "2022",
        "Valor": "R$ 158.990",
        "Categoria": "Off-Road"
    },
    {
        "Carro": "Schyster Veloster",
        "Ano": "2013",
        "Valor": "R$ 65.000",
        "Categoria": "Sport"
    },
    {
        "Carro": "Shitzu Hayabusa",
        "Ano": "2024",
        "Valor": "200 Moedas",
        "Categoria": "Moto"
    },
    {
        "Carro": "Truffade Chiron SuperSport 300+",
        "Ano": "2019",
        "Valor": "350 Moedas",
        "Categoria": "Hiper"
    },
    {
        "Carro": "Truffade Veyron Super Sport",
        "Ano": "2010",
        "Valor": "R$ 12.590.990",
        "Categoria": "Hiper"
    },
    {
        "Carro": "Truller T4",
        "Ano": "2006",
        "Valor": "R$ 78.600",
        "Categoria": "Off-Road"
    },
    {
        "Carro": "Ubermacht 330 I",
        "Ano": "2019",
        "Valor": "R$ 292.990",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Ubermacht 850 CSI",
        "Ano": "1993",
        "Valor": "R$550.900,00",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Ubermacht Alpina B7 G12",
        "Ano": "2020",
        "Valor": "180 Moedas",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Ubermacht M1",
        "Ano": "1981",
        "Valor": "R$ 584.900",
        "Categoria": "Sport"
    },
    {
        "Carro": "Ubermacht M2 Competition",
        "Ano": "2018",
        "Valor": "160 Moedas",
        "Categoria": "Coupe"
    },
    {
        "Carro": "Ubermacht M3 E46",
        "Ano": "2001",
        "Valor": "R$ 128.000",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Ubermacht M3 E92",
        "Ano": "2007",
        "Valor": "160 Moedas",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Ubermacht M5 F90",
        "Ano": "2018",
        "Valor": "140 Moedas",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Ubermacht M6 Coupe",
        "Ano": "2015",
        "Valor": "120 Moedas",
        "Categoria": "Coupe"
    },
    {
        "Carro": "Ubermacht M8 Competition",
        "Ano": "2019",
        "Valor": "120 Moedas",
        "Categoria": "Coupe"
    },
    {
        "Carro": "Ubermacht R1200",
        "Ano": "2015",
        "Valor": "R$ 92.990",
        "Categoria": "Moto"
    },
    {
        "Carro": "Ubermacht S1000 RR",
        "Ano": "2014",
        "Valor": "R$ 89.990",
        "Categoria": "Moto"
    },
    {
        "Carro": "Ubermacht S1000RR",
        "Ano": "2021",
        "Valor": "140 Moedas",
        "Categoria": "Moto"
    },
    {
        "Carro": "Ubermacht X6",
        "Ano": "2010",
        "Valor": "R$ 155.990",
        "Categoria": "SUV"
    },
    {
        "Carro": "Ubermacht X7",
        "Ano": "2021",
        "Valor": "140 Moedas",
        "Categoria": "SUV"
    },
    {
        "Carro": "Ubermacht Z4 140I",
        "Ano": "2021",
        "Valor": "R$ 430.990",
        "Categoria": "Coupe"
    },
    {
        "Carro": "Vapid Escort XR3",
        "Ano": "1995",
        "Valor": "R$32.400,00",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Vapid F1000",
        "Ano": "1980",
        "Valor": "R$ 72.900",
        "Categoria": "Picape"
    },
    {
        "Carro": "Vapid F150 Raptor",
        "Ano": "2020",
        "Valor": "180 Moedas",
        "Categoria": "Picape"
    },
    {
        "Carro": "Vapid F250",
        "Ano": "2008",
        "Valor": "R$ 148.990",
        "Categoria": "Off-Road"
    },
    {
        "Carro": "Vapid Focus",
        "Ano": "2014",
        "Valor": "R$ 82,990",
        "Categoria": "Hatch"
    },
    {
        "Carro": "Vapid Fusion V6 AWD",
        "Ano": "2012",
        "Valor": "R$ 89.990",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Vapid GT500 KR",
        "Ano": "2008",
        "Valor": "R$ 502.590",
        "Categoria": "Sport"
    },
    {
        "Carro": "Vapid Maverick GT",
        "Ano": "1974",
        "Valor": "R$62.400,00",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Vapid Mustang GT",
        "Ano": "2015",
        "Valor": "120 Moedas",
        "Categoria": "Coupe"
    },
    {
        "Carro": "Vapid Raptor",
        "Ano": "2024",
        "Valor": "120 Moedas",
        "Categoria": "Picape"
    },
    {
        "Carro": "Venom F5 2022",
        "Ano": "2022",
        "Valor": "350 Moedas",
        "Categoria": "Super"
    },
    {
        "Carro": "Vulcar C30",
        "Ano": "2013",
        "Valor": "R$ 59.990",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Wangler 2012",
        "Ano": "2012",
        "Valor": "160 Moedas",
        "Categoria": "Off-road"
    },
    {
        "Carro": "Wangler LIft Hemi",
        "Ano": "2018",
        "Valor": "120 Moedas",
        "Categoria": "Off-road"
    },
    {
        "Carro": "Western Bobber Custom",
        "Ano": "1988",
        "Valor": "R$ 62.990",
        "Categoria": "Moto"
    },
    {
        "Carro": "Western Fat Boy",
        "Ano": "1990",
        "Valor": "40 Moedas",
        "Categoria": "Moto"
    },
    {
        "Carro": "Western Hornet",
        "Ano": "2008",
        "Valor": "R$ 25.900",
        "Categoria": "Moto"
    },
    {
        "Carro": "Western Iron 883",
        "Ano": "2011",
        "Valor": "40 Moedas",
        "Categoria": "Moto"
    },
    {
        "Carro": "Western Knucklehead",
        "Ano": "1936",
        "Valor": "R$ 72.590",
        "Categoria": "Moto"
    },
    {
        "Carro": "Western Street Glide",
        "Ano": "2018",
        "Valor": "R$ 92.990",
        "Categoria": "Moto"
    },
    {
        "Carro": "Wrangler Trailcat Concept",
        "Ano": "2016",
        "Valor": "150 Moedas",
        "Categoria": "Off-road"
    },
    {
        "Carro": "Xaome SU-7",
        "Ano": "2021",
        "Valor": "R$ 459.890",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Hilux Rally",
        "Ano": "2024",
        "Valor": "30000 Pontos",
        "Categoria": "Off-road"
    },
    {
        "Carro": "Fiesta Rally",
        "Ano": "2024",
        "Valor": "35000 Pontos",
        "Categoria": "Off-road"
    },
    {
        "Carro": "Tundra Dakar",
        "Ano": "2024",
        "Valor": "40000 Pontos",
        "Categoria": "Off-road"
    },
    {
        "Carro": "Hoonicorn",
        "Ano": "2024",
        "Valor": "45000 Pontos",
        "Categoria": "Off-road"
    },
    {
        "Carro": "Benefactor CLA-250",
        "Ano": "2025",
        "Valor": "R$ 178.990",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Dinka Civic SI",
        "Ano": "2024",
        "Valor": "R$ 152.990",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Grotti Potofino 2018",
        "Ano": "2018",
        "Valor": "R$ 2.390.000",
        "Categoria": "Super"
    },
    {
        "Carro": "Bdy Dolphin",
        "Ano": "2024",
        "Valor": "R$ 109.990",
        "Categoria": "Hatch"
    },
    {
        "Carro": "Bianco S",
        "Ano": "1976",
        "Valor": "R$55.000,00",
        "Categoria": "Sport"
    },
    {
        "Carro": "Declasse Opala Gran Luxo",
        "Ano": "1971",
        "Valor": "R$74.000,00",
        "Categoria": "Coupe"
    },
    {
        "Carro": "Vapid Rural 4x4",
        "Ano": "1958",
        "Valor": "R$95.900,00",
        "Categoria": "SUV"
    },
    {
        "Carro": "Obey RS4 2001",
        "Ano": "2001",
        "Valor": "R$ 325.000",
        "Categoria": "Wagon"
    },
    {
        "Carro": "Grotti F355",
        "Ano": "1994",
        "Valor": "R$ 800.000",
        "Categoria": "Sport"
    },
    {
        "Carro": "AutoZan",
        "Ano": "1992",
        "Valor": "R$ 78.000",
        "Categoria": "Sport"
    },
    {
        "Carro": "Obey RS7 ABT",
        "Ano": "2024",
        "Valor": "120 Moedas",
        "Categoria": "Sport"
    },
    {
        "Carro": "Vapid Mustang",
        "Ano": "2025",
        "Valor": "140 Moedas",
        "Categoria": "Muscle"
    },
    {
        "Carro": "Vulcar XC90",
        "Ano": "2024",
        "Valor": "60 Moedas",
        "Categoria": "SUV"
    },
    {
        "Carro": "Ubermacht M4 CSL",
        "Ano": "2023",
        "Valor": "160 Moedas",
        "Categoria": "Sport"
    },
    {
        "Carro": "Karin Impreza Wrx",
        "Ano": "2022",
        "Valor": "140 Moedas",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Grotti F12-TDF",
        "Ano": "2015",
        "Valor": "200 Moedas",
        "Categoria": "Super"
    },
    {
        "Carro": "Koeg CC850",
        "Ano": "2022",
        "Valor": "300 Moedas",
        "Categoria": "Hyper"
    },
    {
        "Carro": "BF Saveiro Robust",
        "Ano": "2023",
        "Valor": "R$ 67.990",
        "Categoria": "Off-road"
    },
    {
        "Carro": "BF Kombi",
        "Ano": "1975",
        "Valor": "R$ 25.000",
        "Categoria": "SUV"
    },
    {
        "Carro": "BF SP2",
        "Ano": "1976",
        "Valor": "R$ 25.000",
        "Categoria": "Coupe"
    },
    {
        "Carro": "Grotti Testarossa 512 TR",
        "Ano": "1992",
        "Valor": "R$ 725.000",
        "Categoria": "Sport"
    },
    {
        "Carro": "Bollokan Veloster N",
        "Ano": "2019",
        "Valor": "R$ 150.000",
        "Categoria": "Hatch"
    },
    {
        "Carro": "Dewbaychee DB12",
        "Ano": "2023",
        "Valor": "160 Moedas",
        "Categoria": "Coupe"
    },
    {
        "Carro": "Lampadati Giulia GTAm",
        "Ano": "2023",
        "Valor": "140 Moedas",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Grotti SF90 XX",
        "Ano": "2019",
        "Valor": "220 Moedas",
        "Categoria": "Super"
    },
    {
        "Carro": "Enus Dawn",
        "Ano": "2015",
        "Valor": "180 Moedas",
        "Categoria": "Sport"
    },
    {
        "Carro": "Invetero Corvette C8",
        "Ano": "2019",
        "Valor": "R$ 1.700.550",
        "Categoria": "Super"
    },
    {
        "Carro": "Friat Fast Back",
        "Ano": "2024",
        "Valor": "R$ 130.590",
        "Categoria": "Suv"
    },
    {
        "Carro": "Grotti California",
        "Ano": "2008",
        "Valor": "R$ 1,590,990",
        "Categoria": "Sport"
    },
    {
        "Carro": "Lampadati Delta Integrale",
        "Ano": "1989",
        "Valor": "R$ 375.000",
        "Categoria": "Hatch"
    },
    {
        "Carro": "650 Fly",
        "Ano": "2025",
        "Valor": "180 Moedas",
        "Categoria": "Boat"
    },
    {
        "Carro": "650 Express",
        "Ano": "2025",
        "Valor": "140 Moedas",
        "Categoria": "Boat"
    },
    {
        "Carro": "Blade Runner",
        "Ano": "2025",
        "Valor": "120 Moedas",
        "Categoria": "Boat"
    },
    {
        "Carro": "Amels 200",
        "Ano": "2025",
        "Valor": "220 Moedas",
        "Categoria": "Boat"
    },
    {
        "Carro": "Dinka Civic FK8",
        "Ano": "2017",
        "Valor": "80 Moedas",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Albany CT5 BlackWing",
        "Ano": "2022",
        "Valor": "120 Moedas",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Osiris Huayra Roadster",
        "Ano": "2017",
        "Valor": "300 Moedas",
        "Categoria": "Super"
    },
    {
        "Carro": "Dewbauchee DBX 2023",
        "Ano": "2023",
        "Valor": "140 Moedas",
        "Categoria": "Suv"
    },
    {
        "Carro": "Benefactor S63 Mayba Coupe",
        "Ano": "2014",
        "Valor": "140 Moedas",
        "Categoria": "Coupe"
    },
    {
        "Carro": "Sultan RS",
        "Ano": "1995",
        "Valor": "R$50.000,00",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Ponto de Evento",
        "Ano": "Ponto de Evento",
        "Valor": "Ponto de Evento",
        "Categoria": "Ponto de Evento"
    },
    {
        "Carro": "14/06",
        "Ano": "14/06",
        "Valor": "14/06",
        "Categoria": "14/06"
    },
    {
        "Carro": "Declasse Silverado",
        "Ano": "1995",
        "Valor": "R$ 155.900",
        "Categoria": "Off-Road"
    },
    {
        "Carro": "BF Voyage Sport",
        "Ano": "1994",
        "Valor": "R$45.900,00",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Declasse Marajó",
        "Ano": "1980",
        "Valor": "R$ 55.900",
        "Categoria": "Wagon"
    },
    {
        "Carro": "BF Arteon",
        "Ano": "2022",
        "Valor": "R$ 289.990",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Annis Stagea",
        "Ano": "1999",
        "Valor": "R$ 284.990",
        "Categoria": "Wagon"
    },
    {
        "Carro": "Ubermacht M3 G81 Touring",
        "Ano": "2023",
        "Valor": "180 Moedas",
        "Categoria": "Wagon"
    },
    {
        "Carro": "Progen Artura Spider",
        "Ano": "2025",
        "Valor": "220 Moedas",
        "Categoria": "Super"
    },
    {
        "Carro": "Dewbauchee DB11",
        "Ano": "2018",
        "Valor": "200 Moedas",
        "Categoria": "Super"
    },
    {
        "Carro": "Benefactor AMG ONE",
        "Ano": "2022",
        "Valor": "400 Moedas",
        "Categoria": "Super"
    },
    {
        "Carro": "BF Golf MK8 R",
        "Ano": "2020",
        "Valor": "120 Moedas",
        "Categoria": "Hatch"
    },
    {
        "Carro": "Pfister 911 GT2 Weissach",
        "Ano": "2018",
        "Valor": "180 Moedas",
        "Categoria": "Coupe"
    },
    {
        "Carro": "Vapid Shelby GT500",
        "Ano": "2020",
        "Valor": "160 Moedas",
        "Categoria": "Coupe"
    },
    {
        "Carro": "Ubermacht X3 M 140 I Xdrive",
        "Ano": "2023",
        "Valor": "80 Moedas",
        "Categoria": "SUV"
    },
    {
        "Carro": "29/06",
        "Ano": "29/06",
        "Valor": "29/06",
        "Categoria": "29/06"
    },
    {
        "Carro": "Vapid GT GT3",
        "Ano": "2019",
        "Valor": "1 DLC",
        "Categoria": "Super"
    },
    {
        "Carro": "Dewbauchee Valhalla",
        "Ano": "2026",
        "Valor": "1 DLC",
        "Categoria": "Super"
    },
    {
        "Carro": "Pegassi SC63",
        "Ano": "2023",
        "Valor": "1 DLC",
        "Categoria": "Super"
    },
    {
        "Carro": "Annis 787b",
        "Ano": "",
        "Valor": "R$ 1.050.990",
        "Categoria": "Super"
    },
    {
        "Carro": "Invetero Corvette C8 GT3",
        "Ano": "",
        "Valor": "R$ 1.490.990",
        "Categoria": "Super"
    },
    {
        "Carro": "Grotti 458 GT3",
        "Ano": "",
        "Valor": "R$ 2.130.590",
        "Categoria": "Super"
    },
    {
        "Carro": "Pfister Mission R",
        "Ano": "",
        "Valor": "R$ 939.900",
        "Categoria": "Super"
    },
    {
        "Carro": "Ubermacht M8 GT3",
        "Ano": "",
        "Valor": "R$ 1.480.990",
        "Categoria": "Super"
    },
    {
        "Carro": "Dewbauchee Vulcan GT3",
        "Ano": "",
        "Valor": "R$ 2.528.990",
        "Categoria": "Super"
    },
    {
        "Carro": "Pfister 911 GT3 R Sport",
        "Ano": "",
        "Valor": "160 Moedas",
        "Categoria": "Super"
    },
    {
        "Carro": "Benefactor AMG GT3",
        "Ano": "",
        "Valor": "140 Moedas",
        "Categoria": "Super"
    },
    {
        "Carro": "Grotti 488 GT3",
        "Ano": "",
        "Valor": "180 Moedas",
        "Categoria": "Super"
    },
    {
        "Carro": "Pegassi Huracan GT3",
        "Ano": "",
        "Valor": "180 Moedas",
        "Categoria": "Super"
    },
    {
        "Carro": "Obey R8 GT3",
        "Ano": "",
        "Valor": "180 Moedas",
        "Categoria": "Super"
    },
    {
        "Carro": "Ubermacht M4 GT3",
        "Ano": "",
        "Valor": "120 Moedas",
        "Categoria": "Super"
    },
    {
        "Carro": "Ubermacht Z4 GT3",
        "Ano": "",
        "Valor": "120 Moedas",
        "Categoria": "Super"
    },
    {
        "Carro": "05/07",
        "Ano": "05/07",
        "Valor": "05/07",
        "Categoria": "05/07"
    },
    {
        "Carro": "Grotti Turismo 2 LM",
        "Ano": "1987",
        "Valor": "R$50.000,00",
        "Categoria": "Sport"
    },
    {
        "Carro": "Ubermacht M4 F82",
        "Ano": "2016",
        "Valor": "R$ 592.990",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Ubermacht 120i",
        "Ano": "2016",
        "Valor": "R$ 153.900",
        "Categoria": "Hatch"
    },
    {
        "Carro": "Troupe 206",
        "Ano": "2005",
        "Valor": "R$ 24.590",
        "Categoria": "Hatch"
    },
    {
        "Carro": "Ocelot F-Pace",
        "Ano": "2018",
        "Valor": "R$ 315.550",
        "Categoria": "SUV"
    },
    {
        "Carro": "Dinka Civic EJ1",
        "Ano": "1995",
        "Valor": "R$ 64.000",
        "Categoria": "Sedan"
    },
    {
        "Carro": "BF karmann Ghia",
        "Ano": "1967",
        "Valor": "R$ 45.000",
        "Categoria": "Coupe"
    },
    {
        "Carro": "Friat Tempra Turbo",
        "Ano": "1994",
        "Valor": "R$ 32.200",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Ubermacht M3 E30",
        "Ano": "1990",
        "Valor": "R$ 370.000",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Annis Cosmos",
        "Ano": "1995",
        "Valor": "R$ 250.000",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Benefactor SL65 AMG Cabriolet",
        "Ano": "2022",
        "Valor": "R$ 1.135.990",
        "Categoria": "Coupe"
    },
    {
        "Carro": "Bravado Ram 3500 SuperDuty",
        "Ano": "2010",
        "Valor": "160 Moedas",
        "Categoria": "Off-Road"
    },
    {
        "Carro": "Progen 600LT",
        "Ano": "2018",
        "Valor": "200 Moedas",
        "Categoria": "Super"
    },
    {
        "Carro": "Dewbauchee Vanquish",
        "Ano": "2025",
        "Valor": "180 Moedas",
        "Categoria": "Super"
    },
    {
        "Carro": "Obey RS3 Sedan",
        "Ano": "2020",
        "Valor": "120 Moedas",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Vapid Mustang Eleanor",
        "Ano": "1967",
        "Valor": "80 Moedas",
        "Categoria": "Muscle"
    },
    {
        "Carro": "Principe Regera",
        "Ano": "2016",
        "Valor": "300 Moedas",
        "Categoria": "Hyper"
    },
    {
        "Carro": "Ubermacht X6M Competition",
        "Ano": "2024",
        "Valor": "140 Moedas",
        "Categoria": "SUV"
    },
    {
        "Carro": "Grotti SF90 Stradale",
        "Ano": "2019",
        "Valor": "220 Moedas",
        "Categoria": "Super"
    },
    {
        "Carro": "Lampadati GranTurismo MC Stradale",
        "Ano": "2018",
        "Valor": "120 Moedas",
        "Categoria": "Coupe"
    },
    {
        "Carro": "LEILAO",
        "Ano": "LEILAO",
        "Valor": "LEILAO",
        "Categoria": "LEILAO"
    },
    {
        "Carro": "teste",
        "Ano": "2026",
        "Valor": "1000",
        "Categoria": "super"
    },
    {
        "Carro": "Testee J33H",
        "Ano": "2000",
        "Valor": "R$ 1.500",
        "Categoria": "Alto"
    },
    {
        "Carro": "Dewbauchee Vantage Roadster ",
        "Ano": "2022",
        "Valor": "R$ 2.250.000",
        "Categoria": "Sport"
    },
    {
        "Carro": "BF Parati G4 Surf ",
        "Ano": "2010",
        "Valor": "R$ 63.900",
        "Categoria": "SUV"
    },
    {
        "Carro": "Ubermacht I8 ",
        "Ano": "2015",
        "Valor": "R$ 625.590",
        "Categoria": "Coupe"
    },
    {
        "Carro": "BF Tera ",
        "Ano": "2025",
        "Valor": "R$ 145.890",
        "Categoria": "SUV"
    },
    {
        "Carro": "Ubermacht 1M Coupe ",
        "Ano": "2011",
        "Valor": "R$ 650.000",
        "Categoria": "Coupe"
    },
    {
        "Carro": "Coil CyberTruck",
        "Ano": "2023",
        "Valor": "R$ 250.000",
        "Categoria": "Off-Road"
    },
    {
        "Carro": "Ubermacht M5 G60 ",
        "Ano": "2024",
        "Valor": "R$ 905.000",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Vapid Focus RS",
        "Ano": "2017",
        "Valor": "100 Moedas",
        "Categoria": "Hatch"
    },
    {
        "Carro": "Annis RX-8",
        "Ano": "2011",
        "Valor": "160 Moedas",
        "Categoria": "Sedan"
    },
    {
        "Carro": "Declasse Hennessey Camaro Exorcist",
        "Ano": "2020",
        "Valor": "160 Moedas",
        "Categoria": "Sport"
    },
    {
        "Carro": "Pegassi Diablo GTR",
        "Ano": "1999",
        "Valor": "200 Moedas",
        "Categoria": "Super"
    },
    {
        "Carro": "Pegassi Sian Roadster",
        "Ano": "2020",
        "Valor": "200 Moedas",
        "Categoria": "Super"
    },
    {
        "Carro": "Grotti F8 Tributo",
        "Ano": "2019",
        "Valor": "180 Moedas",
        "Categoria": "Super"
    }
];