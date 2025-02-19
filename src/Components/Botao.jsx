import { useState } from "react";
import "./Botao.css";

function Seguir() {
    const [curtidas, setCurtidas] = useState(0);
    const [curtido, setCurtido] = useState(false);
    const [seguindo, setSeguindo] = useState(false); 

    // Função para lidar com o clique no botão de curtida
    function CliqueSeguir() {
        setCurtidas(prevCurtidas => prevCurtidas + 1); // Incrementa o número de curtidas
        setCurtido(true); // Marca o botão como curtido
    }

    // Botão de seguir
    function CliqueSeguirUsuario() {
        setSeguindo(!seguindo); // Alterna o estado de seguir
    }

    return (
        <div className="cartao">
            <div className="curtir">
                <h2>Curtidas: {curtidas}</h2>
                <button 
                    onClick={CliqueSeguir} 
                    className={curtido ? "curtido" : "nao-curtido"}
                >
                    Curtir
                </button>
            </div>
            <div className="seguir">
                <button 
                    onClick={CliqueSeguirUsuario} 
                    className={seguindo ? "seguindo" : "nao-seguindo"}
                >
                    {seguindo ? "Seguindo" : "Seguir"}
                </button>
            </div>
        </div>
    );
}

export default Seguir;
