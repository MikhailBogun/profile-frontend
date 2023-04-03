// import { useState , useEffect} from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './main.css';
// import Header from './Header';
// import ProfileList from './Profile/ProfileList';
// import UserList from './User/UserList';
// const url_profiles = "http://127.0.0.1:3000/api/v1/section";




// function Main({ page }) {
//   let [list, setList] = useState(getComponent);
//   // setList(state => ({...state}));
//     function getComponent() {
//       let component;
//       switch (page) {
//         case "profiles":
//           component= <ProfileList></ProfileList>;
//           break;
//         case "all_profiles":
//           component= <ProfileList all={true}></ProfileList>;
//           break;
//         case "users":
//           component = <UserList ></UserList>;
//           break;
//         default:
//           console.log("Sorry, we are out of " + ".");
//       }
//       return component;
//   };



//   return (
//     <div className="main-container">
//       <Header></Header>
//       {list}
//     </div>
//   );
// }

// export default Main;