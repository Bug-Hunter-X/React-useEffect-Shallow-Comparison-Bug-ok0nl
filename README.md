# React useEffect Shallow Comparison Bug

This repository demonstrates a common error in React's `useEffect` hook: incorrectly comparing objects using the strict inequality operator (`!==`).  This can lead to unexpected behavior and missed updates.

## The Bug
The `bug.js` file contains a component that uses `useEffect` to detect changes in the `props.data` object.  However, the comparison `prevProps.data !== props.data` is flawed.  It only detects changes if the object reference changes, not if the object's properties change.

## The Solution
The `bugSolution.js` file provides a corrected implementation using a deep comparison technique with `JSON.stringify`.   While this works, more robust solutions may involve libraries like lodash's `isEqual` or a custom deep comparison function depending on the complexity of your data objects.