class Review {
    constructor(reviewData) {
        this.id = reviewData.id
        this.author = reviewData.author
        this.restaurant = reviewData.restaurant
        this.location = reviewData.location
        this.imageUrl = reviewData.imageUrl
        this.rating = reviewData.rating
        this.description = reviewData.description
        this.date = reviewData.date
        this.category = reviewData.category
        Review.all.push(this)
    }

    render() {
        const reviewCard = 
          `<div class="col">
            <div class="card shadow-sm">
              <img src="${this.imageUrl} class="bd-placeholder-img card-img-top" width="100%" height="225" alt="restaurant-image">
              <div class="card-body">
                <strong>${this.restaurant}</strong> (${this.category.name}) - <em>${this.location}</em>
                <p>${this.rating}/10</p>
                <p class="card-text">"${this.description}"</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">Delete</button>
                  </div>
                  <small class="text-muted">Reviewed by ${this.author} - ${this.date}</small>
                </div>
              </div>
            </div>
          </div>`
          
        reviewContainer.innerHTML += reviewCard
    }
}

Review.all = []

