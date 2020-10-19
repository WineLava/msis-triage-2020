USE msis;

DROP TABLE IF EXISTS Comments;
CREATE TABLE Comments (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    commentText text not null
);

INSERT INTO Comments (CommentText) VALUES
("I have something important to say"),
("D&S is awesome"),
("😁");