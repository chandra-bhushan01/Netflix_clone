

const Header = () => {
  return (
    <div className="absolute w-full justify-between flex px-20 py-8 bg-gradient-to-b from-black z-20 ">
      <img
        className="w-40  "
        src="https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460"
        alt=""
      />
      <div className="flex ">
        <img className="h-10 mr-3"
          alt="usericon"
          src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"
        />
        <button className="text-white font-bold">Sign Out</button>
      </div>
    </div>
  );
}

export default Header