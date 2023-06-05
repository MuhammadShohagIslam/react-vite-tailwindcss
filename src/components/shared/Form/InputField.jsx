const InputField = ({
    register,
    error,
    type,
    name,
    errorMessagePattern,
    placeholderText,
}) => {
    return (
        <>
            <input
                type={type}
                {...register(name, errorMessagePattern)}
                placeholder={placeholderText}
                className="w-full outline-none rounded-md border border-accent p-4 my-4"
            />
            {error && <p className="text-red-500">{error.message}</p>}
        </>
    );
};

export default InputField;
