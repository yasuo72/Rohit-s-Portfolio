import fs from 'fs';
import path from 'path';

const reviewsFilePath = path.join(process.cwd(), 'data', 'reviews.json');

// Helper to read reviews
function getReviews() {
  try {
    const fileContents = fs.readFileSync(reviewsFilePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    return { reviews: [] };
  }
}

// Helper to write reviews
function saveReviews(data) {
  fs.writeFileSync(reviewsFilePath, JSON.stringify(data, null, 2));
}

export default function handler(req, res) {
  // GET - Fetch all reviews
  if (req.method === 'GET') {
    const data = getReviews();
    res.status(200).json(data);
  }
  // POST - Add new review
  else if (req.method === 'POST') {
    const { name, message, emotion, avatar } = req.body;

    if (!name || !message) {
      res.status(400).json({ error: 'Name and message are required' });
      return;
    }

    const data = getReviews();
    
    const newReview = {
      id: Date.now(),
      name: name.trim(),
      message: message.trim(),
      emotion: emotion || 'neutral',
      avatar: avatar || null,
      date: new Date().toISOString(),
    };

    data.reviews.unshift(newReview);
    saveReviews(data);

    res.status(201).json({ success: true, review: newReview });
  }
  // DELETE - Remove a review (optional)
  else if (req.method === 'DELETE') {
    const { id } = req.query;
    
    if (!id) {
      res.status(400).json({ error: 'Review ID is required' });
      return;
    }

    const data = getReviews();
    data.reviews = data.reviews.filter(r => r.id !== parseInt(id));
    saveReviews(data);

    res.status(200).json({ success: true });
  }
  else {
    res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
