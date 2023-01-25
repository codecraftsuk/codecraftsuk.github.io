import React, { useEffect, useRef, useState } from 'react';

const CountUp = ({ countTo, before, after, speed = 50 }) => {
  const [count, setCount] = useState(null);
  const ref = useRef(0);

  const accumulator = countTo / 200;

  const incrementCount = () => {
    if (ref.current < countTo) {
      const result = Math.ceil(ref.current + accumulator);
      if (result > countTo) return setCount(countTo);
      setCount(result);
      ref.current = result;
    }
    setTimeout(incrementCount, speed);
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted) incrementCount();

    return () => {
      isMounted = false;
    };
  }, [countTo]);

  return (
    <h1>
      {before}
      {count}
      {after}
    </h1>
  );
};

export default CountUp;
