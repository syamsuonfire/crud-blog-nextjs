import FormControl from "../form/FormControl";
import Input from "../form/Input";
import Button from "../form/Button";

export default function Form({
    form,
    handleChange,
    handleAddPost,
    handleUpdatePosts,
}) {
    return (
        <div className="w-full mb-2">
            <form onSubmit={handleAddPost}>
                <FormControl label="Title" id="title">
                    <Input
                        placeholder="Input title"
                        id="title"
                        name="title"
                        onChange={handleChange}
                        value={form.title}
                    />
                </FormControl>

                <FormControl label="Content" id="content">
                    <Input
                        placeholder="Input content"
                        id="content"
                        name="content"
                        onChange={handleChange}
                        value={form.content}
                    />
                </FormControl>

                <FormControl label="Headline" id="headline">
                    <Input
                        placeholder="Input headline"
                        id="headline"
                        name="headline"
                        onChange={handleChange}
                        value={form.headline}
                    />
                </FormControl>

                <FormControl label="Thumbnail" id="thumbnail">
                    <Input
                        placeholder="Input thumbnail"
                        id="thumbnail"
                        name="thumbnail"
                        onChange={handleChange}
                        value={form.thumbnail}
                    />
                </FormControl>

                <div className="mb-4">
                    <label
                        className="text-sm font-bold text-gray-700 form-check"
                        htmlFor="featured"
                    >
                        Featured
                    </label>
                    <input
                        placeholder="Input featured"
                        id="featured"
                        name="featured"
                        onChange={handleChange}
                        checked={form.featured}
                        type="checkbox"
                        className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-sm appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
                    />
                </div>

                <FormControl label="Category" id="category_id">
                    <Input
                        placeholder="Input category"
                        id="category_id"
                        name="category_id"
                        onChange={handleChange}
                        value={form.category_id}
                    />
                </FormControl>

                <FormControl label="User" id="user_id">
                    <Input
                        placeholder="Input user"
                        id="user_id"
                        name="user_id"
                        onChange={handleChange}
                        value={form.user_id}
                    />
                </FormControl>

                {form.id === "" ? (
                    <Button type="submit">Submit</Button>
                ) : (
                    <Button onClick={handleUpdatePosts}>Update</Button>
                )}
            </form>
        </div>
    );
}
