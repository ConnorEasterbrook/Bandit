import { useState } from "react";
import "./invoiceCSS.css";
import ClientDetails from "./ClientDetails";
import ClientDetailsInput from "./ClientDetailsInput";
import Footer from "./Footer";
import FooterInput from "./FooterInput";
import Header from "./Header";
import Notes from "./Notes";
import Table from "./Table";
import TableInput from "./TableInput";
import UserDetails from "./UserDetails";
import UserDetailsInput from "./UserDetailsInput";

function Invoice()
{
  // User details
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceReference, setInvoiceReference] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [logo, setLogo] = useState(null);
  const [logoURL, setLogoURL] = useState([]);

  // Client details
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");

  // Table details
  const [tableData, setTableData] = useState([])

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
              <div className="noPrint">
                <Header />
              </div>

              <div className="invoice">
                <div className="row">
                  {/* Client details */}
                  <div className="column">
                    <ClientDetails
                      logo={logo}
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
                  tableData={tableData}
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
              </div>

              <div className="noPrint">
                <div className="bottomSection">
                  <button className="editInfo" onClick={() => setShowInvoice(false)}>Edit information</button>
                </div>
              </div>

            </div>
          </div>
        ) : (
          <div className="previewDiv">

            <UserDetailsInput
              name={name}
              setName={setName}
              address={address}
              setAddress={setAddress}
              invoiceDate={invoiceDate}
              setInvoiceDate={setInvoiceDate}
              dueDate={dueDate}
              setDueDate={setDueDate}
              invoiceNumber={invoiceNumber}
              setInvoiceNumber={setInvoiceNumber}
              invoiceReference={invoiceReference}
              setInvoiceReference={setInvoiceReference}
              logo={logo}
              setLogo={setLogo}
              logoURL={logoURL}
              setLogoURL={setLogoURL}
            />

            <div className="gap"></div>

            <ClientDetailsInput
              clientName={clientName}
              setClientName={setClientName}
              clientAddress={clientAddress}
              setClientAddress={setClientAddress}
            />

            <div className="gap"></div>

            <TableInput
              tableData={tableData}
              setTableData={setTableData}
            />

            <div className="gap"></div>

            <div className="tableForm">
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
            </div>

            <div className="gap"></div>

            <FooterInput
              accountName={accountName}
              setAccountName={setAccountName}
              accountNumber={accountNumber}
              setAccountNumber={setAccountNumber}
              sortCode={sortCode}
              setSortCode={setSortCode}
              paypalEmail={paypalEmail}
              setPaypalEmail={setPaypalEmail}
            />

            <button className="previewButton" onClick={() => setShowInvoice(true)}>Preview Invoice</button>
          </div>
        )
      }
    </main >
  );
}

export default Invoice;