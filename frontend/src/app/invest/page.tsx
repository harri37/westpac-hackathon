"use client";

import { Header } from "@westpac/ui/header";
import { Grid, GridItem } from "@westpac/ui/grid";
import { Table, TableBody, TableCell, TableHeader, TableHeaderRow,
    TableHeaderCell, TableRow, TableCaption } from "@westpac/ui/table";
import { useState, useEffect, useRef } from "react";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, 
    LinearScale, LineController, LineElement, PointElement, Title, Tooltip, Legend
 } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, LineController, LineElement, PointElement, Title, Tooltip, Legend);


const addNoise = (price: number) => {
    const noiseFactor = 0.05; // You can adjust this factor to control the noise level
    return price + (Math.random() - 0.5) * noiseFactor;
};

const stockData = [
    {
        ticker: 'CBA',
        name: 'Commonwealth Bank of Australia',
        price: 105.30,
        change: -0.45,
        volume: 2500000,
        historicalPrices: Array.from({ length: 30 }, (_, i) => addNoise(105.30 - i * 0.1)),
        customerHolding: 15000
    },
    {
        ticker: 'BHP',
        name: 'BHP Group Limited',
        price: 44.70,
        change: 1.20,
        volume: 1800000,
        historicalPrices: Array.from({ length: 30 }, (_, i) => addNoise(44.70 + i * 0.05)),
        customerHolding: 22000
    },
    {
        ticker: 'WBC',
        name: 'Westpac Banking Corporation',
        price: 22.50,
        change: -0.20,
        volume: 2100000,
        historicalPrices: Array.from({ length: 30 }, (_, i) => addNoise(22.50 - i * 0.02)),
        customerHolding: 18000
    },
    {
        ticker: 'CSL',
        name: 'CSL Limited',
        price: 285.00,
        change: 2.10,
        volume: 1000000,
        historicalPrices: Array.from({ length: 30 }, (_, i) => addNoise(285.00 + i * 0.5)),
        customerHolding: 0
    },
    {
        ticker: 'NAB',
        name: 'National Australia Bank Limited',
        price: 27.80,
        change: -0.15,
        volume: 2300000,
        historicalPrices: Array.from({ length: 30 }, (_, i) => addNoise(27.80 - i * 0.1)),
        customerHolding: 12500
    },
    {
        ticker: 'TLS',
        name: 'Telstra Corporation Limited',
        price: 3.70,
        change: 0.05,
        volume: 3200000,
        historicalPrices: Array.from({ length: 30 }, (_, i) => addNoise(3.70 + i * 0.01)),
        customerHolding: 3000
    },
    {
        ticker: 'WOW',
        name: 'Woolworths Group Limited',
        price: 40.60,
        change: -0.60,
        volume: 1500000,
        historicalPrices: Array.from({ length: 30 }, (_, i) => addNoise(40.60 - i * 0.2)),
        customerHolding: 5000
    },
    {
        ticker: 'ANZ',
        name: 'Australia and New Zealand Banking Group Limited',
        price: 25.20,
        change: 0.40,
        volume: 2000000,
        historicalPrices: Array.from({ length: 30 }, (_, i) => addNoise(25.20 + i * 0.15)),
        customerHolding: 14000
    },
    {
        ticker: 'WES',
        name: 'Wesfarmers Limited',
        price: 55.40,
        change: -0.90,
        volume: 1100000,
        historicalPrices: Array.from({ length: 30 }, (_, i) => addNoise(55.40 - i * 0.3)),
        customerHolding: 20000
    },
    {
        ticker: 'QAN',
        name: 'Qantas Airways Limited',
        price: 5.60,
        change: 0.20,
        volume: 5000000,
        historicalPrices: Array.from({ length: 30 }, (_, i) => addNoise(5.60 + i * 0.1)),
        customerHolding: 0
    },
    {
        ticker: 'FMG',
        name: 'Fortescue Metals Group Ltd',
        price: 22.80,
        change: 1.50,
        volume: 1700000,
        historicalPrices: Array.from({ length: 30 }, (_, i) => addNoise(22.80 + i * 0.05)),
        customerHolding: 11000
    },
    {
        ticker: 'RIO',
        name: 'Rio Tinto Limited',
        price: 115.00,
        change: -1.10,
        volume: 800000,
        historicalPrices: Array.from({ length: 30 }, (_, i) => addNoise(115.00 - i * 0.8)),
        customerHolding: 0
    },
    {
        ticker: 'COL',
        name: 'Coles Group Limited',
        price: 17.20,
        change: 0.30,
        volume: 1400000,
        historicalPrices: Array.from({ length: 30 }, (_, i) => addNoise(17.20 + i * 0.05)),
        customerHolding: 8000
    },
    {
        ticker: 'GPT',
        name: 'GPT Group',
        price: 4.90,
        change: 0.10,
        volume: 900000,
        historicalPrices: Array.from({ length: 30 }, (_, i) => addNoise(4.90 + i * 0.02)),
        customerHolding: 3000
    },
    {
        ticker: 'ORI',
        name: 'Orica Limited',
        price: 15.50,
        change: -0.50,
        volume: 600000,
        historicalPrices: Array.from({ length: 30 }, (_, i) => addNoise(15.50 - i * 0.1)),
        customerHolding: 10000
    }
];

const Graph = ({ data }: { data: number[] }) => {
    const chartRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');
            if (ctx) {
                new ChartJS(ctx, {
                    type: 'line',
                    data: {
                        labels: Array.from({ length: data.length }, (_, i) => i.toString()),
                        datasets: [
                            {
                                label: 'Price',
                                data: data,
                                borderColor: 'rgb(153, 26, 214)',
                                tension: 0.1
                            }
                        ]
                    },
                    options: {
                        scales: {
                            x: {
                                title: {
                                    display: true,
                                    text: 'Day'
                                }
                            },
                            y: {
                                title: {
                                    display: true,
                                    text: 'Price'
                                }
                            }
                        }
                    }
                });
            }
        }
    }, [data]);
    return <canvas ref={chartRef} />;
}


export default function Save() {

  const [selectedStocks, setSelectedStocks] = useState<string[]>([]);

  const handleSelect = (ticker: string) => {
    if (selectedStocks.includes(ticker)) {
      setSelectedStocks(selectedStocks.filter((s) => s !== ticker));
    } else {
      setSelectedStocks([...selectedStocks, ticker]);
    }
  }

  const calculateData = () => {
    const data = Array.from({ length: 30 }, (_, i) => 0);
    selectedStocks.forEach((ticker) => {
      const stock = stockData.find((s) => s.ticker === ticker);
      if (stock) {
        stock.historicalPrices.forEach((price, i) => {
          data[i] += price * stock.customerHolding;
        });
      }
    });
    return data;
  }

  return (
    <>
      <Header
        brand="wbc"
        leftIcon="arrow"
        leftOnClick={() => {window.history.back()}}
      />
      <Grid>
        <GridItem rowSpan={3} span={7} className="bg-primary-10 p-2 text-center text-primary">
            {selectedStocks.length > 0 && (
                <Graph data={calculateData()} />
            )}
        </GridItem>
        <GridItem rowSpan={6} span={5} className="bg-primary-10 p-2 text-center text-primary" style={{overflowY: "scroll", maxHeight: "90vH"}}>
        <Table>
            <TableCaption>Stock Prices</TableCaption>
            <TableHeader>
              <TableHeaderRow>
                <TableHeaderCell>Ticker</TableHeaderCell>
                <TableHeaderCell>Name</TableHeaderCell>
                <TableHeaderCell>Price</TableHeaderCell>
                <TableHeaderCell>Change</TableHeaderCell>
                <TableHeaderCell>Volume</TableHeaderCell>
                <TableHeaderCell>Holding</TableHeaderCell>
              </TableHeaderRow>
            </TableHeader>
            <TableBody>
              {stockData.map((stock) => (
                <TableRow key={stock.ticker} 
                    onClick={() => handleSelect(stock.ticker)}
                    style={{backgroundColor: selectedStocks.includes(stock.ticker) ? "#991AD6" : "white",
                            color: selectedStocks.includes(stock.ticker) ? "white" : "black",
                            cursor: "pointer"
                    }}
                >
                  <TableCell>{stock.ticker}</TableCell>
                  <TableCell>{stock.name}</TableCell>
                  <TableCell>{stock.price}</TableCell>
                  <TableCell>{stock.change}</TableCell>
                  <TableCell>{stock.volume}</TableCell>
                    <TableCell>{stock.customerHolding}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </GridItem>
        <GridItem rowSpan={3} span={7} className="bg-primary-10 p-2 text-center text-primary">
          
        </GridItem>
      </Grid>
    </>
  );
}
