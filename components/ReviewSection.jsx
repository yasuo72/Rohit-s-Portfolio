import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane, FaSpinner } from "react-icons/fa";
import { BsEmojiSmile, BsEmojiFrown, BsEmojiHeartEyes, BsEmojiNeutral, BsEmojiLaughing } from "react-icons/bs";

const ReviewSection = () => {
  const [review, setReview] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);
  const [detectedEmoji, setDetectedEmoji] = useState(null);
  const [emojiRain, setEmojiRain] = useState([]);

  // Emoji components mapping
  const emojiComponents = {
    happy: BsEmojiSmile,
    love: BsEmojiHeartEyes,
    excited: BsEmojiLaughing,
    neutral: BsEmojiNeutral,
    sad: BsEmojiFrown,
  };

  // Detect emotion from message
  const detectEmotion = (message) => {
    const lowerMessage = message.toLowerCase();
    
    const emotions = {
      love: ["love", "amazing", "fantastic", "brilliant", "outstanding", "incredible", "best", "excellent", "superb", "wonderful"],
      excited: ["excited", "thrilled", "awesome", "wow", "impressive", "stunning", "remarkable", "exceptional"],
      happy: ["good", "great", "nice", "happy", "satisfied", "pleased", "helpful", "professional", "skilled", "talented"],
      neutral: ["okay", "fine", "average", "decent", "adequate"],
      sad: ["disappointed", "unhappy", "poor", "bad", "terrible", "awful", "worst", "frustrated"],
    };

    let maxScore = 0;
    let detectedEmotion = "neutral";

    for (const [emotion, keywords] of Object.entries(emotions)) {
      const score = keywords.reduce((acc, keyword) => {
        return acc + (lowerMessage.includes(keyword) ? 1 : 0);
      }, 0);
      
      if (score > maxScore) {
        maxScore = score;
        detectedEmotion = emotion;
      }
    }

    return detectedEmotion;
  };

  // Create emoji rain effect
  const createEmojiRain = useCallback((emotion) => {
    const EmojiComponent = emojiComponents[emotion] || BsEmojiSmile;
    const colors = {
      love: "#ff6b6b",
      excited: "#ffd93d",
      happy: "#6bcb77",
      neutral: "#4d96ff",
      sad: "#6c757d",
    };

    const rainEmojis = [];
    for (let i = 0; i < 30; i++) {
      rainEmojis.push({
        id: Date.now() + i,
        x: Math.random() * 100,
        delay: Math.random() * 0.5,
        duration: 2 + Math.random() * 2,
        size: 20 + Math.random() * 20,
        color: colors[emotion] || "#6bcb77",
        EmojiComponent,
      });
    }
    setEmojiRain(rainEmojis);

    // Clear rain after animation
    setTimeout(() => {
      setEmojiRain([]);
    }, 4000);
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!review.trim() || !name.trim()) return;

    setIsSubmitting(true);

    // Detect emotion
    const emotion = detectEmotion(review);
    setDetectedEmoji(emotion);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Show emoji popup
    setShowEmoji(true);

    // Start emoji rain
    createEmojiRain(emotion);

    // Hide emoji popup after delay
    setTimeout(() => {
      setShowEmoji(false);
      setIsSubmitting(false);
      setReview("");
      setName("");
    }, 2500);
  };

  const EmojiIcon = detectedEmoji ? emojiComponents[detectedEmoji] : BsEmojiSmile;

  return (
    <div className="relative overflow-hidden">
      {/* Emoji Rain */}
      <AnimatePresence>
        {emojiRain.map((emoji) => {
          const EmojiComp = emoji.EmojiComponent;
          return (
            <motion.div
              key={emoji.id}
              initial={{ 
                x: `${emoji.x}vw`, 
                y: -50,
                opacity: 1,
                scale: 0.5 
              }}
              animate={{ 
                y: "110vh",
                opacity: [1, 1, 0.5, 0],
                scale: [0.5, 1, 1, 0.8],
                rotate: [0, 180, 360]
              }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: emoji.duration,
                delay: emoji.delay,
                ease: "linear"
              }}
              className="fixed top-0 z-50 pointer-events-none"
              style={{ fontSize: emoji.size, color: emoji.color }}
            >
              <EmojiComp />
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* Emoji Popup */}
      <AnimatePresence>
        {showEmoji && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.2, 1], opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed inset-0 z-40 flex items-center justify-center pointer-events-none"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-8">
              <motion.div
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 0.5,
                  repeat: 3
                }}
                className="text-6xl"
                style={{ color: detectedEmoji === 'love' ? '#ff6b6b' : 
                         detectedEmoji === 'excited' ? '#ffd93d' : 
                         detectedEmoji === 'happy' ? '#6bcb77' : 
                         detectedEmoji === 'neutral' ? '#4d96ff' : '#6c757d' }}
              >
                <EmojiIcon />
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-white mt-4 text-center font-semibold"
              >
                Thanks for your review!
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Review Form */}
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
        <h3 className="text-xl md:text-2xl font-semibold mb-6 text-center">
          Leave a <span className="text-accent">Review</span>
        </h3>

        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 md:gap-6">
          {/* Name Input */}
          <div className="md:w-1/3">
            <label className="block text-sm text-white/60 mb-2">Your Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:border-accent focus:outline-none transition-all"
              required
            />
          </div>

          {/* Review Textarea */}
          <div className="md:flex-1">
            <label className="block text-sm text-white/60 mb-2">Your Review</label>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Share your experience working with me..."
              rows={3}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:border-accent focus:outline-none transition-all resize-none"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="md:self-end md:w-auto">
            <button
              type="submit"
              disabled={isSubmitting || !review.trim() || !name.trim()}
              className="w-full md:w-auto bg-accent hover:bg-accent-hover disabled:bg-accent/50 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 whitespace-nowrap"
            >
              {isSubmitting ? (
                <>
                  <FaSpinner className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  Send
                </>
              )}
            </button>
          </div>
        </form>

        {/* Emotion Preview */}
        {review.length > 10 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-white/60 mt-4 justify-center"
          >
            <span>Detected mood:</span>
            <span className="text-lg">
              {(() => {
                const emotion = detectEmotion(review);
                const EmoComp = emojiComponents[emotion];
                return <EmoComp />;
              })()}
            </span>
            <span className="capitalize">{detectEmotion(review)}</span>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ReviewSection;
