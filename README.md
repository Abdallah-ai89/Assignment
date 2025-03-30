# Express.js Server with CORS and JSON Middleware

## Overview
This project is a simple Express.js server that uses `cors` and `express.json()` middleware to handle cross-origin requests and parse JSON request bodies.

## Installation

1. Clone this repository:
   ```sh
   git clone <https://github.com/Abdallah-ai89/assignment.git>
   cd <assignment>
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

## Usage

### Running the Server
Start the server with:
```sh
node index.js
```
By default, the server runs on `http://localhost:3000`.

### API Endpoints

#### POST /data
- Accepts JSON payloads.
- Example request:
  ```json
  {
    "name": "ahmed mohamed",
    "email": "ahmedmohamed@example.com"
  }
  ```
- Response:
  ```json
  {
    "message": "Data received successfully",
    "data": {
      "name": "ahmed mohamed",
      "email": "ahmedmohamed@example.com"
    }
  }
  ```

#### GET /test
- Returns a test message.
- Response:
  ```json
  {
    "message": "GET request successful"
  }
  ```

## Dependencies
- `express` - Web framework for Node.js.
- `cors` - Middleware for enabling CORS.

## License
This project is licensed under the MIT License.

