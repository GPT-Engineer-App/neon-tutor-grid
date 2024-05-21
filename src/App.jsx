import React, { useState } from "react";
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
  { name: "Mr. Smith", description: "An experienced male tutor." },
  { name: "Ms. Johnson", description: "A friendly female tutor." },
  { name: "Mrs. Brown", description: "An older female tutor with years of experience." },
  { name: "Mr. Davis", description: "A young and energetic male tutor." },
];

function App() {
  const [selectedTutor, setSelectedTutor] = useState(null);

  return (
    <div className="app">
      <header className="header">
        <h1>APPLES</h1>
        <nav>
          <button>Signup</button>
          <button>Sign In</button>
        </nav>
      </header>
      <main>
        <section className="subjects-grid">
          {subjects.map((subject) => (
            <div key={subject} className="subject-card">
              {subject}
            </div>
          ))}
        </section>
        <section className="tutors">
          <h2>Select a Tutor</h2>
          <div className="tutors-list">
            {tutors.map((tutor) => (
              <div
                key={tutor.name}
                className={`tutor-card ${selectedTutor === tutor.name ? "selected" : ""}`}
                onClick={() => setSelectedTutor(tutor.name)}
              >
                <h3>{tutor.name}</h3>
                <p>{tutor.description}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="chat-window">
          <h2>Chat with Tutor</h2>
          <div className="chat-box">
            <div className="messages">
              {/* Messages will be displayed here */}
            </div>
            <input type="text" placeholder="Type your message..." />
            <button>Send</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;