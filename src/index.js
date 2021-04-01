const getReviews = () => {
  fetch("http://localhost:3000/api/v1/reviews")
    .then(r => r.json())
    .then(reviews => {
        reviews.forEach(review => {
            renderReview(review)
        })
    })
}

const renderReview = (review) => {
    const reviewContainer = document.querySelector("#review-container")
    const reviewCard = 
      `<div class="col">
        <div class="card shadow-sm">
          <img src="${review.imageUrl} class="bd-placeholder-img card-img-top" width="100%" height="225" alt="restaurant-image">
          <div class="card-body">
            <strong>${review.restaurant}</strong> - <em>${review.location}</em>
            <p>${review.rating}/10</p>
            <p class="card-text">"${review.description}"</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Delete</button>
              </div>
              <small class="text-muted">Reviewed by ${review.author} - ${review.date}</small>
            </div>
          </div>
        </div>
      </div>`
      
      reviewContainer.innerHTML += reviewCard

}

// fetch("http://localhost:3000/api/v1/reviews/1", {
//   method: "PATCH",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify({ 
//     author: "Alvin"
//   })
// })
//   .then(r => r.json())
//   .then(console.log)

getReviews()