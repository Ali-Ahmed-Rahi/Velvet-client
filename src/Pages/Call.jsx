

const Call = () => {
  return (
    <div className="flex items-center justify-center bg-black text-white p-4">
      <a
        href="tel:+1234567890"
        className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-md transition-all"
      >
        <Phone className="w-5 h-5" />
        Call
      </a>
    </div>
  );
};

export default Call;