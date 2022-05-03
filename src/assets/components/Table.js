export default function Table({ quantity, desc, price, total, setTotal })
{
    return (
        <table>
            <thead>
                <tr>
                    <td>
                        Quantity
                    </td>
                    <td>
                        Item Description
                    </td>
                    <td>
                        Price
                    </td>
                    <td>
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