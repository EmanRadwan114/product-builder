import { formInputs } from "../data/formInputs";
import Button from "./resusable/Button";
import Input from "./resusable/Input";

const AddForm = () => {
  return (
    <form>
      {formInputs.map((input, indx) => (
        <div className="mb-4 flex flex-col" key={indx}>
          <label
            htmlFor={input.id}
            className="mb-1.5 font-semibold text-zinc-800"
          >
            {input.label}
          </label>
          <Input type={input.type} id={input.id} name={input.name} />
        </div>
      ))}
      <div className="flex space-x-3">
        <Button className="text-white bg-zinc-800">Cancel</Button>
        <Button className="text-white bg-indigo-700">Submit</Button>
      </div>
    </form>
  );
};

export default AddForm;
