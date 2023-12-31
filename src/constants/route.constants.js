const Routes = {
  AUTH: {
    DEFAULT: "/auth",
    LOGIN: "/login",
    LOGOUT: "/logout",
    SIGNUP: "/signup",
    ME: "/me",
    FORGOT_PASSWORD: "/forgotPassword",
    RESET_PASSWORD: "/resetPassword/:resetToken",
  },
  USER: {
    DEFAULT: "/users",
    ALL: "/",
    DETAIL: "/:id",
  },
  TODO: {
    DEFAULT: "/todo",
    CREATE: "/create",
    CHANGE: "/changestatus",
    ALL: "/",
    DETAIL: "/:id",
  },
  HEALTH: "/health",
};

module.exports = { Routes };
