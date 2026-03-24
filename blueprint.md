# Lotto Number Generator

## Overview

This is a simple web application that generates lottery numbers.

## Features

*   Generate 6 unique random numbers between 1 and 45.
*   Display the generated numbers.
*   Display a history of the last 5 generated number sets.
*   **Dark/Light Mode Toggle:** Switch between dark and light themes with persistence using `localStorage`.
*   **Partnership Inquiry Form:** A simple contact form for partnerships, powered by Formspree.

## Design

*   **Layout:** A single-column layout with a lottery generator section and a partnership inquiry section separated by a horizontal rule.
*   **Colors:** A modern color palette with dark (default) and light modes.
*   **Typography:** Clear and readable fonts.
*   **Components:**
    *   A theme toggle button.
    *   A "Generate" button for lottery numbers.
    *   A display area for current and historical numbers.
    *   A partnership inquiry form with Name, Email, and Message fields.

## Plan

1.  **HTML (`index.html`):**
    *   Set up the basic HTML structure with a title, a main container, a button, and containers for the numbers.
    *   Add a theme toggle button.
    *   Add a partnership inquiry section with a Formspree action.
2.  **CSS (`style.css`):**
    *   Style the body, container, buttons, and number display areas.
    *   Use CSS variables for colors.
    *   Define a `.light-mode` class for the light theme.
    *   Add transitions for smooth theme switching.
    *   Style the partnership inquiry form for consistency across themes.
3.  **JavaScript (`main.js`):**
    *   Create a custom element `lotto-numbers` to display a set of 6 numbers.
    *   Implement the logic to generate 6 unique random numbers.
    *   Add an event listener to the "Generate" button.
    *   Implement theme toggle logic with `localStorage` persistence.


