import React from "react"
import {
  Text as NativeText,
  StyleSheet,
  TextProps as NativeTextProps,
  TextStyle,
} from "react-native"

interface TextProps extends NativeTextProps {
  bold?: boolean
  size?: "sm" | "lg" | "xl"
}

const Text: React.FC<TextProps> = props => {
  let textStyles: TextStyle = styles.text
  if (props.bold) textStyles = { ...textStyles, ...styles.text_bold }

  switch (props.size) {
    case "xl":
      textStyles = { ...textStyles, fontSize: 18 }
      break
    case "lg":
      textStyles = { ...textStyles, fontSize: 16 }
      break
    case "sm":
      textStyles = { ...textStyles, fontSize: 12 }
      break
    default:
      textStyles = { ...textStyles, fontSize: 14 }
  }

  return (
    <NativeText style={textStyles} {...props}>
      {props.children}
    </NativeText>
  )
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Open Sans",
  },

  text_bold: {
    fontFamily: "Open Sans Bold",
  },
})

export default Text
