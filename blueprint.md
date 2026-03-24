# Lotto Number Generator

## Overview

This is a simple web application that generates lottery numbers.

## Features

*   Generate 6 unique random numbers between 1 and 45.
*   Display the generated numbers.
*   Display a history of generated numbers.
*   **Dark/Light Mode Toggle:** Switch between dark and light themes with persistence using `localStorage`.

## Design

*   **Layout:** A simple, single-column layout.
*   **Colors:** A modern color palette with dark (default) and light modes.
*   **Typography:** Clear and readable fonts.
*   **Components:**
    *   A "Generate" button.
    *   A display for the current set of numbers.
    *   A list of past number sets.
    *   A theme toggle button.

## Plan

1.  **HTML (`index.html`):**
    *   Set up the basic HTML structure with a title, a main container, a button, and containers for the numbers.
    *   Add a theme toggle button.
2.  **CSS (`style.css`):**
    *   Style the body, container, button, and number display areas.
    *   Use CSS variables for colors.
    *   Define a `.light-mode` class for the light theme.
    *   Add transitions for smooth theme switching.
3.  **JavaScript (`main.js`):**
    *   Create a custom element `lotto-numbers` to display a set of 6 numbers.
    *   Implement the logic to generate 6 unique random numbers.
    *   Add an event listener to the "Generate" button.
    *   Implement theme toggle logic with `localStorage` persistence.

