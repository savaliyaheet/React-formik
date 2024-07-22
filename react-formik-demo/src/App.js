import "./App.css";
import ContextParent from "./formikComponent/ContextParent";
import ErrorBoundary from "./formikComponent/ErrorBoundary";
import FormikContainer from "./formikComponent/FormikContainer";
import Parent from "./formikComponent/Render Demo/Parent";
import TestComponent from "./formikComponent/TestComponent";
import TestComponent2 from "./formikComponent/TestComponent2";

function App() {
  console.log("App rendered");
  return (
    <div className="App">
      <ErrorBoundary>
        <FormikContainer />
      </ErrorBoundary>
    </div>
  );
}

export default App;
