- You will need to have Node installed to start this environment. If you are not sure if you have Node installed run `node -v` in your terminal. If you do not see a version number output, install Node before moving on.
- Install light-server locally and save it to your development environment by running `npm install lite-server --save-dev` in your terminal.
- Run `npm run start` in your terminal to start the server.
- Your browser will open at `localhost:3000`.

why reversed the script and started with utils.js
What you're doing now is to use pure static client side files - what does that mean? we'll get to that later :slightly_smiling_face:
Practically - what exactly do we have here?
The html file is the 'mother load' , the main player here. It is being loaded first and then it loads the other files.
Only files that the html loads, can be used.
So how do we load files from the html?
If we're talking about js files, it is being done by the script tags as we saw together.
When we use script tags inside an html file, they are being loaded in the same order as they are placed in the file itself. In our case - home.js was loaded before utils.js
Now why did that caused a problem?
That's cause the function we needed was defined in utils.js and that file was yet to be loaded.
When we changed the order, we could use all the functions in utils.js from all file we've loaded after.





On modern js applications - we use a thing called a bundler.
Now what's a bundler?
Think about it this way - you can write your app in many different js files. The bundler will take all the js files and squeeze them into one file. Suppose we call that file bundle.js
Now from our HTML file, we can load only the bundle.js instead all the the files one by one.
While using a bundler, it's easier to import and export functions and variables from file to file



npm install -g eslint   //installing eslint in vs code
eslint --init   //for configuration
then answer Qns that followed for completing configuration

npm install -g npm //installing npm globall

sudo npm i -g npm

npm install --save-dev start-server-and-test
