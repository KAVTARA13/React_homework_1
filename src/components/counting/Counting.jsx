import { useState } from "react";
import Button from '../ui/Button';
import Example from '../example/Example';

const Counting = ({ startNumber }) => {
    const [counter, setCounter] = useState(startNumber);

    const onAddOne = () => {
        setCounter(counter + 1);
    };
    const onAddFive = () => {
        setCounter(counter + 5);
    };
    const onAddOnehundred = () => {
        setCounter(counter + 100);
    };

    const onMinusOnehundred = () => {
        setCounter(counter - 100);
    };
    const onMinusFive = () => {
        setCounter(counter - 5);
    };
    const onMinusOne = () => {
        setCounter(counter - 1);
    };

    return (
        <>
            <Example message={counter} />

            <Button onClick={onMinusOnehundred} text="- 100" type="warning" />
            <Button onClick={onMinusFive} text="- 5" type="warning" />
            <Button onClick={onMinusOne} text="- 1" type="warning" />

            <Button onClick={onAddOne} text="+ 1" type="danger" />
            <Button onClick={onAddFive} text="+ 5" type="danger" />
            <Button onClick={onAddOnehundred} text="+ 100" type="danger" />
        </>
    );
}

export default Counting;