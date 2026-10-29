import React from "react";
import "./App.scss";
import Main from "./containers/Main";
import { createRequire } from 'module';
import { createRequire } from 'module';

var require = createRequire(import.meta.url);
var module = { exports: {} };

const require = createRequire(import.meta.url);

function App() {
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;