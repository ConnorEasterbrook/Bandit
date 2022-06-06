import { useEffect, useState } from "react"

export default function Table({ total, tableData })
{
    let [totall, setTotall] = useState(0)
    // var sum = useState(0);
    let totalCalculate = 0;
    var totalCalculated = useState(false);

    useEffect(() => 
    {
        let sum = tableData.reduce(function (prev, current)
        {
            return prev + +current.total
        }, 0);
        setTotall(sum)
    });

    return (
        <table>
            <thead>
                <tr>
                    <td className="smallTableCol">
                        Quantity
                    </td>
                    <td className="largeTableCol">
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
                {tableData.map((invoiceTable) =>
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
                <tr className="tableTotal">
                    <td className="tableTotal" />
                    <td className="tableTotal" />
                    <td className="tableTotal">
                        Invoice Total:
                    </td>
                    <td className="tableTotal">
                        £{totall}
                    </td>
                </tr>
            </tbody>
        </table>
    )
}