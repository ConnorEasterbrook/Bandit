import { useState } from "react"
import { nanoid } from 'nanoid';

export default function TableInput({ tableData, setTableData })
{
    const handleAddFormChange = (event) =>
    {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newTableData = { ...addTableData };
        newTableData[fieldName] = fieldValue;

        setAddTableData(newTableData);
    }

    const [addTableData, setAddTableData] = useState(
        {
            quantityRow: "",
            descRow: "",
            priceRow: ""
        }
    )

    const handleAddFormSubmit = (event) => 
    {
        event.preventDefault();

        const newRow =
        {
            id: nanoid(),
            quantity: addTableData.quantityRow,
            desc: addTableData.descRow,
            price: addTableData.priceRow
        }

        const newRows = [...tableData, newRow];
        setTableData(newRows);
    }

    return (
        <div className="tableForm">
            <div className="inputFieldTableSmall">
                <label htmlFor="quantity">
                    Item quantity
                </label>
                <input
                    type="text"
                    name="quantityRow"
                    id="smallTextTable"
                    placeholder="Quantity."
                    // value={quantity}
                    // onChange={(e) => setQuantity(e.target.value)}
                    onChange={handleAddFormChange}
                />
            </div>

            <div className="inputFieldTableBig">
                <label htmlFor="desc">
                    Item description
                </label>
                <input
                    type="text"
                    name="descRow"
                    id="bigTextTable"
                    placeholder="Enter the item's description."
                    // value={desc}
                    // onChange={(e) => setDesc(e.target.value)}
                    onChange={handleAddFormChange}
                />
            </div>

            <div className="inputFieldTableSmall">
                <label htmlFor="price">
                    Item price
                </label>
                <input
                    type="text"
                    name="priceRow"
                    id="smallTextTable"
                    placeholder="Price."
                    // value={price}
                    // onChange={(e) => setPrice(e.target.value)}
                    onChange={handleAddFormChange}
                />
            </div>

            <button className="addTableItem" onClick={handleAddFormSubmit}>+</button>

            <div className="showTable">
                <table>
                    <tbody>
                        {tableData.map((invoiceTable) =>
                        (
                            <tr>
                                <td className="smallTableCol">
                                    {invoiceTable.quantity}
                                </td>
                                <td>
                                    {invoiceTable.desc}
                                </td>
                                <td className="smallTableCol">
                                    £{invoiceTable.price}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}