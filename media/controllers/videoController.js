//export const home = (req, res) => res.send("home");
// pug를 이용해 템플릿을 웹사이트에서 보여주기 위해 render사용
export const home = (req, res) => res.render("home", {pageTitle: "Home"}); // home.pug 이므로 그냥 소문자 home 해놓으면 views에서 찾음

//render함수의 첫 번째 인자는 템플릿,
//두 번째 인자는 전달할 정보가 담긴 객체

export const search = (req, res) => {
    const {
        query: { term: searchingBy }
    } = req;  // const searchingBy = req.query.term
    res.render("search", {pageTitle: "Search", searchingBy});
};
export const videos = (req, res) => res.send("videos", {pageTitle: "Videos"});
export const upload = (req, res) => res.send("upload", {pageTitle: "Upload"});
export const videoDetail = (req, res) => res.send("videoDetail", {pageTitle: "Video Detail"});
export const editVideo = (req, res) => res.send("editVideo", {pageTitle: "Edit Vieeo"});
export const deleteVideo = (req, res) => res.send("deleteVideo", {pageTitle: "Delete Video"});