import Search from "../Components/Data/Search";
import Paginator from "../Components/Data/Paginator";
import Table from "../Components/Data/Table";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setValue } from "../store/slice/SearchSlice";
import { fetchData } from "../store/slice/DataSlice";
function Data() {
    const [countLimit, setCountLimit] = useState(5);
    const [pageNumber, setPageNumber] = useState(1);

    const dispatch = useDispatch();
    const search = useSelector((state) => state.search);
    useEffect(() => {
        dispatch(fetchData(search));
    }, [search.pageNumber, search.count, search.searchBy]);

    return (
        <>
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 min-h-screen px-10 flex flex-col">
                <div className="container mx-auto   rounded-md ">
                    <h1 className="text-5xl font-bold my-10 text-center text-white">
                        GitHub Repositories
                    </h1>
                    <div className="overflow-x-auto rounded-lg p-10 shadow-2xl bg-gray-700">
                        <Search />
                        <Table />
                        <Paginator
                            onCountChange={(e) => {
                                dispatch(setCountLimit(e));
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Data;
