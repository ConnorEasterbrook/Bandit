import { useEffect, useState } from "react"

export default function Table({ quantity, desc, price, total, setTotal, tableData })
{
    useEffect(() => {
        const calculateTotal = (total) => { setTotal (quantity * price) }
        calculateTotal (total);
    }, []) 

    return (
        <table>
            <thead>
                <tr>
                    <td className="smallTableCol">
                        Quantity
                    </td>
                    <td>
                        Item Description
                    </td>
                    <td className="smallTableCol">
                        Price
                    </td>
                    <td className="smallTableCol">
                        Total
                    </td>
                </tr>
            </thead>

            <tbody>
                {tableData.map ((invoiceTable) => 
                (
                    <tr>
                        <td>
                            {invoiceTable.quantity}
                        </td>
                        <td>
                            {invoiceTable.desc}
                        </td>
                        <td>
                            £{invoiceTable.price}
                        </td>
                        <td>
                            £{total}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}