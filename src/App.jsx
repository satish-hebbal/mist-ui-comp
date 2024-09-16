import { useState } from 'react'
import TextBox from './components/TextBox'
import TextArea from './components/TextArea'
import ToggleSwitch from './components/ToggleSwitch'
import SubmitButton from './components/SubmitButton'
import CheckBox from './components/CheckBox'
import RadioButton from './components/RadioButton'
import SelectOption from './components/SelectOption'
import MultiSelectOption from './components/MultiSelectOption'
import SelectDate from './components/SelectDate'
import FileUpload from './components/FileUpload'

function App() {
  const [count, setCount] = useState(0)
  const [selectedOption, setSelectedOption] = useState('');
  const [selection, setSelection] = useState('');
  const [multiSelection, setMultiSelection] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const dark = 1

  const handleFileSelect = (file) => {
    console.log('File selected:', file.name);
  };

  const handleUpload = (file) => {
    console.log('Uploading file:', file.name);
    // Here you would typically send the file to your server
    // For example, using fetch or axios to send a POST request
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // You can perform any additional actions with the selected date here
    console.log("Selected date:", date);
  };


  const handleRadioChange = (option) => {
    setSelectedOption(option);
  };
  const handleMultiChange = (newValue) => {
    setMultiSelection(newValue);
  };

  const options = ['drive to park','walk to park','bi-cycle to park','run to park'];

  const [checkboxes, setCheckboxes] = useState({
    option1: false,
    option2: false,
    option3: false,
  });

  const handleCheckboxChange = (option) => {
    setCheckboxes(prev => ({
      ...prev,
      [option]: !prev[option]
    }));
  };

  return (
    <>

      <div className='p-4  flex gap-4 flex-col'>
        <TextBox darkMode={dark}/>
        <TextArea  darkMode={dark}/>
        <ToggleSwitch darkMode={dark}/>
        <SubmitButton  />
        
        <CheckBox
        label="Option 1"
        checked={checkboxes.option1}
        onChange={() => handleCheckboxChange('option1')}
        darkMode={dark}
        />


        {options.map((option) => (
          <div key={option} className="mt-2">
            <RadioButton
              label={option}
              checked={selectedOption === option}
              onChange={() => handleRadioChange(option)}
              name="radioGroup"
              darkMode={dark}
            />
          </div>
        ))}

        <SelectOption
          options={options}
          value={selection}
          onChange={setSelection}
          placeholder="Choose an option"
          darkMode={dark}
        />

        <MultiSelectOption
          options={options}
          value={multiSelection}
          onChange={handleMultiChange}
          placeholder="Select multiple options"
          darkMode={dark}
        />

        <SelectDate 
          selectedDate={selectedDate}
          onChange={handleDateChange}
          darkMode={dark}
        />

        <FileUpload 
          maxSize={10 * 1024 * 1024} // 10MB
          acceptedFileTypes=".pdf,.doc,.docx"
          onFileSelect={handleFileSelect}
          onUpload={handleUpload}
          buttonText="Upload Document"
          dragDropText="Drag and drop your document here"
          darkMode={dark}
      />

      </div>
        
    </>
  )
}

export default App
