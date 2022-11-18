import { Backdrop, CircularProgress } from "@mui/material"
import React from "react"
import Error404 from "./Error404"

const Loader = (props: any) => {
 if( props.show) {
  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={props.show}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Error404 />
    </div>
  )
 }
}

export default Loader
