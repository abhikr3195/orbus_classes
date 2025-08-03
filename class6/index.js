function ArrayOfObj(){
    const prodData=[
        {
            prodId:1,
            prodName:"Samsung M52",
            ProdDesc:"Some fake Desc......Some fake Desc......Some fake Desc......",
            ProdPrice:24000
        },
        {
            prodId:1,
            prodName:"Iphone 13",
            ProdDesc:"Some fake Desc......Some fake Desc......Some fake Desc......",
            ProdPrice:75000
        },
        {
            prodId:1,
            prodName:"Xiami",
            ProdDesc:"Some fake Desc......Some fake Desc......Some fake Desc......",
            ProdPrice:15000
        },
        {
            prodId:1,
            prodName:"Oneplus2",
            ProdDesc:"Some fake Desc......Some fake Desc......Some fake Desc......",
            ProdPrice:30000
        },
        {
            prodId:1,
            prodName:"Motorola",
            ProdDesc:"Some fake Desc......Some fake Desc......Some fake Desc......",
            ProdPrice:20000
        },
    ]
    let html = '';
    for(let prod of prodData){
        html += "<div class='flex-item'>";
        html += "<h3>"+prod.prodName+"</h3>";
        html += "<br />";
        html += "Price:"+prod.prodPrice;
        html += "</div>";
    }
    document.getElementById("container").innerHTML = html;

}
ArrayOfObj();