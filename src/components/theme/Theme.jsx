import { useState } from "react";
import ThemeButton from '../ui/ThemeButton';
import ThemeExample from '../example/ThemeExample';

const Counting = ({ color }) => {
    const [boxColor, setBoxColor] = useState(color);

    const coloringInDarkRed = () => {
        setBoxColor("darkRed");
    };
    const coloringInRed = () => {
        setBoxColor("red");
    };
    const coloringInOrange = () => {
        setBoxColor("orange");
    };
    const coloringInYellow = () => {
        setBoxColor("yellow");
    };
    const coloringInGreen = () => {
        setBoxColor("green");
    };
    const coloringInTurquoise = () => {
        setBoxColor("turquoise");
    };
    const coloringInIndigo = () => {
        setBoxColor("indigo");
    };
    const coloringInPurple = () => {
        setBoxColor("purple");
    };

    return (
        <>
            <br />
            <br />
            <ThemeButton onClick={coloringInDarkRed} color="darkRed" />
            <ThemeButton onClick={coloringInRed} color="red" />
            <ThemeButton onClick={coloringInOrange} color="orange" />
            <ThemeButton onClick={coloringInYellow} color="yellow" />
            <ThemeButton onClick={coloringInGreen} color="green" />
            <ThemeButton onClick={coloringInTurquoise} color="turquoise" />
            <ThemeButton onClick={coloringInIndigo} color="indigo" />
            <ThemeButton onClick={coloringInPurple} color="purple" />
            <br />
            <br />
            <ThemeExample color={boxColor} />
        </>
    );
}

export default Counting;