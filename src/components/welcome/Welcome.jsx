import Greeting from '../greeting/Greeting';
import Counting from '../counting/Counting';
import Theme from '../theme/Theme';

const Welcome = () => {

    return (
        <>
            <Greeting text="Hello" shortDescription="hello world" />
            <Counting startNumber={0} />
            <Theme color="white" />
        </>
    );
}

export default Welcome;