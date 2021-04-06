class Review {
    constructor(reviewData ) {
        this.review = reviewData
        Review.call.push(this)
    }

    render() {
        const reviewContainer = document.querySelector("#review-container")
        const reviewCard = 
          `<div class="col">
            <div class="card shadow-sm">
              <img src="${this.review.imageUrl} class="bd-placeholder-img card-img-top" width="100%" height="225" alt="restaurant-image">
              <div class="card-body">
                <strong>${this.review.restaurant}</strong> (${this.review.category.name}) - <em>${this.review.location}</em>
                <p>${this.review.rating}/10</p>
                <p class="card-text">"${this.review.description}"</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">Delete</button>
                  </div>
                  <small class="text-muted">Reviewed by ${this.review.author} - ${this.review.date}</small>
                </div>
              </div>
            </div>
          </div>`
          
        reviewContainer.innerHTML += reviewCard
    }
}

Review.all = []


