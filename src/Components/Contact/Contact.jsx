import { useForm, ValidationError } from '@formspree/react';
import GratitudeMsg from '../GratitudeMsg/GratitudeMsg';
import './Contact.css';

function Contact() {
    const [state, handleSubmit] = useForm("xbjnbvry");

    return (
        <>
            <section className="section contact-me" data-section="section4">
                <div className="container">
                    <div className="section-heading">
                        <h2>Contacto</h2>
                        <div className="line-dec"></div>
                    </div>

                    {state.succeeded ? (
                        <GratitudeMsg />
                    ) : (
                        <div className="row">
                            <div className="right-content">
                                <div className="container">
                                    <form id="contact" onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <fieldset>
                                                    <input
                                                        name="name"
                                                        type="text"
                                                        className="form-control"
                                                        id="name"
                                                        placeholder="Nombre"
                                                        required
                                                    />
                                                </fieldset>
                                            </div>
                                            <div className="col-md-6">
                                                <fieldset>
                                                    <input
                                                        name="email"
                                                        type="email"
                                                        className="form-control"
                                                        id="email"
                                                        placeholder="Email"
                                                        required
                                                    />
                                                    <ValidationError
                                                        prefix="Email"
                                                        field="email"
                                                        errors={state.errors}
                                                    />
                                                </fieldset>
                                            </div>
                                            <div className="col-md-12">
                                                <fieldset>
                                                    <input
                                                        name="subject"
                                                        type="text"
                                                        className="form-control"
                                                        id="subject"
                                                        placeholder="Asunto"
                                                        required
                                                    />
                                                </fieldset>
                                            </div>
                                            <div className="col-md-12">
                                                <fieldset>
                                                    <textarea
                                                        name="message"
                                                        rows="6"
                                                        className="form-control"
                                                        id="message"
                                                        placeholder="Mensaje"
                                                        required
                                                    />
                                                    <ValidationError
                                                        prefix="Message"
                                                        field="message"
                                                        errors={state.errors}
                                                    />
                                                </fieldset>
                                            </div>
                                            <div className="col-md-12">
                                                <fieldset>
                                                    <button
                                                        type="submit"
                                                        id="form-submit"
                                                        name="submit"
                                                        className="button"
                                                        disabled={state.submitting}>
                                                        Enviar Mensaje
                                                    </button>
                                                </fieldset>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}

export default Contact;