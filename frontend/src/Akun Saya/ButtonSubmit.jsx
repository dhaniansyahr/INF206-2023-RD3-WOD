import { Link } from "react-router-dom";

export default function ButtonSubmit() {
  return (
    <div className="mt-[48px] mr-[32px] sm:text-right">
      <button className="py-3 px-8 bg-green-500 text-green-100 font-bold rounded hover:bg-[#081D45]">
        <Link to="/AkunSaya">Submit</Link>
      </button>
    </div>
  );
}
