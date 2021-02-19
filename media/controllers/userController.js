

export const join = (req, res) => res.send("join", {pageTitle: "Join"});
export const login = (req, res) => res.send("login", {pageTitle: "Log In"});
export const logout = (req, res) => res.send("logout", {pageTitle: "Log Out"});

export const users = (req, res) => res.send("users", {pageTitle: "Users"});
export const userDetail = (req, res) => res.send("userDetail", {pageTitle: "User Detail"});
export const editProfile = (req, res) => res.send("editProfile", {pageTitle: "Edit Profile"});
export const changePassword = (req, res) => res.send("logout", {pageTitle: "Log Out"});
