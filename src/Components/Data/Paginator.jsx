import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import {
    decrementPage,
    incrementPage,
    setCount,
    setPageNumber,
} from "../../store/slice/SearchSlice";
function Paginator() {
    const dispatch = useDispatch();
    const search = useSelector((state) => state.search);
    const data = useSelector((state) => state.data);
    const count = [5, 10, 20, 50];
    const dropdownOptions = count.map((value) => ({
        label: value.toString(),
        value: value,
    }));
    return (
        <div className="md:flex justify-between md:space-y-0 space-y-4  mt-5">
            <div className="text-white text-center my-auto">
                Showing {search.pageNumber} of{" "}
                {(data.totalCount / search.count).toFixed()}
            </div>
            <div className="text-center">
                <Dropdown
                    value={search.count}
                    options={dropdownOptions}
                    className="focus:ring-2 ring-0 focus:outline-none"
                    onChange={(e) => {
                        dispatch(setCount({ count: e.value }));
                        dispatch(setPageNumber());
                    }}
                ></Dropdown>
            </div>
            <div className="space-x-2 text-center">
                {search.pageNumber < data.totalCount / search.count && (
                    <Button
                        className="ring-0 focus:ring-2  hover:scale-95"
                        onClick={() => {
                            dispatch(incrementPage());
                        }}
                    >
                        Next
                    </Button>
                )}
                {search.pageNumber > 1 && (
                    <Button
                        className="ring-0 focus:ring-2  hover:scale-95"
                        onClick={() => {
                            dispatch(decrementPage());
                        }}
                    >
                        Previous
                    </Button>
                )}
            </div>
        </div>
    );
}

export default Paginator;
