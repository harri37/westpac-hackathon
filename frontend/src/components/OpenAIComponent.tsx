"use client";

import OpenAI from "openai";
import { useState, useEffect } from "react";
import { LineGraph } from "./LineGraph";
import { transactions } from "./variables";

const OpenAIComponent = () => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const openai = new OpenAI({
    apiKey: apiKey ? apiKey : "",
    dangerouslyAllowBrowser: true,
  });

  // set the prompt text and watch for changes
  const prompt = `
  Given the following bank transactions in JSON format:
      ${JSON.stringify(transactions, null, 2)}
      
      Please project the future earnings for the next months (also show the previous months for context)
      with a detailed prediction on spendings and earnings.
      I will need to display these results using chartJS, give me a JSON file that
      I can use to feed into chartJS to display a line chart with the projected earnings.
      Please make the known data a different color than the projected data.

      Return a result in the structure of the following example response:
      {
        "labels": ["June 2023", "July 2023", "August 2023", "September 2023", "October 2023", "November 2023", "December 2023"],
        "datasets": [
          {
            "label": "Projected Earnings",
            "data": [4500, 4600, 4700, 4800, 4900, 5000],
            "borderColor": "rgba(75, 192, 192, 1)",
            "backgroundColor": "rgba(75, 192, 192, 0.2)",
            "fill": true
          }
        ]
      }
      Please ensure that the data is in the same structure as the example response, but the values can be different. Moreover,
      try and make the data points in the colours of westpac (red), Make the data more blatant and realistic by adding more data points.
       
    `;

  // Set the generated text and watch for changes
  const [generatedText, setGeneratedText] = useState("");
  const [test, setTest] = useState(null);

  // Fetch data when component mounts
  useEffect(() => {
    fetchGeneratedText();
  }, []);

  // Send the prompt to the API and set the generated text
  const fetchGeneratedText = async () => {
    await openai.chat.completions
      .create({
        messages: [{ role: "system", content: prompt }],
        model: "gpt-3.5-turbo",
      })
      .then((response) => {
        const response1 =
          response.choices[0].message.content === null
            ? "An error has occurred. Please try again."
            : response.choices[0].message.content;
        setGeneratedText(response1);
        const data = JSON.parse(response1);
        setTest(data);
      });
  };

  return apiKey ? (
    <div className="example">
      <div className="prompt"></div>
      <div className="response">
        {test !== null ? <LineGraph data={test} /> : <h1>Loading...</h1>}
      </div>
    </div>
  ) : (
    <div>
      <h2>This function is unavailable.</h2>
    </div>
  );
};

export default OpenAIComponent;
