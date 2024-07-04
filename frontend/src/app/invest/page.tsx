"use client";

import { Header } from "@westpac/ui/header";

export default function Save() {
  return (
    <>
      <Header
        brand="wbc"
        leftIcon="arrow"
        leftOnClick={() => {window.history.back()}}
      />
      <h1>Save</h1>
    </>
  );
}
