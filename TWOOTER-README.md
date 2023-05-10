# twooter

##### to view formatted markdown press (ctrl-k) then v OR (cmd-k) then v

## Links

[Firebase](https://firebase.google.com/)

[TailwindCSS](https://www.tailwindcss.com/)

[DaisyUI](https://www.daisyui.com/)

[react-hot-toast](https://react-hot-toast.com/)

[react-feather](https://feathericons.com/)

[react-suspense](https://react.dev/reference/react/Suspense)

[zod](https://github.com/colinhacks/zod)

[axios](https://axios-http.com/docs/api_intro)

[Netlify](https://www.netlify.com/)

---

<br>

## About this project:

### Goal: create emoji only twitter clone

### Tech stack:

- Flask backend for storing tweets, likes, and comments🍺
- Firebase for user authentication 🔥
- TailwindCSS/DaisyUI for styling 💨
- Stripe for handling payments 💵 (we probably won't have time)
  - $1 base fee for a non-emoji message + $0.05 per character 🤑
- react-feather for icons 🪶
- react-hot-toast for alerts 🍞
- zod for input validation (emoji's only) 🥸
- axios for communicating with our API🕸️
- Netlify for easy hosting

<br>

## Getting Started

```
npx create-react-app clutch-112-twooter
```

<br>

### Other Dependencies

```
npm i @stripe/react-stripe-js @stripe/stripe-js tailwindcss postcss autoprefixer daisyui firebase react-router-dom react-hot-toast react-feather zod axios
```

<br>

### Initial File Structure

```
├── node_modules
├── public
│   ├── images
│   ├── index.html
├── src
│   ├── components
│   ├── context
│   │    ├── AuthProvider.js
│   │    └── DataProvider.js
│   ├── lib
│   │    └── CONSTANTS.js
│   ├── styles
│   │    └── globals.css
│   ├── views
│   │    ├── HomeView.js
│   │    ├── TweetView.js
│   │    └── ProfileView.js
│   ├── index.js
│   ├── App.js
│   └── firebase.js
├── .env
├── .gitignore <-- dont forget .env!
├── package-lock.json
├── package.json
└── README.md
```

<br>

### TailwindCSS/DaisyUI Initialization

<br>

#### Initializing Tailwind and PostCSS configs

```
npx tailwindcss init
npx tailwindcss init -p
```

<br>

#### Tailwind Config

_tailwind.config.js_

```
/** @type {import('tailwindcss').Config} */
/* ^ ignore this line ^ -- its used for TypeScript only */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
```

<br>

#### PostCSS Config

_postcss.config.js_

```
module.exports = {
  plugins: [require('tailwindcss'), require('autoprefixer')],
};
```

<br>

#### Adding Tailwind Directives

_src/styles/globals.css_

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

<br>

#### Importing global stylesheet in App.js

_src/App.js_

```
import "./styles/globals.css"
```

---

<br>

### Auth, Contexts & Providers

<br>

#### Firebase

_src/firebase.js_

```
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // Your firebase config
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
```

<br>

#### AuthContext & AuthProvider

_src/context/AuthProvider.jsx_

<br>

#### DataContext & DataProvider

_src/context/DataProvider.jsx_

<br>

<br>

We're kinda freestyling from here...
