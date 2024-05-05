import Search from "../Components/Data/Search";
import Paginator from "../Components/Data/Paginator";
import Table from "../Components/Data/Table";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchData } from "../store/slice/DataSlice";
function Data() {
    const dispatch = useDispatch();
    const search = useSelector((state) => state.search);
    useEffect(() => {
        dispatch(fetchData(search));
    }, [
        search.pageNumber,
        search.count,
        search.searchBy,
        search.sortColumn,
        search.sortDirection,
    ]);

    return (
        <>
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 min-h-screen px-5 md:px-10 flex flex-col">
                <div className="container mx-auto   rounded-md ">
                    <h1 className="text-5xl font-bold my-10 text-center text-white">
                        GitHub Repositories
                    </h1>
                    <div className="overflow-x-auto rounded-lg md:p-10 p-5 shadow-2xl bg-gray-700">
                        <Search />
                        <Table />
                        <Paginator />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Data;
