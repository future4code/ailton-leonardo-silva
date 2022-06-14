import React from "react";
class Etapa2 extends React.Component {

    
    render() {

    return (
        <div className="form-dados-gerais">
            <p>Etapa 2 - INFORMAÇÕES DO ENSINO SUPERIOR</p>
            <form>
                <div className="form-control">
                    <label htmlFor="title">Qual curso?</label>
                    <input
                        type="text"
                        name="curso"
                        placeholder="Digite o curso que frequentou."
                        required
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="title">Qual a unidaded e ensino?</label>
                    <input
                        type="text"
                        name="unidade"
                        placeholder="Digite a unidade de ensino."
                        required
                    />
                </div>
                <button type="submit" onClick={this.props.mudaTela3}>Próxima etapa</button>
            </form>
        </div>    
    );
    };
}

export default Etapa2;

