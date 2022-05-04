import React, { useState } from "react"
import "./selectDk.scss"

const SelectDk = (props) => {
  console.log(props.datas)
  const [open, setopen] = useState(false)

  const toggle = () => {
    open ? setopen(false) : setopen(true)
  }

  return (
    <div
      role="listbox"
      style={props.listboxStyle}
      id={props.id}
      className="selectDk"
      onClick={toggle}
    >
      <span className="children">{props.children}</span>

      <div className={!open ? "optionsContainer" : "open"} style={{}}>
        {props.datas.map((data, index) => {
          return (
            <div
              role="option"
              aria-selected
              onClick={(toggle, (e) => props.update(e.target.innerHTML))}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor =
                  props.hoverOptionsStyle.backgroundColor
                e.target.style.color = props.hoverOptionsStyle.color
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor =
                  props.optionStyle.backgroundColor
                e.target.style.color = props.optionStyle.color
              }}
              value={data.value}
              style={props.optionStyle}
              key={index}
              className="options"
              id="options"
            >
              {data.label}
            </div>
          )
        })}
      </div>
      {/* <select
        style={props.selectStyle}
        id={props.id}
        className="selectDk"
        onChange={(e) => props.setValue(e.target.value)}
      >
        {props.datas &&
          props.datas.map((data, index) => {
            return (
              <option value={data.value} style={props.optionStyle} key={index}>
                {data.label}
              </option>
            )
          })}
      </select> */}
    </div>
  )
}

export default SelectDk
