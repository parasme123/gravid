import Svg, { Circle, Ellipse, G, Text, TSpan, TextPath, Path, Polygon, Polyline, Line, Rect, Use, Image, Symbol, Defs, LinearGradient, RadialGradient, Stop, ClipPath, Pattern, Mask } from 'react-native-svg';

export const userIcon = (color, width="19.546", height="18.615") => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 19.546 18.615">
      <G id="webpagehome_85808" transform="translate(0)">
        <G id="Group_117" data-name="Group 117" transform="translate(0 0)">
          <G id="Group_152" data-name="Group 152" transform="translate(0 0)">
            <G id="profile_121261" transform="translate(0)">
              <G id="Group_151" data-name="Group 151">
                <Path id="Path_157" data-name="Path 157" d="M9.112,11.243A5.223,5.223,0,1,0,3.881,6.011,5.232,5.232,0,0,0,9.112,11.243Zm0-9.083A3.851,3.851,0,1,1,5.261,6.011,3.863,3.863,0,0,1,9.112,2.16Z" transform="translate(0.628 -0.796)" fill={color} />
                <Path id="Path_158" data-name="Path 158" d="M1.131,16.717H19.3a.685.685,0,0,0,.69-.69,6.571,6.571,0,0,0-6.563-6.563H7A6.571,6.571,0,0,0,.441,16.027a.685.685,0,0,0,.69.69ZM7,10.844h6.419a5.18,5.18,0,0,1,5.135,4.493H1.869A5.194,5.194,0,0,1,7,10.844Z" transform="translate(-0.441 1.898)" fill={color} />
              </G>
            </G>
          </G>
        </G>
      </G>
    </Svg>
  )
}

export const search = (color, width, height) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 16.998 17">
      <G id="searchmagnifierinterfacesymbol1_79893" transform="translate(-0.035)">
        <Path id="Path_136" data-name="Path 136" d="M6.642,0a6.607,6.607,0,1,0,3.774,12.031h0l4.9,4.9a.23.23,0,0,0,.329,0l1.321-1.321a.236.236,0,0,0,0-.329l-4.9-4.9A6.609,6.609,0,0,0,6.642,0Zm0,11.66a5.053,5.053,0,1,1,5.053-5.053A5.052,5.052,0,0,1,6.642,11.66Z" fill={color} />
      </G>
    </Svg>
  )
}

export const mobileIcon = (color, width, height) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 14.177 20.978">
      <G id="_976604-appliances-cell-phone-cellphone-mobile-mobilephone-phone-smartphone_106569" data-name="976604-appliances-cell-phone-cellphone-mobile-mobilephone-phone-smartphone_106569" transform="translate(-8 -3)">
        <Path id="Path_134" data-name="Path 134" d="M19.962,3H10.215A2.123,2.123,0,0,0,8,5.017V21.961a2.123,2.123,0,0,0,2.215,2.017h9.747a2.123,2.123,0,0,0,2.215-2.017V5.017A2.123,2.123,0,0,0,19.962,3Zm1.329,18.961a1.274,1.274,0,0,1-1.329,1.21H10.215a1.274,1.274,0,0,1-1.329-1.21V5.017a1.274,1.274,0,0,1,1.329-1.21h9.747a1.274,1.274,0,0,1,1.329,1.21Z" transform="translate(0 0)" fill={color} />
        <Path id="Path_135" data-name="Path 135" d="M10,20H20.633V7H10Zm.886-12.238h8.86V19.238h-8.86Z" transform="translate(-0.228 -0.456)" fill={color} />
        <Circle id="Ellipse_37" data-name="Ellipse 37" cx="1" cy="1" r="1" transform="translate(14.088 20.519)" fill={color} />
        <Rect id="Rectangle_50" data-name="Rectangle 50" width="4" height="1" transform="translate(13.088 4.519)" fill={color} />
      </G>
    </Svg>
  )
}

export const checkbox = (color, size) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 18 18">
      <G id="Rectangle_154" data-name="Rectangle 154" fill="none" stroke={color} stroke-width="1">
        <Rect width="18" height="18" rx="4" stroke="none" />
        <Rect x="0.5" y="0.5" width="17" height="17" rx="3.5" fill="none" />
      </G>
    </Svg>
  )
}

export const checkedCheckbox = (color, size) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 18 18">
      <G id="check-arrow" transform="translate(-863 -382)">
        <G id="Rectangle_154" data-name="Rectangle 154" transform="translate(863 382)" fill="none" stroke={color} stroke-width="1">
          <Rect width="18" height="18" rx="4" stroke="none" />
          <Rect x="0.5" y="0.5" width="17" height="17" rx="3.5" fill="none" />
        </G>
        <Path id="check_icon-icons.com_72363_1_" data-name="check_icon-icons.com_72363 (1)" d="M11.279,26.557a.468.468,0,0,1-.331-.137l-2.81-2.81a.468.468,0,1,1,.662-.662l2.479,2.479,5.289-5.289a.468.468,0,0,1,.662.662l-5.62,5.62A.468.468,0,0,1,11.279,26.557Z" transform="translate(859.316 367.721)" fill={color} />
      </G>
    </Svg>
  )
}

export const email = (color, width, height) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 21.767 18">
      <G id="Group_189" data-name="Group 189" transform="translate(0.6 0.6)">
        <Path id="Layer-1" d="M3.466,0H17.1a3.466,3.466,0,0,1,3.466,3.466v9.868A3.466,3.466,0,0,1,17.1,16.8H3.466A3.466,3.466,0,0,1,0,13.334V3.466A3.466,3.466,0,0,1,3.466,0Z" fill="none" stroke={color} stroke-linecap="round" stroke-width="1.2" />
        <Path id="Layer-2" d="M15.957,44.406,9.794,39.326l-.911.762-.911-.762L1.822,44.4" transform="translate(1.4 -30.759)" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" fill-rule="evenodd" />
        <Path id="Layer-3" d="M0,5.9l7.349,6.03L14.7,5.9" transform="translate(2.935 -2.602)" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" fill-rule="evenodd" />
      </G>
    </Svg>
  )
}

export const location = (color, width, height) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 26 26">
      <G id="direction_gps_location_map_maps_navigation_pin_icon_123198" transform="translate(-0.15 -0.15)">
        <G id="Layer_2" data-name="Layer 2" transform="translate(4.109 2.495)">
          <Path id="Path_742" data-name="Path 742" d="M14.041,24.376a.822.822,0,0,1-.584-.238L7.646,18.384a8.967,8.967,0,0,1,0-12.723,9.1,9.1,0,0,1,12.789,0,8.967,8.967,0,0,1,0,12.723l-5.811,5.753A.822.822,0,0,1,14.041,24.376Zm0-19.726A7.4,7.4,0,0,0,8.805,6.8h0a7.323,7.323,0,0,0,0,10.389l5.235,5.2,5.235-5.2a7.323,7.323,0,0,0,0-10.389A7.4,7.4,0,0,0,14.041,4.65ZM8.23,6.22Z" transform="translate(-4.999 -3.035)" fill={color} />
          <Path id="Path_743" data-name="Path 743" d="M15.109,17.219a4.109,4.109,0,1,1,4.109-4.109A4.109,4.109,0,0,1,15.109,17.219Zm0-6.575a2.466,2.466,0,1,0,2.466,2.466,2.466,2.466,0,0,0-2.466-2.466Z" transform="translate(-6.068 -4.097)" fill={color} />
        </G>
        <G id="frame">
          <Rect id="Rectangle_602" data-name="Rectangle 602" width="26" height="26" transform="translate(0.15 0.15)" fill="none" />
        </G>
      </G>
    </Svg>
  )
}

export const home = (color, width, height) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 21.527 19.198">
      <G id="webpagehome_85808" transform="translate(0)">
        <G id="Group_117" data-name="Group 117" transform="translate(0 0)">
          <Path id="Path_140" data-name="Path 140" d="M.744,37.786H2.5V44.8a.754.754,0,0,0,.751.751H8.384a.754.754,0,0,0,.751-.751V39.664h3.131V44.8a.754.754,0,0,0,.751.751H17.9a.754.754,0,0,0,.751-.751V37.786h2.129a.748.748,0,0,0,.526-1.278l-9.794-9.932a.749.749,0,0,0-1.052-.013L.23,36.5a.752.752,0,0,0-.175.827A.733.733,0,0,0,.744,37.786Zm10.22-9.619,8.016,8.116H17.9a.754.754,0,0,0-.751.751v7.014H13.769V38.913a.754.754,0,0,0-.751-.751H8.384a.754.754,0,0,0-.751.751v5.135H4V37.034a.754.754,0,0,0-.751-.751H2.6Z" transform="translate(0 -26.353)" fill={color} />
        </G>
      </G>
    </Svg>
  )
}

export const webinar = (color, width, height) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 21 15.311">
      <Path id="live_regular_icon_205193" d="M6.289,5.175a.787.787,0,0,1,0,1.114,8.925,8.925,0,0,0,0,12.622.788.788,0,0,1-1.114,1.114,10.5,10.5,0,0,1,0-14.849A.788.788,0,0,1,6.289,5.175Zm13.736,0a10.5,10.5,0,0,1,0,14.849.788.788,0,0,1-1.114-1.114,8.925,8.925,0,0,0,0-12.622.788.788,0,1,1,1.114-1.114ZM9.259,8.145a.788.788,0,0,1,0,1.114,4.725,4.725,0,0,0,0,6.682.788.788,0,1,1-1.114,1.114,6.3,6.3,0,0,1,0-8.91A.788.788,0,0,1,9.259,8.145Zm7.8,0a6.3,6.3,0,0,1,0,8.91.787.787,0,1,1-1.114-1.114,4.725,4.725,0,0,0,0-6.682.787.787,0,0,1,1.114-1.114ZM12.6,11.025A1.575,1.575,0,1,1,11.025,12.6,1.575,1.575,0,0,1,12.6,11.025Z" transform="translate(-2.1 -4.944)" fill={color} />
    </Svg>
  )
}

export const library = (color, width, height) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 21.552 14.859">
      <G id="library-svgrepo-com" transform="translate(0 -64.705)">
        <G id="Group_154" data-name="Group 154" transform="translate(0 64.705)">
          <G id="Group_153" data-name="Group 153" transform="translate(0 0)">
            <Path id="Path_159" data-name="Path 159" d="M4.581,64.705H.828A.828.828,0,0,0,0,65.532v13.2a.828.828,0,0,0,.828.827H4.581a.828.828,0,0,0,.827-.827v-13.2A.828.828,0,0,0,4.581,64.705ZM3.728,74.9H1.68V73.644H3.728V74.9Zm0-2.236H1.68V66.9H3.728v5.771Z" transform="translate(0 -64.705)" fill={color} />
            <Path id="Path_160" data-name="Path 160" d="M128.586,64.705h-3.753a.828.828,0,0,0-.827.827v13.2a.828.828,0,0,0,.827.827h3.753a.828.828,0,0,0,.827-.827v-13.2A.828.828,0,0,0,128.586,64.705Zm-.853,10.2h-2.048V73.644h2.048Zm0-2.236h-2.048V66.9h2.048Z" transform="translate(-117.593 -64.705)" fill={color} />
            <Path id="Path_161" data-name="Path 161" d="M261.112,78.17l-3.417-12.228a.8.8,0,0,0-.981-.552l-3.476.971a.8.8,0,0,0-.552.981L256.1,79.569a.8.8,0,0,0,.98.552l3.476-.971A.8.8,0,0,0,261.112,78.17Zm-5.023-4.654L254.6,68.171l1.9-.53,1.494,5.344Zm.579,2.071-.326-1.167,1.9-.53.326,1.168Z" transform="translate(-239.59 -65.326)" fill={color} />
          </G>
        </G>
      </G>
    </Svg>
  )
}

export const healthTracker = (color, width, height) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 15.736 18.076">
      <G id="medical-03_icon-icons.com_73941" transform="translate(-18.4 -2.7)">
        <G id="Group_167" data-name="Group 167" transform="translate(20.181 9.456)">
          <Path id="Path_181" data-name="Path 181" d="M35.107,59.92A4.614,4.614,0,0,1,30.5,55.312V48.6h.442v6.712a4.166,4.166,0,0,0,8.331,0V53.251h.442v2.076A4.6,4.6,0,0,1,35.107,59.92Z" transform="translate(-30.5 -48.6)" fill={color} />
        </G>
        <G id="Group_168" data-name="Group 168" transform="translate(24.376 3.2)">
          <Path id="Path_182" data-name="Path 182" d="M63.784,16.242A4.784,4.784,0,0,1,59,11.458V7.94A1.841,1.841,0,0,1,60.84,6.1v.736a1.112,1.112,0,0,0-1.1,1.1v3.518a4.048,4.048,0,0,0,8.1,0V7.94a1.112,1.112,0,0,0-1.1-1.1V6.1a1.841,1.841,0,0,1,1.84,1.84v3.518A4.784,4.784,0,0,1,63.784,16.242Z" transform="translate(-59 -6.1)" fill={color} />
        </G>
        <G id="Group_169" data-name="Group 169" transform="translate(24.185 3.009)">
          <Path id="Path_183" data-name="Path 183" d="M62.675,15.325A4.979,4.979,0,0,1,57.7,10.349V6.831A2.035,2.035,0,0,1,59.731,4.8h.177V5.9h-.177a.917.917,0,0,0-.913.913v3.518a3.857,3.857,0,1,0,7.713.029V6.831a.917.917,0,0,0-.913-.913h-.177v-1.1h.177a2.035,2.035,0,0,1,2.031,2.031v3.518A4.994,4.994,0,0,1,62.675,15.325ZM59.54,5.2a1.659,1.659,0,0,0-1.472,1.649v3.518a4.593,4.593,0,1,0,9.185,0V6.831a1.659,1.659,0,0,0-1.472-1.649v.383a1.3,1.3,0,0,1,1.1,1.281v3.518a4.217,4.217,0,1,1-8.434-.015V6.831a1.3,1.3,0,0,1,1.1-1.281V5.2Z" transform="translate(-57.7 -4.8)" fill={color} />
        </G>
        <G id="Group_170" data-name="Group 170" transform="translate(24.921 7.087)">
          <Path id="Path_184" data-name="Path 184" d="M66.939,36.739A4.24,4.24,0,0,1,62.7,32.5h.368a3.864,3.864,0,0,0,7.728.015h.368A4.225,4.225,0,0,1,66.939,36.739Z" transform="translate(-62.7 -32.5)" fill={color} />
        </G>
        <G id="Group_171" data-name="Group 171" transform="translate(26.143 2.894)">
          <Path id="Path_185" data-name="Path 185" d="M71.486,5.313,71,5.063V4.327l.486-.236a.685.685,0,0,1,.986.6h0A.687.687,0,0,1,71.486,5.313Z" transform="translate(-71 -4.021)" fill={color} />
        </G>
        <Path id="Path_186" data-name="Path 186" d="M71.486,5.313,71,5.063V4.327l.486-.236a.685.685,0,0,1,.986.6h0A.687.687,0,0,1,71.486,5.313Z" transform="translate(-44.857 -1.126)" fill={color} opacity="0.2" />
        <G id="Group_172" data-name="Group 172" transform="translate(25.951 2.715)">
          <Path id="Path_187" data-name="Path 187" d="M70.672,4.522a.859.859,0,0,1-.383-.088L69.7,4.14V3.183l.589-.294a.859.859,0,0,1,.383-.088.87.87,0,0,1,.868.868A.848.848,0,0,1,70.672,4.522Zm-.6-.6.383.191a.617.617,0,0,0,.221.059.508.508,0,0,0,0-1.016.415.415,0,0,0-.221.059l-.383.191Z" transform="translate(-69.7 -2.8)" fill={color} />
        </G>
        <G id="Group_173" data-name="Group 173" transform="translate(30.617 2.909)">
          <Path id="Path_188" data-name="Path 188" d="M102.386,5.4l.486-.236V4.427l-.486-.236a.682.682,0,0,0-.986.6h0A.682.682,0,0,0,102.386,5.4Z" transform="translate(-101.4 -4.121)" fill={color} />
        </G>
        <Path id="Path_189" data-name="Path 189" d="M102.386,5.4l.486-.236V4.427l-.486-.236a.682.682,0,0,0-.986.6h0A.682.682,0,0,0,102.386,5.4Z" transform="translate(-70.783 -1.211)" fill={color} opacity="0.2" />
        <G id="Group_174" data-name="Group 174" transform="translate(30.426 2.7)">
          <Path id="Path_190" data-name="Path 190" d="M100.968,4.437h0a.87.87,0,0,1-.868-.868.869.869,0,0,1,1.251-.78l.589.294V4.04l-.589.294A.713.713,0,0,1,100.968,4.437Zm0-1.369a.5.5,0,0,0,0,1h0a.415.415,0,0,0,.221-.059l.383-.191v-.5l-.383-.191A.488.488,0,0,0,100.968,3.068Z" transform="translate(-100.1 -2.7)" fill={color} />
        </G>
        <G id="Group_175" data-name="Group 175" transform="translate(26.232 11.735)">
          <Path id="Path_191" data-name="Path 191" d="M77.392,64.276a.542.542,0,0,0-.721-.1,3.9,3.9,0,0,1-2.134.633,3.823,3.823,0,0,1-2.1-.618.545.545,0,0,0-.721.1.512.512,0,0,0,.132.736,5.048,5.048,0,0,0,1.619.677.727.727,0,0,1,.574.721V68.28a.515.515,0,1,0,1.03.015V66.425a.752.752,0,0,1,.574-.721,5.082,5.082,0,0,0,1.619-.692A.512.512,0,0,0,77.392,64.276Z" transform="translate(-71.608 -64.082)" fill={color} />
        </G>
        <G id="Group_176" data-name="Group 176" transform="translate(26.045 11.547)">
          <Path id="Path_192" data-name="Path 192" d="M73.469,67.908h0a.5.5,0,0,1-.147-.015.7.7,0,0,1-.559-.692V65.347a.553.553,0,0,0-.427-.545,4.971,4.971,0,0,1-1.678-.707.7.7,0,0,1-.309-.456.726.726,0,0,1,.132-.545.7.7,0,0,1,.559-.28.833.833,0,0,1,.412.118,3.737,3.737,0,0,0,2,.589,3.689,3.689,0,0,0,2.031-.6A.791.791,0,0,1,75.9,62.8a.7.7,0,0,1,.383,1.281A5,5,0,0,1,74.6,64.8a.549.549,0,0,0-.427.53V67.2a.7.7,0,0,1-.707.707ZM71.041,63.2a.345.345,0,0,0-.265.118.308.308,0,0,0-.059.25.371.371,0,0,0,.147.221,4.557,4.557,0,0,0,1.56.648.9.9,0,0,1,.721.9v1.855a.334.334,0,0,0,.265.339.342.342,0,0,0,.309-.088.347.347,0,0,0,.1-.236V65.332a.926.926,0,0,1,.721-.9,4.9,4.9,0,0,0,1.56-.662.333.333,0,0,0,.147-.221.308.308,0,0,0-.059-.25.359.359,0,0,0-.471-.059,4.023,4.023,0,0,1-2.237.662,4.069,4.069,0,0,1-2.208-.648A.5.5,0,0,0,71.041,63.2Z" transform="translate(-70.34 -62.8)" fill={color} />
        </G>
        <G id="Group_177" data-name="Group 177" transform="translate(18.577 7.616)">
          <Circle id="Ellipse_75" data-name="Ellipse 75" cx="1.84" cy="1.84" r="1.84" transform="translate(0)" fill={color} />
        </G>
        <G id="Group_178" data-name="Group 178" transform="translate(19.313 8.352)">
          <Circle id="Ellipse_76" data-name="Ellipse 76" cx="1.104" cy="1.104" r="1.104" transform="translate(0)" fill={color} />
        </G>
        <G id="Group_179" data-name="Group 179" transform="translate(18.577 7.616)" opacity="0.5">
          <Path id="Path_193" data-name="Path 193" d="M21.44,36.1a1.842,1.842,0,0,0-1.3,3.15l2.605-2.591A1.848,1.848,0,0,0,21.44,36.1Z" transform="translate(-19.6 -36.1)" fill={color} />
        </G>
        <G id="Group_180" data-name="Group 180" transform="translate(18.4 7.425)">
          <Path id="Path_194" data-name="Path 194" d="M20.417,38.863a2.031,2.031,0,1,1,2.031-2.031A2.045,2.045,0,0,1,20.417,38.863Zm0-3.68a1.649,1.649,0,1,0,1.649,1.649A1.646,1.646,0,0,0,20.417,35.183Z" transform="translate(-18.4 -34.8)" fill={color} />
        </G>
        <G id="Group_181" data-name="Group 181" transform="translate(19.136 8.161)">
          <Path id="Path_195" data-name="Path 195" d="M24.681,42.391a1.3,1.3,0,1,1,1.3-1.3A1.285,1.285,0,0,1,24.681,42.391Zm0-2.208a.913.913,0,1,0,.913.913A.917.917,0,0,0,24.681,40.183Z" transform="translate(-23.4 -39.8)" fill={color} />
        </G>
      </G>
    </Svg>
  )
}

export const bookmark = (color, width, height) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 6.076 6.984">
      <Path id="bookmark_save_storage_basic_icon_192482" d="M23.859,13H18.217a.2.2,0,0,0-.217.184V19.8a.185.185,0,0,0,.13.169.247.247,0,0,0,.234-.035l2.673-2.09,2.673,2.09a.24.24,0,0,0,.148.05.276.276,0,0,0,.087-.015.185.185,0,0,0,.13-.169V13.184A.2.2,0,0,0,23.859,13Zm-.217,6.381L21.186,17.46a.247.247,0,0,0-.3,0l-2.456,1.921V13.368h5.208Z" fill={color} transform="translate(-18 -13)" />
    </Svg>
  )
}

export const download = (color, width, height) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 8.868 6.373">
      <G id="download-from-cloud_icon-icons.com_54289" transform="translate(0)">
        <G id="Group_116" data-name="Group 116" transform="translate(0 0)">
          <Path id="Path_138" data-name="Path 138" d="M12.94,13.5H11.831v2.217H11l1.386,1.663,1.386-1.663H12.94Z" transform="translate(-7.952 -11.006)" fill={color} />
          <Path id="Path_139" data-name="Path 139" d="M7.644,6.776a1.8,1.8,0,0,0-2.2-1.093A2.494,2.494,0,0,0,.832,6.939a1.663,1.663,0,0,0,.831,3.1H2.91l-.462-.554H1.662A1.109,1.109,0,0,1,1.41,7.3a1.918,1.918,0,0,1-.024-.306,1.94,1.94,0,0,1,3.8-.561A1.247,1.247,0,0,1,7.2,7.271h.008a1.108,1.108,0,0,1,0,2.217H6.42l-.462.554H7.2a1.663,1.663,0,0,0,.439-3.267Z" transform="translate(0 -4.5)" fill={color} />
        </G>
      </G>
    </Svg>
  )
}

export const backArrow = (color, width, height) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" id="arrow_arrows_back_direction_left_navigation_right_icon_123237" width={width} height={height} viewBox="0 0 32 32">
      <G id="Layer_2" data-name="Layer 2">
        <Path id="Path_164" data-name="Path 164" d="M13,26a1,1,0,0,1-.71-.29l-9-9a1,1,0,0,1,0-1.42l9-9a1,1,0,1,1,1.42,1.42L5.41,16l8.3,8.29A1,1,0,0,1,13,26Z" fill={color} />
        <Path id="Path_165" data-name="Path 165" d="M28,17H4a1,1,0,0,1,0-2H28a1,1,0,0,1,0,2Z" fill={color} />
      </G>
      <G id="frame">
        <Rect id="Rectangle_80" data-name="Rectangle 80" width="32" height="32" fill="none" />
      </G>
    </Svg>
  )
}

export const clock = (color, width, height) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 14 14">
      <G id="clock_hour_minute_second_time_timer_watch_icon_123193" transform="translate(0.054 0.054)">
        <G id="Layer_2" data-name="Layer 2" transform="translate(1.264 1.264)">
          <Path id="Path_162" data-name="Path 162" d="M8.681,14.363a5.681,5.681,0,1,1,5.681-5.681,5.681,5.681,0,0,1-5.681,5.681Zm0-10.489a4.807,4.807,0,1,0,4.807,4.807A4.807,4.807,0,0,0,8.681,3.874Z" transform="translate(-3 -3)" fill={color} />
          <Path id="Path_163" data-name="Path 163" d="M17.841,13.774a.437.437,0,0,1-.31-.127l-2.4-2.4a.437.437,0,0,1-.127-.31v-3.5a.437.437,0,0,1,.874,0v3.317l2.277,2.273a.437.437,0,0,1-.31.747Z" transform="translate(-9.756 -5.252)" fill={color} />
        </G>
        <G id="frame" transform="translate(-0.054 -0.054)">
          <Rect id="Rectangle_76" data-name="Rectangle 76" width="14" height="14" fill="none" />
        </G>
      </G>
    </Svg>
  )
}

export const deleteIcon = (color, width, height) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 8.479 9.663">
      <G id="trash_bin_icon-icons.com_67981_2_" data-name="trash_bin_icon-icons.com_67981 (2)" transform="translate(-2.4)">
        <G id="Group_190" data-name="Group 190" transform="translate(3.246 3.624)">
          <Path id="Path_196" data-name="Path 196" d="M11.239,21.039H7.325A1.428,1.428,0,0,1,5.9,19.614V15.242a.242.242,0,0,1,.483,0v4.373a.943.943,0,0,0,.942.942h3.914a.943.943,0,0,0,.942-.942V15.242a.242.242,0,0,1,.483,0v4.373A1.444,1.444,0,0,1,11.239,21.039Z" transform="translate(-5.9 -15)" fill={color} />
        </G>
        <G id="Group_191" data-name="Group 191" transform="translate(2.4)">
          <Path id="Path_197" data-name="Path 197" d="M9.865,1.184H8.029a1.421,1.421,0,0,0-2.8,0H3.39a.98.98,0,0,0-.99.99.96.96,0,0,0,.99.966h6.5a.979.979,0,1,0-.024-1.957ZM6.628.483a.908.908,0,0,1,.894.7H5.71A.957.957,0,0,1,6.628.483ZM9.865,2.657H3.39a.507.507,0,0,1,0-1.015h6.5a.51.51,0,0,1,.507.507A.531.531,0,0,1,9.865,2.657Z" transform="translate(-2.4)" fill={color} />
        </G>
        <G id="Group_192" data-name="Group 192" transform="translate(4.695 3.962)">
          <Path id="Path_198" data-name="Path 198" d="M12.142,20.917a.228.228,0,0,1-.242-.242V16.642a.242.242,0,0,1,.483,0v4.034A.26.26,0,0,1,12.142,20.917Z" transform="translate(-11.9 -16.4)" fill={color} />
        </G>
        <G id="Group_193" data-name="Group 193" transform="translate(8.077 3.962)">
          <Path id="Path_199" data-name="Path 199" d="M26.142,20.917a.228.228,0,0,1-.242-.242V16.642a.242.242,0,0,1,.483,0v4.034A.26.26,0,0,1,26.142,20.917Z" transform="translate(-25.9 -16.4)" fill={color} />
        </G>
        <G id="Group_194" data-name="Group 194" transform="translate(6.386 3.962)">
          <Path id="Path_200" data-name="Path 200" d="M19.142,20.917a.228.228,0,0,1-.242-.242V16.642a.242.242,0,0,1,.483,0v4.034A.26.26,0,0,1,19.142,20.917Z" transform="translate(-18.9 -16.4)" fill={color} />
        </G>
      </G>
    </Svg>
  )
}

export const rightArrow = (color, width, height) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 6.901 12.89">
      <G id="rightarrow_121279" transform="translate(-33.4 -6.5)">
        <Path id="Path_180" data-name="Path 180" d="M34.178,19.257a.456.456,0,0,1-.645,0,.456.456,0,0,1,0-.645L39.2,12.945,33.533,7.278a.456.456,0,0,1,.645-.645l5.99,5.99a.456.456,0,0,1,0,.645Z" fill={color} />
      </G>
    </Svg>
  )
}

export const refferal = (color, width, height) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 23.9 23.9">
      <G id="Group_163" data-name="Group 163" transform="translate(-35.641 -384)">
        <G id="referral_hospital_doctor_icon_208938" transform="translate(31.658 380.017)">
          <Path id="Path_166" data-name="Path 166" d="M22.572,17.261A1.328,1.328,0,1,0,23.9,18.589,1.327,1.327,0,0,0,22.572,17.261Zm-2.656,1.328a2.656,2.656,0,1,1,2.656,2.656A2.655,2.655,0,0,1,19.917,18.589Z" fill={color} fill-rule="evenodd" />
          <Path id="Path_167" data-name="Path 167" d="M18.784,24.475c-.188.189-.195.293-.195.33v1.75h7.967v-1.75c0-.037-.007-.141-.195-.33a3.294,3.294,0,0,0-1-.625,7.782,7.782,0,0,0-2.789-.615,7.782,7.782,0,0,0-2.789.615A3.294,3.294,0,0,0,18.784,24.475Zm3.788-2.567c-1.773,0-5.311.97-5.311,2.9v3.078H27.883V24.805C27.883,22.879,24.345,21.908,22.572,21.908Z" fill={color} fill-rule="evenodd" />
          <Path id="Path_168" data-name="Path 168" d="M9.958,25.228a1.4,1.4,0,0,0,.33.928,1.266,1.266,0,0,0,1,.4h6.639v1.328H11.286a2.589,2.589,0,0,1-1.99-.845,2.726,2.726,0,0,1-.666-1.81V21.909H9.958Z" fill={color} fill-rule="evenodd" />
          <Path id="Path_169" data-name="Path 169" d="M9.294,20.305l3.789,3.789-.939.939-2.85-2.85-2.85,2.85-.939-.939Z" fill={color} fill-rule="evenodd" />
          <Path id="Path_170" data-name="Path 170" d="M6.639,5.975A1.992,1.992,0,0,1,8.63,3.983h5.311a1.992,1.992,0,0,1,1.992,1.992v.664h2.656V19.253H3.983V6.639H6.639Zm0,1.992H5.311V9.294H6.639Zm0,2.656H5.311v7.3H8.63V13.942h5.311v3.983h3.319v-7.3H15.933v.664a1.992,1.992,0,0,1-1.992,1.992H8.63a1.992,1.992,0,0,1-1.992-1.992Zm9.294-1.328h1.328V7.967H15.933Zm-3.319,8.63V15.269H9.958v2.656ZM8.63,5.311a.664.664,0,0,0-.664.664v5.311a.664.664,0,0,0,.664.664h5.311a.664.664,0,0,0,.664-.664V5.975a.664.664,0,0,0-.664-.664Zm1.992,2.656V5.975H11.95V7.967h1.992V9.294H11.95v1.992H10.622V9.294H8.63V7.967Z" fill={color} fill-rule="evenodd" />
        </G>
      </G>
    </Svg>
  )
}

export const list = (color, width, height) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 26 20.754">
      <G id="_3844437-hamburger-list-menu-more-navigation_110311" data-name="3844437-hamburger-list-menu-more-navigation_110311" transform="translate(-3 -4)">
        <Path id="XMLID_352_" d="M29,16a2,2,0,0,1-2,2H11a2,2,0,0,1,0-4H27A2,2,0,0,1,29,16Z" transform="translate(0 -1.623)" fill={color} />
        <Path id="XMLID_354_" d="M29,6a2,2,0,0,1-2,2H11a2,2,0,0,1,0-4H27A2,2,0,0,1,29,6Z" fill={color} />
        <Path id="XMLID_356_" d="M29,26a2,2,0,0,1-2,2H11a2,2,0,0,1,0-4H27A2,2,0,0,1,29,26Z" transform="translate(0 -3.246)" fill={color} />
        <Path id="XMLID_358_" d="M3,6A2,2,0,1,0,5,4,2,2,0,0,0,3,6Z" fill={color} />
        <Path id="XMLID_360_" d="M3,16a2,2,0,1,0,2-2A2,2,0,0,0,3,16Z" transform="translate(0 -1.623)" fill={color} />
        <Path id="XMLID_362_" d="M3,26a2,2,0,1,0,2-2A2,2,0,0,0,3,26Z" transform="translate(0 -3.246)" fill={color} />
      </G>
    </Svg>
  )
}

export const termCondition = (color, width, height) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 22.71 26">
      <G id="Layer_x0020_1" transform="translate(-1.964 -0.319)">
        <Path id="Path_156" data-name="Path 156" d="M17.736,25.02a.65.65,0,0,1,0,1.3H4.033a2.076,2.076,0,0,1-2.069-2.07V5.505A2.073,2.073,0,0,1,4.033,3.436h.159V.968a.65.65,0,0,1,.649-.65H24.024a.65.65,0,0,1,.649.65v19.32a.65.65,0,0,1-.649.65h-2.16v1.82a.65.65,0,0,1-1.3,0V9.92L16.431,4.735H4.033a.774.774,0,0,0-.77.77V24.249a.772.772,0,0,0,.77.77ZM5.491,3.436h11.25a.648.648,0,0,1,.532.277l4.448,5.578a.645.645,0,0,1,.141.4v9.944h1.51V1.618H5.491V3.436Zm.314,14.532a.65.65,0,0,1,0-1.3H15.981a.65.65,0,0,1,0,1.3Zm.069,5.088a.65.65,0,0,1,0-1.3H16.049a.65.65,0,0,1,0,1.3Zm0-2.544a.65.65,0,0,1,0-1.3H16.049a.65.65,0,0,1,0,1.3ZM8.074,6.7H11.1a2.65,2.65,0,0,1,2.643,2.643v3.025A2.65,2.65,0,0,1,11.1,15.011H8.074a2.649,2.649,0,0,1-2.643-2.643V9.343A2.649,2.649,0,0,1,8.074,6.7ZM11.1,8H8.074A1.35,1.35,0,0,0,6.73,9.343v3.025a1.35,1.35,0,0,0,1.344,1.344H11.1a1.35,1.35,0,0,0,1.344-1.344V9.343A1.35,1.35,0,0,0,11.1,8Z" fill={color} />
      </G>
    </Svg>
  )
}

export const privacyPolicy = (color, width, height) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 32 32">
      <G id="policy_icon_216604" transform="translate(0.329 0.329)">
        <Path id="Path_154" data-name="Path 154" d="M29.754,17.877a5.877,5.877,0,1,0-9.795,4.368V29.63l3.918-1.854,3.918,1.854V22.245a5.857,5.857,0,0,0,1.959-4.368Zm-3.918,8.658-1.959-.927-1.959.927V23.411a5.767,5.767,0,0,0,3.918,0Zm-1.959-4.741a3.918,3.918,0,1,1,3.918-3.918A3.918,3.918,0,0,1,23.877,21.794Z" transform="translate(-0.37 -0.246)" fill={color} />
        <Rect id="Rectangle_69" data-name="Rectangle 69" width="7" height="2" transform="translate(8.671 13.671)" fill={color} />
        <Rect id="Rectangle_70" data-name="Rectangle 70" width="10" height="2" transform="translate(8.671 7.671)" fill={color} />
        <Path id="Path_155" data-name="Path 155" d="M5.959,29.425A1.961,1.961,0,0,1,4,27.466V3.959A1.961,1.961,0,0,1,5.959,2H21.63a1.961,1.961,0,0,1,1.959,1.959V7.877H21.63V3.959H5.959V27.466h9.795v1.959Z" transform="translate(-0.082 -0.041)" fill={color} />
        <Rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" width="32" height="32" transform="translate(-0.329 -0.329)" fill="none" />
      </G>
    </Svg>
  )
}

export const signOut = (color, width, height) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 23.682 23.364">
      <G id="_20941844951543238901" data-name="20941844951543238901" transform="translate(1 1)">
        <Path id="Path_53" data-name="Path 53" d="M3,24.364H7.748a2.374,2.374,0,0,0,2.374-2.374V5.374A2.374,2.374,0,0,0,7.748,3H3" transform="translate(11.56 -3)" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
        <Path id="Path_54" data-name="Path 54" d="M21.934,18.869,16,12.934,21.934,7" transform="translate(-15.682 -2.252)" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
        <Line id="Line_44" data-name="Line 44" x2="15" transform="translate(0 10.682)" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
      </G>
    </Svg>
  )
}

export const editProfile = (color, width, height) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 16.92 13.912">
      <Path id="edit_profile_user_icon_148629" d="M1.769,16.823H6.384a.769.769,0,1,0,0-1.538H2.593A5.392,5.392,0,0,1,7.922,10.67a3.879,3.879,0,1,0-2.6-1.028A6.93,6.93,0,0,0,1,16.054.769.769,0,0,0,1.769,16.823ZM7.922,4.518A2.307,2.307,0,1,1,5.615,6.825,2.307,2.307,0,0,1,7.922,4.518Zm7.85,3.3a.769.769,0,0,0-1.087,0L9.878,12.626a.778.778,0,0,0-.185.3l-.961,2.884a.769.769,0,0,0,.729,1.012.78.78,0,0,0,.243-.039l2.884-.961a.769.769,0,0,0,.3-.186l4.807-4.807a.769.769,0,0,0,0-1.087Zm-3.845,6.6-1.253.418.418-1.253,4.137-4.135.835.835Z" transform="translate(-1 -2.912)" fill={color} />
    </Svg>
  )
}
