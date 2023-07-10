import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { CurrentUserContext } from "./contexts/currentUserContext";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<Router>
		<CurrentUserContext>
			<App />
		</CurrentUserContext>
	</Router>
);
