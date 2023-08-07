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
