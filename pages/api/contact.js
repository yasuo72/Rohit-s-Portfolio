export default async function handler(req, res) {
  // Only allow POST method
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Log the form submission (you can replace this with email sending or database storage)
    console.log('Form submission received:', {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    // Return success response
    return res.status(200).json({ 
      message: 'Thank you for your message. I will get back to you soon!' 
    });

  } catch (error) {
    console.error('Form submission error:', error);
    return res.status(500).json({ message: 'Something went wrong. Please try again.' });
  }
}
