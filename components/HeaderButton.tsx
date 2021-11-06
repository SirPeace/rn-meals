import React from "react"
import { HeaderButton as HeaderButtonComponent } from "react-navigation-header-buttons"
import { MaterialCommunityIcons } from "@expo/vector-icons"

const HeaderButton = (props: any) => (
  <HeaderButtonComponent
    IconComponent={MaterialCommunityIcons}
    color="#fff"
    iconSize={24}
    {...props}
  />
)

export default HeaderButton
