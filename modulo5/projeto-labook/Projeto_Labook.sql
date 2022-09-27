SELECT * FROM Labook_Posts;
SET SQL_SAFE_UPDATES=0;

CREATE TABLE Labook_Posts(
            id VARCHAR(255) PRIMARY KEY,
            content VARCHAR(255) NOT NULL,
            user_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (user_id) REFERENCES Labook_Users(id)
        );
        
CREATE TABLE Labook_Likes(
            id VARCHAR(255) PRIMARY KEY,
            post_id VARCHAR(255) NOT NULL,
            user_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (user_id) REFERENCES Labook_Users(id),
            FOREIGN KEY (post_id) REFERENCES Labook_Posts(id)
        );