export default function UserDetails({name, address, invoiceDate, invoiceNumber, invoiceReference, dueDate})
{
    return (
        <div class="yourDetails">
            <ul>
                <li id="yourName" class="listHeader">{name}</li>
                <li id="yourAddress" class="listText">{address}</li>
                <li class="listHeader">Invoice date:</li>
                <li class="listText">{invoiceDate}</li>
                <li class="listHeader">Invoice number:</li>
                <li class="listText">INV-{invoiceNumber}</li>
                <li class="listHeader">Invoice reference:</li>
                <li class="listText">{invoiceReference}</li>
                <li class="listHeader">Due date:</li>
                <li class="listText">{dueDate}</li>
            </ul>
        </div>
    )
}