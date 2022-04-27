import { useState } from "react";
import ClientDetails from "./assets/components/ClientDetails";
import Footer from "./assets/components/Footer";
import Header from "./assets/components/Header";
import Notes from "./assets/components/Notes";
import Table from "./assets/components/Table";
import UserDetails from "./assets/components/UserDetails";

function App()
{
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceReference, setInvoiceReference] = useState("");
  const [dueDate, setDueDate] = useState("");
  // const [name, setName] = useState(""); ADD LOGO
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  // const [name, setName] = useState(""); ADD TABLE
  const [notes, setNotes] = useState("");
  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [sortCode, setSortCode] = useState("");
  const [paypalEmail, setPaypalEmail] = useState("");

  const [showInvoice, setShowInvoice] = useState(false);

  return (
    <main>
      {showInvoice ?
        (
          <div class="mainBody">
            <div class="secondaryBody">
              <Header />
              <div class="gap"></div>

              <div class="row">
                {/* Client details */}
                <div class="column">
                  <ClientDetails
                    clientName={clientName}
                    clientAddress={clientAddress}
                  />
                </div>

                {/* Your details */}
                <div class="column">
                  <UserDetails
                    name={name}
                    address={address}
                    invoiceDate={invoiceDate}
                    invoiceNumber={invoiceNumber}
                    invoiceReference={invoiceReference}
                    dueDate={dueDate}
                  />
                </div>
              </div>

              {/* Table, Notes && Footer */}
              <Table />
              <Notes
                notes={notes}
              />
              <Footer
                accountName={accountName}
                accountNumber={accountNumber}
                sortCode={sortCode}
                paypalEmail={paypalEmail}
              />

              <button class="editInfo" onClick={() => setShowInvoice(false)}>Edit information</button>

            </div>
          </div>
        ) : (
          <div class="previewDiv">
            <label htmlFor="yourName">Your name:</label>
            <input
              type="text"
              id="smallText"
              placeholder="Enter your name."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="address">Your address:</label>
            <textarea
              type="text"
              id="bigText"
              cols="1"
              rows="5"
              placeholder="Enter your address."
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <label htmlFor="invoiceDate">Invoice send date:</label>
            <input
              type="date"
              id="dateText"
              placeholder="Enter the invoice send date."
              value={invoiceDate}
              onChange={(e) => setInvoiceDate(e.target.value)}
            />

            <label htmlFor="invoiceNumber">Invoice number:</label>
            <input
              type="text"
              id="smallText"
              placeholder="Enter your invoice number."
              value={invoiceNumber}
              onChange={(e) => setInvoiceNumber(e.target.value)}
            />

            <label htmlFor="invoiceReference">Invoice reference:</label>
            <input
              type="text"
              id="smallText"
              placeholder="Enter your invoice reference."
              value={invoiceReference}
              onChange={(e) => setInvoiceReference(e.target.value)}
            />

            <label htmlFor="dueDate">Invoice due date:</label>
            <input
              type="date"
              id="dateText"
              placeholder="Enter your invoice due date."
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />

            <div class="gap"></div>

            <label htmlFor="clientName">Client name:</label>
            <input
              type="text"
              id="smallText"
              placeholder="Enter your client's name."
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
            />

            <label htmlFor="clientAddress">Client address:</label>
            <textarea
              type="text"
              id="bigText"
              cols="1"
              rows="5"
              placeholder="Enter your client's address."
              value={clientAddress}
              onChange={(e) => setClientAddress(e.target.value)}>
            </textarea>

            <div class="gap"></div>

            <label htmlFor="notes">Notes:</label>
            <textarea
              name="notes"
              id="bigText"
              cols="1"
              rows="5"
              placeholder="Enter any additional notes."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}>
            </textarea>

            <div class="gap"></div>

            <label htmlFor="accountName">Bank account name:</label>
            <input
              type="text"
              id="smallText"
              placeholder="Enter your full name."
              value={accountName}
              onChange={(e) => setAccountName(e.target.value)}
            />

            <label htmlFor="accountNumber">Bank account number:</label>
            <input
              type="text"
              id="smallText"
              placeholder="Enter your account number."
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
            />

            <label htmlFor="sortCode">Bank sort code:</label>
            <input
              type="text"
              id="smallText"
              placeholder="Enter your sort code."
              value={sortCode}
              onChange={(e) => setSortCode(e.target.value)}
            />

            <label htmlFor="paypalEmail">Paypal email:</label>
            <input
              type="text"
              id="smallText"
              placeholder="Enter your Paypal email"
              value={paypalEmail}
              onChange={(e) => setPaypalEmail(e.target.value)}
            />

            <button class="previewButton" onClick={() => setShowInvoice(true)}>Preview Invoice</button>
          </div>
        )
      }
    </main >
  );
}

export default App;
