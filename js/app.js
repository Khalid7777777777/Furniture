"use strict";
const slider = document.querySelector('.review-slider');
const reviews = slider.querySelectorAll('.review');

let currentReviewIndex = 0; // Keeps track of the currently displayed review

function showReview(index) {
  reviews.forEach((review, reviewIndex) => {
    review.style.top = reviewIndex === index ? '0' : '100%'; // Set top position based on index
  });
  currentReviewIndex = index;
}

// Add event listeners for navigation (optional)
// ...

// Call the showReview function to display the initial review
showReview(currentReviewIndex);
