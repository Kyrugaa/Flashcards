
import React, { useState } from "react";
import FlashcardList from "./FlashCardList";
import './app.css';
import HiraganaCards from "./HiraganaCards";


function App() {
    const [flashcards, setFlashcards] = useState(HiraganaCards);
  return (
    <FlashcardList flashcards = {flashcards} />
  );
}

/*
const HiraganaCards = [

  // Umlaut


    {
        id: 1,
        question: 'あ',
        answer: 'a',
    },
    {
        id: 2,
        question: 'い',
        answer: 'i',
    },
    {
        id: 3,
        question: 'う',
        answer: 'u',
    },
    {
        id: 4,
        question: 'え',
        answer: 'e',
    },
    {
        id: 5,
        question: 'お',
        answer: 'o',
    },

      // K

      {
        id: 1,
        question: 'か',
        answer: 'ka',
    },
    {
        id: 2,
        question: 'き',
        answer: 'ki',
    },
    {
        id: 3,
        question: 'く',
        answer: 'ku',
    },
    {
        id: 4,
        question: 'け',
        answer: 'ke',
    },
    {
        id: 5,
        question: 'こ',
        answer: 'ko',
    },

    // S

    {
      id: 1,
      question: 'さ',
      answer: 'sa',
  },
  {
      id: 2,
      question: 'し',
      answer: 'shi',
  },
  {
      id: 3,
      question: 'す',
      answer: 'su',
  },
  {
      id: 4,
      question: 'せ',
      answer: 'se',
  },
  {
      id: 5,
      question: 'そ',
      answer: 'so',
  },
  
  // T
  {
      id: 1,
      question: "た",
      answer: "ta",
  },
  {
      id: 2,
      question: 'ち',
      answer: 'chi',
  },
  {
      id: 3,
      question: 'つ',
      answer: 'tsu',
  },
  {
      id: 4,
      question: 'て',
      answer: 'te',
  },
  {
      id: 5,
      question: 'と',
      answer: 'to',
  },

    // N

    {
      id: 1,
      question: "な",
      answer: "na",
  },
  {
      id: 2,
      question: 'に',
      answer: 'ni',
  },
  {
      id: 3,
      question: 'ぬ',
      answer: 'nu',
  },
  {
      id: 4,
      question: 'ね',
      answer: 'ne',
  },
  {
      id: 5,
      question: 'の',
      answer: 'no',
  },

      // N

    {
      id: 1,
      question: "な",
      answer: "na",
  },
  {
      id: 2,
      question: 'に',
      answer: 'ni',
  },
  {
      id: 3,
      question: 'ぬ',
      answer: 'nu',
  },
  {
      id: 4,
      question: 'ね',
      answer: 'ne',
  },
  {
      id: 5,
      question: 'の',
      answer: 'no',
  },

    // H

    {
      id: 1,
      question: "は",
      answer: "ha",
  },
  {
      id: 2,
      question: 'ひ',
      answer: 'hi',
  },
  {
      id: 3,
      question: 'ふ',
      answer: 'fu',
  },
  {
      id: 4,
      question: 'へ',
      answer: 'he',
  },
  {
      id: 5,
      question: 'ほ',
      answer: 'ho',
  },  

    // M

    {
      id: 1,
      question: "ま",
      answer: "ma",
  },
  {
      id: 2,
      question: 'み',
      answer: 'mi',
  },
  {
      id: 3,
      question: 'む',
      answer: 'mu',
  },
  {
      id: 4,
      question: 'め',
      answer: 'me',
  },
  {
      id: 5,
      question: 'も',
      answer: 'mo',
  },  

    // Y

    {
      id: 1,
      question: "や",
      answer: "ya",
  },
  {
      id: 2,
      question: 'を',
      answer: 'o',
  },
  {
      id: 3,
      question: 'ゆ',
      answer: 'yu',
  },
  {
      id: 4,
      question: 'わ',
      answer: 'wa',
  },
  {
      id: 5,
      question: 'よ',
      answer: 'yo',
  },  

    // R

    {
      id: 1,
      question: "ら",
      answer: "ra",
  },
  {
      id: 2,
      question: 'り',
      answer: 'ri',
  },
  {
      id: 3,
      question: 'る',
      answer: 'ru',
  },
  {
      id: 4,
      question: 'れ',
      answer: 'ri',
  },
  {
      id: 5,
      question: 'ろ',
      answer: 'ro',
  },  

    // Random

    {
      id: 1,
      question: "ん",
      answer: "n",
  },
  {
      id: 2,
      question: 'うぇ',
      answer: 'we',
  },
  {
      id: 3,
      question: 'うぃ',
      answer: 'wi',
  },
  {
      id: 4,
      question: 'いい',
      answer: 'Ii',
  },
  {
      id: 5,
      question: 'を',
      answer: 'o (Objektartikel)',
  },  
  
  ]

*/

export default App;
