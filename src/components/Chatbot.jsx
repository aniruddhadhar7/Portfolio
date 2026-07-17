import { useState, useRef, useEffect } from "react";
import "./Chatbot.css";
import pp from "../assets/images/dp3.png";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! I am Aniruddha's portfolio assistant. Feel free to ask me about his skills, projects, background, or certifications! 👋" }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const suggestionChips = [
    { label: "Skills 💻", query: "What are your core skills?" },
    { label: "Projects 🚀", query: "Show me your top projects" },
    { label: "Background 🎓", query: "Tell me about your college & background" },
    { label: "Certificates 🏆", query: "What certifications do you have?" },
    { label: "Contact 📞", query: "How can I contact you?" }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const toggleChat = () => setIsOpen(!isOpen);

  const getBotResponse = (userMsg) => {
    const text = userMsg.toLowerCase();
    if (text.includes("skill") || text.includes("tech") || text.includes("know")) {
      return "I specialize in web technologies like HTML, CSS, React.js, Next.js, Bootstrap, and Django. I use databases like MySQL and MongoDB, work with languages like C, C++, Java, and Python, and utilize VS Code, Git, and GitHub for development.";
    } else if (text.includes("project") || text.includes("work") || text.includes("build")) {
      return "Here are my core projects:\n\n1. 🍼 SMART-HYDRATE: An Intelligent Bottle for hydration and health tracking (Patent Filed, App No: 202631032874).\n2. 💬 AiVa Chatbot: An AI-powered chatbot built with React and OpenRouter API (Live at: https://anychat-ai.vercel.app/).\n3. 📝 ExamDeskPro: A secure desktop-based Online Examination Portal built with JavaFX, Java, and MySQL.\n4. 🍔 Swad: A responsive food ordering and restaurant website built using the MERN stack and Tailwind CSS.";
    } else if (text.includes("background") || text.includes("college") || text.includes("school") || text.includes("who") || text.includes("about") || text.includes("education")) {
      return "I am a B.Tech Computer Science & Engineering student at Narula Institute of Technology (2023 - 2027) with a CGPA of 8.91 (upto 5th sem). I completed my schooling at Ushumpur Adarsha Uchcha Vidyalaya (95.8% in WBBSE, 81.2% in WBCHSE).";
    } else if (text.includes("certificate") || text.includes("certification") || text.includes("nptel") || text.includes("sap")) {
      return "I hold the following certifications:\n\n- ☕ Programming in Java (NPTEL, IIT Kharagpur)\n- 💻 SAP S/4HANA Development (Narula Institute of Technology)\n- 🌐 Full Stack Development (Ardent Computech)";
    } else if (text.includes("contact") || text.includes("email") || text.includes("hire") || text.includes("reach") || text.includes("phone")) {
      return "You can reach out to me via email at aniruddhadhar777@gmail.com or phone at +91-6291608004. You can also submit the Contact Form at the bottom of the page or visit my LinkedIn profile: https://www.linkedin.com/in/aniruddha-dhar-0457222b2";
    } else if (text.includes("hi") || text.includes("hello") || text.includes("hey") || text.includes("greet")) {
      return "Hi there! I am Aniruddha's virtual assistant. How can I help you today? Feel free to ask about my skills, projects, certifications, or education!";
    } else {
      return "Thanks for asking! Try selecting one of the quick options below (like Skills, Projects, or Certificates) to get the details!";
    }
  };

  const handleSend = (e, customQuery = null) => {
    if (e) e.preventDefault();
    const queryText = customQuery || input.trim();
    if (!queryText.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: queryText }]);
    if (!customQuery) setInput("");

    setTimeout(() => {
      const botResponse = getBotResponse(queryText);
      setMessages((prev) => [...prev, { sender: "bot", text: botResponse }]);
    }, 500);
  };

  return (
    <div className="chatbot-wrapper">
      {isOpen && (
        <div className="chatbot-window chatbot-animate">
          <div className="chatbot-header">
            <div>
              <span className="chatbot-title">Aniruddha's Assistant</span>
              <span className="chatbot-status">Online</span>
            </div>
            <button className="chatbot-close-btn" onClick={toggleChat} aria-label="Close Chat">
              &times;
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chat-bubble-container ${msg.sender === "bot" ? "bot-container" : "user-container"}`}>
                <div className={`chat-bubble ${msg.sender === "bot" ? "bot-bubble" : "user-bubble"}`}>
                  {msg.text.split("\n").map((line, lIdx) => (
                    <span key={lIdx}>
                      {line}
                      <br />
                    </span>
                  ))}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-chips-area">
            {suggestionChips.map((chip, idx) => (
              <button
                key={idx}
                className="chatbot-chip"
                onClick={(e) => handleSend(e, chip.query)}
              >
                {chip.label}
              </button>
            ))}
          </div>

          <form className="chatbot-input-area" onSubmit={(e) => handleSend(e)}>
            <input
              type="text"
              className="chatbot-input"
              placeholder="Ask anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="chatbot-send-btn" aria-label="Send message">
              &#10148;
            </button>
          </form>
        </div>
      )}

      <button className={`chatbot-toggle-btn ${isOpen ? "open" : ""}`} onClick={toggleChat} aria-label="Toggle chat window">
        {isOpen ? (
          <span className="close-icon">&times;</span>
        ) : (
          <img src={pp} alt="bot avatar" className="chatbot-avatar-icon" />
        )}
      </button>
    </div>
  );
}
