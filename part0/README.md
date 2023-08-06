```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://students.cs.helsenki.fi/exampleapp/new_note
    activate server
    Note right of browser: Data was entered in form area it's contained in request body and processed on the server and then add to the note array.
    server-->>browser: Status Code: 302 Found
    deactivate server
    Note right of browser: This code tells to browser that resource has been moved to address specified at "Location" of header.
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    Note right of browser: This method was called for reason of the status code is 302.
    server->>browser: HTML document
    deactivate server
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate server
    Note right of browser: The browser executes the callback function that renders the notes