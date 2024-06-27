import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/InsertCode.css";

export function InsertCode({ email }) {
    const [errors, setErrors] = useState("");
    const [code, setCode] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        const inputs = ["1", "2", "3", "4", "5"];

        const handleInput = (event) => {
            const inputElement = event.target;
            const value = inputElement.value.slice(0, 1); 
            const id = inputElement.id;

            const nextIdIndex = inputs.indexOf(id) + 1;
            if (nextIdIndex < inputs.length) {
                const nextId = inputs[nextIdIndex];
                if (value && nextId) {
                    document.getElementById(nextId)?.focus();
                }
            }

            const newCode = inputs.map((inputId) => {
                const inputValue = document.getElementById(inputId)?.value || '';
                return inputValue.slice(0, 1);
            }).join('');
            setCode(newCode);
        };

        inputs.forEach((id) => {
            const inputElement = document.getElementById(id);
            if (inputElement) {
                inputElement.addEventListener('input', handleInput);
            }
        });

        return () => {
            inputs.forEach((id) => {
                const inputElement = document.getElementById(id);
                if (inputElement) {
                    inputElement.removeEventListener('input', handleInput);
                }
            });
        };
    }, []);

    const handleKeyPress = (event) => {
        const charCode = event.charCode;
        if (charCode < 48 || charCode > 57) { 
            event.preventDefault();
        }
    };

    const validateForm = () => {
        if (code.length !== 5) {
            setErrors("The code must contain five digits.");
            return false;
        } else {
            setErrors("");
            return true;
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (validateForm()) {
            try {
                // Aquí podrías realizar la lógica para validar el código con tu backend
                navigate("/changePassword"); // Redirige a la página de cambio de contraseña
            } catch (error) {
                alert("User not found");
            }
        }
    };

    return (
        <div className="contenedor-principal">
            <form onSubmit={handleSubmit}>
                <div className="contenedor-texto">
                    <h1>Insert Code</h1>
                    <p>The code was sent to your email <strong>{email}</strong> to change your password.</p>
                </div>
                <div className="contenedor-inputs">
                    <input type="text" id="1" maxLength="1" onKeyPress={handleKeyPress} />
                    <input type="text" id="2" maxLength="1" onKeyPress={handleKeyPress} />
                    <input type="text" id="3" maxLength="1" onKeyPress={handleKeyPress} />
                    <input type="text" id="4" maxLength="1" onKeyPress={handleKeyPress} />
                    <input type="text" id="5" maxLength="1" onKeyPress={handleKeyPress} />
                </div>
                {errors && <div className={errors.email !== "" ? "error" :"mensajeError"}><p>{errors}</p></div>}
                <button type="submit" className="btn btn-primary">
                    Confirm
                </button>
            </form>
        </div>
    );
}
