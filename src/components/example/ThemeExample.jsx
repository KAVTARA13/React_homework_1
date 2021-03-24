import "../ui/button.css";
function ThemeExample({ color = "white" }) {
    return (
        <>
            <div className={`${color}`}>
                The color chosen
            </div>
        </>
    );
}

export default ThemeExample;