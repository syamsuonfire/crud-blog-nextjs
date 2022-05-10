import PropTypes from "prop-types";
import Button from "../form/Button";

export default function PostList({ posts = [], getPost, handleDeletePost }) {
    const Item = ({ children }) => {
        return (
            <div className="w-full px-5 py-5 mb-2 border-2 border-gray-300 rounded-lg">
                {children}
            </div>
        );
    };
    return posts.map((post, index) => (
        <Item key={post.id}>
            <div className="flex items-center justify-between">
                <div className="flex">
                    <p className="mr-2">{index + 1}</p>
                    <p>{post.title}</p>
                </div>
                <div>
                    <Button className="mr-2" onClick={() => getPost(post.id)}>
                        Edit
                    </Button>
                    <Button
                        variant="danger"
                        onClick={() => handleDeletePost(post.id)}
                    >
                        Delete
                    </Button>
                </div>
            </div>
        </Item>
    ));
}

PostList.propTypes = {
    posts: PropTypes.array.isRequired,
};
