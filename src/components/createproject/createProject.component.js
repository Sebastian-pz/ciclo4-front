import { gql, useMutation } from "@apollo/client";
import React from "react";
import decodeToken from "../../controller/token/decodeToken";

let token = decodeToken()

const MUTATION_PROJECT = gql`
    mutation newProject($projectTitle:String,$go:String,$so:String,$budget:Int,$leader:String){
        createProject(project:{title:$projectTitle, general_objective: $go, specific_objectives: $so,budget: $budget,  leader:$leader})
    }
`;

const CreateProject = () => {
    const [createProject] = useMutation(MUTATION_PROJECT)
    /*
    if (loading) return 'Creando...';
    if(error) return `Error en la creación  ${error.message}`;
    */

    let project = {
        title:"",
        general_objective:"",
        specific_objectives:"",
        budget:0,
        leader:"",
    }
    return (<div id="body">
        <div id="loginb">
        <h1>Crear proyecto</h1>
        <div id="">
            <form onSubmit={e => {
                e.preventDefault();
                //Aquí va la mutación
                createProject({variables:{
                    projectTitle: project.title.value,
                    go: project.general_objective.value,
                    so: project.specific_objectives.value,
                    budget: parseInt(project.budget.value),
                    leader: token.id
                }})
                    .then(e => {
                        alert("Proyecto creado")
                        window.location.replace('/projects')
                    })
                    .catch(err => alert("Error en la creación del proyecto"))



            }}>
                <div id="form-base">
                    <label id="label">¿Cuál va a ser el título de su proyecto?</label><br/>
                    <input autoComplete="off" id="input1" ref={title => project.title = title} placeholder="Título" required/>
                </div>
                <div>
                    <label id="label">¿Cuál es el objetivo general?</label><br/>
                    <input autoComplete="off" id="input1" ref={general_objective => project.general_objective = general_objective} placeholder="Objetivos generales" required/>
                </div>
                <div>
                    <label id="label">¿Cuáles son los objetivos específicos del proyecto?</label><br/>
                    <input autoComplete="off" id="input1" ref={specific_objectives => project.specific_objectives = specific_objectives} placeholder="Objetivos específicos" required/>
                </div>
                <div>
                    <label id="label">¿Cuánto es el presupuesto para el proyecto?</label><br/>
                    <input autoComplete="off" id="input1"  ref={budget => project.budget = budget} placeholder="Presupuesto" required/>
                </div>
                <br/>
                <p><b>Nota:</b> Asegúrese de diligenciar correctamente todos los datos<br/> en caso de dudas consulte a la administración</p>
                <div><button id="submitbutton" type="submit" className="btn btn-primary">Crear proyecto</button></div>
            </form>
        </div>
        </div>
    </div>)
}

export default CreateProject;