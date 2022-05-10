import AppLayout from "../components/AppLayout";
import usePost from "../components/post/service";
import PostForm from "../components/post/Form";
import PostList from "../components/post/List";

export default function PostPage() {
    const {
        form,
        handleChange,
        posts,
        getPost,
        handleDeletePost,
        handleAddPost,
        handleUpdatePosts,
    } = usePost();

    return (
        <AppLayout>
            {" "}
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <PostForm
                                form={form}
                                handleChange={handleChange}
                                handleAddPost={handleAddPost}
                                handleUpdatePosts={handleUpdatePosts}
                            />
                            <PostList
                                posts={posts}
                                getPost={getPost}
                                handleDeletePost={handleDeletePost}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
