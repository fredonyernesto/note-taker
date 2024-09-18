Note Taker
Description
The Note Taker application is a web-based tool designed to help users write and save notes. The application features a user-friendly interface where users can create, view, and manage notes. The backend is built using Express.js and stores notes in a JSON file. The front end is already provided and seamlessly integrates with the Express.js backend to offer a smooth user experience.

Table of Contents
Note Taker
Description
Table of Contents
Installation
Usage
API Routes
HTML Routes
API Routes
Tests
Deployment
GitHub Repository
Walkthrough Video
Contact
Acknowledgements
Installation
Clone the repository:
git clone https://github.com/your-github-username/note-taker.git
Navigate into the project directory:
cd note-taker
Install the dependencies:
npm install
Start the server:
npm start
Open your browser and navigate to http://localhost:3001 to use the application.
Usage
Open the Note Taker application in your web browser.
On the landing page, click the link to go to the notes page.
On the notes page, you will see existing notes listed in the left-hand column and empty fields to enter a new note title and text in the right-hand column.
Enter a new note title and text, then click "Save Note" to save the note.
Click on any existing note in the left-hand column to view its details in the right-hand column.
To create a new note, click the "New Note" button in the navigation.
API Routes
HTML Routes
GET /notes: Returns the notes.html file.
GET /: Returns the index.html file.
API Routes
GET /api/notes: Reads the db.json file and returns all saved notes as JSON.
POST /api/notes: Receives a new note to save in the db.json file and returns the new note to the client. Each note is assigned a unique ID.
DELETE /api/notes/:id: Deletes a note by its ID from the db.json file.
Tests
There are no automated tests included in this application. To test the application, manually verify that the following features work:

Viewing existing notes
Creating new notes
Saving notes
Viewing and selecting notes from the list
Clearing forms and adding new notes
Deployment
The Note Taker application has been deployed to Render. You can access the live application at the following URL:

Deployed Note Taker Application

GitHub Repository
You can find the source code for this application on GitHub:

Note Taker GitHub Repository

Walkthrough Video
A walkthrough video demonstrating the functionality of the Note Taker application can be found here:

Walkthrough Video

Contact
For any questions or issues, please contact your-email@example.com.

Acknowledgements
This project utilizes the Express.js framework for building the backend.
The application stores notes in a JSON file using the fs module.
The front end is already created and is integrated with the Express.js backend.
