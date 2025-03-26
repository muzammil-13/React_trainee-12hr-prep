import React from 'react';
import {createRoot} from 'react-dom/client';

console.log(React.version)
console.log(createRoot)

const root = document.querySelector("#root");
createRoot(root).render(React.createElement("p", {}, "Hello World"));

console.log(root)