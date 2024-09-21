import { useState, useEffect } from 'react'
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
import Accordion from './components/Accordion'
import Avatar from './components/Avatar'
import Badge from './components/Badge'
import { BreadcrumbItem,Breadcrumbs } from './components/BreadCrumbs'
import Chip from './components/Chip'
import ChipExamples from './components/ChipExample'
import CircularProgress from './components/CircularProgress'
import Code from './components/Code'
import Divider from './components/Divider'
import Progress from './components/Progress'
import Slider from './components/Slider'

import Ak from './assets/avatars/Ak.png';
import Amban from './assets/avatars/Amban.png';
import Ranganna from './assets/avatars/Ranganna.png';
import Sultan from './assets/avatars/Sultan.png';
import UdayShetty from './assets/avatars/UdayShetty.png';
import RangaAudio from './assets/avatars/RangaAudio.mp3'




function App() {
  const [count, setCount] = useState(0)
  const [selectedOption, setSelectedOption] = useState('');
  const [selection, setSelection] = useState('');
  const [multiSelection, setMultiSelection] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [temperature, setTemperature] = useState(0.5);
  const dark = 1

  

  const items = [
    { title: 'Accordion 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...' },
    { title: 'Accordion 2', content: 'Ut enim ad minim veniam, quis nostrud exercitation...' },
    { title: 'Accordion 3', content: 'Duis aute irure dolor in reprehenderit in voluptate...' },
  ];
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

 
    const [value, setValue] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setValue((v) => (v >= 100 ? 0 : v + 10));
      }, 500);
      return () => clearInterval(interval);
    }, []);



  return (
    <>

      <div className='p-4  flex gap-4 flex-col font-montserrat'>
        <TextBox darkMode={dark}/>
        <TextArea  darkMode={dark}/>

        <div className="space-y-4">
       <h4 className='text-violet-200'> Mist UI Avatars</h4>
      <div className="flex space-x-2">
        
        <Avatar src={Ak} alt="User 1" name="John Doe" />
        <Avatar src={Amban} alt="User 2" name="Amban" />

        <Badge content="3" size="sm" color="primary">
        <Avatar src={Ranganna} alt="User 2" name="Rangana" bordered  audioSrc={RangaAudio} />
        </Badge>

        <Badge content="7" size="md" color="success">
        <Avatar src={UdayShetty}alt="User 3" name="Shetty" bordered radius="none" />
        </Badge>

        <Avatar src={Sultan} alt="User 4" name="Sultan" bordered radius="md" />
       
      </div>
      <div className='max-w-96'>
      <Breadcrumbs darkMode={dark} variant="solid">
        <BreadcrumbItem>Dashboard</BreadcrumbItem>
        <BreadcrumbItem>Settings</BreadcrumbItem>
        <BreadcrumbItem>Profile</BreadcrumbItem>
      </Breadcrumbs>
        </div>

        <div className="p-4 max-w-96 font-montserrat">
          <Slider
            min={0}
            max={100}
            step={0.01}
            startLabel="0%"
            endLabel="100%"
            value={temperature}
            onChange={setTemperature}
            label="Temperature"
            color="pri"
            size="lg"
            thickness="thin"
            darkMode={true}
            formatValue={(value) => value.toFixed(2)}
          />
        </div>

        <ChipExamples darkMode={dark}/>

        <div className='text-white'>
        circular
        <div className="space-y-4 max-w-96">
          <div className="space-y-8 p-8">
          <CircularProgress
            size="sm"
            color="primary"
            isLoading={true}
            label="Loading..."
            darkMode={dark}
          />

          <CircularProgress
            size="sm"
            thickness="thin"
            value={70}
            color="success"
            showValueLabel={true}
            label="Progress"
            darkMode={dark}
          />
           </div>
        </div>

        <div className="space-y-4 max-w-96">
          
            <Progress
              size="lg"
               thickness="thin"
              color="secondary"
              isLoading={true}
              label="Loading..."
              darkMode={dark}
            />

            <Progress
              size="sm"
              thickness="thin"
              value={70}
              color="warning"
              showValueLabel={true}
              label="Progress"
              darkMode={dark}
            />
        
        </div>

        </div>

        <div className='max-w-96 flex flex-col gap-4'>
      <Code darkMode={dark} color="purple">
        npm install @nextui-org/react
      </Code>
      <Code darkMode={dark} color="green">
        yarn add @nextui-org/react
      </Code>
    </div>

    </div>

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
      

      <div className={`max-w-md p-4 text-white`}>
      <div  className="space-y-1">
        <h4 className={`text-medium font-medium  `}>Mist-UI Components</h4>
        <p className={`text-small`}>Beautiful, fast and modern React UI library.</p>
      </div>
      <Divider className="my-4" darkMode={dark} />
      <div className={`flex h-5 items-center space-x-4 text-small `}>
        <div>Blog</div>
        <Divider orientation="vertical" darkMode={dark} />
        <div>Docs</div>
        <Divider orientation="vertical" darkMode={dark} />
        <div>Source</div>
      </div>
    </div>

      <div className='max-w-96'>
      <Accordion items={items} darkMode={dark} />
      </div>
      </div>
        
    </>
  )
}

export default App
