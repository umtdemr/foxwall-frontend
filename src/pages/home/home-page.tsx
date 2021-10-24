import React from "react";
import AddPostForm from "../../components/add-post/form/form.component";
import PostList from "../../components/post/post-list.component";

const HomePage: React.FC = () => {
  return (
    <div className="home">
      <AddPostForm />
      <PostList />
    </div>
  );
};

export default HomePage;
