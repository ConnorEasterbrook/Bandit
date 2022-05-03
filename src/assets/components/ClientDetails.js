export default function ClientDetails({clientName, clientAddress})
{
    return (
        <div className="clientDetails">
            <ul>
                <li id="listImage">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} alt="Company Logo" className="compImage">
                    </img>
                </li>
                <li id="yourName" className="listHeader">{clientName}</li>
                <li id="yourAddress" className="listText">{clientAddress}</li>
            </ul>
        </div>
    )
}