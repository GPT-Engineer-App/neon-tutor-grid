import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Textarea } from "@/components/ui/textarea.jsx";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select.jsx";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar.jsx";
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
  { name: "John Doe", description: "Experienced male tutor" },
  { name: "Jane Smith", description: "Experienced female tutor" },
  { name: "Mrs. Robinson", description: "Older female tutor" },
  { name: "Tommy Lee", description: "Younger male tutor" },
];

function App() {
  const [selectedTutor, setSelectedTutor] = useState(null);

  return (
    <div className="app">
      <header className="header">
        <h1>APPLES</h1>
        <nav>
          <Button variant="link">Signup</Button>
          <Button variant="link">Sign In</Button>
        </nav>
      </header>
      <main className="main">
        <div className="grid">
          {subjects.map((subject) => (
            <Card key={subject} className="grid-card">
              <CardHeader>
                <CardTitle>{subject}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="chat-window">
          <Dialog>
            <DialogTrigger asChild>
              <Button>Open Chat</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle>Chat with Tutor</DialogTitle>
              <DialogDescription>
                Select a tutor and start chatting.
              </DialogDescription>
              <Select onValueChange={setSelectedTutor}>
                <SelectTrigger>
                  <span>{selectedTutor ? selectedTutor.name : "Select Tutor"}</span>
                </SelectTrigger>
                <SelectContent>
                  {t tutors.map((tutor) => (
                    <SelectItem key={tutor.name} value={tutor}>
                      {tutor.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Textarea placeholder="Type your message here..." />
              <Button>Send</Button>
            </DialogContent>
          </Dialog>
        </div>
      </main>
    </div>
  );
}

export default App;