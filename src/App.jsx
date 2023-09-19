import Chart from "react-apexcharts";
import "./App.css";
import { useState } from "react";

function App() {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "Accounts Receivable",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
      {
        name: "Account Payable",
        data: [60, 140, 75, 55, 99, 70, 80, 31],
      },
    ],
  });

  const [state1, setState1] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "Accounts Receivable",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
      {
        name: "Account Payable",
        data: [60, 140, 75, 55, 99, 70, 80, 31],
      },
      {
        name: "Account Payable",
        data: [60, 140, 75, 55, 99, 70, 80, 31],
      },
    ],
  });

  const [state2, setState2] = useState({
    options: {
      series: [44, 55],
      labels: ["Apple", "Mango"],
    },
    series: [44, 55],
    chartOptions: {
      labels: ["Apple", "Mango"],
    },
  });

  return (
    <div className="border border-4 w-full h-[100vh]">
      <div className="w-full h-[50vh] border border-4 flex">
        <div className="w-[75%] h-[100%] flex">
          <div className="w-[25%] h-[100%] flex flex-col">
            <div className="flex flex-col items-center justify-center text-md font-bold gap-1 w-[100%] h-[40%] border p-2">
              <h2>Total Accounts Receivable</h2>
              <h2 className="text-3xl text-blue-700">$ 6,621,280</h2>
            </div>
            <div className="flex flex-col items-center justify-center w-[100%] h-[60%] border">
              <Chart
                options={state2.options}
                series={state2.series}
                s
                type="donut"
                width="250"
              />
            </div>
          </div>
          <div className="w-[25%] h-[100%]">
            <div className="w-[100%] h-[40%] border flex flex-col items-center justify-center text-md font-bold gap-1 p-2">
              <h2>Total Accounts Payable</h2>
              <h2 className="text-3xl text-blue-700">$ 1,621,280</h2>
            </div>
            <div className="flex flex-col items-center justify-center w-[100%] h-[60%] border">
              <Chart
                options={state2.options}
                series={state2.series}
                s
                type="donut"
                width="250"
              />
            </div>
          </div>
          <div className="w-[25%] h-[100%]">
            <div className="flex flex-col items-center justify-center text-md font-bold gap-1 w-[100%] h-[40%] border p-2">
              <h2>Equity Ratio</h2>
              <h2 className="text-3xl text-blue-700">75.38%</h2>
            </div>
            <div className="flex flex-col items-center justify-center w-[100%] h-[60%] border">
              <Chart
                options={state2.options}
                series={state2.series}
                s
                type="donut"
                width="250"
              />
            </div>
          </div>
          <div className="w-[25%] h-[100%]">
            <div className="flex flex-col items-center justify-center text-md font-bold gap-1 w-[100%] h-[40%] border p-2">
              <h2>Debt Equity</h2>
              <h2 className="text-3xl text-blue-700">1.10%</h2>
            </div>
            <div className="flex flex-col items-center justify-center w-[100%] h-[60%] border">
              <Chart
                options={state2.options}
                series={state2.series}
                s
                type="donut"
                width="250"
              />
            </div>
          </div>
        </div>
        <div className="w-[25%] h-[100%] border p-2">
          <p className="font-semibold mb-5">
            Total Accounts Receivable & Paybale Aging
          </p>
          <Chart
            options={state.options}
            series={state.series}
            type="bar"
            width="300"
          />
        </div>
      </div>

      <div className="w-full border border-4 flex h-[50vh]">
        <div className="relative flex flex-col items-center justify-center text-md font-bold gap-1 w-[50%] h-[100%] border-r-8">
          <p className="absolute top-0 left-4 font-semibold mb-5">
            Net Working Capital vs Cross Working Capital
          </p>
          <Chart
            options={state.options}
            series={state.series}
            type="line"
            width="400"
          />
        </div>
        <div className="relative flex flex-col items-center justify-center text-md font-bold gap-1 w-[50%] h-[100%]">
          <p className="absolute top-0 left-4 font-semibold mb-5">
            Profit and Loss Summary
          </p>
          <Chart
            options={state1.options}
            series={state1.series}
            type="bar"
            width="400"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
