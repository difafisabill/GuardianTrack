const colors = {
    grey: (opacity = 1) => `rgba(109, 125, 154, ${opacity})`,
    blue: (opacity = 1) => `rgba(53, 88, 225, ${opacity})`,
    white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    darkModeBlack: (opacity = 1) => `rgba(27, 27, 27, ${opacity})`,
    darkModeBlue: (opacity = 1) => `rgba(146, 156, 241, ${opacity})`,
    AmericanGreen: (opacity = 1) => `rgba(58, 163, 70, ${opacity})`,
    GreenSage: (opacity = 1) => `rgba(88, 0, 255, ${opacity})`,
    Purple: (opacity = 1) => `rgba(237, 228, 255, ${opacity})`,
    peach:(opacity=1)=> `rgba(243, 228, 241, ${opacity}`,
    // old_purple:(opacity=1)=> `rgba(148, 0, 255, ${opacity}
    old_purple: (opacity = 1) => `rgba(148, 0, 255, ${opacity})`,
}
export default colors
