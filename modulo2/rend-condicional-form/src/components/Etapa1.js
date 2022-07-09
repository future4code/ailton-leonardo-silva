import React from "react";
class Etapa1 extends React.Component {

    render() {

    return (
        <div className="form-dados-gerais">
            <p>Etapa1: DADOS GERAIS</p>
            <form>
                <div className="form-control">
                    <label htmlFor="title">Qual o seu nome?</label>
                        <input
                            type="text"
                            name="nome"
                            placeholder="Digite o seu nome"
                            required
                        />
                </div>
                <div className="form-control">
                <label htmlFor="title">Qual a sua idade?</label>
                    <input
                        type="text"
                        name="idade"
                        placeholder="Digite a sua idade"
                        required
                    />
                </div>
                <div className="form-control">
                <label htmlFor="title">Qual o seu email?</label>
                    <input
                        type="text"
                        name="email"
                        placeholder="Digite o seu email"
                        required
                    />
                </div>
                <div className="form-control">
                <label htmlFor="title">Qual a sua escolaridade?</label>
                    <select name="select">
                        <option value="valor1">Ensino Médio Incompleto</option>
                        <option value="valor2">Ensino Médio Completo</option>
                        <option value="valor3">Ensino Superior Incompleto</option>
                        <option value="valor4">Ensino Superior Completo</option>
                    </select>
                </div>
            </form>
            <button type="submit" onClick={this.props.mudaTela2}>Próxima etapa</button>
        </div>    
    );
    };
}

export default Etapa1;

