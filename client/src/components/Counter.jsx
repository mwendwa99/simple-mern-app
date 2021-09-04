import React, { useContext, useState } from 'react';
import { CounterContext } from '../reducer';
import LoadingText from './atoms/LoadingText';

const Counter = () => {

    const [counter, actions] = useState(CounterContext);
    const [loading, setLoading] = useState({
        up: false,
        down: false,
        reset: false
    });

    const handleAction = action => {
        if (action === actions.up) {
            setLoading(prev => ({ ...prev, up: true }));
            action().finally((prev) => setLoading({ ...prev, up: false }));
        }
        if (action === actions.down) {
            setLoading((prev) => ({ ...prev, down: true }));
            action().finally(() => setLoading(prev => ({ ...prev, down: false })));
        }
        if (action === actions.reset) {
            setLoading(prev => ({ ...prev, reset: true }));
            action().finally(() => setLoading(prev => ({ ...prev, reset: false })));
        }
    };

    return (
        <React.Fragment>
            <h3>Count: {counter.count}</h3>
            <button onClick={() => handleAction(actions.up)}>
                <LoadingText isLoading={loading.up}>UP</LoadingText>
            </button>
            <button onClick={() => handleAction(actions.down)}>DOWN</button>
            <button onClick={() => handleAction(actions.reset)}>RESET  </button>
        </React.Fragment>
    )
}

export default Counter
