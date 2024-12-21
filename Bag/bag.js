let bagItemObjects;
onLoad();
function onLoad()
{
    loadBagItemObjects();
    displayItemOnBag();    
    displayPriceDetailsOnBag();
}

function loadBagItemObjects()
{
    console.log(bagItems);

    bagItemObjects = bagItems.map(itemId => {
        for(let i = 0; i< items.length;i++)
            {
                if(itemId == items[i].id)
                    {
                        return items[i];
                    }
            }
    });
    console.log(bagItemObjects);
}

function displayItemOnBag()
{
    let itemDisplayElement = document.querySelector('.bag_items_container');
    let innerHTML='';
    bagItemObjects.forEach(item => {
        innerHTML += generateItemHTML(item);
    });
    itemDisplayElement.innerHTML=innerHTML;
}

function removeFromBag(itemId)
{
    bagItems = bagItems.filter(bagItemID => itemId != bagItemID);
    localStorage.setItem('bagItems',JSON.stringify(bagItems));
    loadBagItemObjects();
    displayItemOnBag();
    displayBagIcon();
}

function generateItemHTML(item)
{
    return `
    <div class="bag_item_container">
    <div class="item_left_part">
        <img src="../Brand Item/${item.imgscr}" alt="item Image" class="item_image">
    </div>
    <div class="item_right_part">
        <div class="company_name">${item.companyName}</div>
        <div class="item_name">${item.itemName}</div>
        <div class="price">
            <span class="current_price">Rs.${item.currentPrice}</span>
            <span class="original_price">Rs.${item.originalPrice}</span>
            <span class="discount">(${item.discountPercentage}% OFF)</span>
        </div>
        <div class="item_return_policy">
            <span class="return_day">${item.returnPeriod} days </span>
            <span class="return_availability">return available</span>
        </div>
        <div class="delivery">
            <span>Delivery by </span>
            <span class="delivery_date">${item.deliveryDate}</span>
        </div>
    </div>
    <button class="remove_from_cart" onClick="removeFromBag(${item.id})">X</button>
</div>`;
}

function displayPriceDetailsOnBag()
{
    let bagPriceElement = document.querySelector('.bag_Price');
    bagPriceElement.innerHTML=`
    <div class="bag_summary">
    <div class="price_Detail">
        <span>PRICE DETAILS </span>
        <span>(2 Items)</span>
    </div>
    <div class="total_Mrp">
        <span class="name_mrp">Total MRP</span>
        <span class="amount_mrp">₹2,798</span>
    </div>
    <div class="discount_Mrp">
        <span class="name_discount">Discount on MRP</span>
        <span class="amount_discount">-₹1,400</span>
    </div>

    <div class="shipping">
        <span class="name_shipping">Shipping Fee</span>
        <span class="Shipping_detail">FREE</span>
    </div>
    <hr class="bag_line">
    <div class="Total">
        <span class="Total_text">Total Amount</span>
        <span class="Total_amount">₹1,400</span>
    </div>
    <button class="order_btn">PLACE ORDER</button>
</div>`;
}