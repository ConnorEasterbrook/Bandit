export default function ClientDetails({ logo, clientName, clientAddress })
{
    return (
        <div className="clientDetails">
            <ul>
                <li id="listImage">
                    <img src={URL.createObjectURL(logo)} alt="Company Logo" className="compImage">
                    </img>
                </li>
                <li id="yourName" className="listHeader">{clientName}</li>
                <li id="yourAddress" className="listText">{clientAddress}</li>
            </ul>
        </div>
    )
}