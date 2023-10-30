export default function Button({ children, className }) {
  return (
    <button
      type="Button"
      className={"focus:outline-black text-white bg-gray-500 rounded px-4 py-2 " + className}
    >
      {children}
    </button>
  );
}
