import { Network } from './network'


//Network will recieve 4 Arguments
// "method(type of request)",
// "endpoint ()", 
// "body (if POST method)"
// See the main function at ./network.js

export default class Apis {

  static signup = (data) => {
    return Network('POST', 'register', data)
  }
  static SignupOtpMatch = (data) => {
    return Network('POST', 'signup-otp-match', data)
  }
  static LogninApi = (data) => {
    return Network('POST', 'login', data)
  }
  static LoginOtp = (data) => {
    return Network('POST', 'login-opt-match', data)
  }
  static ResendOtpSignup = (data) => {
    return Network('POST', 'signup-otp-resend', data)
  }
  static CategoryApi = (data) => {
    return Network('GET', 'category-list', data)
  }
  static HomePagedata = (data) => {
    return Network('GET', 'home-data', data)
  }
  static Welcomescreendata = (data) => {
    return Network('GET', 'welcome-screen-data', data)
  }
  static webinarlistLive = (data) => {
    return Network('GET', 'webinar-list?type=live', data)
  }
  static webinarrecoded = (data) => {
    return Network('GET', 'webinar-list?type=recorded', data)
  }
  static webinar_detail = (data) => {
    return Network('GET', 'webinar-detail?id=1', data)
  }
  static Updata_Profile = (data) => {
    return Network('POST', 'profile-update', data)
  }
  static Signout = (data) => {
    return Network('POST', 'user-signout', data)
  }


  // static fetch_usersTrip = () => {
  //  return Network('GET', 'driver/viewTrip')
  // }
  // static create_employee = (data) => {
  //   return Network('POST', 'create', data)
  // }

  // static OtpMobile = (data) => {
  //   return Network('POST', 'driverAuth/verifyMobile', data)
  // }
  // static Verifymail = (data) => {
  //   return Network('POST', 'driverAuth/verifyEmail', data)
  // }
  // static login = (data) => {
  //   return Network('POST', 'driverAuth/login', data)
  // }
  // static resendEmailVerifyOtp = (data) => {
  //   return Network('POST', 'driverAuth/resendEmailVerifyOtp', data)
  // }
  // static forgotPassword = (data) => {
  //   return Network('POST', 'driverAuth/forgotPassword', data)
  // }
  // static verifyResetPasswordOtp = (data) => {
  //   return Network('POST', 'driverAuth/verifyResetPasswordOtp', data)
  // }
  // static resetPassword = (data) => {
  //   return Network('POST', 'driverAuth/resetPassword', data)
  // }
  // static insertDetails = (data) => {
  //   return Network('POST', 'driver/insertDetails', data)
  // }
  // static updateDetails = (data) => {
  //   return Network('POST', 'driver/updateDetails', data)
  // }
  // static driverpostTrip = (data) => {
  //   return Network('POST', 'driver/postTrip', data)
  // }


}