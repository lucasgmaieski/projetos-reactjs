import { useState } from "react";

export const FormIMC = () => {
    return (
        <div>
            <input type="text" id="altura" placeholder="Altura"/>
            <input type="number" id="peso" placeholder="Peso"/>
            <input type="button" value="Calcular" />
        </div>
    );
}