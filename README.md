# Nepali Radios 📻

A web application that provides access to various Nepali radio stations. Built with React (frontend) and Flask (backend).

## Tech Stack

### Backend
- Flask (Python web framework)
- JSON for data storage

### Frontend
- React (with Vite as build tool)
- TailwindCSS for styling
- Context API for state management

## Implementation Details

### Backend Architecture
The backend is implemented using Flask and consists of:
- RESTful API endpoint at `/data`
- JSON-based data storage
- Error handling for file not found (404) and malformed JSON (400)

### Frontend Architecture
The frontend is built with modern React practices:
- Component-based architecture 
- Context API for state management
- Responsive design using TailwindCSS
- Vite for fast development and optimized builds

## Installation Guide

### Backend Setup
```bash
# Navigate to backend directory
cd backend

# Create and activate virtual environment
python -m venv .venv
source .venv/bin/activate  # On Windows use: .venv\Scripts\activate

# Install dependencies
pip install flask flask-cors

# Run the server
python app.py
```

### Frontend Setup
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Development

The project is structured into two main parts:

```
nepali-radios/
├── backend/           # Flask backend
│   ├── app.py        # Main application file
│   └── data.json     # Radio stations data
│
├── frontend/         # React frontend
    ├── src/
    │   ├── context/  # React Context
    │   ├── pages/    # Route components
    │   └── user/     # User-related components
    └── ...
```

## Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

---
Created by [Ankit Pokhrel](https://github.com/ankitpokhrel08)
