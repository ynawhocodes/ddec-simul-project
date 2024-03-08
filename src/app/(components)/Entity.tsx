import Link from "next/link";

const Entity = () => {
  return (
    <div className="bg-white p-3 rounded-lg">
      <h3 className="font-semibold px-2 py-3 text-lg">Entity</h3>
      <div className="flex flex-col">
        <Link
          className="bg-[#eee] font-semibold px-2 rounded-md py-2 text-[14px]"
          href=""
        >
          User
        </Link>
        <Link
          className="hover:bg-[#eee] hover:font-semibold px-2 hover:rounded-md py-2 text-[14px]"
          href=""
        >
          Post
        </Link>
        <Link
          className="hover:bg-[#eee] hover:font-semibold px-2 hover:rounded-md py-2 text-[14px]"
          href=""
        >
          Comment
        </Link>
        <Link
          className="hover:bg-[#eee] hover:font-semibold px-2 hover:rounded-md py-2 text-[14px]"
          href=""
        >
          Address
        </Link>
        <Link
          className="hover:bg-[#eee] hover:font-semibold px-2 hover:rounded-md py-2 text-[14px]"
          href=""
        >
          Image
        </Link>
        <Link
          className="hover:bg-[#eee] hover:font-semibold px-2 hover:rounded-md py-2 text-[14px]"
          href=""
        >
          Video
        </Link>
      </div>
    </div>
  );
};

export default Entity;
