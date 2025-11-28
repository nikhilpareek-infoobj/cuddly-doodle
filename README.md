# cuddly-doodle

This is a small Node.js + Express sample project with two demo APIs and tests.

## APIs

- GET /api/health - returns a JSON payload with status `ok` and the current server time.
- POST /api/echo - echoes the posted JSON payload and appends an `echoedAt` timestamp.

## Development

Install dependencies:

```powershell
npm install
```

Run locally:

```powershell
npm run dev
```

Run tests:

```powershell
npm test
```

Server will run on port 3000 by default. Set `PORT` env variable to change it.

Happy hacking!