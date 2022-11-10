import React from "react"
import style from "../styles/loader.module.css"

const Loader: React.FC<{ show: boolean }> = ({ show }) => {
  return show ? (
    <div className={style.backdrop}>
      <div className={style.textCenter}>
        <div className={style.spinnerBorder} role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  ) : null
}

export default Loader
