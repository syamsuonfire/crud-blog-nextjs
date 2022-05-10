export default function FormControl({ children, label, id, ...props }) {
    return (
        <div className="mb-4">
            <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor={id}
            >
                {label}
            </label>
            {children}
        </div>
    );
}
