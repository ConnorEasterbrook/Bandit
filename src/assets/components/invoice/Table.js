export default function Table({ total, tableData })
{
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
                    <tr key={invoiceTable.id}>
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
                            £{invoiceTable.total}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}