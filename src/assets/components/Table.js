export default function Table({ quantity, desc, price, total })
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
                <tr>
                    <td>
                        {quantity}
                    </td>
                    <td>
                        {desc}
                    </td>
                    <td>
                        £{price}
                    </td>
                    <td>
                        £{total}
                    </td>
                </tr>
            </tbody>
        </table>
    )
}