import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { useState, useEffect } from "react";
import Search from "../components/search";
import dynamic from "next/dynamic";

const ContentCard = dynamic(() => import("../components/card"), {
  ssr: false,
});

const posts = [
  {
    image: "/image1.jpg",
    title: "Stock",
    text:
      "People have so many questions when it comes to the stock market, and rightfully so. It’s a fast-paced convoluted environment that benefits those who fully understand its complex terminology. Due to this language barrier, it is extremely important to grasp a wide variety of terms. Although it may seem daunting at first, we promise to...",
  },
  {
    image: "/image2.jpg",
    title: "Bond",
    text:
      "The name’s Bond, just Bond. Although it may resemble the name of a secret agent, bonds are nowhere near as exciting. Unlike stocks whose prices are known to be so volatile that they attract lots of attention from the media, bonds are often perceived as quite boring. Regardless, it is an important business term...",
  },
  {
    image: "/image3.jpg",
    title: "Mutual Fund VS Index Fund",
    text:
      "If you’ve ever invested your money through your bank, then you’ve probably already owned a mutual fund, possibly without even knowing it. Due to their accessibility and marketing, mutual funds are a frequently discussed topic, yet infrequently understood. They are quite similar to index funds, but one clearly stands out as the better investment...",
  },
  {
    image: "/image4.jpg",
    title: "Dividend",
    text:
      "Dividends are just a little way companies thank their shareholders for investing in their stock. As they accumulate income throughout the years, companies may decide to give some money back to their investors instead of using those earnings for other business purposes such as buying new machinery or opening a new office. Although dividends are optional, the companies that do offer them tend to have predictable dividend payments in order to provide a steady income source for some investors. If they break their streak, it is often a sign that business is on the decline",
  },
  {
    image: "/image5.jpg",
    title: "Stock Exchange",
    text:
      "Also known as the stock market, a stock exchange is the act of trading cash for stocks and vice versa. Although it sounds like an action, it also refers to the marketplace where individuals and companies can buy/sell stocks...",
  },
];

export default function Home() {
  const [initial, setInitial] = useState(1000);
  const [gain, setGain] = useState(10);
  const [years, setYears] = useState(1);
  const [results, setResults] = useState(1100);

  useEffect(() => {
    const value = (initial * Math.pow(1 + gain / 100, years)).toFixed(2);
    setResults(value);
  }, [initial, gain, years, results]);

  return (
    <div className="home">
      <div className="container">
        <div className="home-content">
          <div className="main-content">
            <div className="search-bar">
              <Search />
            </div>

            <div className="cards">
              {posts.map((post, index) => (
                <div className="card" key={index}>
                  <ContentCard
                    image={post.image}
                    title={post.title}
                    text={post.text}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="additional-content">
          <div className="training-ground">
            <a className="button">
              <div className="left">
                <img src="/chart.svg" alt="" />
              </div>
              <div className="right">
                <h2>Trading Playground</h2>
                <svg
                  className="arrow"
                  xmlns="http://www.w3.org/2000/svg"
                  width="512"
                  height="512"
                  viewBox="0 0 451.846 451.847"
                >
                  <path
                    d="M345.441 248.292L151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z"
                    data-original="#000000"
                    className="active-path"
                    data-old_color="#000000"
                    fill="#cfcfcf"
                  />
                </svg>
              </div>
            </a>
          </div>

          <div className="calculator">
            <div className="calculator-title">
              <h3>Gain Calculator</h3>
              <a>more calculators -></a>
            </div>
            <div className="calculator-content">
              <div className="initial input-item">
                <FormControl fullWidth>
                  <InputLabel htmlFor="initial">Initial Investment</InputLabel>
                  <Input
                    id="initial"
                    type="number"
                    defaultValue={initial}
                    onChange={(e) => {
                      setInitial(e.target.value);
                    }}
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                  />
                </FormControl>
              </div>

              <div className="gain input-item">
                <FormControl>
                  <InputLabel htmlFor="gain">Annual Gain/Loss</InputLabel>
                  <Input
                    id="gain"
                    type="number"
                    defaultValue={gain}
                    onChange={(e) => {
                      setGain(e.target.value);
                    }}
                    endAdornment={
                      <InputAdornment position="end">%</InputAdornment>
                    }
                  />
                </FormControl>
              </div>

              <div className="years input-item">
                <FormControl>
                  <InputLabel htmlFor="years">Number of Years</InputLabel>
                  <Input
                    id="years"
                    defaultValue={years}
                    type="number"
                    onChange={(e) => {
                      setYears(e.target.value);
                    }}
                  />
                </FormControl>
              </div>

              <div className="results">
                <TextField
                  id="standard-number"
                  label=" Total Value of Investment"
                  variant="outlined"
                  InputProps={{
                    readOnly: true,
                    startAdornment: (
                      <InputAdornment position="start">$</InputAdornment>
                    ),
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={results}
                />
              </div>
            </div>
          </div>

          <div className="other">
            <div className="other-title">
              <h3>Media & Other Resources</h3>
            </div>
            <div className="other-links">
              <a
                href="https://www.instagram.com/burgeonfinance/"
                target="_blank"
              >
                <img src="/instagram.svg" alt="" />
              </a>
              <a target="_blank">
                <img src="/facebook.svg" alt="" />
              </a>
              <a target="_blank">
                <img src="/twitter.svg" alt="" />
              </a>
              <a target="_blank">
                <img src="/podcast.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
