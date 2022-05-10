export default function Button({
    children,
    type = "button",
    className,
    variant,
    ...props
}) {
    const bgVariant = {
        danger: "bg-red-600",
        primary: "bg-indigo-600",
        warning: "bg-yellow-600",
        success: "bg-green-500",
    };
    return (
        <button
            {...props}
            className={`${
                props.disabled
                    ? "bg-gray-600"
                    : `${bgVariant[variant] ?? "bg-indigo-600"}`
            } hover:opacity-80 px-4 py-2 font-bold text-white rounded  focus:outline-none focus:shadow-outline ${
                className || ""
            } `}
            type={type}
        >
            {children}
        </button>
    );
}
