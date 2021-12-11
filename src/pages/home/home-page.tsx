import React from "react";
import { useSelector } from "react-redux";
import AddPostForm from "../../components/add-post/form/form.component";
import PostList from "../../components/post/post-list.component";
import { IPostInitialState } from "../../redux/slices/post";
import { RootState } from "../../redux/store";

const HomePage: React.FC = () => {
  const state: IPostInitialState = useSelector((state: RootState) => state.post);
  return (
    <div className="home">
      <AddPostForm />
      <PostList postsData={state} />
    </div>
  );
};

export default HomePage;
