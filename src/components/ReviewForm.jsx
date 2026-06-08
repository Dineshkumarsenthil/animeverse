import { useState } from "react";

function ReviewForm() {
  const [form, setForm] = useState({
    name: "",
    comment: "",
  });
  const [reviews, setReviews] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.comment.trim()) {
      alert("Please fill all fields");
      return;
    }

    const newReview = {
      id: Date.now(),
      ...form,
    };

    setReviews([newReview, ...reviews]);
    setForm({ name: "", comment: "" });
  };

  const deleteReview = (id) => {
    setReviews(reviews.filter((review) => review.id !== id));
  };

  return (
    <div className="review-section">
      <form onSubmit={handleSubmit} className="review-form">
        <input
          type="text"
          placeholder="Your name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <textarea
          placeholder="Write your review"
          value={form.comment}
          onChange={(e) => setForm({ ...form, comment: e.target.value })}
        ></textarea>
        <button className="btn">Submit Review</button>
      </form>

      <div className="review-list">
        {reviews.map((review) => (
          <div key={review.id} className="review-item">
            <h4>{review.name}</h4>
            <p>{review.comment}</p>
            <button className="btn-outline small" onClick={() => deleteReview(review.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewForm;
