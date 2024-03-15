USE bwcrrc4hmj6u5qkaf5ad;

CREATE TABLE IF NOT EXISTS users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(25) NOT NULL,
lastName VARCHAR(25) NOT NULL,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    profile_picture_url VARCHAR(255) NULL DEFAULT '',
    userType VARCHAR(10) DEFAULT 'Reader' CHECK (userType IN ('Reader','Curator')) NOT NULL,
userStatus VARCHAR (20) DEFAULT 'Approved' CHECK (userStatus IN ('Approved', 'Under Review', 'Reported')) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Posts table
CREATE TABLE IF NOT EXISTS posts (
    post_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Likes table (to handle post likes)
CREATE TABLE IF NOT EXISTS post_likes (
    like_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    post_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (post_id) REFERENCES posts(post_id)
);

-- Comments table
CREATE TABLE IF NOT EXISTS comments (
    comment_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    post_id INT,
    comment_text TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (post_id) REFERENCES posts(post_id)
);

-- Chats table
CREATE TABLE IF NOT EXISTS chats (
    chat_id INT AUTO_INCREMENT PRIMARY KEY,
    chat_name VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Participants in a chat
CREATE TABLE IF NOT EXISTS chat_participants (
    participant_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    chat_id INT,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (chat_id) REFERENCES chats(chat_id)
);

-- Messages table
CREATE TABLE IF NOT EXISTS messages (
    message_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    chat_id INT,
    message_text TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (chat_id) REFERENCES chats(chat_id)
);


CREATE TABLE IF NOT EXISTS posts (
    post_id INT AUTO_INCREMENT PRIMARY KEY,
    post_url VARCHAR(255) DEFAULT '' NULL,
    caption VARCHAR(100) NULL,
    userID INT,
    FOREIGN KEY (userID) REFERENCES user(userID) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS post_likes (
    postID INT AUTO_INCREMENT PRIMARY KEY,
    caption VARCHAR(100) NULL,
    marks VARCHAR(120),
    userID INT,
    FOREIGN KEY (userID) REFERENCES user(userID) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS follows (
    follow_id INT AUTO_INCREMENT PRIMARY KEY,
    follower_id INT,
    following_if INT,
    FOREIGN KEY (userID) REFERENCES user(userID) ON DELETE CASCADE,
    FOREIGN KEY (userID) REFERENCES user(userID) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS comments (
    commentID INT AUTO_INCREMENT PRIMARY KEY,
    comment_text VARCHAR(200) NOT NULL,
    postID INT,
    userID INT,
    FOREIGN KEY (postID) REFERENCES post(postID) ON DELETE CASCADE,
   FOREIGN KEY (userID) REFERENCES user(userID) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS chat (
    chatID INT AUTO_INCREMENT PRIMARY KEY,
    user1ID INT,
    user2ID INT,
    FOREIGN KEY (user1ID) REFERENCES user(userID) ON DELETE CASCADE,
    FOREIGN KEY (user2ID) REFERENCES user(userID) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS message (
    messageID INT AUTO_INCREMENT PRIMARY KEY,
    messageData VARCHAR(250) NOT NULL,
    userID INT,
    chatID INT,
    FOREIGN KEY (chatID) REFERENCES chat(chatID) ON DELETE CASCADE,
    FOREIGN KEY (userID) REFERENCES user(userID) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS link (
    linkID INT AUTO_INCREMENT PRIMARY KEY,
    interests VARCHAR(255),
    userID INT,
    FOREIGN KEY (userID) REFERENCES user(userID) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS notification (
    notificationID INT AUTO_INCREMENT PRIMARY KEY,
    userID INT,
    FOREIGN KEY (userID) REFERENCES user(userID) ON DELETE CASCADE
);

