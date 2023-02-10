import React, { useState } from "react";
import { Link } from "react-router-dom";
import reactLogo from "../assets/react.svg";

const DefaultLayout = React.memo(
  ({ children }: { children?: JSX.Element | JSX.Element[] }) => {
    const [count, setCount] = useState<number>(0);
    return (
      <div className="App">
        <div>
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
        <div>{children}</div>
      </div>
    );
  }
);

const withDefaultLayout = <T extends Record<string, unknown>>(
  WrappedComponent: React.ComponentType<T> | React.FC<T>
) => {
  const ComponentRender = (props: T) => {
    return (
      <DefaultLayout>
        <>
          <Link to="/">Home</Link> |<Link to="/a">Page A</Link> |
          <Link to="/b">Page B</Link> |<Link to="/cms">Page CMS</Link> |
          <WrappedComponent {...props} />
        </>
      </DefaultLayout>
    );
  };
  return ComponentRender;
};

export default withDefaultLayout;
