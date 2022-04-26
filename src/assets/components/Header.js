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
            <div class="title">
                <h1>
                    Timedit
                </h1>
            </div>

            <div>
                <ul>
                    <li>
                        <button onClick={printDocument}>
                            Print
                        </button>
                    </li>
                    <li>
                        <button onClick={downloadDocument}>
                            Download
                        </button>
                    </li>
                    <li>
                        <button onClick={sendDocument}>
                            Send
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    )
}