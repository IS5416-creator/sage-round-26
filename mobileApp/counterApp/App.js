import Count from "./Components/Count";
import { store } from "./Components/Redux/Store";
import {Provider} from "react-redux"

export default function App() {
 
  return (
    <Provider store={store}>
   <Count/>
   </Provider>
  );
}


