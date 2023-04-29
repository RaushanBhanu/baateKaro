const Button = ({text,onclick}) => {
    return (
        <div>
            <button onclick={onclick}>
                {text}
            </button>
        </div>
    );
}

export default Button;