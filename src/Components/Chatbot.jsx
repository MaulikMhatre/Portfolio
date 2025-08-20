import React, { useState, useEffect } from 'react';
import './Chatbot.css'
import { MdChatBubbleOutline } from 'react-icons/md';
import { AiOutlineSend } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai'; 
import { MdSmartToy } from 'react-icons/md';       
import { MdPerson } from 'react-icons/md'; 


const  Chatbot=()=> {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  
   const toggleChat = () => {
    setIsOpen(!isOpen);
  };


  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages([...messages, { text: input, sender: 'user' }]);

    // Clear input + refocus
    setInput('');
    // Call backend API
    try {
      const response = await fetch('http://127.0.0.1:5000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });
      const data = await response.json();
      setMessages(prev => [...prev, { text: data.reply, sender: 'bot' }]);
    } catch {
      setMessages(prev => [...prev, { text: 'Error contacting AI.', sender: 'bot' }]);
    }
  };

    useEffect(() => {
    if (messages.length === 0) return;
    const lastMsg = messages[messages.length - 1];
    if (lastMsg.sender !== 'bot') return;

    const msg = lastMsg.text.toLowerCase();

    if (msg.includes('projects')) {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    } else if (msg.includes('about')) {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    } else if (msg.includes('contact')) {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else if (msg.includes('skills')) {
      document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages])

  return (

     <>
      <button onClick={toggleChat} className='floating-button'>
          <MdChatBubbleOutline size={24} color='black' />
      </button>

      {/* Chatbot window */}
      {isOpen && (
     <div className="chat-container">
      <div className="chat-header">
        <h2>AI Assistant</h2>
        <p>AI Powered</p>
         <button onClick={toggleChat}>
              <AiOutlineClose size={24}/>
         </button>
      </div>

        {/* User and Bot message */}
      <div className="chat-window">
  {messages.map((msg, idx) => (
    <div key={idx} className={`message-row ${msg.sender}`}>
      {msg.sender === 'bot' && (
        <div className="avatar">
          <MdSmartToy size={28} />
        </div>
      )}
      
      <div className={`message ${msg.sender}-message`}>
        {msg.text}
      </div>
      
      {msg.sender === 'user' && (
        <div className="avatar">
          <MdPerson size={28} />
        </div>
      )}
    </div>
  ))}
</div>

        {/* User message input */}
      <form className="chat-input-form" onSubmit={sendMessage}>
        <input
          id="user-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything..."
        />
        <button type="submit">  
            <AiOutlineSend size={20} />
        </button>
      </form>
    </div>
        )}
    </>
  );
}

export default Chatbot