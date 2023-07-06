// import React, { useState } from "react";
// import "tailwindcss/tailwind.css";


// function TextBox({ text, setText }) {
//   return (
//     <input type="text" value={text} onChange={e => setText(e.target.value)} />
//   );
// }

// function TextMatchIndicator({ text1, text2 }) {
//   if(text1 === text2) {
//     return <p>The texts match</p>
//   }

//   return <p>The texts do not match</p>
// }

// function TextExample() {
//   const [text1, setText1] = useState("");
//   const [text2, setText2] = useState("");
//   return (
//     <div className="bg-black min-h-screen flex items-center justify-center">
//     <div className="space-y-4 py-8 px-6 bg-white shadow-lg rounded-xl text-center w-full max-w-md">
//       <h1 className="text-purple-500 text-3xl font-bold mb-4">Text Matching App</h1>
//       <TextBox text={text1} setText={setText1} />
//       <TextBox text={text2} setText={setText2} />
//       <TextMatchIndicator text1={text1} text2={text2} />
//     </div>
//   </div>
//   );
// }

// function UserIcon({ theme }) {
//   const textColor = theme === "dark" ? "text-white" : "text-black";
//   return <div className={`p-2 rounded text-2xl ${textColor}`}>{theme === "dark" ? "👤" : "👻"}</div>;
// }

// function Navbar({ theme }) {
//   const bgColor = theme === "dark" ? "bg-gray-700" : "bg-gray-300";
//   return <nav className={`p-4 rounded mt-2 ${bgColor}`}><UserIcon theme={theme} /></nav>;
// }

// function Header({ theme }) {
//   const bgColor = theme === "dark" ? "bg-black" : "bg-white";
//   const textColorInverse = theme === "dark" ? "text-white" : "text-black";
//   return <header className={`p-6 rounded-lg ${bgColor}`}><h1 className={`text-2xl mb-4 ${textColorInverse}`}>Welcome to our app!</h1><Navbar theme={theme} /></header>;
// }

// function App() {
//   const [theme, setTheme] = useState("light");

//   const toggleTheme = () => {
//     setTheme(theme === "light" ? "dark" : "light");
//   };

//   return (
//     <div className="p-8 min-h-screen">
//       {/* <TextExample /> */}
//       <Header theme={theme} />
//       <button onClick={toggleTheme} className={`${theme === "dark" ? "bg-gray-700 text-white" : "bg-blue-500 text-white"} p-2 rounded`}>Toggle theme</button>
//     </div>
//   );
// }

// export default App;


import React, { createContext, useState, useContext } from "react";
import "tailwindcss/tailwind.css";

export const ThemeContext = createContext("light");

function TextBox({ text, setText }) {
  return (
    <input type="text" value={text} onChange={e => setText(e.target.value)} />
  );
}

function TextMatchIndicator({ text1, text2 }) {
  if(text1 === text2) {
    return <p>The texts match</p>
  }

  return <p>The texts do not match</p>
}

function TextExample() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
    <div className="space-y-4 py-8 px-6 bg-white shadow-lg rounded-xl text-center w-full max-w-md">
      <h1 className="text-purple-500 text-3xl font-bold mb-4">Text Matching App</h1>
      <TextBox text={text1} setText={setText1} />
      <TextBox text={text2} setText={setText2} />
      <TextMatchIndicator text1={text1} text2={text2} />
    </div>
  </div>
  );
}

function UserIcon() {
  const theme = useContext(ThemeContext);
  const textColor = theme === "dark" ? "text-white" : "text-black";
  return <div className={`p-2 rounded ${textColor}`}>{theme === "dark" ? "👤" : "👻"}</div>;
}

function Navbar() {
  const theme = useContext(ThemeContext);
  const bgColor = theme === "dark" ? "bg-gray-700" : "bg-gray-300";
  return <nav className={`p-4 rounded mt-2 ${bgColor}`}><UserIcon /></nav>;
}

function Header() {
  const theme = useContext(ThemeContext);
  const bgColor = theme === "dark" ? "bg-black" : "bg-white";
  const textColorInverse = theme === "dark" ? "text-white" : "text-black";
  return <header className={`p-6 rounded-lg ${bgColor}`}><h1 className={`text-2xl mb-4 ${textColorInverse}`}>Welcome to our app!</h1><Navbar theme={theme} /></header>;
}

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={theme}>
      {/* <TextExample /> */}
      <div className="p-8">
        <Header />
        <button onClick={toggleTheme} className={`${theme === "dark" ? "bg-gray-700 text-white" : "bg-blue-500 text-white"} p-2 rounded`}>Toggle theme</button>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

