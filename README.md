<a href="https://personal-book-manager-backend-xeat.onrender.com"><img align="right" src="./backend-button.svg" width="140" alt="Live Bakckend" /></a>
### Personal Book Manager Backend 
<em>Secure REST API for authentication and personal book tracking, built with Express, MongoDB, and TypeScript.</em>


<p align="left">
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white" alt="Node.js" />
  &nbsp;
  <img src="https://img.shields.io/badge/Express-222222?style=flat&logo=express&logoColor=white" alt="Express" />
  &nbsp;
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white" alt="TypeScript" />
  &nbsp;
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white" alt="MongoDB" />
  &nbsp;
  <img src="https://img.shields.io/badge/JWT-000000?style=flat&logo=jsonwebtokens&logoColor=white" alt="JWT" />
  &nbsp;
  <img src="https://img.shields.io/badge/Zod-3E67B1?style=flat&logo=zod&logoColor=white" alt="Zod" />
</p>

<hr />

### 🚀 About the project

**Personal Book Manager Backend** powers the secure API for the personal library application. It handles user registration, login, session-based authentication, and protected book CRUD operations for a user-specific reading dashboard.

### ✨ Features

<table>
  <tr>
    <td valign="top">

- ✅ User registration and login
- ✅ JWT-based authenticated sessions
- ✅ Protected profile route
- ✅ Book creation and management
- ✅ Reading status tracking

</td>
    <td valign="top">

- ✅ Custom book filtering by status and tag
- ✅ MongoDB-based persistence
- ✅ Input validation with Zod
- ✅ Secure cookie-based auth flow
- ✅ Clean API error handling

</td>
  </tr>
</table>


### 🛠️ Tech Stack

| Backend | Database | Auth & Validation | Tools & Utilities |
|:-------:|:--------:|:----------------:|:-----------------:|
| Node.js, Express.js, TypeScript | MongoDB, Mongoose | JWT, bcryptjs, Zod | CORS, Cookie Parser, dotenv, tsx |

### 🚀 Getting Started

<table>
  <tr>
    <td valign="top" width="40%">

#### Prerequisites

- **Node.js** (v18+)
- **npm** (v9+)
- **MongoDB** running locally or via MongoDB Atlas

#### ⚙️ Environment Variables

Create a `.env` file in the project root and add:

```env
PORT=3030
MONGO_URI=mongodb://localhost:27017/personal-book-manager
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

> 💡 Never commit your `.env` file.

</td>
    <td valign="top" width="60%">

#### Installation

1. Clone the repository

```bash
   git clone https://github.com/your-username/personal-book-manager-backend.git
   cd personal-book-manager-backend
```

2. Install dependencies

```bash
   npm install
```

3. Start the development server

```bash
   npm run dev
```

4. Build for production

```bash
   npm run build
   npm start
```

</td>
  </tr>
</table>

### 🔗 API Endpoints (Base URL: `/api`)

<table>
  <tr>
    <td valign="top" width="60%">

| Method | Endpoint | Description | Auth Required |
|:------:|----------|-------------|:-------------:|
| `POST` | `/auth/register` | Register a new user | No |
| `POST` | `/auth/login` | Login user and create JWT cookie | No |
| `POST` | `/auth/logout` | Clear auth cookie | Yes |
| `GET` | `/auth/profile` | Get current authenticated user | Yes |
| `POST` | `/books/create` | Create a new book | Yes |
| `GET` | `/books/get-books` | Get all books for the logged-in user | Yes |
| `PATCH` | `/books/update/:id` | Update a book | Yes |
| `DELETE` | `/books/delete/:id` | Delete a book | Yes |

</td>
    <td valign="top" width="40%">

#### 📁 Project Structure

```text
Personal_Book_Manager_Backend/
├── src/                  # Application source code
│   ├── app.ts            # Express app setup
│   ├── server.ts         # Server entry point
│   ├── common/           # Shared utilities and middleware
│   ├── config/           # Database config
│   ├── models/           # Mongoose models
│   └── modules/          # Auth and book feature modules
├── dist/                 # Compiled output
├── .env                  # Environment variables
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

</td>
  </tr>
</table>

<table>
  <tr>
    <td valign="top" width="50%">

#### 👥 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests for roadmap improvements, API enhancements, or bug fixes.

</td>
    <td valign="top" width="50%">

#### 📄 License

This project is licensed under the [MIT License](LICENSE).

</td>
  </tr>
</table>


Made with ❤️ by [Neel Samel](https://github.com/NEELSAMEL19)
