
// import { Form } from "react-bootstrap";
// import Link from "next/link";


// export default function Profile() {
//     return (
//         <div id="wd-profile-screen">
//             <h1>Profile</h1>
//             <Form.Control id="wd-username-profile" defaultValue="alice" placeholder="username" className="mb-2" />
//             <Form.Control id="wd-password-profile" defaultValue="123" placeholder="password" type="password" className="mb-2" />
//             <Form.Control id="wd-firstname" defaultValue="Alice" placeholder="First name" className="mb-2" />
//             <Form.Control id="wd-lastname" defaultValue="Wonderland" placeholder="Last name" className="mb-2" />
//             <Form.Control id="wd-dob" type="date" defaultValue="2000-01-01" className="mb-2" />
//             <Form.Control id="wd-email" defaultValue="alice@wonderland" placeholder="email" type="email" className="mb-2" />
//             <Form.Select defaultValue="FACULTY" id="wd-role" className="mb-2" >
//                 <option value="USER">User</option>
//                 <option value="ADMIN">Admin</option>
//                 <option value="FACULTY">Faculty</option>
//                 <option value="STUDENT">Student</option>
//             </Form.Select>

//             <Link href="/Kambaz/Account/Signin" className="btn btn-danger w-100 mb-2" >Sign out</Link>
//         </div>
//     );
// }

"use client";
import { redirect } from "next/dist/client/components/navigation";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../reducer";
import { RootState } from "../../store";
import { Button, FormControl } from "react-bootstrap";
export default function Profile() {
    const [profile, setProfile] = useState<any>({});
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state: RootState) => state.accountReducer);
    const fetchProfile = () => {
        if (!currentUser) return redirect("/Account/Signin");
        setProfile(currentUser);
    };
    const signout = () => {
        dispatch(setCurrentUser(null));
        redirect("/Account/Signin");
    };
    useEffect(() => {
        fetchProfile();
    }, []);
    return (
        <div className="wd-profile-screen">
            <h3>Profile</h3>
            {profile && (
                <div>
                    <FormControl id="wd-username" className="mb-2"
                        defaultValue={profile.username}
                        onChange={(e) => setProfile({ ...profile, username: e.target.value })} />
                    <FormControl id="wd-password" className="mb-2"
                        defaultValue={profile.password}
                        onChange={(e) => setProfile({ ...profile, password: e.target.value })} />
                    <FormControl id="wd-firstname" className="mb-2"
                        defaultValue={profile.firstName}
                        onChange={(e) => setProfile({ ...profile, firstName: e.target.value })} />
                    <FormControl id="wd-lastname" className="mb-2"
                        defaultValue={profile.lastName}
                        onChange={(e) => setProfile({ ...profile, lastName: e.target.value })} />
                    <FormControl id="wd-dob" className="mb-2" type="date"
                        defaultValue={profile.dob}
                        onChange={(e) => setProfile({ ...profile, dob: e.target.value })} />
                    <FormControl id="wd-email" className="mb-2"
                        defaultValue={profile.email}
                        onChange={(e) => setProfile({ ...profile, email: e.target.value })} />
                    <select className="form-control mb-2" id="wd-role"
                        onChange={(e) => setProfile({ ...profile, role: e.target.value })} >
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>{" "}
                        <option value="STUDENT">Student</option>
                    </select>
                    <Button onClick={signout} className="w-100 mb-2" id="wd-signout-btn">
                        Sign out
                    </Button>
                </div>
            )}
        </div>
    );
}
