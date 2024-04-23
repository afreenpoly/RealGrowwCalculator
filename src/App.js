import React, { useState } from "react";
import "./app.css"; // Assuming your CSS file is named app.css

function App() {
  const [selectedOption, setSelectedOption] = useState(""); // State for the selected dropdown option
  const [inputTextFields, setInputTextFields] = useState({
    field1: "",
    field2: "",
    field3: "",
    field4: "",
    field5: "",
    field6: "",
    field7: "",
  });


  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputTextFields({ ...inputTextFields, [name]: value });
  };

  const calculateFields = () => {
    const field1Value = inputTextFields.field1;
    const field2Value = inputTextFields.field2;
    const field3Value = inputTextFields.field3;

    const field4Value = field1Value + field2Value;
    const field5Value = field1Value - field3Value;
    const field6Value = field3Value * 2;

    setInputTextFields({
      ...inputTextFields,
      field4: field4Value,
      field5: field5Value,
      field6: field6Value,
    });
  };


  return (
    <div className="App">
      <div className="container">
        <div className="dropdown flex items-center">
          <label htmlFor="dropdown" className="mr-2 text-sm">
            Select Option:
          </label>
          <select
            id="dropdown"
            value={selectedOption}
            onChange={handleOptionChange}
            className="rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </div>
        <div className="input-fields flex flex-col space-y-2">
          <div className="input-row flex items-center">
            <label htmlFor="field1" className="text-sm flex-shrink-0 w-20">
              Field 1:
            </label>
            <input
              type="text"
              id="field1"
              name="field1"
              value={inputTextFields.field1}
              onChange={handleInputChange}
              className="rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 flex-grow"
            />
          </div>
          <div className="input-row flex items-center">
            <label htmlFor="field2" className="text-sm flex-shrink-0 w-20">
              Field 2:
            </label>
            <input
              type="text"
              id="field2"
              name="field2"
              value={inputTextFields.field2}
              onChange={handleInputChange}
              className="rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 flex-grow"
            />
          </div>
          <div className="input-row flex items-center">
            <label htmlFor="field3" className="text-sm flex-shrink-0 w-20">
              Field 3:
            </label>
            <input
              type="text"
              id="field3"
              name="field3"
              value={inputTextFields.field3}
              onChange={(event) => {
                handleInputChange(event);
                calculateFields(); // Call calculateFields when input changes
              }}
              className="rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 flex-grow"
            />
          </div>
          <div className="input-row flex items-center">
            <label htmlFor="field3" className="text-sm flex-shrink-0 w-20">
              Field 4:
            </label>
            <input
              type="text"
              id="field3"
              className="text-input"
              value={inputTextFields.field4}
              readOnly
            />
          </div>
          <div className="input-row flex items-center">
            <label htmlFor="field3" className="text-sm flex-shrink-0 w-20">
              Field 5:
            </label>
            <input
              type="text"
              id="field3"
              className="text-input"
              value={inputTextFields.field5}
              readOnly
            />
          </div>
          <div className="input-row flex items-center">
            <label htmlFor="field3" className="text-sm flex-shrink-0 w-20">
              Field 6:
            </label>
            <input
              type="text"
              id="field3"
              className="text-input"
              value={inputTextFields.field6}
              readOnly
            />
          </div>
          <div className="input-row flex items-center">
            <label htmlFor="field3" className="text-sm flex-shrink-0 w-20">
              Field 7:
            </label>
            <input
              type="text"
              id="field3"
              className="text-input"
              value={inputTextFields.field7}
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
