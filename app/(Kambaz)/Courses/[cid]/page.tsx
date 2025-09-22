// export default function Courses() {
//   return (
//     <div id="wd-courses">
//       <h2>Course 1234</h2>
//     </div>
// );}

import { redirect } from "next/navigation";


export default async function CoursesPage({ params, }: { params: Promise<{ cid: string }>; }) {
 const { cid } = await params;
 redirect(`/Courses/${cid}/Home`);
}

