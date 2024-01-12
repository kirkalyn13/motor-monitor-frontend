import React, { ChangeEvent } from 'react';

interface PeriodProps {
 
}

const Period: React.FC<PeriodProps> = () => {
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = parseInt(event.target.value, 10);
    // onChange(selectedValue);
  };

  return (
    <>
        <span className="flex flex-col justify-center align-center">Period:</span>
        <div className="flex flex-col justify-center align-center">
            <select
                // value={value}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => handleSelectChange(e)}
                className="bg-slate-800 text-white p-2 rounded-md border-0"
                >
                <option value={15}>15 min</option>
                <option value={30}>30 min</option>
                <option value={60}>1 hr</option>
                </select>
        </div>
    </>
  );
};

export default Period;
