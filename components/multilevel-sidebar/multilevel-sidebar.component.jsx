import React, { useState, Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";



import SidebarContent from "./sidebar-content/sidebar-content.component";

export default function MultilevelSidebar (props) {
  const { open, wrapperClassName, headerClassName, header, options,onToggle} = props;
  const [activeTab, setActiveTab] = useState([]);

  const handleBackdropClick = () => {
    const { onToggle, onClose, persist } = props;

    onToggle(false);
    onClose && onClose();
    if (!persist) {
      setTimeout(() => {
        setActiveTab([]);
      }, 501);
    }
  };

  const handleTabClick = (tabData) => {

    if (!!tabData.disabled) {
      return;
    }
    const { onItemClick } = props;

    if (tabData.children) {
      let data = [...activeTab];
      data.push(tabData.id);
      setActiveTab(data);
    }
    onItemClick && onItemClick(tabData);
  };

  const handleBackClick = (tabData) => {
    const { onBackClick } = props;

    if (tabData) {
      let data = [...activeTab];
      let index = data.findIndex((id) => id === tabData.id);
      data.splice(index, 1);
      setActiveTab(data);
    } else {
      setActiveTab([]);
    }
    onBackClick && onBackClick();
  };
  const getParentHeight = () => {
    let parent = document.querySelector("#sidebar-parent");
    return parent ? parent.scrollHeight : "100vh";
  }


  const renderSecondChildren = (parent, list) => {
    return (
      <SidebarContent
      
        {...props}
        sidebarProps={{
          className: classNames("sidebar-main second", {
            show: activeTab.includes(list.id),
            [wrapperClassName]: wrapperClassName
          }),
          // style: { height: getParentHeight() }
        }}
        headerContent={
          <Fragment>
            <div className="first-back-btn " onClick={() => handleBackClick()}>
              <AngleLeft />
              <span>{parent.title}</span>
            </div>
            <div
              className="second-back-btn"
              onClick={() => handleBackClick(list)}
            >
              <AngleLeft />
              <span>{list.title}</span>
            </div>
          </Fragment>
        }
        options={list.children}
        handleTabClick={handleTabClick}
      />
    );
  };

  const renderFirstChildren = (list) => {
    const { wrapperClassName } = props;

    return (
      <SidebarContent
         onToggle={onToggle}
        {...props}
        sidebarProps={{
          className: classNames("sidebar-main second", {
            show: activeTab.includes(list.id),
            [wrapperClassName]: wrapperClassName
          }),
          // style: { height: getParentHeight() }
        }}
        headerContent={
          <div className="first-back-btn" onClick={() => handleBackClick()}>
            <AngleLeft />
            <span>{list.title}</span>
          </div>
        }
        options={list.children}
        handleTabClick={handleTabClick}
      >
        {(data) => data.children && renderSecondChildren(list, data)}
      </SidebarContent>
    );
  };

  return (
    <div id="react-sidebar" className="slidebar">
      <div
        className={classNames("sidebar-backdrop", { show: open })}
        onClick={handleBackdropClick}
      />
      <SidebarContent
        {...props}
        sidebarProps={{
          id: "sidebar-parent",
          className: classNames("sidebar-main", {
            show: open,
            [wrapperClassName]: wrapperClassName
          })
        }}
        headerContent={
          typeof header === "string" ? (
            <div
              className={`sidebar-header ${classNames({
                [headerClassName]: headerClassName
              })}`}
            >
              {header}

          
            </div>
          ) : (
            <div
              className={classNames({
                [headerClassName]: headerClassName
                
              })}
            >
              {header}
            </div>
          )
        }
        options={options}
        handleTabClick={handleTabClick}
      >
        {(list) => list.children && renderFirstChildren(list)}
      </SidebarContent>
    </div>
  );
};

MultilevelSidebar;

const AngleLeft = (props) => (
  <svg
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width="10px"
    height="10px"
    viewBox="0 0 548.797 548.797"
    xmlSpace="preserve"
  >
    <g>
      <g>
        <path
          d="M476.249,20.818c-13.855-21.23-42.283-27.203-63.525-13.354l-304.904,199.01c-27.185,16.01-42.742,40.692-42.742,67.92
			c0,27.228,15.557,51.903,42.742,67.926l304.904,199.004c7.748,5.056,16.445,7.473,25.049,7.473
			c14.982,0,29.682-7.332,38.477-20.814c13.861-21.229,7.883-49.67-13.348-63.525L171.705,274.395l291.196-190.05
			C484.131,70.488,490.104,42.049,476.249,20.818z"
        />
      </g>
    </g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
  </svg>
);
