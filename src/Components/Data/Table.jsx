import { Tooltip } from "primereact/tooltip";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSortColumn, setSortDirection } from "../../store/slice/SearchSlice";
import { Button } from "primereact/button";
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
                <div className="h-4 w-12 bg-gray-300 mx-auto rounded-md"></div>
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
            <td className="py-3 px-4">
                <div className="h-4 w-24 bg-gray-300 mx-auto rounded-md"></div>
            </td>
            <td className="py-3 px-4">
                <div className="h-4 w-24 bg-gray-300 mx-auto rounded-md"></div>
            </td>
        </tr>
    );
}
function Table() {
    const data = useSelector((state) => state.data);
    const search = useSelector((state) => state.search);
    const dispatch = useDispatch();
    console.log(data.data);
    const handleSort = (column) => {
        let direction = "asc";
        if (search.sortColumn === column && search.sortDirection === "asc") {
            direction = "desc";
        }
        dispatch(setSortColumn({ sortColumn: column }));
        dispatch(setSortDirection({ sortDirection: direction }));
    };
    return (
        <div className="w-full overflow-y-scroll max-h-[33rem] ">
            <table className=" mt-5  w-full table-auto border-collapse text-white">
                <thead className="sticky top-0 z-50 p-4">
                    <tr className="bg-gray-900 text-lg ">
                        <th className="md:py-4 md:px-6 p-2 cursor-pointer whitespace-nowrap">
                            Sr no.
                        </th>
                        <th className="md:py-4 md:px-6 p-2 cursor-pointer">
                            GitHub ID
                        </th>
                        <th className="md:py-4 md:px-6 p-2 cursor-pointer">
                            Repositery Name
                        </th>
                        <th className="md:py-4 md:px-6 p-2 cursor-pointer">
                            Language
                        </th>
                        <th
                            className="md:py-4 md:px-6 p-2 cursor-pointer"
                            onClick={() => {
                                handleSort("stars");
                            }}
                        >
                            <span className="flex whitespace-nowrap">
                                Stars{" "}
                                {search.sortColumn === "stars" &&
                                    (search.sortDirection == "asc" ? "↑" : "↓")}
                            </span>
                        </th>
                        <th
                            className="md:py-4 md:px-6 p-2 cursor-pointer"
                            onClick={() => {
                                handleSort("forks");
                            }}
                        >
                            <span className="flex whitespace-nowrap">
                                Forks{" "}
                                {search.sortColumn === "forks" &&
                                    (search.sortDirection == "asc" ? "↑" : "↓")}
                            </span>
                        </th>
                        <th
                            className="md:py-4 md:px-6 p-2 cursor-pointer"
                            onClick={() => {
                                handleSort("size");
                            }}
                        >
                            <span className="flex whitespace-nowrap"></span>
                            Size{" "}
                            {search.sortColumn === "size" &&
                                (search.sortDirection == "asc" ? "↑" : "↓")}
                        </th>
                        <th className="md:py-4 md:px-6 p-2 cursor-pointer">
                            Created At
                        </th>

                        <th
                            className="md:py-4 md:px-6 p-2 cursor-pointer"
                            onClick={() => {
                                handleSort("updated");
                            }}
                        >
                            <span className="flex whitespace-nowrap">
                                Updated At{" "}
                                {search.sortColumn === "updated" &&
                                    (search.sortDirection == "asc" ? "↑" : "↓")}
                            </span>
                        </th>
                        <th className="md:py-4 md:px-6 p-2 cursor-pointer">
                            Visit
                        </th>
                    </tr>
                </thead>
                <tbody className="text-center ">
                    {data.error && (
                        <tr className="bg-gray-400">
                            <td
                                colSpan="10"
                                className="text-red-500 font-bold
                             md:py-3 md:px-4 p-2"
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
                                    <div className="flex space-x-5 justify-center ">
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
                                <td className="py-3 px-4 break-words max-w-[200px]">
                                    {ele.name}
                                </td>
                                <td className="py-3 px-4">{ele.language}</td>
                                <td className="py-3 px-4">
                                    {ele.stargazers_count}
                                </td>
                                <td className="py-3 px-4">{ele.forks_count}</td>
                                <td className="py-3 px-4">{ele.size} KB</td>
                                <td className="py-3 px-4">
                                    {new Date(
                                        ele.created_at
                                    ).toLocaleDateString()}
                                </td>
                                <td className="py-3 px-4">
                                    {new Date(
                                        ele.updated_at
                                    ).toLocaleDateString()}
                                </td>
                                <td className="py-3 px-4">
                                    <Button
                                        onClick={() => {
                                            window.open(ele.html_url);
                                        }}
                                    >
                                        {" "}
                                        Go
                                    </Button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
