let bagItems;
onLoad();


function onLoad() {
  let bagItemStr = localStorage.getItem('bagItems');
  bagItems = bagItemStr ? JSON.parse(bagItemStr):[];
    dispalyItemOnPage();
  displayBagIcon();
}
function addToBag(id) {
  bagItems.push(id);
  localStorage.setItem('bagItems',JSON.stringify(bagItems));
  displayBagIcon();

}
function displayBagIcon() {
  let bagIconCountElement = document.querySelector('.bag_item_count');
  if (bagItems.length > 0) {
    bagIconCountElement.style.visibility = 'visible';
    bagIconCountElement.innerText = bagItems.length;
  } else {
    bagIconCountElement.style.visibility = 'hidden';
  }

}

function dispalyItemOnPage() {
  let itemsContainer = document.querySelector('.items_container');
  if(!itemsContainer)
    {
      return;
    }
  let innerHTML = '';
  items.forEach(item => {
    innerHTML += `
    <div class="item_container">
    <img src="${item.imgscr}" class="item_img">
    <div class="rating">
      ${item.rating.stars} ⭐ | ${item.rating.noOfReviwes}
    </div>
    <div class="company_name">${item.companyName}</div>
    <div class="item_name">${item.itemName}</div>
    <div class="price">
        <span class="current_price">Rs.${item.currentPrice}</span>
        <span class="original_price">Rs.${item.originalPrice}</span>
        <span class="discount">(${item.discountPercentage}% OFF)</span>
    </div>
    <button class="btn-add-bag" onClick="addToBag(${item.id})">Add to Bag</button>
    </div>`
  });
  itemsContainer.innerHTML = innerHTML;
}

