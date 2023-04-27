import { Provider } from "react-redux";
import { store } from "./App/redux/store";
import Navigator from "./App/Navigator/Navigator";
import IsLoggedIn from "./App/component/IsLoggedIn";

export default function App() {
	return (
		<Provider store={store}>
			<IsLoggedIn>
				<Navigator />
			</IsLoggedIn>
		</Provider>
	);
}
