// import Inbox from "../Sidebar/Inbox/inbox";
// import Message from "../Message/message";
// import Details from "../Details/details";

// interface MessageInterface {
//   isCollapsed: boolean;
//   isCollapsedDetailsbar: boolean;
//   onCollapseToggle: () => void;
//   //   isDetailedSidebarCollapsed: boolean;
//   onDetailsCollapseToggle: () => void;
//   getMessageWidth: () => string;
// }

// const MessagesContainer = ({
//   isCollapsed,
//   isCollapsedDetailsbar,
//   onCollapseToggle,
//   onDetailsCollapseToggle,
//   getMessageWidth,
// }: MessageInterface) => {
//   return (
//     <div className="w-full flex">
//       <div className={`w-[15.16%]`}>
//         <Inbox />
//       </div>

//       <div className="w-[84.85%] flex">
//         <div
//           className={`transition-all overflow-auto duration-300 ease-out column-b [58.796%]`}
//           //   style={{ width: getMessageWidth() }}
//         >
//           <Message
//             isCollapsedDetailsbar={isCollapsedDetailsbar}
//             onCollapseToggle={onCollapseToggle}
//             onDetailsCollapseToggle={onDetailsCollapseToggle}
//             isCollapsed={isCollapsed}
//           />
//         </div>

//         <Details
//           isCollapsed={isCollapsedDetailsbar}
//           onCollapseToggle={onDetailsCollapseToggle}
//         />
//       </div>
//     </div>
//   );
// };

// export default MessagesContainer;
