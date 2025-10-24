Introduction to express js

    - Express.js is a minimal and flexible web application framework for Node.js based on http module.
    - It simplifies routing, middleware, and handling HTTP requests in Node. js applications.
    - It is an extremely popular with wide community support.
    - Alternatives: Fastify, Nest.js, Koa, Hono, Elysia.js
    - Use npm install express command to install Express.js
        - We are going to use Express.js v5 in this project which is already stable.
        - For some reasons, directly installing express installs v4, which is why, you can use npm install express@5 to install latest version.

For Update checking command - npx npm-check-updates

Enviornment variables

    - Enviornment variables are used to store congiguration values like port number, API keys, database URLs, or secrets outside the codebase.
    - Most platforms automatically add PORT environment variable which we can use.
    - You can access environment variable using process.env. Process is a global object available in Node.js
    - To access environment variable, you first have to set in your Operating System.
        - For macOS, and Linux, you can use export VARIABLE_NAME="value” in your terminal
        - On Powershell, you can use $env:VARIABLE_NAME="value”
        - On Command Prompt, you can use set VARIABLE_NAME=value
        - If you want to set permanently on Linux, and macOS, you have to include that command in your shell config (~/.bashre, ~/.zshrc, etc.)
        - If you want to set permanently on Windows, you can search “Environment Variables” in windows search.

.env file for development

    - Setting environment variable using command is tedious in development, especially if you have multiple projects.
    - So, we typically use .env file to manage our environment variables.
    - This isn't a file which you will share with others as it includes sensitive information, so make sure to include it in .gitignore. To let developers know which variables are needed, you can include .env.example file with empty values.
    - .env file typically has environment variables in this syntax: VARIABLE=value separated by new line.
    - After Node.js v20.6.0, we can directly include .env file using --env-file syntax.
    - For older versions, you have to install a separate package named dotenv and import it in your project.
        - import 'dotenv/config'
        - require('dotenv').config()
    - Since, Node.js has this feature, we will uses built-in feature for that.

Terminal command for checking port no. = echo $env:PORT, for removing this run this command = Remove-Item env:\PORT