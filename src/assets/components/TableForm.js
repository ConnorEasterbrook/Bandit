export default function TableForm({ quantity, setQuantity, desc, setDesc, price, setPrice, total })
{
    return (
        <div class="tableForm">
            <div class="inputFieldTableSmall">
                <label htmlFor="quantity">
                    Item quantity
                </label>
                <input
                    type="text"
                    id="smallTextTable"
                    placeholder="Quantity."
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />
            </div>
            
            <div class="inputFieldTableBig">
                <label htmlFor="desc">
                    Item description
                </label>
                <input
                    type="text"
                    id="bigTextTable"
                    placeholder="Enter the item's description."
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                />
            </div>
            
            <div class="inputFieldTableSmall">
                <label htmlFor="price">
                    Item price
                </label>
                <input
                    type="text"
                    id="smallTextTable"
                    placeholder="Price."
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>
        </div>
    )
}