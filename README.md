🎬 Movie Explorer — Mini Project

A simple and responsive movie search application built using React, OMDB API, and Tailwind CSS.
Users can search for movies, view details, toggle themes, and explore trending films with a smooth UI.

🚀 Features

✅ Search Movies in Real-Time
Type in the search bar and instantly fetch movies from the OMDB API.

✅ Beautiful UI with Tailwind CSS
Fully responsive layout with gradients, shadows, custom animations, and hover effects.

✅ Light / Dark Theme Toggle
Switch between themes smoothly using a custom animated toggle button.

✅ Movie Cards with Hover Effects
Each movie card includes title, year, type, thumbnail, and smooth animations.

✅ Loading Skeletons
While movies are loading, skeleton components create a polished user experience.

🛠️ Technologies Used
Tech	Purpose
React.js	UI Components + State Management
Tailwind CSS	Styling & Animations
OMDB API	Movie data fetching
React Router	Navigation
Vite	Fast development environment
📦 Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/your-username/movie-explorer.git

2️⃣ Install dependencies
npm install

3️⃣ Start the development server
npm run dev

4️⃣ Add your OMDB API key

You can get one from here → https://www.omdbapi.com/

Update your fetch function:

fetch(`https://www.omdbapi.com/?apikey=YOUR_API_KEY&s=${query}`)

📁 Project Structure
src/
 ├── components/
 │    ├── Navbar.jsx
 │    ├── MovieCard.jsx
 │    ├── SwitchColorMode.jsx
 │    └── SkeletonCard.jsx
 ├── pages/
 │    └── Home.jsx
 ├── App.jsx
 ├── main.jsx
 └── styles.css

🎨 UI Highlights

✨ Gradient backgrounds
✨ Animated hover scaling on cards
✨ Smooth theme transition
✨ Search bar with animated background change
✨ Modern card layout with shadow & overlays

🔥 Future Enhancements (optional suggestions)

Add pagination

Add movie details page

Add favorites system using localStorage

Add infinite scroll

Add loading spinner

🤝 Contributing

Pull requests are welcome.
For major changes, please open an issue first to discuss the idea.

📜 License

This project is free to use — no license restrictions.