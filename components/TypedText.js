import React, { useEffect } from 'react';
import Typed from 'typed.js';

const TypedText = () => {
  useEffect(() => {
    const options = {
      strings: ['Developer', 'Designer'],
      typeSpeed: 80,
      backSpeed: 30,
      loop: true,
    };

    const typed = new Typed('.typed-text', options);

    return () => {
      typed.destroy();
    };
  }, []);

  return <span className="typed-text"></span>;
};

export default TypedText;
