export default function Footer({accountName, accountNumber, sortCode, paypalEmail})
{
    return (
        <footer>
            <ul class="bankTransferFooter">
                <li><span>Payment by bank transfer: </span></li><br></br>
                <li><span>Account Name: </span></li>
                <li>{accountName}</li>
                <li><span>Account number: </span></li>
                <li>{accountNumber}</li>
                <li><span>Sort code: </span></li>
                <li>{sortCode}</li>
                <li><span>Payment by Paypal: </span></li>
                <li>{paypalEmail}</li>
                {/* <li>Your mobile number. </li>
          <li>Bank. </li>
          <li>Account holder. </li>
          <li>Website.</li> */}
            </ul>
            <ul class="interestRateFooter">
                <li>Settlement of this invoice is required within 15 days from the invoice date. We reserve the
                    right to charge interest on invoices that remain unpaid 30 days after the invoice date. Our
                    standard interest rate is 10.75% (10% plus the Bank of England base rate). The Late
                    Payment of Commercial Debts (Interest) Act 1998 applies to this invoice. Any queries
                    regarding this invoice should be raised within 7 days of the invoice date.</li>
            </ul>
        </footer>
    )
}