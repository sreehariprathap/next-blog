import Link from "next/link"
import React from "react"
import styles from "../styles/suggestions-bar.module.scss"
import ListItem from "./ListItem"

const SuggestionsBar = () => {
  return (
    <div className="xsm:hidden lg:block sticky left-0 w-3/12  h-screen my-3">
      <div className={`${styles.listings} mb-4 py-3`}>
        <div className="flex justify-between items-baseline p-3">
          <h2 className="text-xl font-bold">Listings</h2>
          <p>see all</p>
        </div>
        <ul className="my-3 flex flex-col gap-5">
          <ListItem
            category={"wonderfull world"}
            title={"Worl List"}
            link={"/"}
          />
          <ListItem
            category={"wonderfull world"}
            title={"Worl List"}
            link={"/"}
          />
          <ListItem
            category={"wonderfull world"}
            title={"Worl List"}
            link={"/"}
          />
          <ListItem
            category={"wonderfull world"}
            title={"Worl List"}
            link={"/"}
          />
        </ul>
        <div className="flex justify-center">
          <button className="btn btn-outline border-none">Create a listing</button>
        </div>
      </div>
      <div className={`${styles.listings} mb-4 py-3`}>
      <div className="flex justify-between items-baseline p-3">
          <h2 className="text-xl font-bold">Help</h2>
          <p>see all</p>
        </div>
        <ul className="my-3 flex flex-col gap-5">
          <ListItem
            category={"wonderfull world"}
            title={"Worl List"}
            link={"/"}
          />
          <ListItem
            category={"wonderfull world"}
            title={"Worl List"}
            link={"/"}
          />
          <ListItem
            category={"wonderfull world"}
            title={"Worl List"}
            link={"/"}
          />
          <ListItem
            category={"wonderfull world"}
            title={"Worl List"}
            link={"/"}
          />
        </ul>
      </div>
      <div className="card discuss"></div>
    </div>
  )
}

export default SuggestionsBar
