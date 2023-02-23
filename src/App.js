import "./App.css";
import Certificate from "./components/Certificate/Certificate";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [apiData, setApiData] = useState([]);
  const loadData = () => {
    axios.get("http://localhost:1337/api/sandeeps").then((response) => {
      if (response) {
        setApiData(response.data.data[0].attributes);
      }
    });
  };
  useEffect(() => {
    loadData();
  });
  return (
    <div className="App">
      <Certificate data={apiData} />
    </div>
  );
}

export default App;
