 import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
 import {
 	red500, red700, red400, lightBlue200,
 } from 'material-ui/styles/colors';
// export default {
// 	...darkBaseTheme,
// 	primary1Color: red800
// };

export default {
	...darkBaseTheme,
 // spacing: spacing,
 // fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: red500,
    primary2Color: red700,
    primary3Color: red400,
    accent1Color: lightBlue200,
    // accent2Color: grey100,
    // accent3Color: grey500,
     //textColor: darkBlack,
    // alternateTextColor: white,
    // canvasColor: white,
    // borderColor: grey300,
    // disabledColor: fade(darkBlack, 0.3),
    // pickerHeaderColor: cyan500,
    // clockCircleColor: fade(darkBlack, 0.07),
    // shadowColor: fullBlack,
  },
  appBar:{
  	height:64
  }
};