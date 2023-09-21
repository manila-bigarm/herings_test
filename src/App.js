import logo from "./cropped.gif";
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
                <img src={logo} alt="logo" />

                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <div
                    onClick={() =>
                        TagManager.dataLayer({
                            gtmId: "GTM-WJ4JK6DX",
                            dataLayer: {
                                event: "test_event",
                                value: "im a test",
                            },
                        })
                    }
                >
                    Click Me to send event
                </div>
            </header>
        </div>
    );
}

export default App;
