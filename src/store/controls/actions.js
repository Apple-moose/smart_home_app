// import axios from "axios";
// import { startLoading, postsFetched } from "./slice";

//example for data fetching:
// const API_URL = `https://coders-network-api.onrender.com`;

// export const thisAction = async (dispatch, getState) => {
//   try {
//     dispatch(startLoading());
//     const offset = getState().feed.posts.length;
//     const response = await axios.get(
//       `${API_URL}/posts?offset=${offset}&limit=5`
//     );
//     const posts = response.data.rows;
//     dispatch(postsFetched(posts));
//   } catch (e) {
//     console.log(e.message);
//   }
// };

//or worse...

// export function Login(email, password, navigate) {
//     return function thunk(dispatch, getState) {
//       dispatch(startLoading());
//       axios
//         .post("https://coders-network-api.onrender.com/login", {
//           email: email,
//           password: password,
//         })
//         .then((data) => {
//           const token = data.data.jwt;
//           dispatch(getToken(token));
//           dispatch(newUserLogOut())
//         })
//         .catch((err) => console.log("Login Error", err));

//       const tokenReceived = getState().auth.accessToken;
//       localStorage.setItem("token", tokenReceived);
//       console.log(localStorage);

//       axios
//         .get("https://coders-network-api.onrender.com/me", {
//           headers: { Authorization: `Bearer ${tokenReceived} ` },
//         })
//         .then((data) => {
//           const userName = data.data.name;
//           dispatch(startLoading());
//           dispatch(userLoggedIn(userName));
//           //???for some reason call useNavigate on the loginPage???
//           navigate("/");
//         })
//         .catch((err) => console.log("err", err));
//     };
//   }
