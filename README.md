# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React applications involving the `useEffect` hook: an infinite loop caused by a missing dependency array.

## Bug Description

The `useEffect` hook, without a properly defined dependency array, will re-run after every render, creating an infinite loop that updates the state continuously. This leads to performance issues and potentially crashes the application.

## Solution

The solution involves correctly specifying the dependency array in the `useEffect` hook. The array should list any state variables or props that the effect depends on. If the effect doesn't depend on any external variables, an empty array `[]` should be used to ensure the effect runs only once after the initial render.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the console output and the rapidly changing count value.