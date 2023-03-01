import Image from "next/legacy/image"
import {
    MagnifyingGlassIcon,
    GlobeAltIcon,
    Bars3Icon,
    UserCircleIcon,
    UsersIcon,
} from '@heroicons/react/24/solid'
import React, { useState } from "react"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker, RangeKeyDict, Range } from 'react-date-range'
import { useRouter } from "next/router";

interface DateRangeState {
    startDate: Date,
    endDate: Date,
    key: string
}

const Header = () => {
    const [searchInput, setSearchInput] = React.useState("")

    const [dateRange, setDateRange] = React.useState({
        startDate: new Date(),
        endDate: new Date(),
    })
    const onDatesChange = ({ startDate, endDate }: DateRange) => {
        setDateRange({
            startDate: startDate,
            endDate: endDate
        })
    }

    const resetSearch = () => { setSearchInput("") }
    const router = useRouter();

    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5">
            {/* left */}
            <div onClick={() => router.push("/")} className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image src="https://links.papareact.com/qd3"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>

            {/* middle - search*/}
            <div className="flex items-center border-2 rounded-full py-2">
                <input
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400" type="text" placeholder="start your search" />
                <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer mx-2" />
            </div>

            {/* right */}
            <div className="flex items-center space-x-4 justify-end text-gray-500">
                <p className="hidden md:inline cursor-pointer">Become a host</p>
                <GlobeAltIcon className="h-6 cursor-pointer" />

                <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
                    <Bars3Icon className="h-6" />
                    <UserCircleIcon className="h-6" />
                </div>
            </div>

            {searchInput && (
                <div className="flex flex-col col-span-3 mx-auto">
                    <CustomDateRangePicker
                        startDate={dateRange.startDate}
                        endDate={dateRange.endDate}
                        onChange={onDatesChange} />
                    <GuestCounter />
                    <CancelAndSearch resetSearch={resetSearch} />
                </div>
            )}
        </header>
    )
}

interface DateRange {
    startDate: Date,
    endDate: Date
}

interface DateRangePickerProps {
    startDate: Date,
    endDate: Date,
    onChange: ({ startDate, endDate }: DateRange) => void
}

const CustomDateRangePicker: React.FC<DateRangePickerProps> = ({
    startDate,
    endDate,
    onChange
}) => {
    const ranges = {
        startDate: startDate,
        endDate: endDate,
        key: "selection"
    }
    const handleDateRangePickerChange = (ranges: RangeKeyDict) => {
        const { selection } = ranges
        onChange({
            startDate: selection.startDate!,
            endDate: selection.endDate!,
        })
    }

    return (
        <DateRangePicker
            onChange={handleDateRangePickerChange}
            moveRangeOnFirstSelection={false}
            ranges={[ranges]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
        />
    )
}

const GuestCounter = () => {
    const [numberOfGuests, setNumberOfGuests] = React.useState(1)
    return (
        <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl font-semibold flex-grow">Number of Guests</h2>
            <UsersIcon className="h-5" />
            <input
                value={numberOfGuests}
                onChange={event => setNumberOfGuests(parseInt(event.target.value, 10))}
                min={1}
                type="number"
                className="w-12 pl-2 text-lg outline-none text-red-400"
            />
        </div>
    )
}

interface ResetSearch {
    resetSearch: () => void
}

const CancelAndSearch = ({ resetSearch }: ResetSearch) => {
    return (
        <div className="flex">
            <button
                className="flex-grow text-gray-500"
                onClick={resetSearch}>
                Cancel
            </button>
            <button
                className="flex-grow text-red-400">
                Search
            </button>
        </div>
    )
}

export default Header