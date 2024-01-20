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
      case "null":
        return "font-bold text-slate-500"
      case "normal":
        return "font-bold text-green-500"
      case "warning":
        return "font-bold text-amber-500"
      case "critical":
        return `font-bold text-red-500 ${isBlink ? "blink" : ""}`
      default:
        return ""
    }
  }

export const getValueDeltaSign = (prev: number, curr: number) => {
  if (prev === curr) return "~"
  return prev > curr ? "↓" : "↑"
}

export const getCurrentTimestampString = (): string => {
  const now = new Date();

  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const day = now.getDate().toString().padStart(2, '0');
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  const timestamp = `${year}${month}${day}${hours}${minutes}${seconds}`;

  return timestamp;
}