export default function FooterInput({ accountName, setAccountName, accountNumber, setAccountNumber, sortCode, setSortCode, paypalEmail, setPaypalEmail })
{
    return (
        <div className="tableForm">
            <div className="inputField">
              <label htmlFor="accountName">Bank account name:</label>
              <input
                type="text"
                id="smallText"
                placeholder="Enter your full name."
                value={accountName}
                onChange={(e) => setAccountName(e.target.value)}
              />
            </div>

            <div className="inputField">
              <label htmlFor="accountNumber">Bank account number:</label>
              <input
                type="text"
                id="smallText"
                placeholder="Enter your account number."
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
              />
            </div>

            <div className="inputField">
              <label htmlFor="sortCode">Bank sort code:</label>
              <input
                type="text"
                id="smallText"
                placeholder="Enter your sort code."
                value={sortCode}
                onChange={(e) => setSortCode(e.target.value)}
              />
            </div>

            <div className="inputField">
              <label htmlFor="paypalEmail">Paypal email:</label>
              <input
                type="text"
                id="smallText"
                placeholder="Enter your Paypal email"
                value={paypalEmail}
                onChange={(e) => setPaypalEmail(e.target.value)}
              />
            </div>
        </div>
    )
}