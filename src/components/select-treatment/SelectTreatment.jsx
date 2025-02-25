"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SelectTreatment({ treatmentId }) {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const [treatments, setTreatments] = useState("");
  const [uniqueTypes, setUniqueTypes] = useState([]);
  const [selectedId, setSelectedId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL);
      const json = await response.json();
      setTreatments(json.data.treatments || []);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (treatments.length > 0) {
      setUniqueTypes([...new Set(treatments.map((t) => t.type))]);
    }
  }, [treatments]);

  useEffect(() => {
    if (treatmentId && treatments.length > 0) {
      const exists = treatments.find((t) => t.id.toString() === treatmentId);
      if (exists) setSelectedId(treatmentId);
    }
  }, [treatmentId, treatments]);

  const handleClick = (e) => {
    const newSelectedId = e.target.value;
    setSelectedId(newSelectedId);

    const params = new URLSearchParams(searchParams);
    if (newSelectedId) {
      params.set("treatmentId", newSelectedId);
    } else {
      params.delete("treatmentId");
    }

    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <select name="select" value={selectedId} onChange={handleClick}>
      <option value="">Lista de tratamientos</option>
      {uniqueTypes.map((type, index) => (
        <optgroup key={index} label={type}>
          {treatments
            .filter((t) => t.type === type)
            .map((treatment) => (
              <option key={treatment.id} value={treatment.id}>
                {treatment.name}
              </option>
            ))}
        </optgroup>
      ))}
    </select>
  );
}
