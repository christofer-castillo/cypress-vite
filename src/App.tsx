import { useCallback, useState } from 'react';

const App = () => {
    const [num, setNum] = useState(0);

    const handleChange = useCallback(() => {
        setNum(num);
    }, [num]);

    return (
        <div>
            <h2>Hello</h2>
            <input type='text' value={num} onChange={handleChange} />
        </div>
    );
};

export default App;
