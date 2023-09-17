# Task Name:

User profile task

# Date:

17-9-2023

# Task Description:

Full Stack React, Node, Express, MongoDB (MERN_Stack) with Amazon Web Services AWS, which enables the editing of your profile information experience.

# Steps

input: Name, Bio, Location, Website, Join Date, Number of followers, Number of following
output: Tooster (MUI Alert)

# Changes Made:

Due to the lack of provided API it was infeasible to implement the task requirements with full functionality, I've emailed Eng Murad and I suggested to build the backend myself from scratch and he accepted.
so it's became a Full_Stack Task (MERN_Stack) with Clouding service (AWS).

# main Parts

- Develop an API for CURD operations.
- Build MongoDB schema.
- Publish the MongoDB to AWS cluster.
- Publish the backend component to AWS EC2.
- access the EC2 Instance using SSH and CMD and handle the Security groups and the Network access control list "NACL".
- use Next Js and Typescript to construct the necessary UI and logic.
- use the React Query package to retrieve data from an API.
- use the MUI Grid system to build form input fields.
- Permit data modification and patch the server using the PUT method and React Query mutation.
- Use MUI Tooster (Alert) to send feedback on the procedure, whether it was successful or unsuccessful.
- Testing.

# Structure of The Project

    ## Screens
    - Input Form (should be the component)
    - Error Screen
    - Loading Screen

    ## components
    - Form component
    - App Bar

    ##logic
    - inside utils folder you can find the necessary logic to call API, create interfaces,  React Query provider and queryClient Options.

    ## integrations
    - the component "Form" contains the logic of the form submission and calls the inputForm Screen as well as passing these necessary logic to it.
    - the component "Form"  calls both Loading Screen as well as Error Screen if the api request status is Loading or isError.

# How to run ?

- FrontEnd => npm run dev.
- BackEnd => node app.js
- open projectLint/users/profile to access the page where the main functionalities.

# Important Notes

- if the backend doesn't response then email me to restart The EC2 instance.

# Links

## Github FrontEnd

## Github BackEnd:

        https://github.com/HamzAlaydi/profile_task_api

## EC2 Public API

        http://3.127.244.173:5000/users

# author

    Eng Hamza J ALaydi
