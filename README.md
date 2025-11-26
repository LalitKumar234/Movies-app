# 🎬 Movies App

A modern, responsive movie discovery application built with React, TypeScript, and Tailwind CSS. Search for your favorite movies and TV shows, view detailed information, ratings, and watch trailers - all in a beautiful, Netflix-inspired interface.

![Movies App Preview](https://img.shields.io/badge/React-19.2.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.17-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=for-the-badge&logo=vite)

## ✨ Features

### 🔍 Smart Search
- **Real-time search** with debounced input for optimal performance
- **Instant dropdown results** with movie posters and cast information
- **Auto-complete suggestions** as you type
- **Search caching** for faster subsequent searches

### 🎭 Movie Details
- **Comprehensive movie information** including ratings, runtime, and release dates
- **Beautiful backdrop images** with gradient overlays
- **Star rating system** with visual indicators
- **Genre tags** for easy categorization
- **Expandable descriptions** with "Read more/less" functionality
- **Direct trailer links** and watch now buttons

### 🎨 Modern UI/UX
- **Netflix-inspired design** with cinematic backgrounds
- **Fully responsive** - works perfectly on mobile, tablet, and desktop
- **Smooth animations** and hover effects
- **Loading states** with custom spinners
- **Error handling** with retry functionality
- **Clean typography** and intuitive navigation

### ⚡ Performance Optimized
- **Debounced search** to reduce API calls
- **Request cancellation** to prevent race conditions
- **In-memory caching** for search results and movie details
- **Lazy loading** and optimized bundle size
- **Fast refresh** development experience

## 🚀 Quick Start

### Prerequisites
- Node.js 20.19+ or 22.12+ (currently using 22.11.0 - consider upgrading)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd movies-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5174` (or the port shown in your terminal)

### Available Scripts

```bash
npm run dev      # Start development server with hot reload
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run lint     # Run ESLint for code quality checks
```

## 🛠️ Tech Stack

### Frontend Framework
- **React 19.2.0** - Latest React with concurrent features
- **TypeScript 5.9.3** - Type-safe development
- **React Router DOM 7.9.6** - Client-side routing

### Styling & UI
- **Tailwind CSS 4.1.17** - Utility-first CSS framework
- **Custom CSS animations** - Smooth loading spinners and transitions
- **Responsive design** - Mobile-first approach

### Development Tools
- **Vite 7.2.4** - Lightning-fast build tool
- **ESLint** - Code quality and consistency
- **TypeScript ESLint** - TypeScript-specific linting rules

### API & Data
- **IMDB API** - Movie and TV show data
- **Axios** - HTTP client for API requests
- **Custom hooks** - Reusable data fetching logic

## 📁 Project Structure

```
src/
├── api/
│   └── imdb.ts              # API client with caching
├── assets/
│   ├── icons.tsx            # SVG icon components
│   └── *.jpg                # Background images
├── components/
│   ├── ErrorMessage.tsx     # Error handling component
│   ├── NotFound.tsx         # 404 page component
│   ├── SearchedMovieCard.tsx # Search result item
│   └── StarRating.tsx       # Rating display component
├── hooks/
│   ├── useDebouncedValue.ts # Debounce utility hook
│   ├── useMoviesDetails.ts  # Movie details fetching
│   └── useSearchMovies.ts   # Search functionality
├── utils/
│   └── format.ts            # Formatting utilities
├── views/
│   ├── home.tsx             # Main search page
│   └── MovieDetailsScreen.tsx # Movie detail page
├── App.tsx                  # Main app component
└── main.tsx                 # App entry point
```

## 🎯 Key Components

### Search Experience
The home page features a cinematic search experience with:
- Hero background with overlay effects
- Real-time search with visual feedback
- Dropdown results with movie cards
- Clear button for easy search reset

### Movie Details
Detailed movie pages include:
- Full-screen backdrop images
- Comprehensive movie metadata
- Interactive rating system
- Trailer and watch now links
- Responsive navigation

### Custom Hooks
- `useSearchMovies` - Handles search API calls with caching
- `useMovieDetails` - Fetches detailed movie information
- `useDebouncedValue` - Optimizes search performance

## 🌟 Features in Detail

### Search Functionality
```typescript
// Debounced search with 400ms delay
const debouncedQuery = useDebouncedValue(searchQuery, 400);
const { data: results, loading, error } = useSearchMovies(debouncedQuery);
```

### Caching System
```typescript
// In-memory caching for better performance
const searchCache = new Map<string, any>();
const detailsCache = new Map<string, any>();
```

### Error Handling
- Network error recovery
- Loading states for better UX
- Graceful fallbacks for missing data
- Retry functionality

## 🔧 Configuration

### Tailwind CSS
The app uses Tailwind CSS 4.1.17 with custom configurations for:
- Custom color schemes
- Responsive breakpoints
- Animation utilities
- Backdrop blur effects

### TypeScript
Strict TypeScript configuration with:
- Type-safe API responses
- Interface definitions for all data structures
- Proper error handling types

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

This creates an optimized build in the `dist/` directory ready for deployment.

### Preview Production Build
```bash
npm run preview
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **IMDB API** for providing comprehensive movie data
- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first styling approach
- **Vite** for the lightning-fast development experience

---

<div align="center">
  <p>Made with ❤️ and lots of ☕</p>
  <p>
    <a href="#-movies-app">Back to Top</a>
  </p>
</div>