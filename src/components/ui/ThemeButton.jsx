import "./button.css";
function Button({ color = "white", onClick }) {
    return (
        <>
            <button className={`btn ${color} mx-1`} onClick={onClick}>
                {color}
            </button>
        </>
    );
}

export default Button;