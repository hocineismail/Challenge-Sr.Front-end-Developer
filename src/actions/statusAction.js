import axios from "axios";
import { URL } from "../constants/constants";

import { onSetTabdata } from "../reducers/routesSlice";
//**
//* API UPDATE STATUS
// * @returns DATA TO REDUCERS
// */
export function onActivePlugin({ currentPlugin, currentTab, tabdata }) {
  return function (dispatch) {
    let newActive = [...tabdata[currentTab].active, currentPlugin];
    let inactive = tabdata[currentTab].inactive.filter(
      (item) => item !== currentPlugin
    );
    let data = {
      ...tabdata[currentTab],
      active: newActive,
      inactive: inactive,
    };
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let newData = { ...tabdata, [currentTab]: data };
    try {
      axios
        .patch(`${URL}/tabdata`, newData, config)
        .then((response) => {
          let array = response.data;
          let count = 0;
          for (let item in array) {
            count = count + array[item].disabled.length;
          }

          return dispatch(
            onSetTabdata({
              countDisbaled: count,
              tabdata: response.data,
            })
          );
        })
        .catch((error) => {
          alert("SOMETHING WRONG");
        });
    } catch (error) {
      alert("SOMETHING WRONG");
    }
  };
}

//**
//* API UPDATE STATUS
// * @returns DATA TO REDUCERS
// */

export function onInactivePlugin({ currentPlugin, currentTab, tabdata }) {
  return function (dispatch) {
    let inactive = [...tabdata[currentTab].inactive, currentPlugin];
    let active = tabdata[currentTab].active.filter(
      (item) => item !== currentPlugin
    );

    let data = {
      ...tabdata[currentTab],
      active: active,
      inactive: inactive,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let newData = { ...tabdata, [currentTab]: data };
    try {
      axios
        .patch(`${URL}/tabdata`, newData, config)
        .then((response) => {
          let array = response.data;
          let count = 0;
          for (let item in array) {
            count = count + array[item].disabled.length;
          }

          return dispatch(
            onSetTabdata({
              countDisbaled: count,
              tabdata: response.data,
            })
          );
        })
        .catch((error) => {
          alert("SOMETHING WRONG");
        });
    } catch (error) {
      alert("SOMETHING WRONG");
    }
  };
}

//**
//* API UPDATE STATUS
// * @returns DATA TO REDUCERS
// */

export function onDisableAllPlugins({ tabdata }) {
  return function (dispatch) {
    let data = {};
    for (let item in tabdata) {
      let disabled = new Set([
        ...tabdata[item].active,
        ...tabdata[item].inactive,
      ]);
      let newItem = {
        ...tabdata[item],
        disabled: [...disabled],
      };

      data = {
        ...data,
        [item]: newItem,
      };
    }

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      axios
        .patch(`${URL}/tabdata`, data, config)
        .then((response) => {
          let array = response.data;
          let count = 0;
          for (let item in array) {
            count = count + array[item].disabled.length;
          }

          return dispatch(
            onSetTabdata({
              countDisbaled: count,
              tabdata: response.data,
            })
          );
        })
        .catch((error) => {
          alert("SOMETHING WRONG");
        });
    } catch (error) {
      alert("SOMETHING WRONG");
    }
  };
}

//**
//* API UPDATE STATUS
// * @returns DATA TO REDUCERS
// */

export function onEnablellPlugins({ tabdata }) {
  return function (dispatch) {
    let data = {};
    for (let item in tabdata) {
      let newItem = {
        ...tabdata[item],
        disabled: [],
      };
      data = {
        ...data,
        [item]: newItem,
      };
    }

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      axios
        .patch(`${URL}/tabdata`, data, config)
        .then((response) => {
          let array = response.data;
          let count = 0;
          for (let item in array) {
            count = count + array[item].disabled.length;
          }

          return dispatch(
            onSetTabdata({ countDisbaled: count, tabdata: response.data })
          );
        })
        .catch((error) => {
          alert("SOMETHING WRONG");
        });
    } catch (error) {
      alert("SOMETHING WRONG");
    }
  };
}
