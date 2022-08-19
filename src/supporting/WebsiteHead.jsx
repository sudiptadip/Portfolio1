import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Text } from "@chakra-ui/react";
import "./WebsiteHead.css";

export default function WebsiteHead() {
  let arr = [
    "Website built",
    "Three different",
    "",
  ];
  let arr2 = [
    'using react',
    'projects',
    '',
  ]
  const [data, setData] = useState(arr[0]);
  const [data2, setData2] = useState(arr2[0]);

  function fun() {
    let i = 0;
    setInterval(() => {
      setData(arr[i]);
      setData2(arr2[i])
      i++;
      if (i === 2) {
        i = 0;
      }
    }, 3000);
  }

  useEffect(() => {
    fun();
  }, []);

  return (
<div style={{display: 'flex',justifyContent: 'center'}}>
    <div className="headDiv">
      <p className="head">{data}</p>
      <p className="head2">{data2}</p>
    </div>
</div>
  );
}
