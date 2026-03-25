import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaPaperPlane, FaSpinner, FaTimes, FaCommentDots, 
  FaUserCircle, FaCat, FaDog, FaDragon, FaGhost, FaRobot, 
  FaStar, FaHeart, FaUserTie, FaUserNinja, FaUserAstronaut,
  FaHorse, FaFrog, FaFish, FaOtter
} from "react-icons/fa";
import { 
  BsEmojiSmile, BsEmojiFrown, BsEmojiHeartEyes, BsEmojiNeutral, 
  BsEmojiLaughing, BsEmojiSunglasses
} from "react-icons/bs";

const FloatingReviewButton = () => {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [review, setReview] = useState("");
  const [name, setName] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);
  const [detectedEmoji, setDetectedEmoji] = useState(null);
  const [emojiRain, setEmojiRain] = useState([]);

  // Set mounted on client to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Avatar options - using only verified working icons
  const avatarOptions = [
    // Male avatars
    { id: "male1", icon: FaUserCircle, color: "#3b82f6", label: "Male 1", category: "male" },
    { id: "male2", icon: FaUserTie, color: "#1e40af", label: "Professional", category: "male" },
    { id: "male3", icon: FaUserNinja, color: "#4b5563", label: "Ninja", category: "male" },
    { id: "male4", icon: FaUserAstronaut, color: "#6366f1", label: "Astronaut", category: "male" },
    { id: "male5", icon: FaRobot, color: "#8b5cf6", label: "Tech Guy", category: "male" },
    
    // Female avatars
    { id: "female1", icon: FaUserCircle, color: "#ec4899", label: "Female 1", category: "female" },
    { id: "female2", icon: FaOtter, color: "#f472b6", label: "Otter", category: "female" },
    { id: "female3", icon: FaCat, color: "#fb7185", label: "Cat Lover", category: "female" },
    { id: "female4", icon: FaFish, color: "#f9a8d4", label: "Fish", category: "female" },
    { id: "female5", icon: FaFrog, color: "#fda4af", label: "Frog", category: "female" },
    
    // Animals
    { id: "cat", icon: FaCat, color: "#f97316", label: "Cat", category: "animal" },
    { id: "dog", icon: FaDog, color: "#d97706", label: "Dog", category: "animal" },
    { id: "dragon", icon: FaDragon, color: "#8b5cf6", label: "Dragon", category: "animal" },
    { id: "frog", icon: FaFrog, color: "#22c55e", label: "Frog", category: "animal" },
    { id: "fish", icon: FaFish, color: "#0ea5e9", label: "Fish", category: "animal" },
    { id: "otter", icon: FaOtter, color: "#7c3aed", label: "Otter", category: "animal" },
    { id: "horse", icon: FaHorse, color: "#92400e", label: "Horse", category: "animal" },
    
    // Characters
    { id: "ghost", icon: FaGhost, color: "#6b7280", label: "Ghost", category: "character" },
    { id: "robot", icon: FaRobot, color: "#06b6d4", label: "Robot", category: "character" },
    
    // Emojis
    { id: "smile", icon: BsEmojiSmile, color: "#22c55e", label: "Happy", category: "emoji" },
    { id: "love", icon: BsEmojiHeartEyes, color: "#ef4444", label: "Love", category: "emoji" },
    { id: "laugh", icon: BsEmojiLaughing, color: "#eab308", label: "Laugh", category: "emoji" },
    { id: "cool", icon: BsEmojiSunglasses, color: "#3b82f6", label: "Cool", category: "emoji" },
    
    // Symbols
    { id: "star", icon: FaStar, color: "#fbbf24", label: "Star", category: "symbol" },
    { id: "heart", icon: FaHeart, color: "#ef4444", label: "Heart", category: "symbol" },
  ];

  // Categories for filtering
  const categories = [
    { id: "all", label: "All" },
    { id: "male", label: "👨 Male" },
    { id: "female", label: "👩 Female" },
    { id: "animal", label: "🐾 Animals" },
    { id: "character", label: "🤖 Characters" },
    { id: "emoji", label: "😊 Emojis" },
    { id: "symbol", label: "⭐ Symbols" },
  ];

  // Filter avatars by category
  const filteredAvatars = selectedCategory === "all" 
    ? avatarOptions 
    : avatarOptions.filter(a => a.category === selectedCategory);

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

    setTimeout(() => {
      setEmojiRain([]);
    }, 4000);
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!review.trim() || !name.trim()) return;

    setIsSubmitting(true);

    const emotion = detectEmotion(review);
    setDetectedEmoji(emotion);

    // Save review via API
    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          message: review.trim(),
          emotion,
          avatar: selectedAvatar || avatarOptions[0],
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Review saved successfully:", data.review);

        // Dispatch custom event to notify other components
        window.dispatchEvent(new CustomEvent("reviewAdded", { detail: data.review }));
      } else {
        console.error("Failed to save review");
      }
    } catch (error) {
      console.error("Error saving review:", error);
    }

    setShowEmoji(true);
    createEmojiRain(emotion);

    setTimeout(() => {
      setShowEmoji(false);
      setIsSubmitting(false);
      setReview("");
      setName("");
      setSelectedAvatar(null);
      setIsOpen(false);
    }, 2500);
  };

  const EmojiIcon = detectedEmoji ? emojiComponents[detectedEmoji] : BsEmojiSmile;

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <>
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
              className="fixed top-0 z-[60] pointer-events-none"
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
            className="fixed inset-0 z-[55] flex items-center justify-center pointer-events-none"
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

      {/* Floating Button - positioned well above bottom nav on mobile */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-28 sm:bottom-24 xl:bottom-6 right-3 sm:right-4 xl:right-6 z-[110] bg-accent hover:bg-accent-hover text-white p-2 sm:p-2 xl:p-3 rounded-full shadow-md shadow-accent/20 transition-all"
      >
        <FaCommentDots className="text-lg sm:text-xl xl:text-2xl" />
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
             className="relative bg-secondary/95 backdrop-blur-md rounded-xl p-3 sm:p-4 md:p-6 w-[92vw] sm:w-full max-w-md sm:max-w-xl border border-white/10 shadow-xl max-h-[80vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
              >
                <FaTimes className="text-xl" />
              </button>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
                Leave a <span className="text-accent">Review</span>
              </h3>

              {/* Avatar Selection */}
              <div className="mb-6">
                <label className="block text-sm text-white/60 mb-3 text-center">Choose Your Avatar</label>
                
                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-1 mb-4">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-3 py-1 text-xs rounded-full transition-all ${
                        selectedCategory === cat.id
                          ? "bg-accent text-white"
                          : "bg-white/10 text-white/60 hover:bg-white/20"
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
                
                {/* Avatar Grid */}
                <div className="flex flex-wrap justify-center gap-2 max-h-[200px] overflow-y-auto scrollbar-hide p-2">
                  {filteredAvatars.map((avatar) => {
                    const AvatarIcon = avatar.icon;
                    const isSelected = selectedAvatar?.id === avatar.id;
                    return (
                      <motion.button
                        key={avatar.id}
                        type="button"
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setSelectedAvatar(avatar)}
                        className={`p-3 rounded-full transition-all ${
                          isSelected 
                            ? "bg-accent ring-2 ring-accent ring-offset-2 ring-offset-secondary scale-110" 
                            : "bg-white/10 hover:bg-white/20"
                        }`}
                        title={avatar.label}
                      >
                        <AvatarIcon 
                          className="text-2xl" 
                          style={{ color: isSelected ? "#fff" : avatar.color }}
                        />
                      </motion.button>
                    );
                  })}
                </div>
                
                {/* Selected Avatar Preview */}
                {selectedAvatar && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-center gap-2 mt-4 p-3 bg-white/5 rounded-lg"
                  >
                    <div 
                      className="p-2 rounded-full"
                      style={{ backgroundColor: `${selectedAvatar.color}30` }}
                    >
                      {(() => {
                        const Icon = selectedAvatar.icon;
                        return <Icon className="text-2xl" style={{ color: selectedAvatar.color }} />;
                      })()}
                    </div>
                    <div className="text-left">
                      <p className="text-white font-medium">{selectedAvatar.label}</p>
                      <p className="text-xs text-white/40 capitalize">{selectedAvatar.category}</p>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 md:gap-6 pb-20 md:pb-0">
                {/* Name Input */}
                <div className="md:w-1/3">
                  <label className="block text-sm text-white/60 mb-2 text-left">Your Name</label>
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
                  <label className="block text-sm text-white/60 mb-2 text-left">Your Review</label>
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingReviewButton;
