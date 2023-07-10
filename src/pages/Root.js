import React, { Fragment } from 'react'
import MainNavigation from '../components/MainNavigation'
import { Outlet } from 'react-router-dom'
import classes from "./Root.module.css"

function Root() {
  return (
    <Fragment>
      <MainNavigation />
      <main className={classes.content}>
        <Outlet />
      </main>
    </Fragment>
  )
}

export default Root