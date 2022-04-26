import { useState } from "react";
import ClientDetails from "./assets/components/ClientDetails";
import Footer from "./assets/components/Footer";
import Header from "./assets/components/Header";
import Notes from "./assets/components/Notes";
import Table from "./assets/components/Table";
import UserDetails from "./assets/components/UserDetails";

function App()
{
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
                  <ClientDetails />
                </div>

                {/* Your details */}
                <div class="column">
                  <UserDetails />
                </div>
                <article class="yourDetails">
                </article>
              </div>

              {/* Table, Notes && Footer */}
              <Table />
              <Notes />
              <Footer />
            </div>
          </div>
        ) : (
          <div class="previewDiv">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Enter your name."
              autoComplete="off"
            />

            <button class="previewButton">Preview Invoice</button>
          </div>
        )
      }
    </main >
  );
}

export default App;
