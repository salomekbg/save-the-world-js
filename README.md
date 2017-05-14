# Save the World!

This web app is written in JS and uses Redis to store values.
1. To install Redis, make sure that you have NodeJS and NPM.  You can check versions of both by using the commands 'node -v' and 'npm -v' in your terminal.
2. Then use the command, 'npm install redis' in your project directory to install redis.
3. You can run the Redis server by going into the Redis folder in your project and using the command 'src/redis-server'.
4. You can access the client via the command, 'src/redis-cli'.
5. Make sure that you also have a package.json file in your project directory to manage dependencies.  You can create one, by using the command, 'npm init'.
6. To start the app, make sure that your Redis server is running in a terminal window and in another terminal window, run 'node redis.js'.
7. Since I wanted to use Redis in a web application and not just locally, I wanted to pass information from the frontend (HTML & JS) to the backend (Node & Redis).  Thus, I used Express, middleware to deal with CORS issue and bodyParser middleware for posting information from JS to NodeJS.
