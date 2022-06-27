export default function Footer({accountName, accountNumber, sortCode, paypalEmail, extraInfo})
{
    return (
        <footer>
            <ul className="bankTransferFooter">
                <li><span>Payment by bank transfer: </span></li><br></br>
                <li><span>Account Name: </span></li>
                <li>{accountName}</li>
                <li><span>. Account number: </span></li>
                <li>{accountNumber}</li>
                <li><span>. Sort code: </span></li>
                <li>{sortCode}</li>
                <li><span>. Payment by Paypal: </span></li>
                <li>{paypalEmail}.</li>
                {/* <li>Your mobile number. </li>
          <li>Bank. </li>
          <li>Account holder. </li>
          <li>Website.</li> */}
            </ul>
            <ul className="interestRateFooter">
                <li>{extraInfo}This invoice was
                    created using Goatbandit's Timedit web application.</li>
            </ul>
        </footer>
    )
}