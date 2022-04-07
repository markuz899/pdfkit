import { useState, useEffect } from "react";
import PdfViewerComponent from "./components/PdfViewerComponent";
import { useLocation, BrowserRouter as Router } from "react-router-dom";
import "./App.css";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function QueryScreen() {
  let test = "https://centrotest.eu/static/test.pdf";
  let query = useQuery();
  let queryUrl = query.get("url");
  const [document, setDocument] = useState(queryUrl || test);

  useEffect(() => {
    setDocument(queryUrl);
  }, [query.get("url")]);

  return (
    <div className="App">
      <div className="App-viewer">
        <PdfViewerComponent document={document} />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <QueryScreen />
    </Router>
  );
}

export default App;
