import { useEffect, useState } from 'react';

function BugButton() {
    const [error, setError] = useState(false);

    const throwError = () => {
        setError((prev) => !prev);
    };
    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <button type="button" onClick={throwError}>BugButton</button>
    );
}

export default BugButton;
