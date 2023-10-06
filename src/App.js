import ProviderMessage from "./context/ProviderMessage";
import ProviderUsers from "./context/ProviderUsers";
import RoutesApp from "./routes/RoutesApp";
function App() {
  return (
    <>
      <ProviderUsers>
        <ProviderMessage>
          <RoutesApp/>
        </ProviderMessage>
      </ProviderUsers>
    </>
  );
}


export default App;
