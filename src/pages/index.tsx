import { Web3ReactProvider } from "@web3-react/core";
import { useEffect } from "react";
import Image from "next/image"
import Demo, { getLibrary } from "../components/Demo";
import useLocalStorage from "../hooks/useLocalStorage";

const App = function () {
  const [theme, setTheme] = useLocalStorage<"dark" | "cupcake">("theme", "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      document.documentElement.setAttribute("data-theme", prevTheme === "dark" ? "cupcake" : "dark");
      return prevTheme === "dark" ? "cupcake" : "dark";
    });
  };
  return (
    <>
      <div className="fixed top-0 right-0 mt-2 mr-4">
        <button type="button" onClick={toggleTheme} className="btn">
          {theme === "dark" ? "🌞" : "🌙"}
        </button>
      </div>
      <Web3ReactProvider getLibrary={getLibrary}>
        <div className="container min-h-screen mx-auto">
          <Demo />
          <div className="hero">
            <div className="text-center hero-content">
              <div className="max-w-md px-4 py-8">
                <figure className="mb-5">
                  <Image src="/logo.png" alt="logo" height="416" width="416"className="mask mask-squircle" />
                </figure>
                <h1 className="mb-5 text-5xl font-bold">Hello Guys</h1>
              </div>
            </div>
          </div>
        </div>
        <footer className="p-10 footer bg-base-200 text-base-content">
          <div>
            <p>
              ProductsWay
              <br />
              Built with love from{" "}
              <a className="link" href="https://github.com/jellydn">
                jellydn
              </a>
            </p>
          </div>
          <div>
            <span className="footer-title">Document</span>
            <a
              href="https://nextjs.org/docs/getting-started"
              target="_blank"
              rel="noopener noreferrer"
              className="link link-hover"
            >
              Nextjs Docs
            </a>
            <a href="https://hardhat.org/" target="_blank" rel="noopener noreferrer" className="link link-hover">
              Hardhat
            </a>
            <a href="https://daisyui.com/" target="_blank" rel="noopener noreferrer" className="link link-hover">
              daisyUI
            </a>
            <a
              href="https://github.com/NoahZinsmeister/web3-react"
              target="_blank"
              rel="noopener noreferrer"
              className="link link-hover"
            >
              Web3 React
            </a>
          </div>
          <div>
            <span className="footer-title">1-click Deployment</span>
            <a
              className="link link-hover"
              href="https://vercel.com/new/git/external?repository-url=https://github.com/jellydn/dapp-starter/"
            >
              Vercel
            </a>
          </div>
        </footer>
      </Web3ReactProvider>
    </>
  );
};

export default App;
