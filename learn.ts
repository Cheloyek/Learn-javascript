import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div>Hello</div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




let b = 1;
b = "string" //не присвоит, тк b это число

let c; // type any - тип не задан, поэтому может принимать любое значение
c = 1; // Присвоит
c = "sting"; // Присвоит
c = true; // Присвоит




let a = {
    name: "Dimych",
    age: 10,
    adress: {
        city: "Minsk",
        country: "Belarus"
    }
}

console.log(a.adress.city)

let users = [
    {
        name: "Dimych",
        age: 10,
        adress: {
            city: "Minsk",
            country: "Belarus"
        }
    },
    {
        name: "Viktor",
        age: 13,
        adress: {
            city: "Minsk",
            country: "Belarus"
        }
    }
]

console.log(users[0].adress.country)
