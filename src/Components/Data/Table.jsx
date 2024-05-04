import { Tooltip } from "primereact/tooltip";
import React from "react";
import { useSelector } from "react-redux";
function LoadingRow() {
    return (
        <tr className="bg-gray-400 custom-target-icon text-black hover:bg-gray-700 cursor-pointer hover:text-white">
            <td className="py-3 px-4 ">
                <div className="h-4 w-16 mx-auto bg-gray-300 rounded-md"></div>
            </td>
            <td className="py-3 px-4">
                <div className="h-4 w-20 bg-gray-300 mx-auto rounded-md"></div>
            </td>
            <td className="py-3 px-4">
                <div className="h-4 w-24 bg-gray-300 mx-auto rounded-md"></div>
            </td>
            <td className="py-3 px-4">
                <div className="h-4 w-12 bg-gray-300 mx-auto rounded-md"></div>
            </td>
            <td className="py-3 px-4">
                <div className="h-4 w-16 bg-gray-300 mx-auto rounded-md"></div>
            </td>
            <td className="py-3 px-4">
                <div className="h-4 w-24 bg-gray-300 mx-auto rounded-md"></div>
            </td>
        </tr>
    );
}
function Table() {
    const data = useSelector((state) => state.data);
    console.log(data.data);
    return (
        <div className=" md:overflow-hidden w-full overflow-scroll">
            <table className=" mt-5 rounded-lg overflow-hidden w-full table-auto border-collapse  text-white">
                <thead className="">
                    <tr className="bg-gray-900 text-lg ">
                        <th className="py-4 px-6 cursor-pointer">Index</th>
                        <th className="py-4 px-6 cursor-pointer">GitHub ID</th>
                        <th className="py-4 px-6 cursor-pointer">
                            Repositery Name
                        </th>
                        <th className="py-4 px-6 cursor-pointer">Language</th>
                        <th className="py-4 px-6 cursor-pointer">Stars</th>
                        <th className="py-4 px-6 cursor-pointer">Created At</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {data.error && (
                        <tr className="bg-gray-400">
                            <td
                                colSpan="6"
                                className="text-red-500 font-bold
                             py-3 px-4"
                            >
                                Error: Please wait for some time before trying
                                again.
                            </td>
                        </tr>
                    )}
                    {data.isLoading && (
                        <>
                            <LoadingRow></LoadingRow>
                            <LoadingRow></LoadingRow>
                            <LoadingRow></LoadingRow>
                            <LoadingRow></LoadingRow>
                            <LoadingRow></LoadingRow>
                        </>
                    )}
                    {data.data != "" &&
                        !data.error &&
                        !data.isLoading &&
                        data.data.map((ele, index) => (
                            <tr
                                id={`tooltip${index + 1}`}
                                className="bg-gray-400 custom-target-icon text-black hover:bg-gray-800 cursor-pointer hover:text-white"
                                data-pr-tooltip={ele.description}
                                data-pr-position="bottom"
                            >
                                <Tooltip
                                    target={`#tooltip${index + 1}`}
                                    style={{
                                        color: "white",
                                    }}
                                />

                                <td className="py-3 px-4">{index + 1}</td>
                                <td className="py-3 px-4 ">
                                    <div className="flex space-x-5 justify-center">
                                        <img
                                            className="rounded-[50%]"
                                            height={10}
                                            width={28}
                                            src={ele.owner.avatar_url}
                                            alt=""
                                        />
                                        <div>{ele.owner.login}</div>
                                    </div>
                                </td>
                                <td className="py-3 px-4">{ele.name}</td>
                                <td className="py-3 px-4">{ele.language}</td>
                                <td className="py-3 px-4">
                                    {ele.stargazers_count}
                                </td>
                                <td className="py-3 px-4">
                                    {new Date(
                                        ele.created_at
                                    ).toLocaleDateString()}
                                </td>
                            </tr>
                        ))}

                    {/* More table rows here */}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
