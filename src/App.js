import { useState } from "react";
import ClientDetails from "./assets/components/ClientDetails";
import Footer from "./assets/components/Footer";
import Header from "./assets/components/Header";
import Notes from "./assets/components/Notes";
import Table from "./assets/components/Table";
import TableForm from "./assets/components/TableForm";
import UserDetails from "./assets/components/UserDetails";

function App()
{
  // User details
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceReference, setInvoiceReference] = useState("");
  const [dueDate, setDueDate] = useState("");

  // Client details
  // const [name, setName] = useState(""); ADD LOGO
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");

  // Table details
  const [quantity, setQuantity] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [total, setTotal] = useState("");

  // Notes
  const [notes, setNotes] = useState("");

  // Footer details
  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [sortCode, setSortCode] = useState("");
  const [paypalEmail, setPaypalEmail] = useState("");

  const [showInvoice, setShowInvoice] = useState(false);

  return (
    <main>
      {showInvoice ?
        (
          <div className="mainBody">
            <div className="secondaryBody">
              <Header />

              <div className="row">
                {/* Client details */}
                <div className="column">
                  <ClientDetails
                    clientName={clientName}
                    clientAddress={clientAddress}
                  />
                </div>

                {/* Your details */}
                <div className="column">
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
              <Table
                quantity={quantity}
                desc={desc}
                price={price}
                total={total}
              />


              <Notes
                notes={notes}
              />
              <Footer
                accountName={accountName}
                accountNumber={accountNumber}
                sortCode={sortCode}
                paypalEmail={paypalEmail}
              />

              <div className="bottomSection">
                <button className="editInfo" onClick={() => setShowInvoice(false)}>Edit information</button>
              </div>

            </div>
          </div>
        ) : (
          <div className="previewDiv">
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

            <div className="gap"></div>

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

            <div className="gap"></div>

            <TableForm
              quantity={quantity}
              setQuantity={setQuantity}
              desc={desc}
              setDesc={setDesc}
              price={price}
              setPrice={setPrice}
              total={total}
              setTotal={setTotal}
            />

            <div className="gap"></div>

            <div className="inputFieldSingle">
              <label htmlFor="notes">Notes:</label>
              <textarea
                name="notes"
                id="bigText"
                placeholder="Enter any additional notes."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}>
              </textarea>
            </div>

            <div className="gap"></div>

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

            <button className="previewButton" onClick={() => setShowInvoice(true)}>Preview Invoice</button>
          </div>
        )
      }
    </main >
  );
}

export default App;
