import { useState, useEffect } from "react";
import axios from "../../lib/axios";

const usePost = () => {
    const [form, setForm] = useState({
        id: "",
        title: "",
        content: "",
        headline: "",
        thumbnail: "",
        featured: false,
        category_id: "",
        user_id: "",
    });
    const [posts, setPosts] = useState([]);

    const handleChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;

        if (name !== "featured") {
            setForm({ ...form, [name]: value });
        } else {
            setForm({ ...form, [name]: !form[name] });
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const { data } = await axios.get(`/api/posts`);
        setPosts(data.data.data);
    };

    const getPost = async (id) => {
        const { data } = await axios.get(`/api/posts/${id}`);
        const post = data.data;

        setForm({
            ...post,
        });
    };

    const handleAddPost = async (e) => {
        e.preventDefault();
        const { data } = await axios.post(`/api/posts`, form);

        const post = data.data;
        setPosts((prev) => [...prev, post]);
        // fetchData();

        setForm({
            id: "",
            title: "",
            content: "",
            headline: "",
            thumbnail: "",
            featured: false,
            category_id: "",
            user_id: "",
        });
    };

    const handleUpdatePosts = async () => {
        const { data } = await axios.put(`/api/posts/${form.id}`, form);

        const post = data.data;
        const updatedPosts = posts.map((item) =>
            item.id === post.id ? post : item
        );
        setPosts(updatedPosts);
        // fetchData();

        setForm({
            id: "",
            title: "",
            content: "",
            headline: "",
            thumbnail: "",
            featured: false,
            category_id: "",
            user_id: "",
        });
    };
    const handleDeletePost = async (id) => {
        const isOK = confirm("Are you sure want to delete this data?");

        if (isOK) {
            await axios.delete(`/api/posts/${id}`);
            const filteredPosts = posts.filter((item) => item.id != id);
            setPosts(filteredPosts);
            // fetchData();
        }
    };

    return {
        form,
        handleChange,
        posts,
        getPost,
        handleAddPost,
        handleUpdatePosts,
        handleDeletePost,
    };
};

export default usePost;
