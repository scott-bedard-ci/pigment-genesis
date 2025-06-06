import React from "react"
import { Avatar } from "./Avatar"
import figma from "@figma/code-connect"

/**
 * -- This file was auto-generated by Code Connect --
 * `props` includes a mapping from your code props to Figma properties.
 * You should check this is correct, and update the `example` function
 * to return the code example you'd like to see in Figma
 */

figma.connect(
  Avatar,
  "https://www.figma.com/design/oFYEcVUdADBcqfEzrJs0Uc/%F0%9F%8C%8E-Global-Components?node-id=7178%3A16282",
  {
    props: {
      // These props were automatically mapped based on your linked code:
      size: figma.enum("Size", {
        Small: "small",
        Large: "large",
      }),
      // No matching props could be found for these Figma properties:
      // "tooltip": figma.boolean('Tooltip'),
      // "letter": figma.enum('Letter', {
      //   "A": "a",
      //   "B": "b",
      //   "C": "c",
      //   "D": "d",
      //   "E": "e",
      //   "F": "f",
      //   "G": "g",
      //   "H": "h",
      //   "I": "i",
      //   "J": "j",
      //   "K": "k",
      //   "L": "l",
      //   "M": "m",
      //   "N": "n",
      //   "O": "o",
      //   "P": "p",
      //   "Q": "q",
      //   "R": "r",
      //   "S": "s",
      //   "T": "t",
      //   "U": "u",
      //   "V": "v",
      //   "W": "w",
      //   "X": "x",
      //   "Y": "y",
      //   "Z": "z",
      //   "#": "-",
      //   "Letter28": "letter28",
      //   "Letter29": "letter29",
      //   "Letter30": "letter30",
      //   "Letter31": "letter31",
      //   "Letter32": "letter32",
      //   "Letter33": "letter33",
      //   "Letter34": "letter34",
      //   "Letter35": "letter35",
      //   "Letter36": "letter36",
      //   "Letter37": "letter37",
      //   "Letter38": "letter38",
      //   "Letter39": "letter39",
      //   "Letter40": "letter40",
      //   "Letter41": "letter41",
      //   "Letter42": "letter42",
      //   "Letter43": "letter43",
      //   "Letter44": "letter44",
      //   "Letter45": "letter45",
      //   "Letter46": "letter46",
      //   "Letter47": "letter47",
      //   "Letter48": "letter48",
      //   "Letter49": "letter49",
      //   "Letter50": "letter50",
      //   "Letter51": "letter51",
      //   "Letter52": "letter52",
      //   "Letter53": "letter53",
      //   "Letter54": "letter54"
      // })
    },
    example: (props) => <Avatar size={props.size} />,
  },
)
