import React from "react";
import { Contacts } from "../components/Contacts/Contacts";
import { Extensiones } from "../components/Extensiones/Extensiones";
import { Features } from "../components/Features/Features";
import { Footer } from "../components/Footer/Footer";
import { ForumQuestion } from "../components/ForumQuestions/ForumQuestion";
import { Header } from "../components/Header.js/Header";
import { Navbar } from "../components/Navbar/Navbar";

export const BookMarkApp = () => {
  
  return (
    <div>
      <Navbar />
      <div className="container">
        <Header />
        <Features />
        <Extensiones />
        <ForumQuestion />
       
      </div> 
      <Contacts />
      <Footer />
    </div>
  );
};
