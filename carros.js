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
    }
];