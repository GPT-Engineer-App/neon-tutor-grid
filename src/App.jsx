import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog.jsx";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu.jsx";
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
  { name: "Mike Johnson", description: "Younger male tutor" },
];

function App() {
  const [selectedTutor, setSelectedTutor] = useState(null);

  return (
    <div className="app">
      <header className="header">
        <h1>APPLES</h1>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Signup</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="#">Signup</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Sign In</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="#">Sign In</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
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
          <h2>Chat with a Tutor</h2>
          <div className="tutor-selection">
            {tutors.map((tutor) => (
              <Button key={tutor.name} onClick={() => setSelectedTutor(tutor)}>
                {tutor.name}
              </Button>
            ))}
          </div>
          {selectedTutor && (
            <Dialog>
              <DialogTrigger asChild>
                <Button>Chat with {selectedTutor.name}</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogTitle>Chat with {selectedTutor.name}</DialogTitle>
                <DialogDescription>{selectedTutor.description}</DialogDescription>
                {/* Chat window content goes here */}
              </DialogContent>
            </Dialog>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;