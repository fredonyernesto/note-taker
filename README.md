# note-taker# Note Taker

## Description
Note Taker is a web application that allows users to write, save, and organize notes. The application uses an Express.js backend to handle data storage and retrieval from a `db.json` file. Users can view existing notes, create new ones, and interact with saved notes through a user-friendly interface.

## User Story
As a small business owner, I want to be able to write and save notes so that I can organize my thoughts and keep track of tasks I need to complete.

## Acceptance Criteria
- **Landing Page:** When opening the Note Taker, users are presented with a landing page that includes a link to the notes page.
- **Notes Page:** Clicking the link takes users to a page with existing notes listed in the left-hand column and empty fields for entering a new note title and text in the right-hand column.
- **Save Note:** After entering a new note title and text, users can click the "Save Note" button to save the note, which then appears in the left-hand column. The buttons will then disappear.
- **Existing Notes:** Clicking an existing note displays it in the right-hand column, with a "New Note" button appearing in the navigation.
- **New Note:** Clicking the "New Note" button clears the fields in the right-hand column and hides the button.

## Getting Started
1. **Backend Setup:**
   - **File Storage:** The application uses `db.json` to store and retrieve notes.
   - **HTML Routes:**
     - `GET /notes` returns the `notes.html` file.
     - `GET *` returns the `index.html` file.
   - **API Routes:**
     - `GET /api/notes` reads from `db.json` and returns all saved notes as JSON.
     - `POST /api/notes` receives a new note, adds it to `db.json`, and returns the new note with a unique ID.
     - **Bonus:** `DELETE /api/notes/:id` deletes a note based on its ID from `db.json`.

2. **Frontend Setup:**
   - The frontend includes HTML, CSS, and JavaScript to interact with the backend and manage notes.

3. **Deployment:**
   - The application is deployed on Render. The live URL is provided below.

## Installation
1. Clone the repository.
2. Navigate to the project directory and install dependencies using `npm install`.
3. Start the server with `node server.js` (or your specified entry point).
4. Open the application in a web browser.

## License
This application is licensed under the MIT License.

## Contribution
Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## Tests
Unit tests are provided for the backend routes. Run the tests using `npm test`.

## Contact
For any questions, suggestions, or further information, you can reach out via email at [fredony.ernesto@gmail.com](mailto:fredony.ernesto@gmail.com). You can also find me on GitHub at [fredonyernesto](https://github.com/fredonyernesto). I’d love to hear from you!

## Repository
Check out the repository for this project [here](https://github.com/fredonyernesto/note-taker).

## Deployed Application
The live application can be accessed [here](https://your-deployed-app-url.render.com).

## Screenshots
![Note Taker Screenshot](link-to-screenshot.png)

## Walkthrough Video
A walkthrough video demonstrating the functionality of the Note Taker application and passing tests can be viewed [here](https://link-to-your-video).
