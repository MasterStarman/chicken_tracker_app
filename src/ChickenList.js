import React from "react";
import Chicken from "./Chicken";

export default function chickenList({ chickens }) {
  return chickens.map((chicken) => {
    return <Chicken key={chicken.id} chicken={chicken} />;
  });
}
