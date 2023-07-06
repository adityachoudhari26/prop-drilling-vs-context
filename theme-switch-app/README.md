# React Concepts: Prop Drilling vs Context API

## Prop Drilling

Prop drilling is a technique in React where props are passed from one part of the tree to another by going through other parts that do not need the data, but help pass it around.

Pros:

1. **Simple to understand:** Great for small applications where state can be easily managed.

Cons:

1. **Code complexity:** As application grows large, passing props down multiple levels becomes complex.
2. **Maintenance:** Any small change in the structure might require significant code modifications.

Example: Consider the initial code, where theme prop is passed from App to Header, then Navbar, and then UserIcon.

## Context API

It provides a way to share values between components without having to explicitly pass a prop through every level of the tree. Context is designed to share data that can be considered "global".

Pros:

1. **Avoid prop drilling:** No need to pass props through intermediate levels.
2. **Ease of use:** Easier to manage state in larger applications.

Cons:

1. **Less optimized:** Re-renders might be more frequent as a context value can change components high up in the tree.

Example: The latter code uses ThemeContext to provide and consume the theme state. App, Header, Navbar, and UserIcon all just use useTheme() to access it.

## Comparison

When comparing, prop drilling is perfectly fine for small components and applications where the levels aren't deeply nested. However, in a large application, this prop drilling becomes a pain point, which can be solved using Context API.

Prop drilling can lead to component complexity and can make code harder to maintain. Context API solves this problem by making data accessible at multiple levels without passing it through props.

However, avoid overuse of the Context API. Every Context consumer re-renders when the context value changes, which can lead to unnecessary rendering if components consume a context but don't need to use the data that changed.

## Code Comparisons

In our earlier prop drilling example, we can notice theme being passed as a prop repeatedly from App to UserIcon.
