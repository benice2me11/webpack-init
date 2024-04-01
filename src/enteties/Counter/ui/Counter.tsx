import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions, counterReducer } from '../model/slice/counterSlice';

interface CounterProps {
    className?: string;
}

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };
    return (
        <div>
            <h1 data-test-id="value-title">
                {counterValue}
            </h1>
            <Button
                onClick={increment}
                data-test-id="increment-btn"
            >
                increment
            </Button>
            <Button
                onClick={decrement}
                data-test-id="decrement-btn"
            >
                decrement
            </Button>
        </div>
    );
};
