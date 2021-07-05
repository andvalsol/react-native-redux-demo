import './App.css';
import CakeContainer from "./components/CakeContainer";
import {Provider} from "react-redux";
import store from "./redux/Store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import CakeContainerWithInput from "./components/CakeContainerWithInput";
import ItemContainer from "./components/ItemContainer";

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <ItemContainer cake/>
                <ItemContainer/>
                <CakeContainer/>
                <HooksCakeContainer/>
                <IceCreamContainer/>
                <CakeContainerWithInput/>
            </Provider>
        </div>
    );
}

export default App;
