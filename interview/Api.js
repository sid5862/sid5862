import React, { useState } from "react";

const Api = () => {
  const [output, setoutput] = useState([]);

  const getOutput = async () => {
    const res = await fetch(
      "https://my-json-server.typicode.com/typicode/demo/posts"
    );
    setoutput(await res.json());
  };

  const click = () => {
    getOutput();
  };

  return (
    <div>
      <button onClick={click}>Click</button>
      {output.map((curEle) => {
        return (
          <div>
            <h2>
              {curEle.id}
              {curEle.title}
              <br />
            </h2>
          </div>
        );
      })}
    </div>
  );
};

export default Api;
