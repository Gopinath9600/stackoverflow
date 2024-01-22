import { Header } from "./Components/Headers/Header";
import "./App.css";
import { LandingPage } from "./Components/LandingPage/LandingPage";
import { useState } from "react";

function App() {
  const [selectedQuestionId, setSelectedQuestionId] = useState(56199111);
  const handleSearchItemClick = (questionId) => {
    setSelectedQuestionId(questionId);
  };

  return (
    <div>
      <Header onSearchItemClick={handleSearchItemClick} />
      <LandingPage selectedQuestionId={selectedQuestionId} />
    </div>
  );
}

export default App;
