import logo from "./cropped.gif";
import "./App.css";

import TagManager from "react-gtm-module";
import { useEffect } from "react";

function App() {
    useEffect(() => {
        if (window.flutter_inappwebview) {
            window.flutter_inappwebview
                .callHandler("get_client_id")
                .then((args) => {
                    TagManager.initialize({
                        gtmId: "GTM-WJ4JK6DX",
                        dataLayer: {
                            client_id: args,
                        },
                    });
                });
        } else {
            TagManager.initialize({
                gtmId: "GTM-WJ4JK6DX",
                dataLayer: {
                    client_id: "noCid",
                },
            });
        }
        TagManager.dataLayer({
            gtmId: "GTM-WJ4JK6DX",
            dataLayer: {
                event: "user_id",
                value: "user_5678",
            },
        });

        if (window.flutter_inappwebview) {
            window.flutter_inappwebview.callHandler("user_id", "user1234");
        }
    }, []);
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} alt="logo" />

                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <div
                    onClick={() => {
                        TagManager.dataLayer({
                            gtmId: "GTM-WJ4JK6DX",
                            dataLayer: {
                                event: "test_event",
                                value: "im a test",
                            },
                        });
                        console.log("im sent");
                    }}
                >
                    Click Me to send event
                </div>
            </header>
        </div>
    );
}

export default App;
