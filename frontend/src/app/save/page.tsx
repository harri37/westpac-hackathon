"use client";

import { Header } from "@westpac/ui/header";
import { Grid, GridItem } from "@westpac/ui/grid";
import { List, ListItem } from "@westpac/ui/list";
import { transactions } from "../../components/variables";
import { Table, TableCaption, TableHeader, TableCell, TableHeaderRow, TableHeaderCell, TableRow, TableFooter, TableBody } from "@westpac/ui/table";
export default function Save() {
  return (
    <>
      <Header
        brand="wbc"
        leftIcon="arrow"
        leftOnClick={() => {window.history.back()}}
      />
      <Grid>
        <GridItem rowSpan={3} span={8} className="bg-primary-10 p-2 text-center text-primary">
          1
        </GridItem>
        <GridItem rowSpan={6} span={4} className="bg-primary-10 p-2 text-center text-primary">
          {/* <List> <ListItem> KFC</ListItem></List> */}
          
          <Table> 
            <TableCaption>
              Table caption this table width is
            </TableCaption>
            <TableHeaderRow> 
              <TableHeaderCell>Date</TableHeaderCell>
              <TableHeaderCell>Description</TableHeaderCell>
              <TableHeaderCell>Amount</TableHeaderCell>
              <TableHeaderCell>Type</TableHeaderCell>
            </TableHeaderRow>
            <TableBody>
              {transactions.map((transaction) => {
                return (
                  <TableRow>
                    <TableCell className="">{transaction.date}</TableCell>
                    <TableCell>{transaction.description}</TableCell>
                    <TableCell>{transaction.amount}</TableCell>
                    <TableCell>{transaction.type}</TableCell>
                  </TableRow>
                );
              })
              }
            </TableBody>
          </Table>
        </GridItem>
        <GridItem rowSpan={3} span={8} className="bg-primary-10 p-2 text-center text-primary">
          You are poor
        </GridItem>
      </Grid>
    </>
  );
}
