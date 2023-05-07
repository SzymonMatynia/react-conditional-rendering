import {useEffect, useState} from 'react';
import Show from '../index';

const Example = () => {
  const [isReady, setIsReady] = useState<boolean>(false);
  const [data, setData] = useState<string>();

  useEffect(() => {
    const timeout = setTimeout(() => {
        setIsReady(true);
        setData('Test data');
    });

    return () => {
        clearTimeout(timeout);
    }
  }, [])

  return (
    <>
      <Show when={isReady} fallback={'Loading...'}>
        {data}
      </Show>
    </>
  )
}

export default Example;
