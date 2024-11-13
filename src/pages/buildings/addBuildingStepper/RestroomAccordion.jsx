import React, { useState } from "react";
import Dropdown from "../../../components/shared/dropdown/Dropdown";
import Input from "../../../components/shared/input/Input";
import { IoAdd } from "react-icons/io5";
import { HiOutlineMinusSm } from "react-icons/hi";
import AddSensors from './AddSensors'
const floors = 3;

const RestroomAccordion = () => {
  const [activeAccordionIndex, setActiveAccordionIndex] = useState(null);

  const handleAccordionToggle = (index) => {
    setActiveAccordionIndex((prevIndex) =>
      prevIndex === index ? null : index
    );
  };

  return (
    <div className="flex flex-col gap-4">
      {Array.from({ length: floors }).map((_, index) => (
        <Restroom
          key={index}
          isOpen={activeAccordionIndex === index}
          onToggle={() => handleAccordionToggle(index)}
        />
      ))}
    </div>
  );
};

const Restroom = ({ isOpen, onToggle }) => {
  return (
    <div>
      {/* Accordion Header */}
      <div
        className={`flex items-center justify-between border rounded-[4px] px-4 md:px-8 py-2 ${
          isOpen ? "border-primary" : "border-[#b7b7b7]"
        }`}
      >
        <h6
          className={`text-base md:text-lg font-semibold ${
            isOpen ? "text-primary" : "text-[#666666]"
          }`}
        >
          Restroom Name
        </h6>
        <div className="flex items-center gap-4">
          <div className="cursor-pointer" onClick={onToggle}>
            {isOpen && (
              <HiOutlineMinusSm fontSize={20} className={`${isOpen ? 'text-primary':'text-[#666666]'}`} />
            )}
            {!isOpen && <IoAdd fontSize={20} className={`${isOpen ? 'text-primary':'text-[#666666]'}`} />}
          </div>
        </div>
      </div>

      {/* Accordion Content */}
      {isOpen && (
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <Input
            label="Restroom name"
            type="text"
            placeholder="Restroom name"
          />
          <Dropdown
            label="Type"
            defaultText="Type"
            options={[{ option: "Private" }]}
          />
          <Dropdown
            label="Status"
            defaultText="Type"
            options={[{ option: "Active" }]}
          />
          <Input label="Area" type="text" placeholder="Sq ft" />
          <Input label="Number of Toilets" type="text" placeholder="5" />
          <div className="lg:col-span-3 flex justify-center">
            <AddSensors />
          </div>
        </div>
      )}
    </div>
  );
};

export default RestroomAccordion;
