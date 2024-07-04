"use client";

import { Header } from "@westpac/ui/header";
import { Grid, GridItem } from "@westpac/ui/grid";
import { List, ListItem } from "@westpac/ui/list";

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
          <List> <ListItem> KFC</ListItem></List>
        </GridItem>
        <GridItem rowSpan={3} span={8} className="bg-primary-10 p-2 text-center text-primary">
          3 
        </GridItem>
      </Grid>
    </>
  );
}
