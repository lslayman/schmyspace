import React, { useState, useEffect } from 'react';

function Messages({ messages }){

    const [newMessage, setNewMessage] = useState({sender: '', subject: '', content: ''});
    const [selectedMessage, setSelectedMessage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openMessage = (messageId) => {
        const message = messages.find((msg) => msg.id === messageId);
        setSelectedMessage(message);
        setIsModalOpen(true);
    };

    const closeMessage = () => {
        setSelectedMessage(null);
        setIsModalOpen(false);
    };

    const sendMessage = (newMessage) => {
        const isFriend = friends.some(friend => friend.id == newMessage.receiver);
        if (!isFriend) {
            console.log('Cannot send message. Messages can only be sent between friends.');
            return;
        }
        fetch('/api/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newMessage),
        })
        .then(fetchMessages)
        .catch(error => {
            console.log('Error sending message:', error);
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewMessage((prevMessage) => ({
            ...prevMessage,
            [name]: value
        }));
    };

    const handleSendMessage = (e) => {
        e.preventDefault();

        const sender = e.target.sender.value;
        const receiver = e.target.receiver.value;
        const content = e.target.content.value;
        const subject = e.target.subject.value;

        const newMessage = {
            sender,
            receiver,
            content,
            subject,
        };

        sendMessage(newMessage);

        e.target.reset();
    }


    return(
        <>
        <div className="inbox-container">
            <h1>Welcome to your inbox!</h1>
            {messages.length > 0 ? (
                messages.map((message) => (
                    <div className="message-container" key={message.id}>
                        <div className="message-subject">{message.subject}</div>
                        <div className="message-content">{message.content}</div>
                        <div className="message-sender-receiver">
                        From: {message.sender}, To: {message.receiver}
                        </div>
                        <div className="message-data">Received: {message.date_created}</div>
                    </div>
                ))
            ): (
                <h3>You do not have any messages.</h3>
            )}
        </div>
        <div>
            <form className="message-form" onSubmit={handleSendMessage}>
                <div>
                    <label>
                        To:
                        <input
                          type="text"
                          name="sender"
                          value={newMessage.sender}
                          onChange={handleInputChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Subject:
                        <input
                          type="text"
                          name="subject"
                          value={newMessage.subject}
                          onChange={handleInputChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Body:
                        <textarea
                           name="content"
                           value={newMessage.content}
                           onChange={handleInputChange}
                        ></textarea>
                    </label>
                </div>
                <div>
                    <button type="submit">Send Message</button>
                </div>
            </form>
        </div>
        </>
    )
}

export default Messages;