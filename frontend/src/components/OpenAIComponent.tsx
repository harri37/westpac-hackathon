"use client";

import OpenAI from "openai";
import { useState } from "react";
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
      
      Please project the future earnings for the next months
      with a detailed prediction on spendings and earnings.
       I will need to display these results using chartJS, give me a JSON file that
       I can use to feed into chartJS to display a line chart with the projected earnings.

       Return a result in the structure of the following example response:
       {
          "labels": ["July 2023", "August 2023", "September 2023", "October 2023", "November 2023", "December 2023"],
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
       
    `;
  // Set the generated text and watch for changes
  const [generatedText, setGeneratedText] = useState("");
  const [test, setTest] = useState(null);

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
        console.log(data);
      });
  };

  return apiKey ? (
    <div className="example">
      <div className="prompt">
        <button onClick={fetchGeneratedText}>Generate Text</button>
      </div>
      <div className="response">
        {/* <p>{generatedText}</p> */}
        {test ? <LineGraph data={test} /> : null}
      </div>
    </div>
  ) : (
    <div>
      <h2>This function is unavailable.</h2>
    </div>
  );
};

export default OpenAIComponent;
