import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import { PrimeReactProvider } from "primereact/api";
import "./App.css";

import Home from "./Pages/Home";
import Data from "./Pages/Data";
function Main() {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <Home></Home>,
        },
        {
            path: "/repositeries",
            element: <Data></Data>,
        },
    ]);
    return <RouterProvider router={routes} />;
}
function App() {
    const value = {
        ripple: true,
    };
    return (
        <Provider store={store}>
            <PrimeReactProvider value={value}>
                <Main />
            </PrimeReactProvider>
        </Provider>
    );
}
export default App;
