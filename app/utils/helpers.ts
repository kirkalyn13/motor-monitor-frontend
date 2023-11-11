export const isObjectNotEmpty = (obj: any) => {
    return Object.keys(obj).length > 0;
  }

  export const parseError = (errorMessage: string) => {
    switch (errorMessage) {
      case "Firebase: Error (auth/invalid-email).":
        return "Invalid Email."
      case "Firebase: Error (auth/invalid-login-credentials).":
        return "Invalid Login Credentials."
      case "Firebase: Error (auth/email-already-in-use).":
        return "E-mail Already Taken."
      default:
        return errorMessage
    }
  }

export const getCurrentYear = (): number => {
    const currentYear: number = new Date().getFullYear();
    return currentYear;
  }

export const getStatusTextColor = (status: string, isBlink: boolean): string => {
    switch (status) {
      case "normal":
        return ""
      case "warning":
        return "font-bold text-amber-500"
      case "critical":
        return `font-bold text-red-500 ${isBlink ? "blink" : "null"}`
      default:
        return ""
    }
  }

export const getValueDeltaSign = (prev: number, curr: number) => prev > curr ? "↓" : "↑"