import logo from "./logo.svg";
import "./App.css";

import TagManager from "react-gtm-module";
import { useEffect } from "react";

function App() {
    useEffect(() => {
        TagManager.initialize({
            gtmId: "GTM-WJ4JK6DX",
            dataLayer: {
                event: "user_id",
                value: "user1234",
            },
        });
    }, []);
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
