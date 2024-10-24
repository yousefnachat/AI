const Footer = () => {
  return (
    <footer>
      <div>
        <hr className="bg-white p-1 rounded-2xl" />
      </div>
      <div className="mt-10">
        <h1
          className="text-4xl font-bold text-center text-gray-200 mb-3"
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          AIGateway
        </h1>
      </div>
      <div>
        <p className="text-slate-300 text-center text-xl">AIGateway Discover the cutting-edge world of artificial intelligence with our curated collection of AI tools and resources.</p>
      </div>
      <div>
        <hr className="bg-white  rounded-2xl mt-4 mb-5" />
      </div>
      <div className="text-white text-center">
      ⓒ AIGateway AI & Future ,
      <p>Made by Youssef nachat</p>
      </div>
    </footer>
  );
};

export default Footer;
