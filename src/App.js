import React,{ useState } from 'react';
import './App.css';
import Slider from './Slider';
import SidebarItem from './SidebarItem'

const DEFAULT_OPTIONS = [
  {
    name: 'Brightness',
    property: 'brightness',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Contrast',
    property: 'contrast',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Saturation',
    property: 'saturate',
    value: 0,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Grayscale',
    property: 'grayscale',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'Sepia',
    property: 'sepia',
    value: 0,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Hue Rotate',
    property: 'hue-rotate',
    value: 0,
    range: {
      min: 0,
      max: 360
    },
    unit: 'deg'
  },
  {
    name: 'Blur',
    property: 'blur',
    value: 0,
    range: {
      min: 0,
      max: 20
    },
    unit: 'px'
  }
  

]

function App() {
  const [sOI, sSOI] = useState(0)
  const [options, setOptions] = useState(DEFAULT_OPTIONS)
  const sO = options[sOI]

  function handleSliderChange({target}) {
    setOptions(prevOptions => {
      return prevOptions.map((option, index) => {
        if (index !== sOI) return option
        return { ...option, value: target.value}
      })
      
    })
  }


  function getImageStyle() {
    const filters = options.map(option => {
      return `${option.property}(${option.value}${option.unit})`
    })

    return { filter: filters.join(' ') }
  }

  return (
    <div className='all'>
      <div className='img' style={getImageStyle()}/>
      <div className='side'>
        {options.map((option, index) => {
          return (
            <SidebarItem
              key={index}
              name={option.name}  
              active={index === sOI}
              handleClick={() => sSOI(index)}
            />
          )
        })}
        
      </div>
      <Slider
        min = {sO.range.min}
        max = {sO.range.max}
        value = {sO.range.value}
        handleChange={handleSliderChange}
      
      /> 
    </div>
  )
}

export default App;
