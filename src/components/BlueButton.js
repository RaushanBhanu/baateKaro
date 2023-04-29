const Button = ({text,onclick}) => {
    return (
        <div>
            <button className="pl-36 pr-36 pt-3 pb-3 rounded-lg text-" onclick={onclick} style={{background:"var(--lBlueGradHori)"}}>
                {text}
            </button>
        </div>
    );
}

export default Button;