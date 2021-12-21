import { Routes, Route } from "react-router-dom";
import EditionPage from "./pages/edition/EditionPage";

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<EditionPage />} />
		</Routes>
	)
}
