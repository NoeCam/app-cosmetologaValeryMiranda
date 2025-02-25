"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import SelectTreatment from "@/components/select-treatment/SelectTreatment";
import CalendarPersonalize from "@/components/calendar-personalize/CalendarPersonalize";
import TimeTreatment from "@/components/time-treatment/TimeTreatment";

export const PageAppointments = () => {
  const searchParams = useSearchParams();
  const treatmentId = searchParams.get("treatmentId");
  const date = searchParams.get("date");

  const [selectedDate, setSelectedDate] = useState(date || null);

  const handleSumbit = async (e) => {
    // e.preventDefault();
    // const treatmentId = e.target.treatment.value;
    // const date = e.target.date.value;
    // const time = e.target.time.value;
    //   try {
    //     await bookingTreatmentService(treatmentId, date, time);
    //     alert("Tu tratamiento ha sido reservado con éxito");
    //   } catch (error) {
    //     alert("Error al reservar el tratamiento");
    //   }
  };

  // const fetchTimeAppointments = async () => {
  //   try {
  //     const response = fetch(
  //       `${process.env.NEXT_PUBLIC_API_URL}/time-appointments`,
  //       {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           treatmentId,
  //           selectedDate,
  //         }),
  //       }
  //     );
  //     if (!response.ok) throw new Error("Error al reservar el tratamiento.");
  //     return;
  //   } catch (error) {}
  // };

  // useEffect(() => {
  //   fetchTimeAppointments();
  // }, [selectedDate]);

  return (
    <form
      className="flex flex-col items-center justify-center mx-auto"
      onSubmit={handleSumbit}
    >
      <h1 className="text-4xl font-bold my-10">Reserva tú tratamiento</h1>
      <h2 className="mb-3">Selecciona un tratamiento</h2>
      <SelectTreatment treatmentId={treatmentId} />
      <div className="my-10">
        <h3 className="text-center mb-3">Fecha y hora</h3>
        <CalendarPersonalize onChange={setSelectedDate} value={selectedDate} />
        <TimeTreatment />
      </div>
      {/* faltan datos de cliente */}
      <button
        type="submit"
        className="hover:bg-slate-300 m-3 p-3 rounded-md text-gold  bg-slate-100"
      >
        Confirmar reserva
      </button>
    </form>
  );
};

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageAppointments />
    </Suspense>
  );
};

export default page;
