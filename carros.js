const carrosData = [
    {
        "Carro": "Furd Ranger Raptor",
        "Ano": "2019",
        "Valor": "80 Moedas",
        "Categoria": "Off-road",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Hunda Civic FL5",
        "Ano": "2024",
        "Valor": "120 Moedas",
        "Categoria": "Sedan",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Furd Mustang",
        "Ano": "2025",
        "Valor": "140 Moedas",
        "Categoria": "Muscle",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "BWM M5 E60 V10",
        "Ano": "2005",
        "Valor": "160 Moedas",
        "Categoria": "Sport",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Aidu RS6 C8",
        "Ano": "2020",
        "Valor": "180 Moedas",
        "Categoria": "Wagon",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Poshe 911 TurboS",
        "Ano": "2019",
        "Valor": "180 Moedas",
        "Categoria": "Sport",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Niffan R34 V-Spec",
        "Ano": "1999",
        "Valor": "200 Moedas",
        "Categoria": "Sport",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Dudge Ram TRX",
        "Ano": "2020",
        "Valor": "200 Moedas",
        "Categoria": "Off-road",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "F-40 Exclusive",
        "Ano": "1985",
        "Valor": "Leilão",
        "Categoria": "Super",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Trailer Carretinha DF/DR",
        "Ano": "2025",
        "Valor": "20 Moedas",
        "Categoria": "Trailer",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Trailer Caminhão",
        "Ano": "2025",
        "Valor": "40 Moedas",
        "Categoria": "Trailer",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Trailer 20 Metros",
        "Ano": "2025",
        "Valor": "100 Moedas",
        "Categoria": "Trailer",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Trailer 2C Fechado",
        "Ano": "2025",
        "Valor": "120 Moedas",
        "Categoria": "Trailer",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Trailer 3C Fechado",
        "Ano": "2025",
        "Valor": "140 Moedas",
        "Categoria": "Trailer",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Trailer 40 Metros",
        "Ano": "2025",
        "Valor": "140 Moedas",
        "Categoria": "Trailer",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Vapid F-350 5ª Roda",
        "Ano": "2020",
        "Valor": "140 Moedas",
        "Categoria": "Off-road",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Bravado Ram 3500 SuperDuty 5ª Roda",
        "Ano": "2010",
        "Valor": "140 Moedas",
        "Categoria": "Off-road",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "CVR Coe",
        "Ano": "1941",
        "Valor": "150 Moedas",
        "Categoria": "Truck",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Trailer Carreta 4C",
        "Ano": "2025",
        "Valor": "150 Moedas",
        "Categoria": "Trailer",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Trailer Carreta",
        "Ano": "2025",
        "Valor": "160 Moedas",
        "Categoria": "Trailer",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Caminhão 1C",
        "Ano": "2007",
        "Valor": "200 Moedas",
        "Categoria": "Truck",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Cegonha",
        "Ano": "2014",
        "Valor": "220 Moedas",
        "Categoria": "Truck",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Mack 53",
        "Ano": "1953",
        "Valor": "R$50.000",
        "Categoria": "Truck",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Trailer 20 FT",
        "Ano": "2025",
        "Valor": "R$52.000",
        "Categoria": "Trailer",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Trailer CT",
        "Ano": "2025",
        "Valor": "R$62.000",
        "Categoria": "Trailer",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Jacaré",
        "Ano": "1985",
        "Valor": "R$95.000",
        "Categoria": "Truck",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "VW Titan",
        "Ano": "1999",
        "Valor": "R$135.900",
        "Categoria": "Truck",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "133H",
        "Ano": "1900",
        "Valor": "R$145.900",
        "Categoria": "Truck",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Peter 351",
        "Ano": "1900",
        "Valor": "R$150.000",
        "Categoria": "Truck",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "NL12",
        "Ano": "1900",
        "Valor": "R$160.000",
        "Categoria": "Truck",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "V440",
        "Ano": "1900",
        "Valor": "R$170.000",
        "Categoria": "Truck",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "NL 780",
        "Ano": "1900",
        "Valor": "R$220.000",
        "Categoria": "Truck",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "W900",
        "Ano": "1900",
        "Valor": "R$555.000",
        "Categoria": "Truck",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "S 700",
        "Ano": "1900",
        "Valor": "R$575.900",
        "Categoria": "Truck",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "FH16",
        "Ano": "1900",
        "Valor": "R$670.000",
        "Categoria": "Truck",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Marea HLX",
        "Ano": "2007",
        "Valor": "R$44.990",
        "Categoria": "Sedan",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Golf Sportline",
        "Ano": "2012",
        "Valor": "R$52.990",
        "Categoria": "Hatch",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Fusion V6 AWD",
        "Ano": "2012",
        "Valor": "R$53.990",
        "Categoria": "Sedan",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Vulcar C30",
        "Ano": "2013",
        "Valor": "R$59.990",
        "Categoria": "Sedan",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Schyster I30",
        "Ano": "2011",
        "Valor": "R$75.550",
        "Categoria": "Hatch",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Karin Corolla",
        "Ano": "2020",
        "Valor": "R$87.990",
        "Categoria": "Sedan",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Jetta TSI",
        "Ano": "2013",
        "Valor": "R$88.990",
        "Categoria": "Sedan",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Civic SI",
        "Ano": "2009",
        "Valor": "R$114.590",
        "Categoria": "Sedan",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Civic G10",
        "Ano": "2018",
        "Valor": "R$132.990",
        "Categoria": "Sedan",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Friat Fastback",
        "Ano": "2025",
        "Valor": "R$135.990",
        "Categoria": "Suv",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Troupe 208 GT",
        "Ano": "2016",
        "Valor": "R$ 72.550",
        "Categoria": "Hatch",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Obey A3 TFSI 2.0",
        "Ano": "2015",
        "Valor": "R$ 135.990",
        "Categoria": "Sedan",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "BF Golf Variant",
        "Ano": "2016",
        "Valor": "R$ 106.990",
        "Categoria": "SUV",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Vapid F-250",
        "Ano": "2008",
        "Valor": "R$ 226.990",
        "Categoria": "Off-Road",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Ubermacht M240I",
        "Ano": "2017",
        "Valor": "R$ 275.500",
        "Categoria": "Coupe",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Nagasaki ZX10-R",
        "Ano": "2016",
        "Valor": "R$ 75.990",
        "Categoria": "Moto",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Ubermacht M4",
        "Ano": "2016",
        "Valor": "140 Moedas",
        "Categoria": "Sport",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Maibatsu EVO X",
        "Ano": "2014",
        "Valor": "80 Moedas",
        "Categoria": "Sedan",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Bravado Charger ",
        "Ano": "2021",
        "Valor": "180 Moedas",
        "Categoria": "Sport",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Benefactor G63 AMG",
        "Ano": "2020",
        "Valor": "120 Moedas",
        "Categoria": "SUV",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Ubermacht M3 F80",
        "Ano": "2016",
        "Valor": "180 Moedas",
        "Categoria": "Sport",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Obey RS4",
        "Ano": "2020",
        "Valor": "120 Moedas",
        "Categoria": "SUV",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Ubermacht M3 G80",
        "Ano": "2022",
        "Valor": "R$ 902.990",
        "Categoria": "Sport",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "BF Golf GTI MK7",
        "Ano": "2014",
        "Valor": "R$ 165.990",
        "Categoria": "Hatch",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Truller T-4",
        "Ano": "2007",
        "Valor": "R$ 139.500",
        "Categoria": "Off-Road",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "BF Jetta Variant",
        "Ano": "2011",
        "Valor": "R$ 74.990",
        "Categoria": "SUV",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Emperor LFA",
        "Ano": "2011",
        "Valor": "200 Moedas",
        "Categoria": "Super",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Invetero Corvette C6",
        "Ano": "2010",
        "Valor": "160 Moedas",
        "Categoria": "Sport",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Grotti Puro-Sangue",
        "Ano": "2024",
        "Valor": "140 Moedas",
        "Categoria": "SUV",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Annis 350z",
        "Ano": "2009",
        "Valor": "180 Moedas",
        "Categoria": "Coupe",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Pfister Panamera",
        "Ano": "2023",
        "Valor": "120 Moedas",
        "Categoria": "Sport",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Karin Levin",
        "Ano": "0000",
        "Valor": "R$ 127.990",
        "Categoria": "Coupe",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Annis 240z",
        "Ano": "0000",
        "Valor": "R$ 142.590",
        "Categoria": "Coupe",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Karin Cresta",
        "Ano": "1981",
        "Valor": "R$ 177.990",
        "Categoria": "Sedan",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Annis Cefiro A31",
        "Ano": "0000",
        "Valor": "R$ 195.990",
        "Categoria": "Sedan",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Annis Laurel C35",
        "Ano": "2002",
        "Valor": "R$ 197.890",
        "Categoria": "Sedan",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Annis Miata MX5",
        "Ano": "0000",
        "Valor": "R$ 199.990",
        "Categoria": "Coupe",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Dinka S2000",
        "Ano": "2005",
        "Valor": "R$ 223.550",
        "Categoria": "Coupe",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Karin JZX",
        "Ano": "1981",
        "Valor": "R$ 235.590",
        "Categoria": "Sedan",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Annis 300ZX Z-32",
        "Ano": "2000",
        "Valor": "R$ 281.990",
        "Categoria": "Coupe",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Karin Chaser Mark II JZX90",
        "Ano": "1990",
        "Valor": "R$ 299.990",
        "Categoria": "Sedan",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Karin Chaser Mark II JZX100",
        "Ano": "2001",
        "Valor": "R$ 319.880",
        "Categoria": "Sedan",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Karin Celsior UCF10",
        "Ano": "1994",
        "Valor": "R$ 338.990",
        "Categoria": "Sedan",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Annis 370z",
        "Ano": "2014",
        "Valor": "R$ 378.990",
        "Categoria": "Coupe",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Karin Chaser",
        "Ano": "1990",
        "Valor": "R$ 422.890",
        "Categoria": "Sedan",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Annis ER34N",
        "Ano": "2001",
        "Valor": "R$ 425.990",
        "Categoria": "Sedan",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    },
    {
        "Carro": "Karin Supra A70",
        "Ano": "1990",
        "Valor": "R$ 437.990",
        "Categoria": "Coupe",
        "Imagem": "https://i.imgur.com/Wf7bGAO.png"
    }
];