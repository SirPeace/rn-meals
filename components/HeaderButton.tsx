import React from "react"
import { HeaderButton as HeaderButtonComponent } from "react-navigation-header-buttons"
import { MaterialIcons } from "@expo/vector-icons"

const HeaderButton = (props: any) => (
  <HeaderButtonComponent
    IconComponent={MaterialIcons}
    color="#fff"
    iconSize={24}
    {...props}
  />
)

export default HeaderButton
