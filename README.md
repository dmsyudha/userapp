# User App

A mobile application for managing user details.

## Features

- List all users
- View detailed information about a user
- Edit user details
- Offline support with data synchronization

## Tech Stack

- React Native
- Apollo Client for GraphQL
- React Navigation

## Directory Structure

- `src/components`: Contains all the UI components.
  - `atoms`: Smallest UI components.
  - `molecules`: Slightly larger components that might use multiple atoms.
  - `organisms`: Larger components that might use multiple molecules.
  - `templates`: Page layouts.
- `src/contexts`: Contains React context providers.
- `src/graphql`: GraphQL queries and mutations.
- `src/hooks`: Custom hooks for various functionalities.
- `src/navigation`: Navigation related files.
- `src/screens`: Screens of the app.
- `src/stores`: Contains the Apollo Client setup.
- `src/utils`: Utility functions.

## Setup

1. Clone the repository:
`git clone https://github.com/dmsyudha/userapp.git`

2. Install dependencies:
`cd userapp && yarn`

3. Run the app:
`yarn android`

4. Test the app:
`yarn test`

## Preview 
User List
![image](https://github.com/dmsyudha/userapp/assets/10308616/5b991890-ec6a-4a50-9277-3f941da463ca)
User Detail
![image](https://github.com/dmsyudha/userapp/assets/10308616/18739654-21f0-4d4c-b0aa-937365831b39)
User Edit
![image](https://github.com/dmsyudha/userapp/assets/10308616/6a22b5d4-21c0-4912-bdfd-5c70e052407b)
