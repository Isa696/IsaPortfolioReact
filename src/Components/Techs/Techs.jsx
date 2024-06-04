import TechsAccordion from "../TechsAccordion/TechsAccordion";
import "./Techs.css";

function Techs() {

    return (
        <>
            <section className="section my-services" data-section="section1">
                <div className="container">
                    <div className="section-heading">
                        <h2>Tecnologias</h2>
                        <div className="line-dec"></div>
                    </div>
                    <div className="row">

                        <TechsAccordion
                            title={"HTML5 & CSS3"}
                            logo={"first-service-icon service-icon"}
                            logo2={"first-service-icon-2 service-icon"}
                            accordionText={"HTML: Estructura básica, Etiquetas de encabezados, Párrafos, Listas, Enlaces, Imágenes, Formularios, Tablas.\n CSS:Selectores, Propiedades básicas, Diseño de caja, Diseño responsivo, Flexbox y Grid,Animaciones y Transiciones."}
                        />

                        <TechsAccordion
                            title={"Javascript"}
                            logo={"second-service-icon service-icon"}
                            logo2={""}
                            accordionText={"Manipulación del DOM,Eventos y manejo de eventos, Bucles, Funciones, Variables y tipos de datos, Condicionales, Arrays y objetos, AJAX y peticiones HTTP,Promesas y asincronía."}
                        />

                        <TechsAccordion
                            title={"React.js & FireStore"}
                            logo={"third-service-icon service-icon"}
                            logo2={"third-service-icon-2 service-icon"}
                            accordionText={"React.js: JSX,Componentes y Props,Estado y Ciclo de Vida, Manejo de Eventos, Listas y Claves, Formularios,Levantamiento del Estado, Hooks, React Router,Context API. \n FireStore: base de datos NoSQL orientada a los documentos."}
                        />

                        <TechsAccordion
                            title={"Git & GitHub"}
                            logo={"fourth-service-icon service-icon"}
                            logo2={"fourth-service-icon-2 service-icon"}
                            accordionText={`Comandos Básicos de Git: Iniciación, clonación, añadir cambios, confirmar cambios, verificar estado, y enviar cambios.\n Repositorios Remotos: Vinculación de repositorio local con remoto y sincronización de cambios.\n Branching y Merging: Creación de ramas, cambio de ramas, y fusión de cambios.`}
                        />

                        <TechsAccordion
                            title={"React.native in progress..."}
                            logo={"fifth-service-icon service-icon"}
                            logo2={"fifth-service-icon-2 service-icon"}
                            accordionText={`Actualmente cursando en Coder House.`}
                        />

                    </div>
                </div>
            </section>
        </>
    )
}

export default Techs;