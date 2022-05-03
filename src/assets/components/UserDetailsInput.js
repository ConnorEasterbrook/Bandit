export default function UserDetailsInput({ name, setName, address, setAddress, invoiceDate, setInvoiceDate, invoiceNumber, setInvoiceNumber, invoiceReference, setInvoiceReference, dueDate, setDueDate })
{
    return (
        <div className="tableForm">
            <div className="inputField">
              <label className="singleRow" htmlFor="yourName">Your name:</label>
              <input
                type="text"
                id="smallText"
                placeholder="Enter your name."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="inputFieldSingle">
              <label htmlFor="address">Your address:</label>
              <textarea
                type="text"
                id="bigText"
                placeholder="Enter your address."
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div className="inputField">
              <label htmlFor="invoiceDate">Invoice send date:</label>
              <input
                type="date"
                id="dateText"
                placeholder="Enter the invoice send date."
                value={invoiceDate}
                onChange={(e) => setInvoiceDate(e.target.value)}
              />
            </div>

            <div className="inputField">
              <label htmlFor="dueDate">Invoice due date:</label>
              <input
                type="date"
                id="dateText"
                placeholder="Enter your invoice due date."
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
            </div>

            <div className="inputField">
              <label htmlFor="invoiceNumber">Invoice number:</label>
              <input
                type="text"
                id="smallText"
                placeholder="Enter your invoice number."
                value={invoiceNumber}
                onChange={(e) => setInvoiceNumber(e.target.value)}
              />
            </div>

            <div className="inputField">
              <label htmlFor="invoiceReference">Invoice reference:</label>
              <input
                type="text"
                id="smallText"
                placeholder="Enter your invoice reference."
                value={invoiceReference}
                onChange={(e) => setInvoiceReference(e.target.value)}
              />
            </div>
        </div>
    )
}