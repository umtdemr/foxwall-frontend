import React from "react";
import Post from "../../components/post-item/post-item.component";
import AddPostForm from "../../components/add-post/form/form.component";

const HomePage: React.FC = () => {
  return (
    <div className="home">
      <AddPostForm />
      <Post />
    </div>
  );
};

export default HomePage;
