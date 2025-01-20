import React from "react";
import TextInput from "../fields/textInput";
import SelectInput from "../fields/select";
import Button from "../buttons/button";
import { FaSpinner } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";

function Home() {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const handleForgot = () => {
    console.log("Forgot");
  };
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Utils Component</h1>
      <h2 className="text-xl font-bold">TextInput</h2>
      <div className="flex flex-col gap-2">
        <TextInput
          label="Username"
          placeholder="Enter your username"
          onChange={(e) => handleChange(e)}
          trailingText1="Forgot?"
          onTrailingText1Click={() => handleForgot()}
        />
        <TextInput
          type="password"
          label="Password"
          placeholder="Enter your password"
          onChange={(e) => handleChange(e.target.value)}
          endIcon={<FaEye />}
        />
      </div>
      <h2 className="text-xl font-bold">Select</h2>
      <div className="flex flex-col gap-2">
        <SelectInput
          label="Select an option"
          options={[
            { key: "1", label: "Option 1" },
            { key: "2", label: "Option 2" },
          ]}
          placeholder="Select an option"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <h2 className="text-xl font-bold">Buttons</h2>
      <div className="flex flex-col gap-2">
        <Button>Click me</Button>
        <Button icon={<FaSpinner />}>Click me</Button>
        <Button loading={true}>Click me</Button>
        <Button disabled={true}>Click me</Button>
      </div>
    </div>
  );
}

export default Home;
