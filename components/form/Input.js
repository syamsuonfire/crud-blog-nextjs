export default function Input(props) {
    return (
        <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            type="text"
            {...props}
        />
    );
}
