import { useState } from "react";
import FormInput from "../../components/formInput/FormInput";
import "./register.scss"

const Register = () => {
    const [values, setValues] = useState({
        usuario: "",
        nombre: "",
        password: "",
        password2: "",
        correo: "",
        telefono: "",
    });

    const inputs = [
        {
            id: 1,
            name: "usuario",
            type: "text",
            errorMessage: "El usuario tiene que ser de 4 a 16 dígitos y solo puede contener números, letras y guión bajo.",
            placeholder: "shrek123",
            label: "Usuario",
            pattern: "^[a-zA-Z0-9_-]{4,16}$",
            required: true
        },
        {
            id: 2,
            name: "nombre",
            type: "text",
            errorMessage: "El nombre tiene que ser de 1 a 40 dígitos y solo puede contener números, letras y guión bajo.",
            placeholder: "Jonh Doe",
            pattern: "^[a-zA-ZÀ-ÿs]{1,40}$",
            label: "Nombre",
            required: true
        },
        {
            id: 3,
            name: "password",
            type: "password",
            errorMessage: "La contraseña tiene que ser de 8-20 digitos y al menos 1 letra, 1 numero y un carácter especial.",
            placeholder: "Contraseña",
            label: "Contraseña",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true
        },
        {
            id: 4,
            name: "password2",
            type: "password",
            errorMessage: "Ambas contraseñas deben ser iguales",
            placeholder: "Confirmar contraseña",
            label: "Confirmar contraseña",
            pattern: values.password,
            required: true
        },
        {
            id: 5,
            name: "correo",
            type: "email",
            errorMessage: "El correo solo puede contener letras, números, puntos y guión bajo.",
            placeholder: "correo@correo.com",
            pattern: "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$",
            label: "Correo Electrónico",
            required: true
        },
        {
            id: 6,
            name: "telefono",
            type: "text",
            errorMessage: "El teléfono solo puede contener números y de 7 a 14 dígitos",
            placeholder: "1123467890",
            pattern: `^[0-9]{7,14}$`,
            label: "Teléfono",  
            required: true
        },
        {
            id: 7,
            name: "terminos",
            type: "checkbox",
            label: "Acepto los términos y condiciones",
            required: true
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const onChange = (e)=>{ 
        setValues({...values, [e.target.name]: e.target.value})
    };

    console.log(values);

    return (
        <div className="register">
            <header className="header">
                <img src="assets/img/logo/logo-two-final.png" alt="logo" className="logo" draggable="false"/>
            </header>
            <div className="register-container">
                <div className="top">
                    <img src="assets/img/logo/t-complemento-alternative.png" alt=""/>
                    <h2>Regístrate</h2>
                    <img src="assets/img/logo/t-complemento.png" alt=""/>
                </div>
                <form className="formulario" id="formulario" onSubmit={handleSubmit}>
                    {inputs.map((input) => (
                        <FormInput 
                        key={input.id} 
                        {...input} 
                        value={values[input.name]} 
                        onChange={onChange} 
                        />
                    ))}
                    <button>Enviar</button>
                </form>
                <div className="footer-register-container">
                    <p className="new">Ya estás registrado?<a href="/">Inicia sesión ahora</a></p>
                    <p className="protect"> Esta pagina esta protegida por Google reCAPTCHA para asegurarnos de que no eres un robot. <a href="/">Leer más.</a></p>
                </div>
            </div>
            <footer className="footer">
                <div className="footer-info">
                    <p> Preguntas? Llamar <a href="tel:+123123123123">+123123123123(AR)</a></p>
                    <ul className="footer-links">
                        <li className="footer-link_item"><a href="/">Preguntas Frecuentes</a></li>
                        <li className="footer-link_item"><a href="/">Centro de ayuda</a></li>
                        <li className="footer-link_item"><a href="/">Términos de uso</a></li>
                        <li className="footer-link_item"><a href="/">Privacidad</a></li>
                        <li className="footer-link_item"><a href="/">Preferencia de Cookies</a></li>
                        <li className="footer-link_item"><a href="/">Información Corporativa</a></li>
                    </ul>
                    <select name="language" id="language">
                        <option value="es">Español</option>
                        <option value="en">English</option>
                    </select>
                </div>
            </footer>     
        </div>
    )
}

export default Register;