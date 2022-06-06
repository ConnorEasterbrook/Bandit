export default function ClientDetails({ logo, clientName, clientAddress })
{
    var path = process.env.PUBLIC_URL;
    var blank = "/assets/images/Blank.jpg"

    return (
        <div className="clientDetails">
            <ul>
                <li>
                    {logo !== null ?
                        (
                            <img src={URL.createObjectURL(logo)} alt="Company Logo" className="compImage" />
                        )
                        :
                        (
                            <img src={path + blank} alt="Company Logo" className="compImageHidden" />
                        )
                    }
                </li>
                <li id="yourName" className="listHeader">{clientName}</li>
                <li id="yourAddress" className="listText">{clientAddress}</li>
            </ul>
        </div>
    )
}