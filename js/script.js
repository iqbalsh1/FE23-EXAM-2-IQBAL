let products = [
  {
    itemName: "Bananas",
    image: "banana.jpg",
    description: " Get 2 Kg of bananas. ",
    importance: 0,
  },
  {
    itemName: "Milk",
    image: "milk.jpg",
    description: "Get 3 liters of milk.",
    importance: 0,
  },
  {
    itemName: "Eggs",
    image: "eggs.jpg",
    description: "Get a dozen eggs.",
    importance: 0,
  },
  {
    itemName: "Bread",
    image: "bread.jpg",
    description: "Need bread for sandwiches.",
    importance: 0,
  },
  {
    itemName: "Tomatoes",
    image: "tomatoes.jpg",
    description: "Get tomatoes for the salad.",
    importance: 0,
  },
  {
    itemName: "Apple",
    image: "apple.jpg",
    description: " Get 1 Kg of apples. ",
    importance: 0,
  },
  {
    itemName: "Chicken",
    image: "chicken.jpg",
    description: "Buy 1 kg of chicken.",
    importance: 0,
  },

  {
    itemName: "Pineapples",
    image: "pineapple.jpg",
    description: "Buy 1 kg of fresh pineapples.",
    importance: 0,
  },
  {
    itemName: "Potatoes",
    image: "potatoes.jpg",
    description: "Buy 2 kg of potatoes.",
    importance: 0,
  },
  {
    itemName: "Cheese",
    image: "cheese.jpg",
    description: "Buy 200g of cheddar cheese.",
    importance: 0,
  },
  {
    itemName: "Butter",
    image: "butter.jpg",
    description: "Buy 250g of unsalted butter.",
    importance: 0,
  },
  {
    itemName: "Carrots",
    image: "carrots.jpg",
    description: "Buy 1 kg of carrots.",
    importance: 0,
  },
];

function displayItem(products) {
  document.getElementById("item-container").innerHTML = "";

  for (let item of products) {
    document.getElementById("item-container").innerHTML += `
            <div>
                <div class="card my-3">
                <img src="./images/${item.image}" 
                class="card-img-top" alt="${item.image}" style='height:300px'>
                    <div class="card-body">
                        <h5 class="card-title">Item: ${item.itemName}</h5>
                        <p class="card-text">Description: ${item.description}</p>
                        <p class="card-text">Priority Level: <span class="impLevel badge bg-success" >${item.importance}</span></p>
                        <button class="btn btn-primary prioritybtn">Increase Priority</a>
                    </div>
                </div>
            </div>
    `;
  }
  priorityButton();
}

function updatePriority(index) {
  if (products[index].importance < 5) {
    products[index].importance++;
    document.querySelectorAll(".impLevel")[index].innerText =
      products[index].importance;
    // console.log(products[index].itemName);

    let impBadge = document.querySelectorAll(".impLevel")[index];
    impBadge.innerText = products[index].importance;

    if (products[index].importance >= 0 && products[index].importance <= 1) {
      impBadge.className = "badge bg-success impLevel";
    } else if (
      products[index].importance >= 2 &&
      products[index].importance <= 3
    ) {
      impBadge.className = "badge bg-warning impLevel";
    } else if (
      products[index].importance >= 4 &&
      products[index].importance <= 5
    ) {
      impBadge.className = "badge bg-danger impLevel";
    }
  }
}

function priorityButton() {
  let prioritybtn = document.querySelectorAll(".prioritybtn");
  prioritybtn.forEach((btn, index) => {
    btn.addEventListener("click", function () {
      updatePriority(index);
    });
  });
}

priorityButton();

document.getElementById("sortBtn").addEventListener("click", function () {
  products.sort((a, b) => a.importance - b.importance);
  displayItem(products);
  updatePriority(impBadge.className);
});

displayItem(products);
