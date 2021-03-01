//export const home = (req, res) => res.send("home");
// pug를 이용해 템플릿을 웹사이트에서 보여주기 위해 render사용

//import {videos} from "../db.js"
import routes from "../routes.js";
import Video from "../models/Video.js"; // db가 아니라 model일뿐

export const home = async (req, res) => {
  // async는 나를 기다려주는 무언가
  //video를 기다리면서 render작업도 하게 되어있음
  // 그렇게 안하고 기다리게 하려면 async를 쓰는거
  try {
    const videos = await Video.find({});
    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
  //await는 async 없이 쓸 수 없음
}; // home.pug 이므로 그냥 소문자 home 해놓으면 views에서 찾음

//render함수의 첫 번째 인자는 템플릿,
//두 번째 인자는 전달할 정보가 담긴 객체

export const search = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req; // const searchingBy = req.query.term
  res.render("search", { pageTitle: "Search", searchingBy, videos });
};
//export const videos = (req, res) => res.render("videos", {pageTitle: "Videos"});

export const getUpload = (req, res) => {
  res.render("upload", { pageTitle: "Upload" });
};

export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path },
  } = req;
  const newVideo = await Video.create({
    fileUrl: path.replace(/\\/gi, "/"),
    title,
    description,
  }); // To Do :: upload and save viedo

  console.log(newVideo);
  res.redirect(routes.videoDetail(newVideo.id));
};
export const videoDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    console.log(video);
    res.render("videoDetail", { pageTitle: "Video Detail", video });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};
export const getEditVideo = async (req, res) => {
  const {
    params: { id },
  } = req;

  try {
    const video = await Video.findById(id);
    res.render("editVideo", { pageTitle: `Edit &{video.title}`, video });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const postEditVideo = async (req, res) => {
  const {
    params: { id },
    body: { title, description },
  } = req;

  try {
    await Video.findOneAndUpdate({ id }, { title, description });
    res.redirect(routes.videoDetail(id));
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });
