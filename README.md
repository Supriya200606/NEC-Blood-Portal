# NEC Blood Portal

NEC Blood Portal is a simple web application to connect blood donors and recipients. It contains a React frontend and a Node/Express backend that stores data in MongoDB.

This README explains how to run the project locally and where to configure the database connection.

## Preview

If a Preview image is available in the original repository, it may be shown under `frontend/Preview.png` or via the upstream project link.

## Tech stack

- Frontend: React, Tailwind CSS
- Backend: Node.js, Express
- Database: MongoDB (via Mongoose)

## Features

- User registration and login
- Donor registration (blood type, contact, availability)
- Request blood (specify blood type, urgency and contact)
- Basic notification / contact features

## Prerequisites

- Node.js (v14+ recommended)
- npm or yarn
- MongoDB (local instance or a connection string to a hosted cluster)

## Configuration

The backend uses environment variables configured in `backend/.env`. Important variables:

- `MONGODB_URI` — MongoDB connection string. Example for a local DB:

  MONGODB_URI="mongodb://127.0.0.1:27017/<your-db-name>"

  Replace `<your-db-name>` with the database name you want to use and edit the URI in `backend/.env`.

- `JWT_TOKEN`, `PORT`, and email settings are also defined in `backend/.env`.

## Run locally (PowerShell)

Open two terminals (one for backend, one for frontend).

Backend

```powershell
cd backend
npm install
npm run dev
```

Frontend

```powershell
cd frontend
npm install
npm run dev
```

The frontend typically runs on http://localhost:3000 and the backend on http://localhost:5000 (check `backend/server.js` and `backend/.env` for exact ports).

## Database notes

- MongoDB creates databases and collections only after you insert documents. If you change `MONGODB_URI` to point to a new DB name, the DB will start empty until the app writes data.
- If you need to copy existing data from one DB to another, use `mongodump`/`mongorestore` or the mongo shell. See the `backend/` folder for DB connection code.

## Contributing

- Make changes on feature branches and open pull requests.
- Keep frontend and backend concerns separated.

## License & Contact

This project is provided as-is. For questions or help running the project, open an issue in the repository or contact the maintainer.

---

If you'd like, I can also:

- Update references to the project name across the repo (manifest, package.json, other display strings), or
- Add a small migration helper script under `backend/tools/` to move data between MongoDB databases.

Tell me which of the above you'd like next.
# NEC Blood Portal

NEC Blood Portal is a simple web application to connect blood donors and recipients. It contains a React frontend and a Node/Express backend that stores data in MongoDB.

This README explains how to run the project locally and where to configure the database connection.

## Preview

If a Preview image is available in the original repository, it may be shown under `frontend/Preview.png` or via the upstream project link.

## Tech stack

- Frontend: React, Tailwind CSS
- Backend: Node.js, Express
- Database: MongoDB (via Mongoose)

## Features

- User registration and login
- Donor registration (blood type, contact, availability)
- Request blood (specify blood type, urgency and contact)
- Basic notification / contact features

## Prerequisites

- Node.js (v14+ recommended)
- npm or yarn
- MongoDB (local instance or a connection string to a hosted cluster)

## Configuration

The backend uses environment variables configured in `backend/.env`. Important variables:

- `MONGODB_URI` — MongoDB connection string. Example for a local DB:

  MONGODB_URI="mongodb://127.0.0.1:27017/<your-db-name>"

  Replace `<your-db-name>` with the database name you want to use and edit the URI in `backend/.env`.

- `JWT_TOKEN`, `PORT`, and email settings are also defined in `backend/.env`.

## Run locally (PowerShell)

Open two terminals (one for backend, one for frontend).

Backend

```powershell
cd backend
npm install
npm run dev
```

Frontend

```powershell
cd frontend
npm install
npm run dev
```

The frontend typically runs on http://localhost:3000 and the backend on http://localhost:5000 (check `backend/server.js` and `backend/.env` for exact ports).

## Database notes

- MongoDB creates databases and collections only after you insert documents. If you change `MONGODB_URI` to point to a new DB name, the DB will start empty until the app writes data.
- If you need to copy existing data from one DB to another, use `mongodump`/`mongorestore` or the mongo shell. See the `backend/` folder for DB connection code.

## Contributing

- Make changes on feature branches and open pull requests.
- Keep frontend and backend concerns separated.

## License & Contact

This project is provided as-is. For questions or help running the project, open an issue in the repository or contact the maintainer.

---

If you'd like, I can also:

- Update references to the project name across the repo (manifest, package.json, other display strings), or
- Add a small migration helper script under `backend/tools/` to move data between MongoDB databases.

Tell me which of the above you'd like next.
## NEC Blood Portal

NEC Blood Portal is a simple web application to connect blood donors and recipients. It contains a React frontend and a Node/Express backend that stores data in MongoDB.

This README explains how to run the project locally and where to configure the database connection.

## Preview

If a Preview image is available in the original repository, it may be shown under `frontend/Preview.png` or via the upstream project link.

## Tech stack

- Frontend: React, Tailwind CSS
- Backend: Node.js, Express
- Database: MongoDB (via Mongoose)

## Features

- User registration and login
- Donor registration (blood type, contact, availability)
- Request blood (specify blood type, urgency and contact)
- Basic notification / contact features

## Prerequisites

- Node.js (v14+ recommended)
- npm or yarn
- MongoDB (local instance or a connection string to a hosted cluster)

## Configuration

The backend uses environment variables configured in `backend/.env`. Important variables:

- `MONGODB_URI` — MongoDB connection string. Example for a local DB:

  MONGODB_URI="mongodb://127.0.0.1:27017/<your-db-name>"

  Replace <your-db-name> with the database name you want to use and edit the URI in `backend/.env`.

- `JWT_TOKEN`, `PORT`, and email settings are also defined in `backend/.env`.

## Run locally (PowerShell)

Open two terminals (one for backend, one for frontend).

Backend

```powershell
cd backend
npm install
npm run dev
```

Frontend

```powershell
cd frontend
npm install
npm run dev
```

The frontend typically runs on http://localhost:3000 and the backend on http://localhost:5000 (check `backend/server.js` and `backend/.env` for exact ports).

## Database notes

- MongoDB creates databases and collections only after you insert documents. If you change `MONGODB_URI` to point to a new DB name, the DB will start empty until the app writes data.
- If you need to copy existing data from one DB to another, use `mongodump`/`mongorestore` or the mongo shell. See the `backend/` folder for DB connection code.

## Contributing

- Make changes on feature branches and open pull requests.
- Keep frontend and backend concerns separated.

## License & Contact

This project is provided as-is. For questions or help running the project, open an issue in the repository or contact the maintainer.

---

If you'd like, I can also:

- Update references to the project name across the repo (README, manifests, package.json), or
- Add a small migration helper script under `backend/tools/` to move data between MongoDB databases.

Tell me which of the above you'd like next.
  - Node.js
  - Express.js
  - MongoDB (Database)

## Features

1. **Login with MongoDB as the Database**: Users can securely log in to their account using their credentials, which are stored in MongoDB.
2. **Blood Donation Form**: Donors can fill out a form with their blood type, contact information, and availability to donate blood.
3. **Blood Request Form**: Individuals in need of blood can submit a request for blood, specifying their blood type, urgency, and contact details.
4. **Context for State Management**: The application uses React Context for managing global state, enabling easy access to data across components.

## Setup Instructions

### Frontend

1. Build command: 
   ```bash
   npm install

2. Run command:
   ````bash
   npm run dev

 ### Backend

1. Build command: 
   ```bash
   npm install

2. Run command:
   ````bash
   npm run dev
