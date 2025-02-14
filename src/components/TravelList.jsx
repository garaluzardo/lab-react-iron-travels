import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
    const [travelPlans, setTravelPlans] = useState(travelPlansData);

    return (
        <div>
            <h2>Tailored Travel Plans for Ironhackers</h2>
            <ul>
                {travelPlans.map((plan) => (
                    <li key={plan.id}>
                        <h3>{plan.destination}</h3>
                        <p>{plan.description}</p>
                        <p><strong>Precio:</strong> {plan.price}€</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TravelList; 