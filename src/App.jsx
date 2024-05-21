import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import ChatWindow from "@/components/ChatWindow.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">APPLES</h1>
        <nav className="app-nav">
          <Button variant="link">Sign Up</Button>
          <Button variant="link">Sign In</Button>
        </nav>
      </header>
      <main className="app-main">
        <div className="grid-container">
          {["Math", "English", "Language Arts", "Health", "Science", "Computer Tech", "Food", "Social Studies"].map((subject) => (
            <Card key={subject} className="grid-card">
              <CardHeader>
                <CardTitle>{subject}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
        <ChatWindow />
      </main>
    </div>
  );
}

export default App;