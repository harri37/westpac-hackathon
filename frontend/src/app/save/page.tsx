"use client";

import { Header } from "@westpac/ui/header";
import { Grid, GridItem } from "@westpac/ui/grid";
import { List, ListItem } from "@westpac/ui/list";
import { transactions } from "../../components/variables";
import {
  Table,
  TableCaption,
  TableHeader,
  TableCell,
  TableHeaderRow,
  TableHeaderCell,
  TableRow,
  TableFooter,
  TableBody,
} from "@westpac/ui/table";
import React, { useState } from "react";
import OpenAIComponent from "@/components/OpenAIComponent";

export default function Save() {
  // Assuming this is inside your component
  const [hoveredRowInfo, sethoveredRowInfo] = useState(null);
  const handleMouseEnter = (hoveredRowInfo: any) => {
    sethoveredRowInfo(hoveredRowInfo);
  };
  const handleMouseLeave = (hoveredRowInfo: any) => {
    sethoveredRowInfo(null);
    sethoveredRowInfo(hoveredRowInfo);
  };

  return (
    <>
      <Header
        brand="wbc"
        leftIcon="arrow"
        leftOnClick={() => {
          window.history.back();
        }}
      />
      <Grid>
        <GridItem
          rowSpan={3}
          span={8}
          className="bg-primary-10 p-2 text-center text-primary"
        >
          <OpenAIComponent />
        </GridItem>
        <GridItem
          rowSpan={6}
          span={4}
          className="bg-primary-10 p-2 text-center text-primary"
        >
          <Table>
            <TableCaption>Transaction Summary</TableCaption>
            <TableHeaderRow>
              <TableHeaderCell>Date</TableHeaderCell>
              <TableHeaderCell>Description</TableHeaderCell>
              <TableHeaderCell>Amount</TableHeaderCell>
              <TableHeaderCell>Type</TableHeaderCell>
              <TableHeaderCell>Balance</TableHeaderCell>
            </TableHeaderRow>
            <TableBody onMouseLeave={() => handleMouseLeave(null)}>
              {transactions.map((transaction) => {
                return transaction.amount < 0 ? (
                  <TableRow
                    onMouseEnter={() => handleMouseEnter(transaction.indepth)}
                    onMouseLeave={() => handleMouseLeave(transaction.indepth)}
                  >
                    <TableCell className="">{transaction.date}</TableCell>
                    <TableCell>{transaction.description}</TableCell>
                    <TableCell>{transaction.amount}</TableCell>
                    <TableCell>{transaction.type}</TableCell>
                    <TableCell>{transaction.leftover}</TableCell>
                  </TableRow>
                ) : (
                  <TableRow
                    onMouseEnter={() => handleMouseEnter(transaction.indepth)}
                    onMouseLeave={() => handleMouseLeave(transaction.indepth)}
                  >
                    <TableCell className="cell-text-color">
                      {transaction.date}
                    </TableCell>
                    <TableCell className="cell-text-color">
                      {transaction.description}
                    </TableCell>
                    <TableCell className="cell-text-color">
                      {transaction.amount}
                    </TableCell>
                    <TableCell className="cell-text-color">
                      {transaction.type}
                    </TableCell>
                    <TableCell className="cell-text-color">
                      {transaction.leftover}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </GridItem>
        <GridItem
          rowSpan={3}
          span={8}
          className="bg-primary-10 p-2 text-center text-primary"
        >
          {hoveredRowInfo}
        </GridItem>
      </Grid>
    </>
  );
}
