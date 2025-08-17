// import React from 'react';
// import { AppProvider, useApp } from './contexts/AppContext';
// import Header from './components/Header/Header';
// import SearchForm from './components/SearchForm/SearchForm';
// import Features from './components/Features/Features';
// import BusListings from './components/BusListings/BusListings';
// import Offers from './components/Offers/Offers';
// import Chat from './components/Chat/Chat';
// import Account from './components/Account/Account';
// import BottomNavigation from './components/BottomNavigation/BottomNavigation';
// import Footer from './components/Footer/Footer';
// import styles from './App.module.css';

// const AppContent = () => {
//   const { activeSection, showBusListings } = useApp();

//   const renderContent = () => {
//     if (activeSection === 'home') {
//       return showBusListings ? <BusListings /> : (
//         <>
//           <SearchForm />
//           <Features />
//         </>
//       );
//     }

//     switch (activeSection) {
//       case 'offers':
//         return <Offers />;
//       case 'chat':
//         return <Chat />;
//       case 'account':
//         return <Account />;
//       default:
//         return (
//           <>
//             <SearchForm />
//             <Features />
//           </>
//         );
//     }
//   };

//   return (
//     <div className={styles.app}>
//       <div className={styles.container}>
//         <Header />

//         <main className={styles.main}>
//           {renderContent()}
//         </main>

//         <Footer />
//       </div>

//       <BottomNavigation />
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <AppProvider>
//       <AppContent />
//     </AppProvider>
//   );
// };

// export default App;

import React, { useEffect, useRef, useState } from "react";
import "./App.css";

// Where your jokes.json lives:
// - Put jokes.json in your project's public/ folder and fetch("/jokes.json")
// - If you host elsewhere, update the URL below.
const JOKES_URL = "/jokes.json";

const animationsIn = [
  "fade-in",
  "slide-left",
  "slide-right",
  "slide-top",
  "slide-bottom",
  "rotate-in",
  "bounce-in",
  "zoom-in",
  "flip-in",
  "swing-in",
];

const shapes = [
  "rectangle",
  "square",
  "circle",
  "oval",
  "pill",
  "diamond",
  "hex",
  "parallelogram",
  "trapezoid",
  "star",
  "badge",
  "blob",
];

const galis = [
  "abe bsdk kyu touch kiya",
  "arey ruk na bsdk 😒",
  "han han, bohot tez ho? 😏",
  "abe chhod na yaar 😤",
  "kaam se kaam rakh bsdk 🤦‍♂️",
  "itni jaldi kya hai re? 😑",
  "thoda shaant reh, bro 😶",
  "abe ruk, next aa rha hai 🤌",
  "chhed mat re, mast reh 😎",
  "arey wah, button mil gaya kya? 🙄",
];

export default function App() {
  const [jokes, setJokes] = useState([]);
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [shape, setShape] = useState("rectangle");
  const [animClass, setAnimClass] = useState("fade-in");
  const [position, setPosition] = useState({ top: "50%", left: "50%" });
  const [toasts, setToasts] = useState([]);
  const timerRef = useRef(null);

  // Load jokes
  useEffect(() => {
    fetch(JOKES_URL)
      .then((r) => r.json())
      .then((data) => {
        setJokes(data || []);
        setIndex(0);
      })
      .catch(() => {
        // Fallback if jokes.json fails
        setJokes([
          {
            q: "Sample: Why did the dev cross the road?",
            a: "To get to the other IDE.",
          },
        ]);
      });
  }, []);

  // When index changes, prep question, schedule answer in 5s
  useEffect(() => {
    if (!jokes.length) return;

    setShowAnswer(false);
    setAnimClass(randomOf(animationsIn));
    setShape(randomOf(shapes));
    setPosition(randomPosition());
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setShowAnswer(true), 5000);

    return () => clearTimeout(timerRef.current);
  }, [index, jokes.length]);

  const nextJoke = () => {
    if (!jokes.length) return;
    setIndex((i) => (i + 1) % jokes.length);
  };

  const handleCardClick = (e) => {
    // show a spicy toast near the card
    const rect = e.currentTarget.getBoundingClientRect();
    const toast = {
      id: Date.now(),
      text: randomOf(galis),
      top:
        Math.max(
          5,
          rect.top +
            window.scrollY +
            (Math.random() * rect.height - rect.height / 2)
        ) + "px",
      left:
        Math.max(
          5,
          rect.left +
            window.scrollX +
            (Math.random() * rect.width - rect.width / 2)
        ) + "px",
      shape: randomOf(shapes),
    };  
    setToasts((t) => [...t, toast]);
    setTimeout(() => {
      setToasts((t) => t.filter((x) => x.id !== toast.id));
    }, 1500);

    // also move to next joke
    nextJoke();
  };

  const current = jokes[index] || { q: "", a: "" };

  return (
    <div className="fire-bg">
      <h1 className="title">🔥 Fire Jokes Generator 🔥</h1>

      {/* Main Q/A Card */}
      <div
        className={`card ${shape} ${animClass}`}
        style={{ top: position.top, left: position.left }}
        onClick={handleCardClick}
      >
        <div className="qa">
          <div className="q">Q: {current.q}</div>
          {showAnswer ? (
            <div className="a">A: {current.a}</div>
          ) : (
            <div className="timer">(answer in 5s…)</div>
          )}
        </div>
        <div className="hint">Tap the box or wait 5s</div>
      </div>

      {/* Spicy “gali” pop cards */}
      {toasts.map((t) => (
        <div
          key={t.id}
          className={`toast ${t.shape} fade-in`}
          style={{ top: t.top, left: t.left }}
        >
          {t.text}
        </div>
      ))}
    </div>
  );
}

/* Helpers */
function randomOf(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function randomPosition() {
  // Keep within viewport: use safe 10%–85% range and center via translate
  const top = 10 + Math.random() * 75;
  const left = 10 + Math.random() * 75;
  return { top: `${top}%`, left: `${left}%` };
}
