import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import { es } from 'date-fns/locale/es';
registerLocale('es', es)

// Documentación: 
// https://reactdatepicker.com/

interface MiDatePickerProps {
    selectedDate: Date | null;
    onChange: (date: Date | null) => void;
    format?: "dd/MM/yyyy" | "MM/yyyy" | "yyyy";
}

const MiDatePicker: React.FC<MiDatePickerProps> = ({ selectedDate, onChange, format = "dd/MM/yyyy" }) => {

    return (
        <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md">
            <label className="text-gray-700 font-semibold mb-2">Selecciona {format}</label>
            <DatePicker
                locale="es"
                selected={selectedDate}
                onChange={onChange} // Llama a la función pasada como prop
                dateFormat={format}
                showMonthYearPicker={format === "MM/yyyy"}
                showYearPicker={format === "yyyy"}
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                popperClassName="custom-datepicker" // Clase personalizada para el calendario
            />
        </div>
    );
};

export default MiDatePicker;