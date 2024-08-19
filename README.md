# Continue - eCommerce Platform

## Description

The Video Game Store is a full-stack eCommerce application that allows users to browse and purchase video games across multiple categories. Users can create accounts, view their past purchases, and manage their shopping carts. The platform utilizes Express.js, SQL, Tailwind, Javascript and more to provide a seamless and interactive shopping experience.

## Features

- **Browse Games**: Explore a diverse selection of video games categorized into five distinct genres.
- **User Accounts**: Register, log in, and manage your profile.
- **Shopping Cart**: Add games to your cart and proceed to checkout.
- **Purchase History**: View a history of past purchases.
- **Responsive Design**: Enjoy a polished user interface that works well on all devices.

## Technologies Used

- **Node.js** and **Express.js**: Server-side logic and RESTful API.
- **Handlebars.js**: Templating engine for rendering dynamic HTML.
- **PostgreSQL**: Relational database for storing user and game data.
- **Sequelize ORM**: Object-relational mapping for PostgreSQL.
- **Express-Session**: User authentication and session management.
- **bcrypt**: Password hashing for security.
- **dotenv**: Managing environment variables.

## Project Setup

### Prerequisites

Ensure you have the following installed:
- Node.js
- PostgreSQL
Make sure you seed the data!
- Run Postgres to create the database via schema file
- Seed the data by running node seeds/index.js

### Installation

1. **Clone the Repository**

    ```bash
    git clone https://github.com/your-username/video-game-store.git
    cd video-game-store
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Configure Environment Variables**

    Create a `.env` file in the root directory and add your environment variables:

    ```env
    DB_NAME=your_database_name
    DB_USER=your_database_user
    DB_PASS=your_database_password
    SESSION_SECRET=your_session_secret
    ```

4. **Set Up the Database**

    Run the migrations and seed the database:

    ```bash
    npx sequelize-cli db:migrate
    npx sequelize-cli db:seed:all
    ```

5. **Start the Application**

    ```bash
    npm start
    ```

    The application will be available at `http://localhost:3001`.

### Usage

1. **Visit the Site**

    Navigate to `http://localhost:3001` in your browser.

2. **Create an Account**

    Register a new account by clicking the "Sign Up" button.

3. **Browse Games**

    Browse games by category from the homepage.

4. **Add Games to Cart**

    Select a game and click "Add to Cart" to place it in your shopping cart.

5. **Checkout**

    Proceed to checkout to complete your purchase.

6. **View Past Purchases**

    Log in to view your purchase history.

## API Endpoints

- **GET /api/games**: Retrieve a list of games.
- **POST /api/cart/add**: Add a game to the user's cart.
- **POST /api/users/signup**: Register a new user.
- **POST /api/users/login**: Authenticate a user.
- **GET /api/users/purchases**: View past purchases.

## Deployed Application

- [Live Site](https://your-deployed-app.render.com)

## GitHub Repository

- [GitHub Repository](https://github.com/your-username/video-game-store)

## Screenshots

![Homepage]"C:\Users\mkeen\OneDrive\Pictures\Screenshots\Screenshot 2024-08-19 180204.png"
![Game Details]c:\Users\mkeen\OneDrive\Pictures\Screenshots\Screenshot 2024-08-19 180224.png
![Cart](public/images/cart.png)

## Future Development

- **Enhanced Search**: Implement advanced search and filter options for games.
- **User Reviews**: Allow users to leave reviews and ratings for games.
- **Recommendation Engine**: Suggest games based on user preferences and past purchases.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
