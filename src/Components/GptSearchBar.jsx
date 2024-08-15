

const GptSearchBar = () => {
  return (
    <div className="p-[10%] flex justify-center ">
      <form className=" bg-black w-2/3 grid grid-cols-12 ">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder="What would you like to watch?"
        />
        <button className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3">
          Search
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar