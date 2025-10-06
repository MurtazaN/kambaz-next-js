import { redirect } from "next/dist/client/components/navigation";


export default function AccountPage() {
 redirect("/Account/Signin");
}

// import AccountNavigation from "./Navigation";

// export default function Account() {
//   return (
//     <div id="wd-account-screen">
//       <table>
//         <tr>
//           <td valign="top">
//             <AccountNavigation />
//           </td>
//           <td valign="top">
//             <p>Please select an option from the navigation.</p>
//           </td>
//         </tr>
//       </table>
//     </div>
//   );
// }