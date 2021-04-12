const BASE_URL = "http://localhost:3000/api/v1"


const reviewContainer = document.querySelector("#review-container")
const reviewForm = document.querySelector("#review-form")
const catFilter = document.querySelector("#cat-filter")


catFilter.addEventListener("click", filterCategory)
reviewForm.addEventListener("submit", submitReview)
reviewContainer.addEventListener("click", e => {
    if (e.target.matches("button")) {
        deleteReview(e.target.dataset.id)
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove()
        // location.reload()
    }
})

function filterCategory() {
    const categorySelection = parseInt(document.querySelector("#category-pick").value)
    const reviews = Review.all.filter((review) => {
        return review.category.id === categorySelection

        
    })
    reviewContainer.innerHTML = ''
    reviews.forEach(review => {
        
        review.render()
    })
}

function getReviews() {
  fetch(`${BASE_URL}/reviews`)
    .then(r => r.json())
    .then(reviews => {
        reviews.forEach(reviewData => {
          const review = new Review(reviewData)
          review.render()  
        })
    })
}

function submitReview(e) {
    e.preventDefault()

    const reviewData = {
        author: reviewForm.author.value,
        restaurant: reviewForm.restaurant.value,
        location: reviewForm.location.value,
        image_url: reviewForm.image.value,
        rating: parseInt(reviewForm.rating.value),
        description: reviewForm.description.value,
        category_id: parseInt(reviewForm.category.value)
    }

    const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(reviewData)
    }

    fetch(`${BASE_URL}/reviews`, config)
      .then(res => res.json())
      .then(reviewObj => {
          const review = new Review(reviewObj)
          review.render()
          reviewForm.reset()
      })
    
  
}

function deleteReview(id) {
    fetch(`${BASE_URL}/reviews/${id}`, {
        method: "DELETE"
    })
}


getReviews()