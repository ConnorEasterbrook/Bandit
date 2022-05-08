import { useState } from "react"
import { nanoid } from 'nanoid';

export default function TableInput({ tableData, setTableData })
{
    const [editTableId] = useState(null);

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
            price: addTableData.priceRow,
            total: addTableData.quantityRow * addTableData.priceRow
        }

        const newRows = [...tableData, newRow];
        setTableData(newRows);
    }

    const handleDeleteClick = (invoiceTable) => 
    {
        const newTableData = [...tableData];
    
        const index = tableData.findIndex((invoiceTable) => invoiceTable.id === editTableId);
    
        newTableData.splice(index, 1);
    
        setTableData(newTableData);
      };

    return (
        <div className="tableForm">
            <div className="inputFieldTableSmall">
                <label htmlFor="quantity">
                    Item quantity
                </label>
                <input
                    type="number"
                    name="quantityRow"
                    id="smallTextTable"
                    placeholder="Quantity."
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
                    onChange={handleAddFormChange}
                />
            </div>

            <div className="inputFieldTableSmall">
                <label htmlFor="price">
                    Item price
                </label>
                <input
                    type="number"
                    name="priceRow"
                    id="smallTextTable"
                    placeholder="Price."
                    onChange={handleAddFormChange}
                />
            </div>

            <button className="addTableItem" onClick={handleAddFormSubmit}>+</button>
            <button className="addTableItem" onClick={handleDeleteClick}>-</button>

            <div className="showTable">
                <table>
                    <tbody>
                        {tableData.map((invoiceTable) =>
                        (
                            <tr key={invoiceTable.id}>
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