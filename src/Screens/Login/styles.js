import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import {
  height, moderateScale, moderateScaleVertical,
  textScale, width
} from '../../styles/responsiveSize';
export const styles = StyleSheet.create({
  container: {
    height: height / 4.5,

  },
  wrapper: {
    marginLeft: moderateScaleVertical(22),
    marginRight: moderateScaleVertical(22)
  },
  logo: {
    height: height / 5,
    width: "92%",
    alignSelf: "center",
    marginTop: 45
  },
  mainview: {
    flex: 1,
    backgroundColor: colors.white,
  },
  welcomeview: {
    marginTop: moderateScaleVertical(30),
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: "100%"
  },
  welcometxt: {
    lineHeight: 24,
    fontSize: textScale(24),
    paddingVertical: moderateScale(20),
    color: colors.black,
    alignSelf: 'center',
  },
  descview: {
    marginTop: moderateScale(16),
    alignSelf: 'center'
  },
  desc: {
    fontSize: textScale(15),
    color: colors.black
  },
  googleview: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: moderateScaleVertical(15),
    width: '95%',
    alignSelf: 'center',
    borderWidth: 0.3,
    borderStyle: "dashed",
    marginTop: moderateScaleVertical(25)
  },
  googletxt: {
    fontSize: textScale(16),
    paddingLeft: moderateScaleVertical(7),
    color: colors.black,

  },
  facebookview: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: moderateScaleVertical(15),
    width: '95%',
    alignSelf: 'center',
    borderWidth: 0.3,
    borderStyle: "dashed",
    marginTop: moderateScaleVertical(16)
  },
  facebooktxt: {
    fontSize: textScale(16),
    paddingLeft: moderateScaleVertical(7),
    color: colors.black
  },
  emailview: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: moderateScaleVertical(15),
    width: '95%',
    alignSelf: 'center',
    borderWidth: 0.3,
    borderStyle: "dashed",
    marginTop: moderateScaleVertical(16)
  },
  emailtxt: {
    fontSize: textScale(16),
    paddingLeft: moderateScaleVertical(7),
    color: colors.black
  },
  bottomview: {
    paddingVertical: moderateScale(10),
    justifyContent: "center",
    alignItems: 'center',
    marginTop: moderateScaleVertical(16)
  },

  btmtxt: {
    color: colors.blue,
    fontSize: textScale(14)
  },
  conditiontxt: {
    fontSize: 12,
    paddingHorizontal: moderateScale(4)
  },
  policytxt: {
    fontSize: 12,
    color: colors.blue
  }

})
