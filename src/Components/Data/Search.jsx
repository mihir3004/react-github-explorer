import React, { useEffect, useRef } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
    setPageNumber,
    setSearchBy,
    setValue,
} from "../../store/slice/SearchSlice";
import { fetchData } from "../../store/slice/DataSlice";

function Search() {
    const inputRef = useRef();
    const search = useSelector((state) => state.search);
    const dispatch = useDispatch();
    const dropdownOptions = [
        {
            label: "Name",
        },
        {
            label: "Description",
        },
        {
            label: "Topic",
        },
        {
            label: "Readme",
        },
    ];
    useEffect(() => {
        const delay = setTimeout(() => {
            dispatch(setPageNumber());
            dispatch(fetchData(search));
        }, 1000);
        return () => clearTimeout(delay);
    }, [dispatch, search.value]);
    return (
        <>
            <div className=" md:flex justify-end md:space-x-5">
                <Dropdown
                    value={search.searchBy}
                    placeholder="Select Type"
                    options={dropdownOptions}
                    className="focus:ring-2 h-full w-full md:w-1/5
                     my-2 ring-0 focus:outline-none"
                    onChange={(e) => {
                        dispatch(setSearchBy({ searchBy: e.value }));
                    }}
                ></Dropdown>
                <div className="p-inputgroup p-0  w-full md:w-1/5 my-2 focus:ring-1 ">
                    <Button
                        icon="pi pi-search"
                        className="cursor-pointer hover:scale-95"
                        onClick={() => {
                            inputRef.current.focus();
                        }}
                    />
                    <InputText
                        value={search.value}
                        onChange={(e) => {
                            dispatch(setValue({ value: e.target.value }));
                        }}
                        placeholder="Search"
                        className="focus:ring-0 focus:border-[3px] transition-all duration-100"
                        ref={inputRef}
                        disabled={search.searchBy == ""}
                    />
                </div>
            </div>
        </>
    );
}

export default Search;
