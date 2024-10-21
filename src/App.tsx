import DomainTitle from "./components/DomainTitle"
import Centering from "./layouts/Centering"

function App() {

   return (
		<Centering className="mt-20 flex-col">
			<h1>
				<DomainTitle />
			</h1>

		</Centering>
   )
}

export default App
