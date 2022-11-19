import { Backdrop, CircularProgress } from "@mui/material"
import React from "react"

// @ts-ignore
const Loader: React.FC<any> = (props: any) => {
  if (props.show) {
    return (
      <>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={props.show}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        {/* <Error404 /> */}
      </>
    )
  }
}

export default Loader
