import { prisma } from "@/database/prisma"

async function seed() {
  await prisma.category.createMany({
    data: [
      { id: "146b1a88-b3d3-4232-8b8f-c1f006f1e86d", name: "2 - Alimentação" },
      { id: "52e81585-f71a-44cd-8bd0-49771e45da44", name: "5 - Estacionamentos" },
      { id: "57d6e5ff-35f6-4d21-a521-84f23d511d25", name: "4 - Oficinas" },
      { id: "826910d4-187d-4c15-88f4-382b7e056739", name: "3 - Postos de Combústiveis" },
      { id: "12ce52cf-b33b-4b3c-8972-eb72c66c83e4", name: "1 - Saude" },
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
        name: "Dynamo Garage Auto Center",
        description:
          "Oficina .",
        latitude: -14.889313971999956, 
        longitude: -40.845479835504534,
        coupons: 10,
        address: "Rua Dr - R. Dr. Parmenio Ferreira da Silva, 76 - Felicia, Vitória da Conquista - BA, 45055-390",
        phone: "(77) 3028-4515",
        cover:
          "https://tecnologia.systa.com.br/midias/pessoas/23412/20201027100850-guia-estadual--thumb.jpeg",
      },
      {
        id: "806c7934-037b-4dcd-99bb-c0fc6f2c5a45",
        categoryId: "57d6e5ff-35f6-4d21-a521-84f23d511d25",
        name: "Oficina Brasil",
        description:
          "Oficina de carros médios.",
        latitude: -14.908937082456223, 
        longitude: -40.84482232225266,
        coupons: 10,
        address: "Av Santa monica, 33 - Vitória da Conquista, BA, 45000-000",
        phone: "(77) 98802-0100",
        cover:
          "https://maintenance-minio.kdminhaoficina.com.br/maintenance/public/system/establishment/19401307000122/vista-interna-do-patio-1-e9fccfda-5731-42f8-a7bd-749b356d99ed.jpg",
      },
      {
        id: "8cf0433e-68de-4c2a-9fff-c0c2941ec521",
        categoryId: "57d6e5ff-35f6-4d21-a521-84f23d511d25",
        name: " V8 Centro Automotivo",
        description:
          "Oficinas de carro eletricos.",
        latitude: -14.861957986061936, 
        longitude: -40.84546181794024,
        coupons: 10,
        address: "Av. Bartolomeu de Gusmão, 68 - Jurema, Vitória da Conquista - BA, 45025-355",
        phone: "(77) 3028-7888",
        cover:
          "https://i0.statig.com.br/bancodeimagens/53/2u/xz/532uxz8tuvobf2chidnyvb5sc.jpg",
      },
      {
        id: "b2c3014d-64bd-4c01-95e9-7f408e12ff6f",
        categoryId: "57d6e5ff-35f6-4d21-a521-84f23d511d25",
        name: "TService Conquista",
        description:
          "Oficina TService.",
        latitude: -14.84916558270764, 
        longitude: -40.84898127330917,
        coupons: 10,
        address: "Av. Pres. Dutra - Ibirapuera, Vitória da Conquista - BA, 45075-045",
        phone: "(77) 4009-8140",
        cover:
          "https://omecanico.com.br/wp-content/uploads/2019/01/ed-296-especial10.gif",
      },
      {
        id: "b3a4dab2-1b83-4015-ba95-22f5770c6108",
        categoryId: "57d6e5ff-35f6-4d21-a521-84f23d511d25",
        name: "Auto Service Zona Norte",
        description:
          "Oficina de carros - especialista de direção hidraúlica",
        latitude: -14.864875042856482, 
        longitude: -40.84649179078477,
        coupons: 10,
        address: "Av. Bartolomeu de Gusmão, 805 - Jurema, Vitória da Conquista - BA, 45020-107",
        phone: "(77) 3424-1242",
        cover:
          "https://versoassessoriadeimprensa.com.br/teste/wp-content/uploads/2018/03/037_.jpg",
      },
      // POSTO DE COMBUSTÍVEL
      {
        id: "bde73364-95c5-46e4-8084-79a7ca3824c4",
        categoryId: "826910d4-187d-4c15-88f4-382b7e056739",
        name: "Posto Dom Pedro",
        description:
          "Lava-rápido · Diesel",
        latitude: -15.085497242986236, 
        longitude: -41.012665365232195,
        coupons: 10,
        address: "Rodovia BR116 KM 854 Inhobim, BA, 45110-000",
        phone: "(77) 3424-4513",
        cover:
          "https://lh3.googleusercontent.com/p/AF1QipPWQaGKwovsamIePM-rbN4PTzZJbETZQY9-wZaH=s680-w680-h510-rw",
      },
      {
        id: "c5271f4e-6058-4eda-8b08-0e7fb0b73a0d",
        categoryId: "826910d4-187d-4c15-88f4-382b7e056739",
        name: "Posto Ipiranga",
        description:
          "Há mais de 85 anos, o Posto Ipiranga está presente na jornada de mobilidade de milhões de brasileiros, valorizando o compromisso com a inovação e o futuro da mobilidade urbana.",
        latitude: -14.897960132038602, 
        longitude: -40.84430238396898,
        coupons: 10,
        address: "Av. Juracy Magalhães, 3951 - Boa Vista, Vitória da Conquista - BA",
        phone: "0800 720 5356",
        cover:
          "https://lh3.googleusercontent.com/p/AF1QipP1IMJBsszi3WYrtC_5UenG2FNZ385FavGAxj1e=s680-w680-h510-rw",
      },
      {
        id: "d21b8cad-8d01-4ffd-8117-a34d613cdcf5",
        categoryId: "826910d4-187d-4c15-88f4-382b7e056739",
        name: "Posto Petrobras",
        description:
          "Posto de combustivel e gnv",
        latitude: -14.853179566804315, 
        longitude: -40.84797648634391,
        coupons: 10,
        address: "ROD.BR 116 KM 840 S/N SEDE, BA, 45040-970",
        phone: "(77) 2101-7161",
        cover:
          "https://lh3.googleusercontent.com/p/AF1QipNRMk0cM1F4QtrZYhT4niEzamL07Hyn0mYm0gKv=s680-w680-h510-rw",
      },
      // SAÚDE
      {
        id: "def71683-e89f-4c3b-a652-868a02f54ae9",
        categoryId: "12ce52cf-b33b-4b3c-8972-eb72c66c83e4",
        name: "Saúde Center Vitória da Conquista",
        description:
          "+ de 40 ESPECIALIDADES para cuidar da sua saúde!.",
        latitude: -14.892148407142008, 
        longitude: -40.84505040649141,
        coupons: 10,
        address: "Shopping Conquista Sul, Av. Juracy Magalhães, 3340 - Felicia, Vitória da Conquista - BA, 45055-900",
        phone: "(77) 2102-9700",
        cover:
          "https://onmed.com.br/wp-content/uploads/2024/05/post_thumbnail-194fca1ad4116da9f5f8097c2553ec62-846x564.jpeg",
      },
      {
        id: "e4949574-a579-4b07-a005-3fc4b7339752",
        categoryId: "12ce52cf-b33b-4b3c-8972-eb72c66c83e4",
        name: "Laboratório Vida",
        description:
          "Fundado em 1992, o Laboratório Policlínica Vida nasceu do sonho de profissionais que queriam trazer para Vitória da Conquista um serviço laboratorial ",
        latitude: -14.859621309941707, 
        longitude: -40.8426753666844,
        coupons: 10,
        address: "Av. Laura Nunes, R. B Urbis VI, 04, Vitória da Conquista - BA, 45037-270",
        phone: "(77) 3028-8675",
        cover:
          "https://blog.mobimed.com.br/wp-content/uploads/2023/10/como-montar-clinica-medica-dicas-e-passo-a-passo-1024x539-1.jpg",
      },
      {
        id: "ea097b60-d0fb-41aa-ad44-a7ed850c9ecd",
        categoryId: "12ce52cf-b33b-4b3c-8972-eb72c66c83e4",
        name: "Psicólogo Vitória da Conquista - Clínica Therapeia",
        description:
          "Na Clínica de Psicologia e Psicanálise Therapeia você encontra tratamento psicanalítico e avaliação neuropsicológica (testes psicológicos diversos, incluindo o de sanidade mental). ",
        latitude: -14.887190358608239, 
        longitude: -40.84884729204839,
        coupons: 10,
        address: "Morada dos Pássaros II - Rua S, 16 - Felicia, Vitória da Conquista - BA, 45055-365",
        phone: "(77) 98830-1703",
        cover:
          "https://guiaconsultorio.boaconsulta.com/wp-content/uploads/2020/03/original-77c7b7a0a684beab19d5e5560c0bfd91.jpeg",
      },
      {
        id: "ebfecf67-fe4d-4137-90f0-b7083fd58da1",
        categoryId: "12ce52cf-b33b-4b3c-8972-eb72c66c83e4",
        name: "Clínica Viva • Centro de Terapia da Dor",
        description:
          "Clínica especializada em reumatologia, oferecendo serviços abrangentes em psicologia, nutrição, cardiologia e fisioterapia.",
        latitude: -14.85915565372708,
        longitude: -40.842011994343174,
        coupons: 10,
        address: "Av. Jorge Teixeira, 68 - Candeias, Vitória da Conquista - BA, 45028-050",
        phone: "(77) 3017-5055",
        cover:
          "https://clinicawulkan.com.br/wp-content/uploads/2018/11/clinica-dermatologia-botox-preenchimento-Osasco-alphaville-4.png",
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
