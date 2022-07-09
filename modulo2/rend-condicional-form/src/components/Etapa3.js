import React from "react";
class Etapa3 extends React.Component {

    
    render() {

    return (
        <div className="form-dados-gerais">
            <p>Etapa 3 - INFORMAÇÕES GERAIS DE ENSINO</p>
            <form>
                <div className="form-control">
                    <label htmlFor="title">Por que você não terminou um curso de graduação?</label>
                        <input
                            type="text"
                            name="nome"
                            placeholder="Motivo"
                        />
                </div>
                <div className="form-control">
                <label htmlFor="title">Você fez algum curso complementar?</label>
                    <select name="select">
                        <option value="valor1">Curso Técnico</option>
                        <option value="valor2">Curso de Inglês</option>
                        <option value="valor3">Não fiz curso complementar</option>
                    </select>
                </div>
            </form>
            <button type="submit" onClick={this.props.mudaFinal}>Próxima etapa</button>
        </div>    
    );
    };
}

export default Etapa3;

