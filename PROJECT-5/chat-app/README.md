# CHAT APP using Socket.io and Node.js

## Explanation
### Node.js/Express:
    The server is created using Express, and the HTTP server is set up using Node.js. The socket.io library is integrated to handle real-time communication.
### Socket.io:
    It manages WebSocket connections between the server and the clients. When a user sends a message, it's broadcasted to all connected users.
### Front-End (HTML/CSS/JS):
    The front-end consists of an HTML structure for the chat interface, CSS for styling, and JavaScript to manage the communication with the server using Socket.io.

## Testing the Chat App
    To run your chat application:

    Open your terminal and navigate to your project directory.
    Start the server using: node server.js

    Open multiple tabs in your browser with the same URL (http://localhost:3000). You should be able to send and receive messages between the tabs in real-time.