import React, { useState, useEffect } from "react"
import "./App.css"
import { initialisedMarkdown } from "./initialisedMarkdown"
import marked from "marked"

marked.setOptions({ breaks: true, gfm: true })

const App = () => {
  const [state, setState] = useState("")

  useEffect(() => {
    setState(initialisedMarkdown)
  }, [])

  return (
    <div className="App">
      <h2 className="text-center">Markdown Editor</h2>
      <div className="container">
        <div className="flex-element-container">
          <h3 className="text-center">Editor</h3>
          <textarea
            id="editor"
            value={state}
            onChange={e => setState(e.target.value)}
          ></textarea>
        </div>
        <div className="flex-element-container">
          <h3 className="text-center">Previewer</h3>
          <div
            id="preview"
            dangerouslySetInnerHTML={{ __html: marked(`${state}`) }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default App
