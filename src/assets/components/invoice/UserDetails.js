export default function UserDetails({name, address, invoiceDate, invoiceNumber, invoiceReference, dueDate})
{
    return (
        <div className="yourDetails">
            <ul>
                <li id="yourName" className="listHeader">{name}</li>
                <li id="yourAddress" className="listText">{address}</li>
                <li className="listHeader">Invoice date:</li>
                <li className="listText">{invoiceDate}</li>
                <li className="listHeader">Invoice number:</li>
                <li className="listText">INV-{invoiceNumber}</li>
                <li className="listHeader">Invoice reference:</li>
                <li className="listText">{invoiceReference}</li>
                <li className="listHeader">Due date:</li>
                <li className="listText">{dueDate}</li>
            </ul>
        </div>
    )
}