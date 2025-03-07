import { prisma } from "@/database/prisma"

async function seed() {
  await prisma.category.createMany({
    data: [
      { id: "146b1a88-b3d3-4232-8b8f-c1f006f1e86d", name: "Alimentação" },
      { id: "52e81585-f71a-44cd-8bd0-49771e45da44", name: "Estacionamentos" },
      { id: "57d6e5ff-35f6-4d21-a521-84f23d511d25", name: "Postos de Combústiveis" },
      { id: "826910d4-187d-4c15-88f4-382b7e056739", name: "Oficinas" },
      { id: "abce52cf-b33b-4b3c-8972-eb72c66c83e4", name: "Saúde" },
    ],
  })

  await prisma.market.createMany({
    data: [
      // ALIMENTAÇÃO
      {
        id: "012576ea-4441-4b8a-89e5-d5f32104c7c4",
        categoryId: "146b1a88-b3d3-4232-8b8f-c1f006f1e86d",
        name: "Sabor Grill",
        description:
          "Churrascaria com cortes nobres e buffet variado. Experiência completa para os amantes de carne.",
        latitude: -14.877607170103566,
        longitude: -40.84614650689334, 
        coupons: 10,
        address: "Av. Paulista - Bela Vista",
        phone: "(11) 94567-1212",
        cover:
          "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=400&h=300",
      },
      {
        id: "2bc11e34-5f30-4ba0-90fa-c1c98f649281",
        categoryId: "146b1a88-b3d3-4232-8b8f-c1f006f1e86d",
        name: "Café Central",
        description:
          "Café aconchegante com opções de lanches e bebidas artesanais. Perfeito para uma pausa.",
        latitude: -14.891377160904728, 
        longitude: -40.84709078326106,
        coupons: 10,
        address: "Alameda Jaú - Jardim Paulista",
        phone: "(12) 3456-7890",
        cover:
          "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300",
      },
      {
        id: "4197b830-aa9c-40d4-a22e-c05043588a77",
        categoryId: "146b1a88-b3d3-4232-8b8f-c1f006f1e86d",
        name: "Burguer Up",
        description:
          "Hambúrgueres gourmet preparados na hora. Ingredientes frescos e combinações únicas.",
        latitude: -14.861117238591323, 
        longitude: -40.82552744237662,
        coupons: 10,
        address: "Rua Peixoto Gomide - Jardim Paulista",
        phone: "(13) 98765-4321",
        cover:
          "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=400&h=300",
      },
      {
        id: "4209c72f-9d14-410c-91af-c24d08f177cc",
        categoryId: "146b1a88-b3d3-4232-8b8f-c1f006f1e86d",
        name: "Doce & Delícia",
        description:
          "Confeitaria com doces e sobremesas incríveis. Bolo de vitrine e especialidades artesanais.",
        latitude: -14.887363628455667, 
        longitude: -40.84834121500346,
        coupons: 10,
        address: "Rua Treze de Maio - Jardim Paulista",
        phone: "(14) 2345-6789",
        cover:
          "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300",
      },
      {
        id: "4e6dd864-f04a-4711-9db2-e5624fd32b8e",
        categoryId: "146b1a88-b3d3-4232-8b8f-c1f006f1e86d",
        name: "Verde Vida",
        description:
          "Restaurante vegano com pratos saudáveis e saborosos. Comida natural em um ambiente acolhedor.",
        latitude: -14.86461132251172, 
        longitude: -40.82001530609596,
        coupons: 10,
        address: "Alameda Jaú - Jardim Paulista",
        phone: "(15) 9876-5432",
        cover:
          "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=400&h=300",
      },
      // ESTACIONAMENTO
      {
        id: "6dbf1cd5-c20a-4e6a-bc9a-a26069825d2c",
        categoryId: "52e81585-f71a-44cd-8bd0-49771e45da44",
        name: "Estacionamento Digital - Zona Azul",
        description:
          "Sistema de estacionamento rotativo com aproximadamente 1.700 vagas distribuídas pelo centro da cidade.",
        latitude: -14.85031,
        longitude: -40.83698,
        coupons: 10,
        address: "R. Cel. Gugé, 310 - Centro, Vitória da Conquista - BA, 45000-510",
        phone: "(16) 3456-7890",
        cover:
          "https://autopark.com.br/wp-content/uploads/2019/09/imagem-destaque-ALTERADO-2.png",
      },
      {
        id: "756b1d53-cc5b-4995-8ebd-8eee3dae01af",
        categoryId: "52e81585-f71a-44cd-8bd0-49771e45da44",
        name: "Estacionamento do Aeroporto Glauber Rocha",
        description:
          "Localizado na região sudoeste, o aeroporto oferece estacionamento com 410 vagas para passageiros e visitantes. ",
        latitude: -14.90753,
        longitude: -40.91706,
        coupons: 10,
        address: "Rod. Santos Dumont, BR-116 - KM 832 - Iguá, Vitória da Conquista - BA, 45105-000",
        phone: "(77) 3424-0546",
        cover:
          "https://www.ericaavallone.com.br/painel/post/img/369/Responsabilidade%20civil.jpg",
      },
      {
        id: "77a5d5eb-bcfa-4457-916d-a5b6fe7aa183",
        categoryId: "52e81585-f71a-44cd-8bd0-49771e45da44",
        name: "OK Park Estacionamento",
        description:
          "Situado na Avenida Expedicionários, 452 - Recreio, na região norte da cidade, oferece serviços de estacionamento para visitantes e moradores.",
        latitude: -14.872181335872089, 
        longitude: -40.84023109995364,
        coupons: 10,
        address: "R. Góes Calmon - Centro, Vitória da Conquista - BA, 45000-340",
        phone: "(71) 98213-0707",
        cover:
          "https://www.maxipark.com.br/wp-content/uploads/2021/07/Imagem_Blog.jpg",
      },
      {
        id: "78806cca-cfb0-45bc-8dc3-c57a42f0da01",
        categoryId: "52e81585-f71a-44cd-8bd0-49771e45da44",
        name: "Estacionamento do Shopping Conquista Sul",
        description:
          "Situado na zona sul da cidade, o shopping possui um estacionamento com 900 vagas, gerenciado pela Indigo.",
        latitude: -14.89404,
        longitude: -40.84512,
        coupons: 10,
        address: "R. N Morada Passaros III, 02 - Boa Vista, Vitória da Conquista - BA",
        phone: "(19) 9876-5432",
        cover:
          "https://www.dimep.com.br/wp-content/uploads/2019/06/1-estacionamento-coberto.jpg",
      },
      {
        id: "78ced7b1-436b-42ca-9c66-747f2b671321",
        categoryId: "52e81585-f71a-44cd-8bd0-49771e45da44",
        name: "Leve Big Vitória da Conquista - Coopark",
        description:
          "Localizado no bairro Candeias, na região leste, este estacionamento oferece facilidade de acesso e pagamento digital. ",
        latitude: -23.55473446617852,
        longitude: -46.65859874077045,
        coupons: 10,
        address: "Av. Otávio Santos, 429 - Recreio, Vitória da Conquista - BA, 45020-750",
        phone: "(77) 99153-2605",
        cover:
          "https://www.autoescolaonline.net/wp-content/uploads/2017/10/estacionamento-shopping.jpg",
      },
      // OFICINA
      {
        id: "7be85f5b-533f-4974-8c9e-75cae740041c",
        categoryId: "57d6e5ff-35f6-4d21-a521-84f23d511d25",
        name: "Hotel Céu Azul",
        description:
          "Hotel moderno com quartos aconchegantes. Ideal para relaxar.",
        latitude: -23.554120626142016,
        longitude: -46.65203378772091,
        coupons: 10,
        address: "Rua Dr. Penaforte Mendes - Bela Vista ",
        phone: "(12) 1234-5678",
        cover:
          "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?w=400&h=300",
      },
      {
        id: "806c7934-037b-4dcd-99bb-c0fc6f2c5a45",
        categoryId: "57d6e5ff-35f6-4d21-a521-84f23d511d25",
        name: "Casa Serena",
        description:
          "Pousada charmosa no coração da cidade, com ambiente tranquilo e serviço personalizado.",
        latitude: -23.55165437523632,
        longitude: -46.649795512210524,
        coupons: 10,
        address: "Rua Frei Caneca - Consolação",
        phone: "(13) 9876-5432",
        cover:
          "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=300",
      },
      {
        id: "8cf0433e-68de-4c2a-9fff-c0c2941ec521",
        categoryId: "57d6e5ff-35f6-4d21-a521-84f23d511d25",
        name: "Suites Urban",
        description:
          "Acomodações sofisticadas no centro da cidade. Perfeito para viagens de negócios ou lazer.",
        latitude: -23.55466938453421,
        longitude: -46.65173990250655,
        coupons: 10,
        address: "R. Dr. Penaforte Mendes - Bela Vista, São Paulo",
        phone: "(14) 2345-6789",
        cover:
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300",
      },
      {
        id: "b2c3014d-64bd-4c01-95e9-7f408e12ff6f",
        categoryId: "57d6e5ff-35f6-4d21-a521-84f23d511d25",
        name: "Villa Encanto",
        description:
          "Chalés rústicos em uma área tranquila. Experiência de hospedagem exclusiva com total privacidade.",
        latitude: -23.56516128294298,
        longitude: -46.66117774949042,
        coupons: 10,
        address: "Rua José Maria Lisboa - Jardins",
        phone: "(15) 9876-5432",
        cover:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300",
      },
      {
        id: "b3a4dab2-1b83-4015-ba95-22f5770c6108",
        categoryId: "57d6e5ff-35f6-4d21-a521-84f23d511d25",
        name: "Estalagem Real",
        description:
          "Hotel boutique com design clássico e atendimento de excelência. Uma estadia luxuosa e confortável.",
        latitude: -23.56210372033115,
        longitude: -46.65926304595067,
        coupons: 10,
        address: "Alameda Jaú - Jardim Paulista",
        phone: "(16) 3456-7890",
        cover:
          "https://images.unsplash.com/photo-1558979158-65a1eaa08691?w=400&h=300",
      },
      // POSTO DE COMBUSTÍVEL
      {
        id: "bde73364-95c5-46e4-8084-79a7ca3824c4",
        categoryId: "826910d4-187d-4c15-88f4-382b7e056739",
        name: "CineStar",
        description:
          "Cinema moderno com salas confortáveis e tecnologia de última geração.",
        latitude: -23.548482381146595,
        longitude: -46.659142416446386,
        coupons: 10,
        address: "Av. Angélica - Consolação",
        phone: "(17) 9876-5432",
        cover:
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300",
      },
      {
        id: "c5271f4e-6058-4eda-8b08-0e7fb0b73a0d",
        categoryId: "826910d4-187d-4c15-88f4-382b7e056739",
        name: "MovieLand",
        description:
          "Espaço cultural com uma seleção variada de filmes e festivais exclusivos.",
        latitude: -23.544459765576214,
        longitude: -46.639557261292346,
        coupons: 10,
        address: "R. 24 de Maio - República",
        phone: "(11) 2345-6789",
        cover:
          "https://images.unsplash.com/photo-1497493292307-31c376b6e479?w=400&h=300",
      },
      {
        id: "d21b8cad-8d01-4ffd-8117-a34d613cdcf5",
        categoryId: "826910d4-187d-4c15-88f4-382b7e056739",
        name: "TelaMax",
        description:
          "Cinema de bairro com atmosfera aconchegante e opções de filmes clássicos e lançamentos.",
        latitude: -23.545525145028346,
        longitude: -46.641431974786606,
        coupons: 10,
        address: "Rua Sete de Abril - República",
        phone: "(19) 9876-5432",
        cover:
          "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300",
      },
      // SAÚDE
      {
        id: "def71683-e89f-4c3b-a652-868a02f54ae9",
        categoryId: "abce52cf-b33b-4b3c-8972-eb72c66c83e4",
        name: "Grão Dourado",
        description:
          "Famosa por seus croissants e pães de fermentação natural.",
        latitude: -23.54000232292889,
        longitude: -46.64680389012777,
        coupons: 10,
        address: "Av. Duque de Caxias  - Santa Ifigênia",
        phone: "(11) 5432-1098",
        cover:
          "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=400&h=300",
      },
      {
        id: "e4949574-a579-4b07-a005-3fc4b7339752",
        categoryId: "abce52cf-b33b-4b3c-8972-eb72c66c83e4",
        name: "Pão & Cia",
        description:
          "Padaria artesanal com pães frescos e quitutes caseiros todos os dias.",
        latitude: -23.523537811033677,
        longitude: -46.62669283245777,
        coupons: 10,
        address: "Rua Guaporé - Luz ",
        phone: "(11) 8765-4321",
        cover:
          "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&h=300",
      },
      {
        id: "ea097b60-d0fb-41aa-ad44-a7ed850c9ecd",
        categoryId: "abce52cf-b33b-4b3c-8972-eb72c66c83e4",
        name: "Doce Massa",
        description:
          "Especializada em doces e salgados, com opções de café da manhã completo.",
        latitude: -23.529972517386824,
        longitude: -46.62928337478692,
        coupons: 10,
        address: "Rua Alfredo Maia - Luz",
        phone: "(11) 1234-5678",
        cover:
          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300",
      },
      {
        id: "ebfecf67-fe4d-4137-90f0-b7083fd58da1",
        categoryId: "abce52cf-b33b-4b3c-8972-eb72c66c83e4",
        name: "Padaria da cidade",
        description:
          "Padaria de bairro com pães rústicos e tradicionais assados na hora.",
        latitude: -23.534594559751564,
        longitude: -46.63463225944563,
        coupons: 10,
        address: "Praça da Luz - Bom Retiro",
        phone: "(11) 9876-5432",
        cover:
          "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300",
      },
    ],
  })

  await prisma.rules.createMany({
    data: [
      {
        marketId: "012576ea-4441-4b8a-89e5-d5f32104c7c4",
        description: "Disponível até 31/12/2024",
      },
      {
        marketId: "2bc11e34-5f30-4ba0-90fa-c1c98f649281",
        description: "Disponível até 15/01/2025",
      },
      {
        marketId: "4197b830-aa9c-40d4-a22e-c05043588a77",
        description: "Disponível até 20/01/2025",
      },
      {
        marketId: "4209c72f-9d14-410c-91af-c24d08f177cc",
        description: "Disponível até 31/12/2024",
      },
      {
        marketId: "4e6dd864-f04a-4711-9db2-e5624fd32b8e",
        description: "Disponível até 15/01/2025",
      },
      {
        marketId: "6dbf1cd5-c20a-4e6a-bc9a-a26069825d2c",
        description: "Disponível até 20/01/2025",
      },
      {
        marketId: "756b1d53-cc5b-4995-8ebd-8eee3dae01af",
        description: "Disponível até 31/12/2024",
      },
      {
        marketId: "77a5d5eb-bcfa-4457-916d-a5b6fe7aa183",
        description: "Disponível até 10/01/2025",
      },
      {
        marketId: "78806cca-cfb0-45bc-8dc3-c57a42f0da01",
        description: "Disponível até 31/12/2024",
      },
      {
        marketId: "78ced7b1-436b-42ca-9c66-747f2b671321",
        description: "Disponível até 31/12/2024",
      },
      {
        marketId: "7be85f5b-533f-4974-8c9e-75cae740041c",
        description: "Disponível até 15/01/2025",
      },
      {
        marketId: "806c7934-037b-4dcd-99bb-c0fc6f2c5a45",
        description: "Disponível até 20/01/2025",
      },
      {
        marketId: "8cf0433e-68de-4c2a-9fff-c0c2941ec521",
        description: "Disponível até 07/01/2025",
      },
      {
        marketId: "b2c3014d-64bd-4c01-95e9-7f408e12ff6f",
        description: "Disponível até 31/12/2024",
      },
      {
        marketId: "b3a4dab2-1b83-4015-ba95-22f5770c6108",
        description: "Disponível até 31/12/2024",
      },
      {
        marketId: "bde73364-95c5-46e4-8084-79a7ca3824c4",
        description: "Disponível até 31/12/2024",
      },
      {
        marketId: "c5271f4e-6058-4eda-8b08-0e7fb0b73a0d",
        description: "Disponível até 15/01/2025",
      },
      {
        marketId: "d21b8cad-8d01-4ffd-8117-a34d613cdcf5",
        description: "Disponível até 20/01/2025",
      },
      {
        marketId: "def71683-e89f-4c3b-a652-868a02f54ae9",
        description: "Disponível até 31/12/2024",
      },
      {
        marketId: "e4949574-a579-4b07-a005-3fc4b7339752",
        description: "Disponível até 15/01/2025",
      },
      {
        marketId: "ea097b60-d0fb-41aa-ad44-a7ed850c9ecd",
        description: "Disponível até 25/02/2025",
      },
      {
        marketId: "ebfecf67-fe4d-4137-90f0-b7083fd58da1",
        description: "Disponível até 01/02/2025",
      },
      {
        marketId: "012576ea-4441-4b8a-89e5-d5f32104c7c4",
        description: "Válido apenas para consumo no local",
      },
      {
        marketId: "2bc11e34-5f30-4ba0-90fa-c1c98f649281",
        description: "Válido apenas para consumo no local",
      },
      {
        marketId: "4197b830-aa9c-40d4-a22e-c05043588a77",
        description: "Válido apenas para consumo no local",
      },
      {
        marketId: "4209c72f-9d14-410c-91af-c24d08f177cc",
        description: "Válido apenas para consumo no local",
      },
      {
        marketId: "4e6dd864-f04a-4711-9db2-e5624fd32b8e",
        description: "Válido apenas para consumo no local",
      },
      {
        marketId: "6dbf1cd5-c20a-4e6a-bc9a-a26069825d2c",
        description: "Válido apenas para consumo no local",
      },
      {
        marketId: "756b1d53-cc5b-4995-8ebd-8eee3dae01af",
        description: "Válido apenas para consumo no local",
      },
      {
        marketId: "77a5d5eb-bcfa-4457-916d-a5b6fe7aa183",
        description: "Válido apenas para consumo no local",
      },
      {
        marketId: "78806cca-cfb0-45bc-8dc3-c57a42f0da01",
        description: "Válido apenas para consumo no local",
      },
      {
        marketId: "78ced7b1-436b-42ca-9c66-747f2b671321",
        description: "Válido apenas para consumo no local",
      },
      {
        marketId: "7be85f5b-533f-4974-8c9e-75cae740041c",
        description: "Válido apenas para consumo no local",
      },
      {
        marketId: "806c7934-037b-4dcd-99bb-c0fc6f2c5a45",
        description: "Válido apenas para consumo no local",
      },
      {
        marketId: "8cf0433e-68de-4c2a-9fff-c0c2941ec521",
        description: "Válido apenas para consumo no local",
      },
      {
        marketId: "b2c3014d-64bd-4c01-95e9-7f408e12ff6f",
        description: "Válido apenas para consumo no local",
      },
      {
        marketId: "b3a4dab2-1b83-4015-ba95-22f5770c6108",
        description: "Válido apenas para consumo no local",
      },
      {
        marketId: "bde73364-95c5-46e4-8084-79a7ca3824c4",
        description: "Válido apenas para consumo no local",
      },
      {
        marketId: "c5271f4e-6058-4eda-8b08-0e7fb0b73a0d",
        description: "Válido apenas para consumo no local",
      },
      {
        marketId: "d21b8cad-8d01-4ffd-8117-a34d613cdcf5",
        description: "Válido apenas para consumo no local",
      },
      {
        marketId: "def71683-e89f-4c3b-a652-868a02f54ae9",
        description: "Válido apenas para consumo no local",
      },
      {
        marketId: "e4949574-a579-4b07-a005-3fc4b7339752",
        description: "Válido apenas para consumo no local",
      },
      {
        marketId: "ea097b60-d0fb-41aa-ad44-a7ed850c9ecd",
        description: "Válido apenas para consumo no local",
      },
      {
        marketId: "ebfecf67-fe4d-4137-90f0-b7083fd58da1",
        description: "Válido apenas para consumo no local",
      },
    ],
  })
}

seed().then(() => {
  console.log("Database seeded!")
  prisma.$disconnect()
})
