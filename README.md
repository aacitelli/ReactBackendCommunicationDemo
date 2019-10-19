# Run Instructions: 

1. Clone this repo 
2. Run `npm install` in the main folder
3. Run `node server.js` in the main folder 
    - You can also install nodemon and run using `nodemon server.js` to have the server automatically restart when changes occur
4. Run `npm run start` in the main folder
5. If it didn't automatically open, open `localhost:3000` in your browser. You can use the provided display to send data to the backend, which will be output in your terminal window. 
    - React's output is logged to the browser console, whereas Node's output is logged to the terminal.

# Explanation of How it Works 

## The Front-End

All the front-end is doing is sending a Fetch POST request containing some simple text as the body of the POST. It is also capable of receiving whatever the response of the POST request was, though that's not contained in this demo. 

## The Back-End 

The back-end listens for a POST request to the `/` route, then parses the body of it using `body-parser` and logs it to the console. 