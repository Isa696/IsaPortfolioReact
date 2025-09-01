import TechsAccordion from "../TechsAccordion/TechsAccordion";
import "./Techs.css";
import webDevCertificate from "../../assets/images/webDev-certificate.png";
import JsCertificate from "../../assets/images/javascript-certificate.png";
import reactCertificate from "../../assets/images/react-certificate.png";
import nativeCertificate from "../../assets/images/native-certificate.png";
import pyCertificate from "../../assets/images/py-certificate.pdf";
import uxUiCertificate from "../../assets/images/ux-ui-certificate.pdf";

function Techs() {

    return (
        <>
            <section className="section my-services" data-section="section1" id="section1">
                <div className="container">
                    <div className="section-heading">
                        <h2>Tecnologías</h2>
                        <div className="line-dec"></div>
                    </div>
                    <div className="row">

                        <TechsAccordion
                            title={"HTML5 & CSS3"}
                            logo={"first-service-icon service-icon"}
                            logo2={"first-service-icon-2 service-icon"}
                            accordionText={"– HTML: estructura básica, etiquetas de encabezados, párrafos, listas, enlaces, imágenes, formularios y tablas\n– CSS: selectores, propiedades básicas, diseño de caja, diseño responsivo, Flexbox y Grid, animaciones y transiciones"}
                            certificate={webDevCertificate}
                        />

                        <TechsAccordion
                            title={"Javascript"}
                            logo={"second-service-icon service-icon"}
                            logo2={""}
                            accordionText={"– Manipulación del DOM\n– Eventos y manejo de eventos\n– Bucles\n– Funciones\n– Variables y tipos de datos\n– Condicionales\n– Arrays y objetos\n– AJAX y peticiones HTTP\n– Promesas y asincronía"}
                            certificate={JsCertificate}
                        />

                        <TechsAccordion
                            title={"React.js & FireStore"}
                            logo={"third-service-icon service-icon"}
                            logo2={"third-service-icon-2 service-icon"}
                            accordionText={"– React.js: JSX, componentes y props\n– Estado y ciclo de vida\n– Manejo de eventos\n– Listas y claves\n– Formularios\n– Levantamiento del estado\n– Hooks\n– React Router\n– Context API\n– Firestore: base de datos NoSQL orientada a los documentos"}
                            certificate={reactCertificate}
                        />

                        <TechsAccordion
                            title={"Git & GitHub"}
                            logo={"fourth-service-icon service-icon"}
                            logo2={"fourth-service-icon-2 service-icon"}
                            accordionText={`– Comandos básicos de Git: iniciación, clonación, añadir cambios, confirmar cambios, verificar estado y enviar cambios\n– Repositorios remotos: vinculación de repositorio local con remoto y sincronización de cambios\n– Branching y Merging: creación de ramas, cambio de ramas y fusión de cambios`}
                        />

                        <TechsAccordion
                            title={"Native & Real Time Database"}
                            logo={"fifth-service-icon service-icon"}
                            logo2={"fifth-service-icon-2 service-icon"}
                            accordionText={`– Creación de apps móviles con Expo\n– Integración de componentes nativos: Geolocalización y Cámara\n– Redux: manejo del estado global de la app\n– Navegación: Tab Navigator y Stack Navigator\n– Firebase Realtime Database: sincronización entre la app y la base de datos\n– Autenticación con Firebase: inicio de sesión y registro de usuarios`}
                            certificate={nativeCertificate}
                        />
                        <TechsAccordion
                            title={"Python"}
                            logo={"sixth-service-icon service-icon"}
                            accordionText={`– Variables y operadores\n– Estructuras de control y bucles\n– Manejo de tuplas, diccionarios y conjuntos\n– Funciones\n– Control de errores y excepciones personalizadas\n– Lectura y escritura de archivos\n– Importación y creación de módulos propios`}
                            certificate={pyCertificate}
                        />
                        <TechsAccordion
                            title={"Figma + UX/UI"}
                            logo={"seventh-service-icon service-icon"}
                            logo2={"seventh-service-icon2 service-icon"}
                            accordionText={'– Problema, objetivo y solución centrados en usuarios reales\n– MVP validado con ajustes iterativos\n– User Personas + Empathy Map\n– User Flow optimizado\n– Wireframes y mockups en alta fidelidad\n– Proyecto final publicado en Behance'}
                            certificate={uxUiCertificate}
                            projectLink={"https://www.behance.net/gallery/233368813/EntrenApp-CURSO-UX-UI-Isaias-Romero"}
                        />

                    </div>
                </div>
            </section>
        </>
    )
}

export default Techs;