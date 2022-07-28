export default function Footer({accountName, accountNumber, sortCode, paypalEmail, extraInfo})
{
    return (
        <footer>
            <ul className="bankTransferFooter">
                <li><span>Payment by bank transfer:&nbsp;</span></li><br></br>
                <li><span>Account Name:&nbsp;</span></li>
                <li>{accountName}.&nbsp;</li>
                <li><span>Account number:&nbsp;</span></li>
                <li>{accountNumber}.&nbsp;</li>
                <li><span>Sort code:&nbsp;</span></li>
                <li>{sortCode}.&nbsp;</li>
                <li><span>Payment by Paypal:&nbsp;</span></li>
                <li>{paypalEmail}.</li>
                {/* <li>Your mobile number. </li>
          <li>Bank. </li>
          <li>Account holder. </li>
          <li>Website.</li> */}
            </ul>
            <ul className="interestRateFooter">
                <li>{extraInfo}This invoice was
                    created using Goatbandit's Bandit web application.</li>
            </ul>
        </footer>
    )
}