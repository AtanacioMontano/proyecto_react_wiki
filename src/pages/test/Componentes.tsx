import { useState } from "react";
import { ButtonSubmit, ButtonAceptar, ButtonEliminar, ButtonCancelar } from "../../components/widgets/Buttons";
import { IconoInfo } from "../../components/widgets/Icons";
import "react-datepicker/dist/react-datepicker.css";
import MiDatePicker from "../../components/widgets/Datepicker";


const Componentes = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
    const [selectedMonth, setSelectedMonth] = useState<Date | null>(new Date());
    const [selectedYear, setSelectedYear] = useState<Date | null>(new Date());

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };
    const handleMonthChange = (date: Date | null) => {
        setSelectedMonth(date);
    };
    const handleYearChange = (date: Date | null) => {
        setSelectedYear(date);
    };

    return (
        <>
            <div className="justify-center w-full p-4 border rounded-lg shadow-md">
                <strong> Buttons</strong>
                <br /> <br />
                <div className="flex flex-wrap space-x-4">
                    <ButtonSubmit />
                </div>
                <br />
                <h2>Placeholders</h2>
                <br />
                <div className="flex flex-wrap space-x-4">
                    <ButtonAceptar />
                    <ButtonCancelar />
                    <ButtonEliminar />
                </div>
            </div>
            <br />
            <div className="justify-center w-full p-4 border rounded-lg shadow-md">
                <strong> Iconos</strong>
                <br /> <br />
                <div className="flex flex-wrap space-x-4">
                    <IconoInfo /> <IconoInfo size={24} /> <IconoInfo size={32} /> <IconoInfo size={64} />
                </div>
            </div>
            <br />
            <div className="justify-center w-full w-100 p-4 border rounded-lg shadow-md">
                <strong> Datepicker</strong>
                <br /> <br />
                <h2>react-datepicker</h2>
                <br />
                <div className="flex flex-wrap space-x-4">
                    <MiDatePicker selectedDate={selectedDate} onChange={handleDateChange} />
                    <MiDatePicker selectedDate={selectedMonth} onChange={handleMonthChange} format="MM/yyyy" />
                    <MiDatePicker selectedDate={selectedYear} onChange={handleYearChange} format="yyyy" />
                </div>
                <br />
                <p>Fecha seleccionada: {selectedDate ? selectedDate.toLocaleDateString("es-ES", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                }) : "Ninguna"}</p>
            </div>
        </>
    );
};

export default Componentes;
