import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Main />} />
		</Routes>
	)
}
