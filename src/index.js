const getReviews = () => {
  fetch("http://localhost:3000/api/v1/reviews")
    .then(r => r.json())
    .then(reviews => {
        reviews.forEach(reviewData => {
          const review = new Review(reviewData)
          review.render()  
        })
    })
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