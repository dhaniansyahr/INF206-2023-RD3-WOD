// import { useHelpDataContext } from "../hooks/useHelpDataContext";

const HelpDataDetail = ({ helpdatas }) => {
    // const { dispatch } = useHelpDataContext()

    // const handleClick = async () => {
    //     const response = await fetch('/api/help/' + helpdatas._id, {
    //         method: 'DELETE'
    //     })
    //     const json = await response.json()

    //     if (response.ok) {
    //         dispatch({ type: 'DELETE_HELPDATA', payload: json })
    //     }
    // }

    return (
        <div className="bg-white border-[1px] mx-5 my-auto p-5 relative flex-row gap-5 shadow-md">
            <h4 className="mt-0 mb-2 mr-0 ml-0 text-lg text-emerald-800 font-bold">
                {helpdatas.nama}
            </h4>
            <p className="m-0 text-base text-gray-500">
                <strong>Email : </strong>
                {helpdatas.email}
            </p>
            <p className="m-0 text-base text-gray-500">
                <strong>Password : </strong>
                {helpdatas.password}
            </p>
            <p className="m-0 text-base text-gray-500 leading-10">{helpdatas.createdAt}</p>
            <button className="bg-gray-600 text-white font-bold font-sans text-center text-base rounded-lg w-32" onClick={handleClick}>Delete</button>
        </div>
    );
};

export default HelpDataDetail;