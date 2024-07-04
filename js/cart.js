let tbody = document.getElementById("viewdata");
let cardStorage = JSON.parse(localStorage.getItem("card")) || [];   
let cardID = document.getElementById("cardID");
cardID.innerHTML = cardStorage.length;

console.log(cardStorage);

const minus = (id) => {

    let existingItem = cardStorage.find((item) => item.id === id);

    if (existingItem.qty > 1) {

        let updateData = existingItem.qty - 1;
        existingItem.qty = updateData;
            console.log(existingItem);
            localStorage.setItem("card", JSON.stringify(cardStorage));

    }
    else{
        console.log("min 1 item req");
    }

    getData();
}

const plus = (id) => {

    let existingItem = cardStorage.find((item) => item.id === id);

    let updateData = existingItem.qty + 1;
    existingItem.qty = updateData;
    console.log(existingItem);

    localStorage.setItem("card", JSON.stringify(cardStorage));    

    getData();

}

const deleteData = (id) => {

    cardStorage = cardStorage.filter((item) => item.id !== id);
    localStorage.setItem("card", JSON.stringify(cardStorage));
    getData();

}
const getData = () => {
    tbody.innerHTML = "";
    let totalPrice = 0;

    if (cardStorage.length == 0) {
        tbody.innerHTML = "No data";
    } else {      
        cardStorage.forEach((ele) => {
            let price = parseFloat(ele.price) * ele.qty;
            totalPrice += price;

            tbody.innerHTML += `<tr>
                <td>${ele.id}</td>
                <td><img src="${ele.image}" style="width: 100px; height: 100px;"></td>
                <td style="font-size:20px; vertical-align:middle">${ele.name}</td>
                <td style="vertical-align:middle">${ele.price}</td>    
                <td style="vertical-align:middle">
                <button style="width: 30px; height: 30px; margin-right: 10px;" onclick="return minus(${ele.id})">-</button>
                    ${ele.qty}
                <button style="width: 30px; height: 30px; margin-left: 13px;" onclick="return plus(${ele.id})">+</button></td>
                <td style="vertical-align:middle">
                    <button class="btn" style="background-color: gray; color: white" onclick="return deleteData(${ele.id})">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </td>
            </tr>`;
        });

        tbody.innerHTML += `<tr >
            <td colspan="3" style="text-align: right; font-weight: bold ;font-size: 20px">Total Price:</td>
            <td style="vertical-align:middle ; font-weight: bold ; font-size: 20px">${totalPrice}₹</td>
            <td></td>
            <td></td>
        </tr>`;
    }    
}

getData();