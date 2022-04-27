export default function ClientDetails({clientName, clientAddress})
{
    return (
        <div class="clientDetails">
            <ul>
                <li id="listImage">
                    <img src="assets/images/logo.png" alt="Company Logo">
                    </img>
                </li>
                <li id="yourName" class="listHeader">{clientName}</li>
                <li id="yourAddress" class="listText">{clientAddress}</li>
            </ul>
        </div>
    )
}