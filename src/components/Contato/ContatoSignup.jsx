import React from 'react'
import './Contato.css'
import { useFormik } from "formik";
import * as Yup from "yup";
import { mask as masker, unMask } from "remask";
import { Container, Body, H1 } from '../Card/style'
import axios from 'axios'; 

const InputMask = ({ mask, value, onChange, ...props }) => {
    const handleChange = (ev) => {
        const unMaskedValue = unMask(ev.target.value, mask);
        const maskedValue = masker(unMaskedValue, mask);
        onChange && onChange(ev.target.name)(maskedValue);
    };

    const maskedValue = masker(unMask(value), mask);

    return <input {...props} value={maskedValue} onChange={handleChange} />;
};

const ContatoSignup = () => {

    const api = axios.create({
        baseURL: process.env.REACT_APP_API_URL
    })

    const handleSubmit = (values) => {
        // alert(JSON.stringify(values, null, 2));
        const formData = new FormData();
        Object.keys(values).forEach(key => formData.append(key, values[key]));
        api.post('/contato', formData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
                // 'Content-Type': `multpart/form-data; boundary=${formData._boundary}`
            }
        })

            .then(response => {
                console.log(response.status)
                alert('Email enviado!')
                // response.render('Msg enviada')
            })
            .catch((error) => {
                    console.log(error.response.status);
                    // document.querySelector('#teste').innerHTML = 'Mensagem não enviada.';
                    // function Pkna () {
                    //     return <div dangerouslySetInnerHTML={{__html:'Mensagem não enviada.'}}/>
                    // }
                    // console.log('Email não enviado.');
            })
    }

    

    const formik = useFormik({
        initialValues: {
            nome: "",
            email: "",
            telefone: "",
            mensagem: ""
        },
        validationSchema: Yup.object({
            nome: Yup.string()
                .min(3, "Nome incompleto.")
                .required("Digite seu nome."),
            email: Yup.string().email("Email inválido.").required("Digite seu email."),
            telefone: Yup.string()
                .min(14, "Telefone inválido.")
                .required("Digite seu telefone."),
            mensagem: Yup.string()
                .min(10, "Sua mensagem deve conter mais de 10 caracteres.")
                .required("Digite sua mensagem.")
        }),
        onSubmit: (handleSubmit),

    });

    return (
        <Container id="contato">
            <H1>Contato</H1>
            <Body>
                <form className="wrapper-content" onSubmit={formik.handleSubmit}>
                    <div className="wrapper">
                        <div className="left">
                            <div className="input-data">
                                <input
                                    id="nome"
                                    name="nome"
                                    type="text"
                                    className="form_input"
                                    placeholder=" "
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.nome}
                                />
                                <label htmlFor="nome" className="form_label">Nome</label>
                                {formik.touched.nome && formik.errors.nome ? (
                                    <span>{formik.errors.nome}</span>
                                ) : null}
                            </div>
                            <div className="input-data">
                                <input
                                    id="email"
                                    name="email"
                                    type="text"
                                    className="form_input"
                                    placeholder=" "
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                />
                                <label htmlFor="email" className="form_label">Email</label>
                                {formik.touched.email && formik.errors.email ? (
                                    <span>{formik.errors.email}</span>
                                ) : null}
                            </div>
                            <div className="input-data">
                                <InputMask
                                    id="telefone"
                                    name="telefone"
                                    type="text"
                                    className="form_input"
                                    placeholder=" "
                                    mask={["(99) 9999-9999", "(99) 9 9999-9999"]}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.telefone}
                                />
                                <label htmlFor="telefone" className="form_label">Telefone</label>
                                {formik.touched.telefone && formik.errors.telefone ? (
                                    <span>{formik.errors.telefone}</span>
                                ) : null}

                            </div>
                        </div>
                        <div className="right">
                            <div className="input-data">
                                <textarea
                                    id="mensagem"
                                    name="mensagem"
                                    type="text"
                                    className="form_input"
                                    placeholder=" "
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.mensagem}
                                />
                                <label htmlFor="mensagem" className="form_label">Mensagem</label>
                                {formik.touched.mensagem && formik.errors.mensagem ? (
                                    <span>{formik.errors.mensagem}</span>
                                ) : null}

                            </div>
                        </div>
                    </div>
                    <div className="msg-btn">
                        {/* { <span className="msg">Mensagem enviada com sucesso!</span> } */}
                        {/* <div id="teste"></div> */}
                        <div className="btn">
                            <button type="submit">Enviar</button>
                        </div>
                    </div>
                </form>
            </Body>
        </Container>
    )
}

export default ContatoSignup
