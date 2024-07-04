const products =[
  {
    id: 1,
    name:"Foundation",
    price: "512₹",
    image : "img/1.jpg"
  },
  {
    id: 2,
    image : "img/2.jpg",
    name:"Lipstick",
    price: "700₹",
  },
  {
    id: 3,
    image : "img/3.webp",
    name:"Face powder",
    price: "500₹",
  },
  {
    id: 4,
    image : "img/4.jpg",
    name:"Eye-shadow",
    price: "250₹",
  },
      
    ];

    let row = document.getElementById("rowdata");
    let cardStorage = JSON.parse(localStorage.getItem("card")) || [];
    let cardID = document.getElementById("cardID");
    cardID.innerHTML = cardStorage.length;



const displayData = () => {
      
    row.innerHTML = "";

products.forEach((item) => {
  row.innerHTML += `<div class="col-3" style="margin-top: 20px;">
                        <div class="card" style="width: 18rem;" background-color: #f8f9fa>
                            <img src="${item.image}" style="width: 287px; height:250px">
                            <p class="card-text" style="font-size:25px;text-align:center;margin-top:10px">${item.name}</p>
                            <div class="card-body">
                              <h5 class="card-title" style="font-size:25px;text-align:center;margin-top:-10px;margin-bottom:20px;color:#1A0EAB">${item.price}</h5>
                              <button href="#" class="btn btn-primary" style="width: 250px; margin-top:30 px; border: 1px solid black" onclick="return addData(${item.id})">Add to Cart</button>
                            </div>
                        </div>
                    </div>`
}) 
}
displayData();
  //   const addData = (id) => {

    
  //    let editData = products.filter((d) => {  

  //     return d.id === id;

  //    }); 


  //   let updateRec = {...editData[0], qty: 1};



  //   cardStorage = [...cardStorage, updateRec];
  //   console.log("cardStorage", cardStorage);
     

  //   cardID.innerHTML = cardStorage.length;
  //    localStorage.setItem("card", JSON.stringify(cardStorage));

  // }

  const addData = (id) => {
    let product = products.find((p) => p.id === id);
    let existingItem = cardStorage.find((item) => item.id === id);
  
    if (existingItem) {
      existingItem.qty += 1;
    } 
    else {
      let newItem = { ...product, qty: 1 };
      cardStorage.push(newItem);
    }
  
    cardID.innerHTML = cardStorage.length;
    localStorage.setItem("card", JSON.stringify(cardStorage));
    console.log("cardStorage", cardStorage);
  };
  
  displayData();
