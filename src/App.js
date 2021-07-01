import './App.css';
import CakeContainer from "./components/CakeContainer";
import {Provider} from "react-redux";
import store from "./redux/Store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <CakeContainer/>
                <HooksCakeContainer/>
                <IceCreamContainer/>
            </Provider>
        </div>
    );
}

export default App;
