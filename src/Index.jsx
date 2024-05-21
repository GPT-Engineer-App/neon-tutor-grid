import React, { useState } from 'react';
import './App.css';

const subjects = [
  "Math", "English", "Language Arts", "Health", 
  "Science", "Computer Tech", "Food", "Social Studies"
];

const tutors = [
  { name: "John Doe", description: "Male Tutor" },
  { name: "Jane Smith", description: "Female Tutor" },
  { name: "Mrs. Johnson", description: "Older Female Tutor" },
  { name: "Mike Brown", description: "Younger Male Tutor" }
];

const App = () => {
  const [selectedTutor, setSelectedTutor] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: 'student', text: input }]);
      setInput('');
    }
  };

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
            <div key={subject} className="card">{subject}</div>
          ))}
        </section>
        <section className="tutors">
          <h2>Select a Tutor</h2>
          {tutors.map(tutor => (
            <div 
              key={tutor.name} 
              className={`tutor-card ${selectedTutor === tutor.name ? 'selected' : ''}`} 
              onClick={() => setSelectedTutor(tutor.name)}
            >
              <h3>{tutor.name}</h3>
              <p>{tutor.description}</p>
            </div>
          ))}
        </section>
        <section className="chat">
          <h2>Chat with {selectedTutor || 'a Tutor'}</h2>
          <div className="chat-window">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input 
              type="text" 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              placeholder="Type your message..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;