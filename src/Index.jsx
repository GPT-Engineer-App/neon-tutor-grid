import React, { useState } from 'react';
import './App.css';

const subjects = [
  "Math", "English", "Language Arts", "Health", "Science", "Computer Tech", "Food", "Social Studies"
];

const tutors = [
  { name: "John Doe", description: "Male Tutor" },
  { name: "Jane Smith", description: "Female Tutor" },
  { name: "Mrs. Robinson", description: "Older Female Tutor" },
  { name: "Tommy Lee", description: "Younger Male Tutor" }
];

const App = () => {
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
        <section className="subjects">
          {subjects.map(subject => (
            <div key={subject} className="card">
              {subject}
            </div>
          ))}
        </section>
        <section className="tutors">
          <h2>Select a Tutor</h2>
          <div className="tutor-list">
            {tutors.map(tutor => (
              <div key={tutor.name} className="tutor-card" onClick={() => setSelectedTutor(tutor)}>
                <h3>{tutor.name}</h3>
                <p>{tutor.description}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="chat">
          <h2>Chat with {selectedTutor ? selectedTutor.name : "a Tutor"}</h2>
          <div className="chat-window">
            <div className="messages">
              {/* Messages will go here */}
            </div>
            <input type="text" placeholder="Type your message..." />
            <button>Send</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;