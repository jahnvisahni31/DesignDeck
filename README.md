# DesignDeck

DesignDeck is a web-based design tool inspired by Figma, built using Next.js. It aims to provide a collaborative design environment where users can create, edit, and share their designs in real-time.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

DesignDeck is a clone of Figma, a popular web-based design tool used for UI/UX design. The application allows multiple users to collaborate on design projects in real-time, leveraging the power of Next.js for server-side rendering and performance optimization.

## Features

- Real-time collaboration
- User authentication and authorization
- Create and manage design projects
- Vector drawing tools
- Layer management
- Commenting and feedback system
- Responsive design

## Tech Stack

- **Frontend:** Next.js, React
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Real-time Communication:** WebSockets
- **Authentication:** JWT, OAuth
- **Styling:** Tailwind CSS
- **Version Control:** Git

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/jahnvisahni31/designdeck.git
    cd designdeck
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env.local` file in the root directory and add your environment variables:
    ```env
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```

## Usage

1. Open your browser and go to `http://localhost:3000` to access the application.
2. Register or log in to start creating and collaborating on design projects.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any enhancements or bug fixes.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
