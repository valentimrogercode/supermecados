const produtos = [
    {produto:"Sobrecoxa Sadia 1 Kg",id:"1",preco:"R$12,95", imagem:"/img/produtos/produto1.jpg"},
    {produto:"Hamburguer Tradicional 350g",id:"2",preco:"R$14,79", imagem:"/img/produtos/produto2.jpg"},
    {produto:"Batata MCcain 600g",preco:"R$12,95",id:"3", imagem:"/img/produtos/produto3.jpg"},
    {produto:"Coxa Seara Congelada 1kg",preco:"R$9,99",id:"4", imagem:"/img/produtos/produto4.jpg"},
    {produto:"Linguiça Gourmet Seara",preco:"R$21,95",id:"5", imagem:"/img/produtos/produto5.jpg"},
    {produto:"Lasanha Bolonhesa Seara",preco:"R$16,99",id:"6", imagem:"/img/produtos/produto6.jpg"},
    {produto:"Peito de Frango Sadia 1kg",preco:"R$21,95",id:"7", imagem:"/img/produtos/produto7.jpg"},
    {produto:"Salsicha Hot Dog Seara",preco:"R$9,90",id:"8", imagem:"/img/produtos/produto8.jpg"},
    {produto:"Requeijão Danone 200g",preco:"R$5,99",id:"9", imagem:"/img/produtos/produto9.jpg"},
    {produto:"Pão Pullman",preco:"R$9,29",id:"10", imagem:"/img/produtos/produto10.jpg"},
    {produto:"Margarina Becel 500g",preco:"R$7,99",id:"11", imagem:"/img/produtos/produto11.jpg"},
    {produto:"Iorgute Danone Desnatado 1,25Kg",preco:"R$12,95",id:"12", imagem:"/img/produtos/produto12.jpg"},
    {produto:"Café Pilão Tradicional 500g",preco:"R$17,98",id:"13", imagem:"/img/produtos/produto13.jpg"},
    {produto:"Toddy Twix  350g",preco:"R$5,99",id:"14", imagem:"/img/produtos/produto14.jpg"},
    {produto:"Leite em pó Molico desnatado 280g",preco:"R$14,49",id:"15", imagem:"/img/produtos/produto15.jpg"},
    {produto:"Chá Leão Matte 250g",preco:"R$7,99",id:"16", imagem:"/img/produtos/produto16.jpg"},
    {produto:"Arroz Tio João agulhinha tipo 1 1kg ",preco:"R$4,98",id:"17", imagem:"/img/produtos/produto17.jpg"},
    {produto:"Azeite extra virgem serrat 500ml ",preco:"R$22,99",id:"18", imagem:"/img/produtos/produto18.jpg"},
    {produto:"Macarrão Grano Duro 500g ",preco:"R$8,99",id:"19", imagem:"/img/produtos/produto19.jpg"},
    {produto:"Molho de Tomate Basilio 390 g ",preco:"R$7,69",id:"20", imagem:"/img/produtos/produto20.jpg"},
    {produto:"Leite Condensado  lata 395g ",preco:"R$6,29",id:"21", imagem:"/img/produtos/produto21.jpg"},
    {produto:"Biscoito Maizena 200g",preco:"R$2,69",id:"22", imagem:"/img/produtos/produto22.jpg"},
    {produto:" Queijo Vigor Ralado 100g",preco:"R$8,99",id:"23", imagem:"/img/produtos/produto23.jpg"},
    {produto:"Azeitona Hemmer Verde 150g ",preco:"R$6,99",id:"24", imagem:"/img/produtos/produto24.jpg"},
    {produto:"Bombom Lacta 250,6g",preco:"R$12,42",id:"25", imagem:"/img/produtos/produto25.jpg"},
    {produto:"Chocolate Diamante Negro 90g",preco:"R$4,89",id:"26", imagem:"/img/produtos/produto26.jpg"},
    {produto:"Chocolate 40% Cacau ",preco:"R$7,39",id:"27", imagem:"/img/produtos/produto27.jpg"},
    {produto:"Chocolate  lacta 200g ",preco:"R$9,98",id:"28", imagem:"/img/produtos/produto28.jpg"},
    {produto:"Biscoito Integral Jasmine 75g ",preco:"R$3,89",id:"29", imagem:"/img/produtos/produto29.jpg"},
    {produto:"Geleia de Frutas",preco:"R$14,99",id:"30", imagem:"/img/produtos/produto30.jpg"},
    {produto:"Mãe Terra Amendoim ",preco:"R$7,39",id:"31", imagem:"/img/produtos/produto31.jpg"},
    {produto:"Macarrão Urbano Parafuso 500g ",preco:"R$3,99",id:"32", imagem:"/img/produtos/produto32.jpg"}

     ]


const homeController={
    index:(req,res)=>{
        res.render('home',{home:produtos})
    }
}

module.exports=homeController;