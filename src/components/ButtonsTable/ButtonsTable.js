import React from "react"
import { Table, TableCell } from "./ButtonsTable.styles"

import { ReactComponent as Keyboard } from "../../assets/keyboard-nav.svg"
import { ReactComponent as Animation } from "../../assets/animation.svg"
import { ReactComponent as Arrow } from "../../assets/arrow2.svg"
import { ReactComponent as BigCursor } from "../../assets/big-cursor.svg"
import { ReactComponent as BiggerText } from "../../assets/bigger-text.svg"
import { ReactComponent as Contrasts } from "../../assets/contrasts.svg"
import { ReactComponent as HighlightLinks } from "../../assets/highlight-links.svg"
import { ReactComponent as LegibleFonts } from "../../assets/legible-fonts.svg"
import { ReactComponent as ReadPage } from "../../assets/read-page.svg"
import { ReactComponent as ToolTip } from "../../assets/tooltip.svg"

function ButtonsTable(props) {
  return (
    <Table>
      <TableCell>
        <Keyboard />
        <p>Keyboard New</p>
      </TableCell>
      <TableCell>
        <ReadPage />
        <p>Read Page</p>
      </TableCell>
      <TableCell>
        <Contrasts />
        <p>Contrast +</p>
      </TableCell>
      <TableCell>
        <Animation />
        <p>Stop Animations</p>
      </TableCell>
      <TableCell>
        <BiggerText />
        <p>Bigger Text</p>
      </TableCell>
      <TableCell>
        <LegibleFonts />
        <p>Legiable Fonts</p>
      </TableCell>
      <TableCell>
        <BigCursor />
        <p>Big Cursor</p>
      </TableCell>
      <TableCell>
        <ToolTip />
        <p>Tooltips</p>
      </TableCell>
      <TableCell>
        <HighlightLinks />
        <p>Highlight Links</p>
      </TableCell>
      <TableCell>
        <Arrow />
        <p>Page Structure</p>
      </TableCell>
    </Table>
  )
}

export default ButtonsTable
