import React from "react";
import {RuxButton} from "@astrouxds/react";
export const SaveData = ({setNotification}) => {

  return (
    <>
<RuxButton onClick={()=> (setNotification({ message: 'Welcome!',
     open: true,
     status: 'normal',
     closeAfter: 2000
    }))}>Click Welcome</RuxButton>
    </>
  )
}