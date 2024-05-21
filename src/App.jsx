import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import "./App.css";

const subjects = [
  "Math",
  "English",
  "Language Arts",
  "Health",
  "Science",
  "Computer Tech",
  "Food",
  "Social Studies",
];

const tutors = [
  { name: "Male Tutor", description: "Experienced male tutor" },
  { name: "Female Tutor", description: "Experienced female tutor" },
  { name: "Older Female Tutor", description: "Experienced older female tutor" },
  { name: "Younger Male Tutor", description: "Experienced younger male tutor" },
];

function App() {
  const [selectedTutor, setSelectedTutor] = useState(null);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>APPLES</h1>
        <nav>
          <Button variant="link">Sign Up</Button>
          <Button variant="link">Sign In</Button>
        </nav>
      </header>
      <main>
        <section className="tutors-section">
          <h2>Select a Tutor</h2>
          <div className="tutors-grid">
            {tutors.map((tutor, index) => (
              <Card
                key={index}
                className={`tutor-card ${selectedTutor === index ? "selected" : ""}`}
                onClick={() => setSelectedTutor(index)}
              >
                <CardHeader>
                  <CardTitle>{tutor.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{tutor.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        <section className="subjects-section">
          <h2>Select a Subject</h2>
          <div className="subjects-grid">
            {subjects.map((subject, index) => (
              <Card key={index} className="subject-card">
                <CardHeader>
                  <CardTitle>{subject}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;