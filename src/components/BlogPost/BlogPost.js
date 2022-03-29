export const Post = () => {
  const posts = require('./posts.json');
  return (
    <div className="post__container">
      {posts.map((post) => {
        return (
          <div className="post__contents">
            <h1 className="post__header">{post.title}</h1>
            <h3 className="post__author">By {post.author}</h3>
            <span className="post__content">{post.content}</span>
          </div>
        );
      })}
    </div>
  );
};