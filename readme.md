# Degree Dollars Developer Contribution Guide

Degree Dollars is a crowdfunding web application designed to assist college students in raising funds for their tuition expenses. The platform aims to provide a user-friendly, secure, and transparent environment for students to seek financial support from a community of donors and sponsors who believe in the power of education.

### 1. Contributing Code

Please note that contributions to the master branch are not allowed. Instead, you will have to create a separate branch with the naming convention "@Stack/task-accomplished" and then do your work there.

**For Example:**

`git checkout -b @Backend/Updated-The-Global-Error-Handler`.

After completing this step, push your code to github and make a pull request. It will be reviewed by developers in short order.

### 2. Adding sensitive files

Developers, please do not push .env files to this repo in order to protect your privacy. Pull requests with .env files will be rejected. Instead, upload a sample with the key. There is a utility function in the code that will fire when in development mode to create a .env.sample file, so you don't have to worry about that.
