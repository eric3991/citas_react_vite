const Error = ({ mensaje }) => {
  return (
    <div className="bg-red-800 text-white text-center rounded-md">
      <p>{mensaje}</p>
    </div>
  );
};

export default Error;
