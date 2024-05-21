import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog.jsx";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar.jsx";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu.jsx";
import "./App.css";

const subjects = ["Math", "English", "Language Arts", "Health", "Science", "Computer Tech", "Food", "Social Studies"];
const tutors = [
  { name: "John Doe", description: "Experienced male tutor", image: "/images/male-tutor.jpg" },
  { name: "Jane Smith", description: "Experienced female tutor", image: "/images/female-tutor.jpg" },
  { name: "Mrs. Johnson", description: "Older female tutor", image: "/images/older-female-tutor.jpg" },
  { name: "Mike Brown", description: "Younger male tutor", image: "/images/younger-male-tutor.jpg" },
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
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Sign In</NavigationMenuTrigger>
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
          <div className="tutors">
            {tutors.map((tutor) => (
              <Dialog key={tutor.name}>
                <DialogTrigger asChild>
                  <Button className="tutor-button">
                    <Avatar>
                      <AvatarImage src={tutor.image} alt={tutor.name} />
                      <AvatarFallback>{tutor.name[0]}</AvatarFallback>
                    </Avatar>
                    {tutor.name}
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogTitle>{tutor.name}</DialogTitle>
                  <DialogDescription>{tutor.description}</DialogDescription>
                  <Button onClick={() => setSelectedTutor(tutor)}>Select {tutor.name}</Button>
                </DialogContent>
              </Dialog>
            ))}
          </div>
          {selectedTutor && <div className="selected-tutor">Chatting with {selectedTutor.name}</div>}
        </div>
      </main>
    </div>
  );
}

export default App;