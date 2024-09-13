import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SelectDate = ({ selectedDate, onChange, darkMode = false }) => {
    return (
        <div className={`font-giloryMed gap-2 w-96 ${darkMode ? 'text-violet-400' : 'text-violet-600'}`}>
            <div className="relative">
                <DatePicker
                    selected={selectedDate}
                    onChange={onChange}
                    dateFormat="MMM dd, yyyy"
                    placeholderText="mm/dd/yyyy"
                    className={`
                        w-full h-12 px-4 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:border-transparent
                        ${darkMode ? 'bg-zinc-900 border-zinc-700 text-violet-400 focus:ring-violet-600' : 'bg-stone-50 border-violet-300 text-black focus:ring-violet-300'}
                    `}
                    popperPlacement="bottom-start"
                    renderCustomHeader={({ monthDate, decreaseMonth, increaseMonth }) => (
                        <div className="flex justify-between items-center px-2 py-2">
                            <button onClick={decreaseMonth} className={`${darkMode ? 'text-violet-400 hover:text-violet-600' : 'text-violet-500 hover:text-violet-700'} focus:outline-none`}>
                                <ChevronLeft size={20} />
                            </button>
                            <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} text-lg font-medium`}>
                                {format(monthDate, 'MMMM yyyy')}
                            </span>
                            <button onClick={increaseMonth} className={`${darkMode ? 'text-violet-400 hover:text-violet-600' : 'text-violet-500 hover:text-violet-700'} focus:outline-none`}>
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    )}
                    dayClassName={date => {
                        if (
                            selectedDate &&
                            date.getDate() === selectedDate.getDate() &&
                            date.getMonth() === selectedDate.getMonth() &&
                            date.getFullYear() === selectedDate.getFullYear()
                        ) {
                            return "bg-violet-500 text-white rounded-full";
                        }
                        return `${darkMode ? 'text-gray-300 hover:bg-zinc-800' : 'text-gray-700 hover:bg-violet-100'}`;
                    }}
                    clearButtonClassName="absolute right-4 top-1/2 transform -translate-y-1/2"  
                />
            </div>
        </div>
    );
};

export default SelectDate;
