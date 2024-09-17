import Accordion from "./component/Accordion"

const faq = [
  {
    title: " What is React?",
    text: " React is a JavaScript library for building user interfaces.",
  },
  {
    title: "What is JSX?",
    text: " JSX stands for JavaScript XML. It is a syntax extension to JavaScript. It allows us to write HTML-like syntax with React.",
  },
  {
    title: " What do you mean by hooks?",
    text: " Hooks are functions that let you “hook into” React features.",
  }
]
function App() {

  return (
    <>
      <Accordion data= {faq} />
    </>
  )
}

export default App
