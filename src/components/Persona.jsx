import { useParams, useNavigate } from "react-router"

export const Persona = () => {

    let { nombre, apellido } = useParams()    
    const navigate = useNavigate();                 

    /*if(!nombre){
        nombre = "Invitado";
    }

    if (!apellido){
        apellido = "Invitado";
    }*/


    const sendForm = (e) => {
        e.preventDefault();
        let name = e.target.name.value;
        let lastname = e.target.lastname.value;

        let url = `/persona/${name}/${lastname}`


        if(name.length <= 0 && lastname.length <= 0){
            console.log("inside");
            navigate("/inicio")
            
        }

        else{
            navigate(url)
        }

    }


    return (
        <>

            {!nombre && <h1>No hay usuarios para mostrar</h1>}
            {nombre && <h1>Esta es la pagina de la Persona: {nombre} {apellido} </h1>}

            <form onSubmit={sendForm}>
                <input type="text" name="name" />
                <input type="text" name="lastname" />
                <input type="submit" name="send" value="send" />
            </form>

        </>
    )
}
