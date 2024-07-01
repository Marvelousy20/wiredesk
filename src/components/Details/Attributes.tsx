import { MdAdd } from "react-icons/md";

const attributes = [
  {
    title: "Subject",
    details: "Refund of Failed Transaction",
  },
  {
    title: "ID",
    details: "#1109616",
  },
  {
    title: "Brand",
    details: "Kuda",
  },
  {
    title: "Language",
    details: "English",
  },
  {
    title: "External ID",
    details: "1109616",
  },
  {
    title: "Fin AI Agent Prev...",
    details: "Nil",
  },
  {
    title: "Workflow: Preview",
    details: "Nil",
  },
  {
    title: "Latest workspac...",
    details: "😤 Complaint",
  },
  {
    title: "Contact Reason",
    details: "#1109616",
  },
  {
    title: "Main Category",
    details: "💰 Funds Transfer",
  },
  {
    title: "Sub-Category 2",
    details: "⛔ Null",
  },
  {
    title: "Account Closure ...",
    details: "Select",
  },
  {
    title: "Account Number",
    details: "+ Add",
  },
  {
    title: "Sub-Category",
    details: "Delayed Outward",
  },
];

const Attributes = () => {
  return (
    <section className="px-9 mt-4">
      <div className="flex justify-end font-medium text-black text-sm">
        <button className="flex items-center border rounded-md px-2.5 py-1.5">
          <MdAdd size={15} /> Add Attribute
        </button>
      </div>

      <div className="mt-4">
        {attributes.map((attribute, index) => (
          <div
            key={index}
            className="flex items-center justify-between mt-5 text-[0.75rem] font-medium"
          >
            <h3 className="text-blackInactive">{attribute.title}</h3>

            <h5 className="text-black">{attribute.details}</h5>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Attributes;
