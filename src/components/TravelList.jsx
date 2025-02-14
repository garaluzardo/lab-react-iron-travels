import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";

function TravelList() {
    const [travelPlans, setTravelPlans] = useState(travelPlansData);

    // Función para eliminar viaje de la lista
    const deleteTravel = (id) => {
        const updatedTravelPlans = travelPlans.filter(plan => plan.id !== id);
        setTravelPlans(updatedTravelPlans); // Actualizamos el estado 
    };

    return (
        <div>

            <ul>
                {travelPlans.map((plan) => (
                    <TravelPlanCard key={plan.id} plan={plan} onDelete={deleteTravel} />
                ))}
            </ul>
        </div>
    );
}

export default TravelList; 