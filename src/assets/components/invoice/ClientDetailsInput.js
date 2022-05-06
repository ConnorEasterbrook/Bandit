export default function ClientDetailsInput({ clientName, setClientName, clientAddress, setClientAddress })
{
    return (
        <div className="tableForm">
            <div className="inputField">
              <label htmlFor="clientName">Client name:</label>
              <input
                type="text"
                id="smallText"
                placeholder="Enter your client's name."
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
              />
            </div>

            <div className="inputFieldSingle">
              <label htmlFor="clientAddress">Client address:</label>
              <textarea
                type="text"
                id="bigText"
                placeholder="Enter your client's address."
                value={clientAddress}
                onChange={(e) => setClientAddress(e.target.value)}>
              </textarea>
            </div>
        </div>
    )
}