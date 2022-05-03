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
            <div className="row">
                {/* Client details */}
                <div className="column">
                    <div className="title">
                        <h1>
                            Timedit
                        </h1>
                    </div>
                </div>

                <div className="column">
                    <div>
                        <ul>
                            <li>
                                <button className="print" onClick={printDocument}>
                                    Print
                                </button>
                            </li>
                            <li>
                                <button className="download" onClick={downloadDocument}>
                                    Download
                                </button>
                            </li>
                            <li>
                                <button className="send" onClick={sendDocument}>
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