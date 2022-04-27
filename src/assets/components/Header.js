export default function Header()
{
    const printDocument = () => 
    {
        window.print();
    }

    const downloadDocument = () =>
    {

    }

    const sendDocument = () =>
    {

    }

    return (
        <header>
            <div class="row">
                {/* Client details */}
                <div class="column">
                    <div class="title">
                        <h1>
                            Timedit
                        </h1>
                    </div>
                </div>

                <div class="column">
                    <div>
                        <ul>
                            <li>
                                <button class="print" onClick={printDocument}>
                                    Print
                                </button>
                            </li>
                            <li>
                                <button class="download" onClick={downloadDocument}>
                                    Download
                                </button>
                            </li>
                            <li>
                                <button class="send" onClick={sendDocument}>
                                    Send
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}